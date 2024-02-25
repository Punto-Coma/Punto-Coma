# Punto&Coma

This is the repository for the **Punto&Coma website**. It's built with [Astro](https://astro.build/), a new static site builder that combines the best parts of modern frameworks with the speed and developer experience of static sites.

## How to participate?

First, to participate you must be part of the community of [discord](https://discord.gg/P7g9XJ4URc)

## Collaborate with code

If you wish to contribute code, please:

- **Review the open issues** or **create a new one** explaining the improvement or bug to fix.

- **Make a fork** of the repository.

- Create a new branch for your feature or bug fix.

- Write and **test** your code.

- Make sure to follow the existing code **style guidelines**.

- Send a Pull Request to the `develop` branch with a detailed description of the proposed changes and reference the related issue.

## Contribute ideas, bugs or feedback 💡

If you have an idea, find a bug or want to give feedback on the project:

- Open a new issue in the repository describing your idea, the bug you found or the feedback you want to share.
- Be as detailed as possible in the description.
- If possible, include screenshots or any other resource that can help to better understand your point.

## Project Structure 🚀

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any **Astro/React/Vue/Svelte/Preact** components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands 🧞

All commands are run from the root of the project, from a terminal:

| Command         | Action                                                                         |
| :-------------- | :----------------------------------------------------------------------------- |
| `pnpm install`  | Installs dependencies                                                          |
| `pnpm dev`      | Starts local dev server at `localhost:4321`                                    |
| `pnpm build`    | Build your production site to `./dist/`                                        |
| `pnpm preview`  | Preview your build locally, before deploying                                   |
| `pnpm lint`     | Run a static analysis of the code to find problems                             |
| `pnpm lint:fix` | Attempts to automatically fix problems encountered during static code analysis |


> [!NOTE]
> You can use `npm` or `yarn` instead of `pnpm` if you prefer.

### Want to learn more? 👀

Feel free to check [Astro documentation](https://docs.astro.build).
