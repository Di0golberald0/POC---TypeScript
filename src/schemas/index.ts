import Joi from "joi";

export const newMovie = Joi.object ({
    name: Joi.string().required(),
    genre: Joi.string().required(),
    platform: Joi.string().required(),
    status: Joi.boolean().required(),
});

export const movieUpdate = Joi.object ({
    name: Joi.string().required(),
    rating: Joi.number().required(),
    synopsis: Joi.string().required(),
});