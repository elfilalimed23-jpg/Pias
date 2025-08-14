# Syndic Mobile Suite

Monorepo for the Syndic ecosystem combining the backend API, mobile
application and shared packages.

## Structure

```
apps/
  api/      - NestJS + Prisma backend (PostgreSQL, Zod, JWT, MinIO, BullMQ)
  mobile/   - Flutter mobile client (Material 3, Cupertino)
packages/
  shared/   - Shared OpenAPI schema and utilities
infra/       - Infrastructure as code
.github/     - GitHub configuration
```

## Tech Stack

- Node.js 20, NestJS, Prisma ORM, PostgreSQL
- Zod validation, JWT authentication (with room for Firebase/OTP)
- MinIO (S3 compatible) for file storage
- BullMQ + Redis for job processing
- Flutter (stable) with Dart null safety using Material 3 + Cupertino widgets
- pnpm workspaces for package management

## Development

This repository uses **pnpm** for JavaScript/TypeScript workspaces and
**Flutter** for the mobile application. Ensure you have Node.js 20+, pnpm
installed and Flutter (stable channel) available on your machine.

## License

MIT
