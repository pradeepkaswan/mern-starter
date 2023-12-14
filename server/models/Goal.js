const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		title: {
			type: String,
			required: [true, 'Please add a title'],
		},
	},
	{
		timestamps: true,
	},
);

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
