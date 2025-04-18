# Envio Local Development Scripts

This directory contains scripts for managing your local Envio development environment.

## Available Scripts

### start-local.js

This script sets up and starts the Envio development environment with contract addresses from your local Ethereum node.

#### Features:

- Reads contract addresses from deployment artifacts in `contracts/deployments/localhost`
- Updates the `config_local.yaml` file with the correct contract addresses
- Sets environment variables in `.env` file
- Configures the RPC URL port
- Starts the Envio development server

#### Usage:

```bash
# Use with default port (8300)
node scripts/start-local.js

# Use with custom port
node scripts/start-local.js --port=8300
```

#### npm Scripts:

```bash
# Use with default port (8300)
pnpm dev:local

# Use with port 8300 explicitly
pnpm dev:local:port
```

#### Environment Variables:

You can also set the port using the `ENVIO_PORT` environment variable:

```bash
ENVIO_PORT=8300 pnpm dev:local
```