# software-engineering-technical-challenge

This challenge involves implementing the missing parts of a To-do list app. You can search for the `TO-DO` content in the monorepo to find your objectives.

## Challenge rules

- you need to share your entire screen
- you are allowed to ask as many questions as you'd like
- you are allowed to use any resource you'd normally use during regular work, such as Google, StackOverflow, AI, etc
- you are allowed to install any additional tools, packages, libraries, etc

## Monorepo structure

This is a [turbo](https://turbo.build/repo/docs) monorepo. There are two packages on which you will be working:

- `./packages/api` - a [hapi](https://hapi.dev/) HTTP server
- `./packages/ui` - a [vite](https://vitejs.dev/guide/) React SPA

### Turbo commands

At any moment, you can run `turbo <COMMAND>`. The available commands are:

- `dev`: starts the development server
- `build`: builds the project
- `type-check`: checks the project types with TSC
- `lint`: lints the project with ESLint
- `format-check`: checks the code format with Prettier
- `format`: formats the code with Prettier
- `migrate`: creates and seeds the database

## Getting started

Create a new Codespace:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/tatango/software-engineer-technical-challenge)

Once the Codespace is built, it will automatically install dependencies and boot up the development server for you.

**IMPORTANT**: Once inside the Codespace, go to `Ports` and change `api (1984)`'s `Visibility` from `Private` to `Public`.

## Working locally

You can run the project locally if you don't want to use a Codespace.

### Dependencies

1. `yarn`

    See https://classic.yarnpkg.com/lang/en/docs/install.

1. `turbo`

    See https://turbo.build/repo/docs/installing.
    The `npm` method seems to be more consistent.

### Botting up the development server

1. Install project dependencies

    ```
    yarn
    ```

1.  Create and seed the database

    ```
    turbo migrate
    ```

1. Start the development environment:

    ```
    turbo dev
    ```

## Tools and tips

- You can use `npx prisma studio` from `./packages/api` to quickly inspect the database
- You can use `postman` to interact with the `api` by using the collection located at `.packages/api/api.postman_collection.json`
