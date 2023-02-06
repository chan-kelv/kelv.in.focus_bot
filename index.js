require('dotenv').config()
const tmi = require('tmi.js');
const fs = require("fs");


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
    if (commandName === '!dice') {
        const num = rollDice();
        client.say(target, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
    } else {
        console.log(`* Unknown command ${commandName}`);
    }
}

// Function called when the "dice" command is issued
function rollDice () {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}

const csv = require('fast-csv');
const options = {
    delimiter: ","
}
const facts = [];
fs.createReadStream("bird_facts.csv", "utf-8")
    .pipe(csv.parse(options))
    .on("error", (error) => {
        console.log(error);
    })
    .on("data", (row) => {
        facts.push(row);
    })
    .on("end", (rowCount) => {
        console.log(rowCount);
        // console.log(facts);
        console.log("fact2:" + facts[3])
    });

