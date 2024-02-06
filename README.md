# software-engineering-technical-challenge

## Prerequisites

1. Install `yarn`

    See https://classic.yarnpkg.com/lang/en/docs/install.

2. Install `turbo`

    See https://turbo.build/repo/docs/installing.
    The `npm` method seems to be more consistent.

## Nice to Have

`Postman`, so you can use the collection to interact with the `api`.

## Getting started

1. Install project dependencies

    ```
    yarn
    ```

1.  Create and seed the database

    ```
    turbo migrate
    ```

    If needed, you can recreate the database by using:

    ```
    turbo migrate --force
    ```

2. Start the development environment:

    ```
    turbo dev
    ```

## Monorepo structure

This is a [turbo](https://turbo.build/repo/docs) monorepo. There are two packages on which will you be working on:

- `./packages/api` - a [hapi](https://hapi.dev/) HTTP server
- `./packages/ui` - a [vite](https://vitejs.dev/guide/) React SPA

### Available commands

At any moment you can run `turbo <COMMAND>`. The available commands are:

- `dev`: starts the development server
- `build`: builds the project
- `type-check`: checks the project types with TSC
- `lint`: lints the project with ESLint
- `format-check`: checks the code format with Prettier
- `format`: formats the code with Prettier
- `migrate`: creates and seeds the database

Another useful tool is Prisma Studio:

```
// run it from `packages/api`
npx prisma studio
```

### Rules

- you need to share your entire screen
- you are allowed to ask as many questions as you'd like
- you are allowed to use any resource you'd normally use during regular work such as Google, StackOverflow, AI, etc
