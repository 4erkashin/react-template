# TS + React + Vite + FSD project template

This repository contains my favorite tools and complete guides how to set everything up

[![Conventional Commits][shields-conventional-commits-image]](https://conventionalcommits.org)

## Includes

### deploy to gh-pages [workflow](.github/workflows/pages.yml)
Allows to deploy spa project to github pages via github action

Please adjust `VITE_BASE_URL` in [.env](.env) to fit your repo name

### commitlint + conventional commits

To add it to the project I use [commitlint website](https://commitlint.js.org/#/guides-local-setup).

I always prefer this way to deal with commit messages. It has a lot of benefits,
[read more](https://www.conventionalcommits.org/en/v1.0.0/) about the conception.

### basic css layout + [clsx](https://www.npmjs.com/package/clsx) util lib
See `src/styles.css` and `src/app/App.tsx`

### [eslint](https://eslint.org/)

To add it to the project I use `npm init @eslint/config` command.

### [prettier](https://prettier.io/)

To add it to the project I follow [official guide](https://prettier.io/docs/en/install.html).

### [autoprefixer](https://autoprefixer.github.io/)
To add it to the project I run `npm i -D postcss@latest autoprefixer@latest`

Then add a file postcss.config.js on the root project directory
```js
module.exports = {
  plugins: {
    autoprefixer: {}
  }
}
```

Then patch `vite.config.ts` with this section:
```js
css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ]
    }
  }
```

### [storybook](https://storybook.js.org/)

Storybook is a tool for building UI components and pages in isolation.

To add it to the project I follow [official guide](https://storybook.js.org/docs/react/get-started/install/).

### npm-check-updates helper

I use this tool weekly to manually update the dependencies

### [vite loadEnv](https://vitejs.dev/config/#using-environment-variables-in-config)
Allows to use env variables in config

### [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths)

Give vite the ability to resolve imports using TypeScript's path mapping

### [vite-plugin-checker](https://vite-plugin-checker.netlify.app/)

Vite plugin that provide checks e.g. `[TypeScript] Found 0 errors. Watching for file changes.`

### local https via [vite-plugin-mkcert](https://www.npmjs.com/package/vite-plugin-mkcert)
Allows to use https://localhost in development

[shields-conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
