const Joi = require("joi");
module.exports.listingSchema = Joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        image:Joi.string().allow(" ",null),
        price:Joi.number().required(),
        location:Joi.string().required(),
        country:Joi.string().required(),
        category:Joi.string()
        .valid('Trending', 'Rooms', 'Beach-side','Hotels','Mountain-View','Boat-House','5-star','Forest-Houses').required()
    }).required()
})

module.exports.reviewSchema = Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }).required()
})