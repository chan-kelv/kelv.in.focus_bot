# kelv.in.focus_bot
Twitch Chat Bot

# Hand Holding Lvl Steps
Very detailed steps because I am new to node and prone to forgetting.

1. `npm init` kicks off the project
    - Make sure your package file has a start command e.g. `start: "index.js"`
    - Make an entry point file `index.js`
2. Install the required dependencies
   - `npm install tmi.js`
     - the required library to connect to twitch
   - `npm install dotenv.js`
     - useful to store tokens you don't want to add to public repos
     - create a `/.env` file in the root to use it
     - [doc](https://www.npmjs.com/package/dotenv)