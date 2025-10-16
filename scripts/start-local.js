#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const yaml = require("js-yaml");

// Function to read contract address from deployment JSON file
function getContractAddress(contractName, deploymentsPath) {
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

if (!process.env.RANKIFY_CONTRACTS_DEPLOYMENTS_PATH) {
  console.error(
    "RANKIFY_CONTRACTS_DEPLOYMENTS_PATH environment variable is not set.",
  );
  process.exit(1);
}
if (!process.env.MULTIPASS_CONTRACTS_DEPLOYMENTS_PATH) {
  console.error(
    "MULTIPASS_CONTRACTS_DEPLOYMENTS_PATH environment variable is not set.",
  );
  process.exit(1);
}

// Get contract addresses
const rankifyTokenAddress = getContractAddress(
  "Rankify",
  process.env.RANKIFY_CONTRACTS_DEPLOYMENTS_PATH,
);
const daoDistributorAddress = getContractAddress(
  "DAODistributor",
  process.env.RANKIFY_CONTRACTS_DEPLOYMENTS_PATH,
);

const multipassAddress = getContractAddress(
  "Multipass",
  process.env.MULTIPASS_CONTRACTS_DEPLOYMENTS_PATH,
);

console.log(`Found Rankify at: ${rankifyTokenAddress}`);
console.log(`Found DAODistributor at: ${daoDistributorAddress}`);
console.log(`Found Multipass at: ${multipassAddress}`);

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
  let envContent = fs.existsSync(envPath)
    ? fs.readFileSync(envPath, "utf8")
    : "";

  fs.writeFileSync(envPath, envContent.trim() + "\n");
  console.log(
    "Environment file updated with contract addresses and port configuration",
  );

  process.chdir(path.resolve(__dirname, ".."));

  execSync(
    "pnpm envio codegen --config config_local.yaml && pnpm dev --config config_local.yaml",
    {
      stdio: "inherit",
      env: {
        ...process.env,
        RANKIFY_TOKEN_ADDRESS: rankifyTokenAddress,
        DAO_DISTRIBUTOR_ADDRESS: daoDistributorAddress,
        MULTIPASS_ADDRESS: multipassAddress,
      },
    },
  );
} catch (error) {
  console.error(
    "Error updating config or starting development server:",
    error.message,
  );
  process.exit(1);
}
