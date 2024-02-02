# software-engineering-technical-challenge

## Getting started

### Requirements

1. Clone the repo
    ```
    git clone git@github.com:tatango/software-engineer-technical-challenge.git && cd software-engineer-technical-challenge
    ```
1. Install `yarn`
    ```
    npm install --global yarn
    ```
1. Install `turbo`
    ```
    yarn global add turbo
    ```
1. Install project dependencies
    ```
    yarn
    ```
1. Create and seed the database
    ```
    turbo migrate
    ```
2. Start the development pipeline:
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
