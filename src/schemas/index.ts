import Joi from "joi";

export const movieSchema = Joi.object ({
    name: Joi.string().required(),
    genre: Joi.string().required(),
    platform: Joi.string().required(),
    status: Joi.boolean().required(),
    rating: Joi.number().required(),
    synopsis: Joi.string().required(),
});