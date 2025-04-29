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

## Important: Stopping the Envio Environment

⚠️ **WARNING** ⚠️

The Envio development environment continues running in Docker containers after you exit the script. To properly stop the environment, you must run:

```bash
pnpm envio stop
```

Failure to stop the environment properly can lead to:
- Port conflicts when restarting the indexer
- Database inconsistencies
- Excessive resource consumption
- Unexpected behavior in subsequent sessions

Always make sure to run the stop command when you're done with your development session.