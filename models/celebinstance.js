var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CelebInstanceSchema = new Schema(
    {
        celeb: { type: Schema.Types.ObjectId, ref: 'Celeb', required: true },
        reviewer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        controversiality: { type: Number, min: 1, max: 5 },
        niceness: { type: Number, min: 1, max: 5 },
        sex_appeal: { type: Boolean }
    }
);

// Virtual for getting the URL of a celebinstance
CelebInstanceSchema
.virtual('url')
.get(function () {
    return '/catalog/celebinstance/' + this._id;
});

// Export the CelebInstance model
module.exports = mongoose.model('CelebInstance', CelebInstanceSchema);