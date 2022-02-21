import Joi from "joi"

const poolSchema = Joi.object({
  title: Joi.string().required().trim(),
  expiredAt: Joi.optional()
})

export default poolSchema;