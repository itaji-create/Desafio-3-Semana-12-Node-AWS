import Joi from 'joi';

const userSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'First name is required',
    'any.required': 'First name is required',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Last name is required',
    'any.required': 'Last name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  }),
  birthDate: Joi.date().iso().required().messages({
    'date.base': 'Birth date must be a valid date',
    'date.format': 'Birth date must be in ISO format',
    'any.required': 'Birth date is required',
  }),
  city: Joi.string().required().messages({
    'string.empty': 'City is required',
    'any.required': 'City is required',
  }),
  country: Joi.string().required().messages({
    'string.empty': 'Country is required',
    'any.required': 'Country is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Confirm password must match password',
    'string.empty': 'Confirm password is required',
    'any.required': 'Confirm password is required',
  }),
});

export default userSchema;
