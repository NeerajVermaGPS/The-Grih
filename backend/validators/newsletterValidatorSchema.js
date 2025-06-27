const newsletterValidationSchema = {
  email: {
    in: ['body'],
    isEmail: {
      errorMessage: 'Please provide a valid email address',
    },
    normalizeEmail: true,
    notEmpty: {
      errorMessage: 'Email field is required',
    }
  }
}

module.exports = { newsletterValidationSchema };