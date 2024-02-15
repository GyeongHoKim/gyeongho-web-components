# Buildless, Reusable, and Testable UI Library

`@gyeongho/gyeongho-web-components` is a UI library that is built with web components. It is designed to be reusable and
testable. It is also built with a buildless approach, meaning that it does not require a build step to use it. It is
also designed to be used with any framework or library, such as React, Angular, or Vue.

Storybook url: [@gyeongho/gyeongho-web-components](https://65cde0fff0f2ea377d4a23dc-kqpzvjwzpu.chromatic.com/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

I will publish this package to npm soon. For now, you can install it from github.  
Add the following to your `package.json` file.

```json
{
  "dependencies": {
    "@gyeongho/gyeongho-web-components": "github:gyeongho/gyeongho-web-components#main"
  }
}
```

```bash
npm install
```

## Usage

add importMap in your html file.

```html

<script type="importmap">
  {
    "imports": {
      "@gyeongho/gyeongho-web-components": "./node_modules/@gyeongho/gyeongho-web-components/dist/index.js"
    }
  }
```

and use it in your html file, or in your framework or library.

```html

<gh-table>
  <gh-table-head>
    <gh-table-header-row>
      <gh-table-header-cell>Column 1</gh-table-header-cell>
      <gh-table-header-cell>Column 2</gh-table-header-cell>
    </gh-table-header-row>
  </gh-table-head>
  <gh-table-body>
    <gh-table-row>
      <gh-table-cell>Row 1, Column 1</gh-table-cell>
      <gh-table-cell>Row 1, Column 2</gh-table-cell>
    </gh-table-row>
    <gh-table-row>
      <gh-table-cell>Row 2, Column 1</gh-table-cell>
      <gh-table-cell>Row 2, Column 2</gh-table-cell>
    </gh-table-row>
  </gh-table-body>
</gh-table>
```
