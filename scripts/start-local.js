#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const yaml = require("js-yaml");

// Parse command line arguments for port
const args = process.argv.slice(2);
const portArg = args.find((arg) => arg.startsWith("--port="));
const port = portArg ? portArg.split("=")[1] : process.env.ENVIO_PORT || "8300";

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
const rankTokenAddress = getContractAddress("RankToken");
const daoDistributorAddress = getContractAddress("DAODistributor");

console.log(`Found RankToken at: ${rankTokenAddress}`);
console.log(`Found DAODistributor at: ${daoDistributorAddress}`);

// Path to the config file
const configPath = path.resolve(__dirname, "../config_local.yaml");

// Read and update the config file
try {
  const configContent = fs.readFileSync(configPath, "utf8");
  const config = yaml.load(configContent);

  // Update contract addresses in the config
  config.networks.forEach((network) => {
    // Update RPC URL with custom port if specified
    if (network.rpc_config && network.rpc_config.url) {
      network.rpc_config.url = `http://localhost:${port}`;
    }

    network.contracts.forEach((contract) => {
      if (contract.name === "RankToken") {
        contract.address = [rankTokenAddress];
      } else if (contract.name === "DAODistributor") {
        contract.address = [daoDistributorAddress];
      }
    });
  });

  // Write the updated config back to file
  fs.writeFileSync(configPath, yaml.dump(config, { lineWidth: 120 }));
  console.log("Config file updated with contract addresses");

  // Create or update .env file with the addresses
  const envPath = path.resolve(__dirname, "../.env");
  let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";

  // Update or add environment variables
  const envVars = {
    RANKTOKEN_ADDRESS: rankTokenAddress,
    DAODISTRIBUTOR_ADDRESS: daoDistributorAddress,
    ENVIO_PORT: port,
  };

  Object.entries(envVars).forEach(([key, value]) => {
    if (envContent.includes(`${key}=`)) {
      envContent = envContent.replace(new RegExp(`${key}=.*`, "g"), `${key}="${value}"`);
    } else {
      envContent += `\n${key}="${value}"`;
    }
  });

  fs.writeFileSync(envPath, envContent.trim() + "\n");
  console.log("Environment file updated with contract addresses and port configuration");

  // Set environment variables for this process
  process.env.ENVIO_PORT = port;

  // Start the development server
  console.log(`Starting Envio development server with RPC port ${port}...`);
  process.chdir(path.resolve(__dirname, ".."));

  // Attempt to use the ENVIO_PORT environment variable which Envio may recognize
  execSync("pnpm dev", {
    stdio: "inherit",
    env: { ...process.env, ENVIO_PORT: port },
  });
} catch (error) {
  console.error("Error updating config or starting development server:", error.message);
  process.exit(1);
}
