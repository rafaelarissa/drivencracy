import poolSchema from "../schemas/poolSchema.js";

export function poolValidation(req, res, next) {
  const validation = poolSchema.validate(req.body);

  if(validation.error) {
    res.sendStatus(422);
    return
  }

  next();
}