const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: [item.category.extroversion,
             item.category.information,
             item.category.decision,
             item.category.structure]
}));


network.train(trainingData, {
    iterations: 20000
});

const output = network.run('reserved, visionary, emotional, messy');

console.log(`Category: ${output}`);
