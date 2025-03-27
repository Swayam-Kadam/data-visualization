const {model} = require('mongoose');

const {DatasetSchema} = require('../schema/DatasetSchema');

const Data = model('Data',DatasetSchema);

module.exports = Data