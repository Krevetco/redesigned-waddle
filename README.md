# galaxy

Galaxy VUE + VITE template

## Table of contents

-   [Setup](#setup)
-   [Build](#build)
-   [Features](#features)
    -   [🚀 Vue 3 + Vite 2](#-vue-3--vite-2)
    -   [🦾 TypeScript and SCSS](#-typescript-and-scss)
    -   [🗂 File system routing](#-file-system-routing)
    -   [📑 Layouts system](#-layouts-system)
    -   [🔗 Path Aliasing](#-path-aliasing)
    -   [😃 Universal Icons Framework](#-universal-icons-framework)
    -   [✨ Routes Transitions](#-routes-transitions)
    -   [🪄 Eslint + Prettier](#-eslint--prettier)
    -   [🔧 OpenAPI Client Generator](#-openapi-client-generator)
    -   [👤 Authentication System](#-authentication-system)
        -   [The Auth Plugin](#the-auth-plugin)
        -   [The Navigation Guards](#the-navigation-guards)
        -   [The Axios Interceptors](#the-axios-interceptors)
    -   [🌐 Internationalization: vue-i18n and vue-i18n-extract](#-internationalization-vue-i18n-and-vue-i18n-extract)
-   [Recommended IDE Setup](#recommended-ide-setup)
-   [Deployment](#deployment)
    -   [Heroku](#heroku)

## Setup

Установить зависимости
```
npm install
```


Запустите сервер разработки
```
npm run dev
```

## Build

Чтобы собрать приложение, запустите
```
npm run build
```

И для предварительного просмотра после создания приложения запустите

```
npm run serve
```

## Features

### 🚀 Vue 3 + Vite 2

В этом проекте используется версия Vue3 с мощным **Composition API**.

Используется новый `<script setup>` SFCs синтаксис и рекомендуется пользоваться именно им.
-   [Vue3 Setup](https://vuejs.org/api/composition-api-setup.html#basic-usage)
-   [Vue 3 Docs](https://v3.vuejs.org)
-   [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
-   [Vite Docs](https://vitejs.dev/guide/features.html)

### 🦾 TypeScript и SCSS

TypeScript - strongly recommended.
SCSS - опциональная поддержка для тем и глобальных стилей. Остальное рекомендуется писать на TailwindCSS

See:

-   [TypeScript](https://www.typescriptlang.org/)
-   [SCSS](https://sass-lang.com/)

### UI Frameworks
Иипользуется [WindiCSS](https://windicss.org/features/dark-mode.html)  - фреймворк подобный [TailwindCSS](https://tailwindcss.com/), но быстрее и с большим функционалом (переменные, h-5px подобные классы)

Рекомендуется установить плагин для IDE
- VSCODE [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - плагин поддержки TailWIND 
- VSCODE (рекомендуется, поддерживает tailwind|windi) [Windi CSS Intellisense for VS Code](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)
[статья по установке и настройке](https://windicss.org/editors/vscode.html)
- JETBRAINS - поддерживает нативно Tailwind, но фичи из WindiCSS не поддерживается (смотреть в документацию, их там не критично много)
- Неофциальный плагин JETBRAINS  [Tailwind Intellisense](https://plugins.jetbrains.com/plugin/15260-tailwind-intellisense)

Благодаря тому что мы используем WindiCSS, в dev версии подключаются все стили, и можно менять стили DOM элементов меняя их класс на другой. Например: `class="h-100px"` поменяли на `class="h-200px"` прямо в инструментах разработчика

### 🗂 File system routing

Routes для `vue-router`будут автоматически сгенерированны из VUE файлов `src/pages` по файловой структуре (аналогично файловому роутингу в NUXT).

-   [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

### 📑 Layouts system

Компоненты Vue в каталоге `src/layouts` используются в качестве layout.
По умолчанию будет использоваться `default.vue`, если в метаданных маршрута не указана альтернатива.

Вы можете указать layout в SFC страницы следующим образом:

```vue
<route lang="yaml">
meta:
    layout: home
</route>
```

See:

-   [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
-   [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

### 🔗 Path Aliasing

`@/` имеет псевдоним папки `./src/`.

Например, вместо того, чтобы использовать

```ts
import HelloWorld from '../../../components/HelloWorld.vue'
```

мы используем путь абсолютный от `./src/`

```ts
import HelloWorld from '@/components/HelloWorld.vue'
```

### ✨ Routes Transitions

Изменения маршрута анимированы. По умолчанию будет использоваться переход `fade`, если в метаданных маршрута не указана альтернатива.

Доступны переходы `fade` и `slide-fade`.
Вы можете указать переход в SFC страницы следующим образом:

```vue
<route lang="yaml">
meta:
    transition: slide-fade
</route>
```

> _ПРИМЕЧАНИЕ._ Переходы не запускаются между маршрутами одного типа, 
> поэтому изменение параметров активного маршрута не приведет к переходу маршрута. 
> Это можно изменить, используя `route.fullPath` вместо `route.name` в качестве ключа в [RouterViewTransition.vue](./src/components/RouterViewTransition.vue). More info: https://stackoverflow.com/a/70042452/4873750.
> Route transitions can be deactivated by changing the provided `enable-route-transitions` value in [main.js](./src/main.ts).

See:

-   [RouterViewTransition.vue](./src/components/RouterViewTransition.vue)

### 🪄 Eslint + Prettier

Этот проект поставляется с рекомендуемой конфигурацией Eslint для Vue 3, а также с интеграцией с Prettier.
Prettier помогает форматировать код, а Eslint помогает отлавливать ошибки в разработке.

При открытии проекта в VSCode он попросит разработчиков установить Eslint и Prettier, т.к.
VSCode [settings.json](.vscode/settings.json) будет работать, поэтому исправление Prettier и Eslint будет
выполняется при сохранении файла.

Кроме того, в скриптах [package.json](./package.json) доступны команды для линтинга, проверки и автоформатирования кода.

See:

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/docs/en/comparison.html)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [vue-eslint-parser](https://github.com/vuejs/vue-eslint-parser)

### Pre-commit

В проекте настроен хук pre-commit, который запускает bash скрипт на проверку проекта через Eslint. Перед каждым коммитом. 
Для корректной работы, hook pre-commit настроен как через хук `.husky/pre-commit`, так и через стандартные хуки по `.git/hooks/pre-commit`
Данная когнифигруеция позволяет перехватывать коммит как при использовании терминала, так и при коммитах через GitKraken


### 👤 Authentication System

Система авторизации состоит из трех основных частей:
-   The Plugin
-   The Navigation Guards
-   The Axios Interceptors

#### The Auth Plugin

The plugin is installed in Vue's `globalProperties` with the name `$auth`, it includes an `isAuthenticated` property,
an `user` object, an `accessToken` plus the `login` and `logout` functions. It can be used in templates like this:

```html
<span v-if="$auth.isAuthenticated">
    Authenticated as <b>{{ $auth.user.email }}</b>
    <button @click="$auth.logout">Logout</button>
</span>
<span v-else>Not Authenticated</span>
```

The `auth` instance is created using the composition API, therefore we can alternatively retrieve it outside of
components with the `useAuth` function:

```ts
import { useAuth } from './useAuth'

const auth = useAuth()
if (auth.isAuthenticated) {
    console.log(auth.userFullName)
}
```

```html
<script setup lang="ts">
    import { useAuth } from './useAuth'
    import { watchEffect } from 'vue'

    const auth = useAuth()
    watchEffect(() => {
        console.log(auth.isAuthenticated)
    })
</script>
```

Aditionally, the auth plugin can be inspected in the **Vue's Devtools panel** when having the extension in the browser.
The plugin's values are displayed when inspecting any component.

#### The Navigation Guards

The navigation guards protects pages from non-authenticated users and redirect them to the login page,
by default **all** pages but the `login` page are protected.

In order to make a page available for non-authenticated users, a route meta boolean called `public` needs to be
configured in the page. E.g:

```vue
<!-- pages/index.html -->
<route lang="yaml">
meta:
    public: true
</route>
```

The navigation guards can be disabled by changing the `autoConfigureNavigationGuards` when configuring the auth system:

```ts
// main.js
import { createApp } from 'vue'
import { createAuth } from './auth'
import App from './App.vue'
import router from './router'

const auth = createAuth({
    router,
    loginRouteName: 'login',
    autoConfigureNavigationGuards: false,
})

const app = createApp(App)
app.use(router)
app.use(auth)
```

#### The Axios Interceptors

The axios interceptors helps appending auth information to requests and responses of APIs.

The main interceptor adds the `Authorization` header with a value of `Bearer the-token-value` to all authenticated requests.

This can be configured and disabled in the `createAuth` options:

```ts
// api/axios.ts
import axios from 'axios'

const axiosInstance = axios.create()
export default axiosInstance
```

```ts
// main.js
import { createApp } from 'vue'
import { createAuth } from './auth'
import App from './App.vue'
import router from './router'
import axiosInstance from './api/axios'

const auth = createAuth({
    router,
    axios: {
        instance: axiosInstance,
        autoAddAuthorizationHeader: true, // default: false
        authorizationHeaderPrefix: 'Token', // default: 'Bearer'
    },
})

const app = createApp(App)
app.use(router)
app.use(auth)
```

See:

-   [Auth System](./src/auth)
-   [Vue Router - Navigation Guards](https://next.router.vuejs.org/guide/advanced/navigation-guards.html)
-   [Axios - Interceptors](https://github.com/axios/axios#interceptors)
-   [Vue Devtools - Plugin Registration](https://devtools.vuejs.org/plugin/plugins-guide.html#registering-your-plugin)

### 🌐 Internationalization: vue-i18n and vue-i18n-extract

The `vue-i18n` package is used as the internationalization system.

All translation files located in the `locales` dir are loaded automatically with the corresponding language code obtained from the file name, e.g. `locales/es.json` -> lang code: `es`.

**How to use it?**

Put the texts in the original language inside the function of vue-i18n, for example:

```html
<!-- Single or double quote, and template literals -->
<p>{{ $t('Hello World') }} {{ $t("Hello, how are you?") }} {{ $t(`Hey. I'm watching you!`) }}</p>

<!-- *Note: to be able to use it in tags or when we send text to a component, we must use the single quote format
and bind it to the attribute. -->

<MyComponent :text="$t('example text')" />

<b-form-input v-model="name" type="text" :placeholder="$t('Name')"></b-form-input>

// In TS:
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'

    const { t } = useI18n()
    t('This is an example')
</script>
```

You may have noticed that we don't use translations keys like: `greetings.hello`, the reason is that defining keys is a troublesome task, and keys doesn't always show what we want to display, take this translation file for example:

```js
// es.json

{
  "greetings": {
    "hello": "Hola, ¿cómo estás?."
  }
}
```

And the corresponding translation usage:

```js
// Component.vue

t('greetings.hello')
```

By just looking at the translation key, we won't know what the original text was, now look a this example:

```js
// es.json

{
  "Hello, how are you?": "Hola, ¿cómo estás?."
}
```

```js
// Component.vue

$t('Hello, how are you?')
```

Better right?, we can directly see the original text, and it's much simpler to translate, we also won't need to define keys because **the original text is the key!**.

**Browser language detection**

The default language would match the language of the browser,
in case the language is not supported by the application, the fallback language `en` would be activated.

**Vue i18n extract**

Manually extracting the texts from vue or js,ts files is a complex task, we are often lazy to do so or we forget to add them, therefore we lose the sync between the translations files and the source code, that's why we use `vue-i18n-extract`, a handy tool that runs static analysis of the source code files and extracts the translation texts from the source code and add them to the translations files like `es.json`, `en.json`, `de.json`, etc. It no only adds the missing keys but also with a command we can remove the no longer used translations.

To extract the keys/original text into the translations files, run:

```
npm run vue-i18n-extract
```

This executes the command located in `package.json`, which will search for the keys in the vue files given, compare it with the files inside the lang folder and if it finds new words, it will add them.

This script uses the [vue-i18n-extract.config.js](./vue-i18n-extract.config.js) file for its configuration. This file is located in the root of the project.

**Adding a new language:**

To add a new language, for instance the German language, just create its file inside the `locales` folder using its language code, example: `./locales/de.json`. Then run `npm run vue-i18n-extract` to populate the translation keys into that file.

> _IMPORTANT_: When creating the file, make it a valid JSON file, then at least it must has `{}`, otherwise the extraction would fail.

Example:

```js
// locales/es.json

{
}
```

The file would be loaded automatically by `vite`, a vite restart may be needed.

**Removing unused translations**

In case you want to remove the keys that are in the translation files but are not being used in the vue files, you can run:

```
npm run vue-i18n-extract-remove
```

See:

-   [Vue i18n](https://vue-i18n.intlify.dev/)
-   [Vue i18n extract](https://github.com/pixari/vue-i18n-extract)
-   [i18n plugin](./src/plugins/i18n.ts)

## Recommended IDE Setup

-   [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Deployment

### Heroku

In Heroku create the app, then configure the following buildpacks in the same order:

-   heroku/jvm
-   heroku/nodejs
-   heroku-community/static

Config the Heroku remote:

```
heroku login
heroku git:remote -a <app_name>
```

Finally, push the changes:

```
git push heroku main
```
