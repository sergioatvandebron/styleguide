To start use VS you need to have the following tools installed.
- [Node.js](https://nodejs.org) (> 6.5)
- [yarn](https://yarnpkg.com/)
- [webpack](https://webpack.js.org/)

VS is built on top of [React](https://reactjs.org/).


## Installation
To add VS to your project you just need to run the following command.
```
yarn add https://github.com/Vandebron/styleguide.git
```

After that you need to add a webpack loader to handle VS's icons. You need to install `svg-inline-loader` into your project.

```
yarn add svg-inline-loader
```

And add the loader configuration.

```code
lang: js
---
{
  // inline load vandebron-styleguide icons  
  test: /\.svg/,
  loader: 'svg-inline-loader'
}
```

If you already have a specific loader to handle SVG files, you can change to something like that.

```code
lang: js
---
{
  // load media files - ignoring files which starts with vandebron-styleguide
  test: /(^(?!.*\bvandebron-styleguide\b)(.)*svg$|\.woff|\.eot|\.ttf|\.png|\.gif|\.jpg)/,
  use: [
    "file-loader?name=static/media/[name].[hash:8].[ext]"
  ]
},
{
  // inline load vandebron-styleguide icons  
  test: /vandebron-styleguide(.)*svg$/,
  loader: 'svg-inline-loader'
}
```

## Using it
Now your project is able to use VS, to do that it's easy.

```code
lang: js
---
import React, { Component } from 'react';
import { Button } from 'vandebron-styleguide';
import 'vandebron-styleguide/dist/css/main.css';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <Button theme="primary">My button</Button>
      </div>
    );
  }
}

export default HelloWorld;
```
