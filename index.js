require('dotenv').config()
const tmi = require('tmi.js');
const factsBuilder = require("./factsBuilder")


// Define configuration options
const opts = {
    identity: {
        username: process.env.TWITCH_BOT_NAME,
        password: process.env.TWITCH_TOKEN
    },
    channels: [
        'hydrosparks'
    ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
// client.connect().then(r => "");

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim();

    // If the command is known, let's execute it
    if (commandName == "!birdFact") {
        const fact = printBirdFact().trim()
        client.say(target, fact)
        console.log(`* Executed ${commandName} command`);
    } else {
        console.log(`* Unknown command ${commandName}`);
    }
}

function printBirdFact() {
    const max = f.facts.length - 1
    const index = Math.floor(Math.random() * max);
    let fact = f.facts[index][0].replace("\\\\", "") // i hate this...TODO fix parser or figure out a better way to store data
    return  fact
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}

const f = new factsBuilder()
f.read(()=> {
    // TODO should init client in here because stream reading takes time. Figure out how to do that with promises
})

// Parsing the facts takes time, but no one will realistically call the bot when launched so should be ok for now? Fix with the TODO
client.connect().then()