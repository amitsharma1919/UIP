UIP site
========
made with :heart: via [GitHub Pages][1] and [React.js][2]

Features
--------
- Fully [ECMAScript 2015][0] compatible.
- Written in [React.js][2] (pure ES6).

Why ECMAScript?
---------------
> Because ECMAScript is the language whereas JavaScript,
> CoffeeScript, JScript and even ActionScript 3 are all "dialects" or implementations.
> Don't believe me? Atleast trust [Wikipedia][wiki].

Curious? Test it on your local server.
--------------------------------------

**Prerequisites:**
- [**npm/node**][3]: Package manager for node.js

**Setting up:**
1. Clone this repository (`$ git clone https://github.com/NIT-dgp/UIP.git`).
2. Run `$ npm install` to install [React][2] and other dependencies.
3. Run `$ npm start` to start the webpack development server.
4. Open `http://localhost:8080` in your **favourite** browser (chrome is my choice).

## How to contribute?
1. Write your own react components, create own routes and add styles.
2. Then run `$ npm run build` to build the changes.
    - Note that `$ webpack -p` is overloaded in [webpack config](webpack.config.babel.js) to make a
    production build of React site (disables PropType checking, etc.) and strips out
    dead code(e.g. comments, etc.) not needed in production.
3. **add** and **commit** the changes. (you probably know what to do next).

> Note that any changes to the files will reloaded live in the browser window without
> the need for a page refresh via `webpack-dev-server`. All those changes **will not**
> be added to the **bundle**. They are only cached in the memory.
> You manually need to build again. This is a preventive
> measure to avoid too many file system writes.

[0]:https://es6.io/
[1]:https://pages.github.com/
[2]:https://facebook.github.io/react/
[3]:https://nodejs.org/
[wiki]:https://en.wikipedia.org/wiki/ECMAScript
