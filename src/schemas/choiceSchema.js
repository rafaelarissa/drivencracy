import Joi from "joi"

const choiceSchema = Joi.object({
  title: Joi.string().required().trim(),
  poolId: Joi.required()
})

export default choiceSchema;