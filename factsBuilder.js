const csv = require('fast-csv');
const fs = require("fs");

const options = {
    delimiter: "|"
}
class FactsBuilder {
    facts = [];
    read(onComplete) {
        fs.createReadStream("bird_facts.csv", "utf-8")
            .pipe(csv.parse(options))
            .on("error", (error) => {
                console.log(error);
            })
            .on("data", (row) => {
                this.facts.push(row);
            })
            .on("end", (rowCount) => {
                onComplete()
            });
    }
}

module.exports = FactsBuilder;