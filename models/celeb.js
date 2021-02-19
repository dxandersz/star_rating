var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CelebSchema = new Schema(
    {
        first_name: {type: String, required: true, maxlength: 100},
        stage_name: {type: String, maxlength: 100},
        last_name: {type: String, required: true, maxlength: 100},
        career: [{type: Schema.Types.ObjectId, ref: 'Career'}],
        date_of_birth: {type: Date},
        date_of_death: {type: Date},
        controversiality: {type: Array, required: true},
        niceness: {type: Array, required: true},
        sex_appeal: {type: Array, required: true},
        staying_power: {type: Array, required: true},
        they_fuck: {type: Array}
    }
);

// Virtual for displaying full name
CelebSchema
.virtual('full_name')
.get(function () {
    return this.first_name + ' "' + this.stage_name + '" ' + this.last_name;
});


// Virtual for displaying lifespan
CelebSchema.virtual('lifespan')
.get(function () {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

// Virtual for celeb's page view
CelebSchema
.virtual('url')
.get(function () {
    return '/catalog/celeb/' + this._id;
});

// Export the model
module.exports = mongoose.model('Celeb', CelebSchema);