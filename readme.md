### 1. Установка Webpack
```bash
npm install webpack webpack-cli --save-dev
```
[документация Webpack](https://webpack.js.org/guides/installation/)

Пути до входного и выходного файлов мы прописали не строкой, а с помощью [модуля path](https://nodejs.org/api/path.html).

[Метод path.resolve()](https://nodejs.org/api/path.html#pathresolvepaths) возвращает абсолютный путь к указанному файлу или папке. При этом [переменная среды __dirname](https://nodejs.org/api/globals.html#__dirname) указывает на папку, в которой в данном случае находится `webpack.config.js`. В данном случае это корневая папка.

### 2. Подключение стилей
```bash
npm install --save-dev style-loader css-loader
```
[инструкция](https://webpack.js.org/guides/asset-management/#loading-css)

Однако бывает удобнее иметь отдельные CSS-файлы со стилями в сборке. Для этого установим другой пакет — [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#root)
```bash
npm install --save-dev mini-css-extract-plugin
```
Для удаления плагина `style-loader` из проекта используем команду
```bash
npm uninstall style-loader
```
Теперь, после сборки, наши стили будет представлены в виде отдельного файла, подключенного в блоке `<head>` выходного HTML: `<link href="main.css" rel="stylesheet">`

Для минифициации CSS-кода добавим [CssMinimizerWebpackPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/):
```bash
npm install css-minimizer-webpack-plugin --save-dev
```
Теперь при запуске команды `npm run dev` через терминал будет происходить не только сборка проекта, но и запуск локального веб-сервера, а также открытие нашей страницы в браузере с поддержкой быстрого обновления при изменениях.

Запустим команду `npm run dev` и убедимся, что изменения в исходных файлах проекта отображаются в браузере, значит, сборщик и все плагины настроены правильно.

При запуске `npm run build` будет создаваться базовая production-сборка проекта, при которой файлы минимизируются. Оптимизации для production – довольно объемная тема, при желании вы можете самостоятельно с ней ознакомиться [здесь](https://webpack.js.org/guides/production) более подробно

### 3. Работа с картинками
[инструкция](https://webpack.js.org/guides/asset-management/#loading-images)

### 4. Поддержка кода другими браузерами
```bash
npm install -D babel-loader @babel/core @babel/preset-env webpack
```
[инструкция](https://webpack.js.org/loaders/babel-loader/#root)

Помимо самого babel-loader, здесь мы также установили пакет ядра Babel ([@babel/core](https://www.npmjs.com/package/@babel/core)) и пакет [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) – умный пресет, который как раз и позволяет использовать последнюю версию JavaScript, подключая только нужные плагины, основываясь на браузерах, которые поддерживает конкретный проект.

### 5. Запуск проекта на локальном сервере (localhost)
Плагин называется [webpack-dev-server](https://webpack.js.org/api/webpack-dev-server/) и устанавливается командой
```bash
npm install --save-dev webpack-dev-server
```
[документация](https://webpack.js.org/guides/development/#using-webpack-dev-server)

#### Описание данных скриптов:

`dev` — собирает проект и запускает локальный сервер в режиме для разработки.
Также обрати внимание, что при запуске `dev`, файлы будут храниться не в папке `dist`, а в оперативной памяти компьютера для наилучшей производительности. Теперь папка `dist` будет использоваться только для production-сборки.

`build` — сборка в режиме production, в которой код минифицирован и оптимизирован. Отличается от сборки в режиме разработки, в которой удобнее работать с выходными JS-файлами, читать и отлаживать их.

### 6. HtmlWebpackPlugin
```bash
npm install --save-dev html-webpack-plugin
```
Плагин [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) упрощает создание файлов HTML и может автоматически вставлять модули JavaScript в наш основной шаблон HTML.