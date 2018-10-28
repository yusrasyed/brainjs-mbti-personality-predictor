const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: [item.extroversion,
            item.information,
            item.decision,
            item.structure
          ],
    output: [item.category.extroversion,
             item.category.information,
             item.category.decision,
             item.category.structure]
}));


network.train(trainingData, {
    iterations: 4000
});

const output = network.run(['reserved', 'practical', 'emotional', 'messy']);

console.log(`Category: ${output}`);
