/**
 * schema of storing daily average, min and max values of all parameters
 */
const restful = require('node-restful'),
	mongoose = restful.mongoose,
	Schema = mongoose.Schema;

const avgDay = new Schema({
	nodeId: {
		type: String,
		required: true
	},
	timestamp: {
		type: Date,
		required: true
	},
	year: {
		type: Number,
		required: true
	},
	month: {
		type: Number,
		required: true
	},
	day: {
		type: Number,
		required: true
	},
	values: {
		type: Object,
		required: true
	}

}, {
	collection: 'avgDay'
});

avgDay.index({
	nodeId: 1,
	timestamp : 1,
}, {
	unique: true
});

module.exports = restful.model('avgDay', avgDay)
	.methods(['get', 'put', 'post']);