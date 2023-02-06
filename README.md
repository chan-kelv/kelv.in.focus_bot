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
3. Register your bot
   - Go to [twitch dev page](https://dev.twitch.tv/console/apps)
   - Register your application
     - use http://localhost as the redirect for now
   - The client id can be found here once created
4. Simple Login Flow using Twitch CLI Bot
   - Download the [CLI](https://dev.twitch.tv/docs/cli/)
   - `twitch token -u -s 'chat:edit chat:read'`
     - First time use will require you to create a config file or manually: `twitch configure`
     - Scopes defined [link](https://dev.twitch.tv/docs/authentication/scopes/#twitch-access-token-scopes)
   - store the access key into the env
5. Copy the boilerplate [template](https://dev.twitch.tv/docs/irc/get-started/#create-the-botjs-file) and start building the bot