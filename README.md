<<<<<<< HEAD
# Bunnylol

While I was at Facebook, I heavily used the internally developed tool `bunnylol`. I found several other versions of `bunnylol` that required me to host a server. This version of `bunnylol` *does not* need to be hosted on a server.

Currently, this is hosted on [https://eden-chung.github.io/bunnylol](https://eden-chung.github.io/bunnylol). However, you can host it on any website that you would like (even on GitHub Pages). Since this is going to be your primary search engine for every new tab you open, I would suggest that you don't host it somewhere that may take a while to spin up the static page (like Heroku where your VM could go to sleep).

## Setup

### Firefox

1. Right click in the address bar you should see something like `Add "search LunnyBOL"`.

2. Click on it.

3. Go in the settings (Menu `edit` and then at the bottom `settings`).

4. Click on `Search` in the left hand menu.

5. In the search shortcut list, find `LunnyBOL`.

6. Double click and enter a shortcut for instance `lol`.

### Chrome

1. Open Chrome and click the three dots. Click `Settings` and scroll down to `Search Engines`.

2. Click `Manage Search Engines`.

3. Add a new search engine with the URL being `https://eden-chung.github.io/bunnylol?search=%s`.

4. Make this the default search engine.

### Safari

Don't hurt yourself and pick something else seriously. But if you really want to you need an app like [AlfredApp](https://alfredapp.com) and configure a search with the value `https://eden-chung.github.io/bunnylol?search={search}` and a prefix of your liking like `lol`.

## Adding a command

1. Run `npm install` so that `build.sh` (JavaScript type checker) can run.

2. Open up the `src/commands.js` file. Add your command to the `COMMANDS` object. You must include a `name` and `url` attribute and you can add an additional `searchurl` attribute if you would to be able to type a command like `yt NBA Highlights` (in which case, `lunnybol` will automatically search for NBA Highlights on YouTube).

3. Run `build.sh` one more time to build the minimized file.

4. Publish to your website or run locally: `./run.sh`

## Running locally

The easiest way is to do:
```
docker build . -t lunnybol
docker run --rm -d -p 3000:3000 lunnybol
```

Since we use `import` module syntax, we need to run a server to bypass CORS issues. You can setup the server by running `npm install` then `build.sh`, followed by `node server.js`. The server should be up and visible at `localhost:3000`.
