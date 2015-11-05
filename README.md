# unistyle-flex-grid

[![Build Status](https://travis-ci.org/davegomez/unistyle-flex-grid.svg?branch=develop)](https://travis-ci.org/davegomez/unistyle-flex-grid)
[![npm version](https://badge.fury.io/js/unistyle-flex-grid.svg)](https://badge.fury.io/js/unistyle-flex-grid)

Simple Flexbox grid layout system built with Unistyle

**Note:** This is a work inspired on [scss-flex-grid](https://github.com/matthewsimo/scss-flex-grid) by [Matthew Simo](https://github.com/matthewsimo). You can check his [demo](http://matthewsimo.github.io/scss-flex-grid/) page to learn how to use the grid while I finish my demo version.

### Features:

- Responsive, mobile first approach
- Heavily tested
- Define specific column size or use a flex column (a column that grows to fill space)
- Define offset to push column a specific number of columns.
- Set your own number of columns!

### Usage:

##### NPM

`>_ npm install unistyle-flex-grid --save`

```
import flexGrid from 'unistyle-flex-grid';

...

export default = [
  flexGrid,
  /* your styles here */
];
```

##### Bower

*Coming soon...*

##### Standalone

You can use the compiled, prefixed, and minified version of unistyle-flex-grid as a standalone CSS downloading the files found in the [dist](https://github.com/davegomez/unistyle-flex-grid/tree/master/dist) directory and adding it to your project using the `<link>` HTML tag.

```
<link rel="stylesheet" href=".../ufg.min.css">
```

### Options:

- `columns`: The number of columns you want your grid to be, defaults to 12
- `gutter`: The gutter width used for each column, defaults to 0.5rem;
- `breakpoints`: The Flex Grid breakpoints object, binds grid namespaces to media queries. Read more about namespaces in the next section. Defaults to `((xs),(sm,768),(md,992px),(lg,1200px))`.

### Reference:

- `.row`: Flex box container, use this to wrap columns.
- `.col-(breakpoint)`: This creates a column that will grow/shrink depending on available space in the defined breakpoint.
- `.col-(breakpoint)-(number)`: This creates a column that span the specific number of columns in the defined breakpoint. Default valid numbers are 1-12.
- `.off-(breakpoint)-(number)`: This will offset a column by a specific number of columns in the defined breakpoint. Default valid numbers are 1-11.

Valid breakpoints are `xs`, `sm`, `md`, `lg`. The `xs` breakpoint is default and uses no media queries.

### Contributing:

- Report bugs by opening a new issue
- If you want to contribute some code open an issue for discussion first.
