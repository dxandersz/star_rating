var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CareerSchema = new Schema(
    {
        career: {type: String, required: true, minlength: 3, maxlength: 100}
    }
)

// Display all items by genre.
CareerSchema
.virtual('url')
.get(function () {
    return '/catalog/career/' + this._id;
});

// Export the model
module.exports = mongoose.model('Career', CareerSchema);