#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const yaml = require("js-yaml");


// Path to the deployment artifacts
const deploymentsPath = path.resolve(__dirname, "../../contracts/deployments/localhost");

// Function to read contract address from deployment JSON file
function getContractAddress(contractName) {
  try {
    const artifactPath = path.join(deploymentsPath, `${contractName}.json`);
    const artifactContent = fs.readFileSync(artifactPath, "utf8");
    const artifact = JSON.parse(artifactContent);
    return artifact.address;
  } catch (error) {
    console.error(`Error reading ${contractName} address:`, error.message);
    process.exit(1);
  }
}

// Get contract addresses
const rankifyTokenAddress = getContractAddress("Rankify");
const daoDistributorAddress = getContractAddress("DAODistributor");

console.log(`Found Rankify at: ${rankifyTokenAddress}`);
console.log(`Found DAODistributor at: ${daoDistributorAddress}`);

// Path to the config file
const configPath = path.resolve(__dirname, "../config_local.yaml");

// Read and update the config file
try {
  const configContent = fs.readFileSync(configPath, "utf8");
  const config = yaml.load(configContent);

  // Write the updated config back to file
  fs.writeFileSync(configPath, yaml.dump(config, { lineWidth: 120 }));
  console.log("Config file updated with contract addresses");

  // Create or update .env file with the addresses
  const envPath = path.resolve(__dirname, "../.env");
  let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";

  fs.writeFileSync(envPath, envContent.trim() + "\n");
  console.log("Environment file updated with contract addresses and port configuration");

  process.chdir(path.resolve(__dirname, ".."));


  execSync("pnpm envio codegen --config config_local.yaml && pnpm dev --config config_local.yaml", {
    stdio: "inherit",
    env: { ...process.env, RANKIFY_TOKEN_ADDRESS:rankifyTokenAddress, DAO_DISTRIBUTOR_ADDRESS:  daoDistributorAddress },
  });
} catch (error) {
  console.error("Error updating config or starting development server:", error.message);
  process.exit(1);
}
