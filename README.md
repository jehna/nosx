# NoSX
> Better API for React — without JSX

Ever wondered how you could use React without any build tools, but keeping the
code as clean as with JSX? NoSX is a sane and lightweight alternative for
`React.createElement` that works without any build tools.

## Getting started

Open up your favourite editor and copy-paste this code:

```html
<html>
<body>
<div id="root"></div>
<script type="module">
  import ReactDOM from "https://cdn.skypack.dev/react-dom";
  import { Div, H1, P } from "https://cdn.skypack.dev/nosx";

  const App = () =>
    Div(
      H1("Hello from NoSX")
        .style({ color: 'red' })
        .id("You set props by chaining")
        .className("as many props as you want"),
      P("It's really this simple!")
    )

  const rootElement = document.getElementById("root");
  ReactDOM.render(App(), rootElement);
</script>
</body>
</html>
```

That's all you need! No build tools, no hassle.

▶️ [Run example at CodeSandbox](https://codesandbox.io/s/summer-cdn-cwsoh?file=/app.js)

## Developing

At the moment this project does not use any build tools. Just dig into the code!

### Deploying

This project is in the prototype phase, and it's published to NPM manually.

## Features

A better API for React
* No build tools needed
* No clumsy `React.createElement`
* Works great with Typescript
* Leverages ES modules

## Contributing

This project is in the early early prototype phase. If you'd like to contribute,
please fork the repository and use a feature branch. Pull requests are warmly
welcome.

## Licensing

The code in this project is licensed under MIT license.
