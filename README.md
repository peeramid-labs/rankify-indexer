## Envio Indexer for Peeramid

*Please refer to the [documentation website](https://docs.envio.dev) for a thorough guide on all [Envio](https://envio.dev) indexer features*

## Local Development

This project uses Envio to index blockchain events from the Peeramid contracts.

### Quick Start

```bash
# Install dependencies
pnpm install

# Start the development environment with local contract addresses
pnpm dev:local
```

### Custom Port Configuration

You can specify a custom port for the RPC connection:

```bash
# Use explicit port 8300
pnpm dev:local:port

# Or specify a custom port
node scripts/start-local.js --port=9000
```

### ⚠️ Important: Stopping the Environment ⚠️

The Envio development environment runs in Docker containers and continues running even after you exit the terminal. To properly stop all containers and services, always run:

```bash
pnpm envio stop
```

Failure to stop the environment can cause port conflicts, database inconsistencies, and resource issues when you restart.

## Available Scripts

- `pnpm dev:local` - Start local development with contract addresses from localhost deployments
- `pnpm dev` - Start Envio development server
- `pnpm codegen` - Generate code from schema
- `pnpm test` - Run tests
- `pnpm build` - Build the project

See `scripts` directory for more utilities and documentation.
