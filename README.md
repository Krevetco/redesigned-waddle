# Galaxy 

Galaxy VUE + VITE template

## Table of contents

- [Setup](#setup)
- [Build](#build)
- [Run Tests](#run-tests)
- [Features](#features)
    - [🚀 Vue 3 + Vite 2](#-vue-3--vite-2)
    - [🦾 TypeScript and SCSS](#-typescript-and-scss)
    - [🗂 File system routing](#-file-system-routing)
    - [📑 Layouts system](#-layouts-system)
    - [🔗 Path Aliasing](#-path-aliasing)
    - [✨ Routes Transitions](#-routes-transitions)
    - [🪄 Eslint + Prettier](#-eslint--prettier)
    - [⏯ AutoImports](#)
    - [🔻 Pre-commit](#)
    - [👤 Authentication System](#-authentication-system)
        - [The Auth Plugin](#the-auth-plugin)
        - [The Navigation Guards](#the-navigation-guards)
        - [The Axios Interceptors](#the-axios-interceptors)
- [Tests](#tests)
  - [📕 StoryBook](#storybook)
  - [🛍 Vitest](#vitest)
  - [💭 Cypress](#cypress)
- [Recommended IDE Setup](#recommended-ide-setup)

## Setup

Установить зависимости
```bash
$ npm run init
```
> Обращаю внимание, что `npm i` не загрузит зависимостии для `GitHooks/PreCommit`.
> Из-за чего проверка EsLint перед коммитом работать не будет.

Запустите сервер разработки
```bash
$ npm run dev
```

## Build

Чтобы собрать приложение, запустите
```bash
$ npm run build
```

И для предварительного просмотра после создания приложения запустите

```bash
$ npm run serve
```

## RUN Tests

Запустить Unit Vitest тесты
```bash
$ npm run test
```

Запустить e2e тесты
```bash
$ npm run cypress
```
Запустить storybook
```bash
$ npm run storybook
```
Запустить Eslint
```bash
$ npm run lint
```

## Features

### 🚀 Vue 3 + Vite 2

В этом проекте используется версия Vue3 с  **Composition API**.

Используется новый `<script setup>` SFCs синтаксис и рекомендуется пользоваться именно им.
-   [Vue3 Setup](https://vuejs.org/api/composition-api-setup.html#basic-usage)
-   [Vue 3 Docs](https://v3.vuejs.org)
-   [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
-   [Vite Docs](https://vitejs.dev/guide/features.html)

### 🦾 TypeScript и SCSS

TypeScript - strongly recommended.
SCSS - опциональная поддержка для тем и глобальных стилей. Остальное рекомендуется писать на  WindiCSS(TailwindCSS)

See:

-   [TypeScript](https://www.typescriptlang.org/)
-   [SCSS](https://sass-lang.com/)

### UI Frameworks
Иипользуется [WindiCSS](https://windicss.org/features/dark-mode.html)  - фреймворк подобный [TailwindCSS](https://tailwindcss.com/), но быстрее и с большим функционалом (переменные, h-5px подобные классы)

Рекомендуется установить плагин для IDE
- VSCODE [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - плагин поддержки TailWIND 
- VSCODE (рекомендуется, поддерживает tailwind|windi) [Windi CSS Intellisense for VS Code](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)
[статья по установке и настройке](https://windicss.org/editors/vscode.html)
- JETBRAINS [Tailwind CSS](https://plugins.jetbrains.com/plugin/15321-tailwind-css) плагин предоставляет среднюю поддержку, но фичи из WindiCSS не поддерживается (смотреть в документацию, их там не критично много)
- Неофциальный плагин JETBRAINS  [Tailwind Intellisense](https://plugins.jetbrains.com/plugin/15260-tailwind-intellisense) - неофицильный, подходит не для всех версий IDE 

- Сервис для перевода [CSS to HTML](https://transform.tools/css-to-tailwind) 

Благодаря тому что мы используем WindiCSS, в dev версии подключаются все стили, и можно менять стили DOM элементов, меняя их класс на другой. Например: `class="h-100px"` поменяли на `class="h-200px"` прямо в инструментах разработчика

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

- [RouterViewTransition.vue](./src/components/RouterViewTransition.vue)

### Meta Information (title and description)

Для изменения метаданных страницы в хуке `router.beforeEach()` в `navigationGuards.ts` из метаданных роута подтягиваются tiele и description

```vue
<route lang="yaml">
meta:
    title: default title
    description: default description
</route>
```

Чтобы подтягивались другие метаданные, нужно добавить методы в хуке `router.beforeEach()`

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

### ⏯ AutoImports

В проекте настроены автоимпорты частоиспользуемых функций для глобального доступа к ним, аналогично nuxt.
Настраиваются параметры автоимпорта в плагине `AutoImports()` в `vite.config.ts` 

```javascript
AutoImport({
    imports: [
        'vitest',
        'vue',
        'vue-router',
        {
            axios: [
                [ 'default', '$axios' ],
            ],
            pinia: [ 'defineStore', 'storeToRefs' ],
            '@/store': [ [ 'default', '$store' ] ],
        },
    ],
})
```

На данный момент натроены глобальные доступы в `$store` и `$axios`
После добавления новых испортов, требуется запустить `npm run dev`, и npm сам подтянет новые импорты в файлы конфигурации
`.eslintrc-auto-import.json` и `auto-imports.d.ts`

### 🔻 Pre-commit

В проекте настроен хук pre-commit, который запускает bash скрипт на проверку проекта через Eslint. Перед каждым коммитом. 
Для корректной работы через стандартные хуки по `.git/hooks/pre-commit`
Данная когнифигруеция позволяет перехватывать коммит как при использовании терминала, так и при коммитах через GitKraken.

Для настройки работы хука при инициализации проекта надо запустить команду
```bash
$ npm run pre-commit
```


### 👤 Authentication System

Система авторизации состоит из трех основных частей:
-   The Plugin
-   The Navigation Guards
-   The Axios Interceptors

#### The Auth Plugin

Плагин устанавливается в `globalProperties` Vue с именем `$auth`, он включает свойство `isAuthenticated`,
объект `user`, `accessToken` плюс функции `login` и `logout`. Его можно использовать в таких шаблонах:

```html
<span v-if="$auth.isAuthenticated">
    Authenticated as <b>{{ $auth.user.email }}</b>
    <button @click="$auth.logout">Logout</button>
</span>
<span v-else>Not Authenticated</span>
```

Экземпляр auth создается с использованием composition API, поэтому мы можем альтернативно получить его вне
компоненты с функцией `useAuth`:

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

Кроме того, плагин аутентификации можно проверить на **панели инструментов разработки Vue** при наличии расширения в браузере.
Значения плагина отображаются при проверке любого компонента.

#### The Navigation Guards

Защита навигации защищает страницы от неавторизованных пользователей и перенаправляет их на страницу входа,
по умолчанию защищены **все** страницы, кроме страницы входа.

Чтобы сделать страницу доступной для неаутентифицированных пользователей, необходимо указать meta boolean `public`
настраивается на странице. Например:

```vue
<!-- pages/index.html -->
<route lang="yaml">
meta:
    public: true
</route>
```

The navigation guards можно отключить, изменив `autoConfigureNavigationGuards` при настройке системы аутентификации:
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

The axios interceptors помогают добавлять информацию аутентификации к запросам и ответам API.

Основной перехватчик добавляет заголовок «Authorization» со значением «Bearer the-token-value» ко всем аутентифицированным запросам.

Это можно настроить и отключить в параметрах `createAuth`:

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

## Tests 

### 📕 StoryBook

Storybook создает изолированные компоненты на основании файлов по типу `component.stories.js`.
Файлы для компонентов для `storybook` могут лежать как в директории с компонентом, так и в отдельной папке (зависит от проекта)

Запустить storybook
```bash
$ npm run storybook
```

- [StoryBook Doc](https://storybook.js.org/docs/vue/get-started/introduction)

### 🛍 Vitest

Запустить Vitest Unit-тесты
```bash
$ npm run test
```

- [Vitest Doc](https://vitest.dev/guide/)

### 💭 Cypress

Запустить e2e тесты
```bash
$ npm run dev
$ npm run cypress
```
> Е2Е тесты работают только при наличии запушенного `dev` сервера.
> 
- [Cypress Doc](https://docs.cypress.io/docs)
- [Main Assertions](https://docs.cypress.io/guides/references/assertions#Chai)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
