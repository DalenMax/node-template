export const USERS_MESSAGES = {
  VALIDATION_ERRORS: 'Validation error',
  NAME_IS_REQUIRED: 'Name is required',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  NAME_MUST_BE_STRING: 'Name must be a string',
  PASSWORD_MUST_BE_STRING: 'Password must be a string',
  NAME_MUST_BE_1_TO_50_CHARACTERS_LONG: 'Name must be between 1 and 50 characters long',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_IS_INVALID: 'Email is invalid',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Password length must be from 6 to 50 characters',
  PASSWORD_MUST_BE_STRONG:
    'Password must be 6-50 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_MUST_BE_SAME_AS_PASSWORD: 'Confirm password must be the same as password',
  CONFIRM_PASSWORD_MUST_BE_STRING: 'Confirm password must be string',
  DATE_OF_BIRTH_IS_REQUIRED: 'Date of birth is required',
  DATE_OF_BIRTH_MUST_BE_ISO_8601: 'Date of birth must be in ISO 8601 format',
  USER_OR_PASSWORD_IS_INCORRECT: 'User or password is incorrect',
  LOGIN_FAILED: 'Login failed',
  REGISTER_FAILED: 'Register failed',
  LOGIN_SUCCESS: 'Login success',
  REGISTER_SUCCESS: 'Register success',
  ACCESS_TOKEN_IS_REQUIRED: 'Access token is required',
  REFRESH_TOKEN_IS_REQUIRED: 'Refresh token is required',
  REFRESH_TOKEN_IS_INVALID: 'Refresh token is invalid',
  USED_REFRESH_TOKEN_OR_NOT_EXIST: 'Used refresh token or not exist',
  LOGOUT_SUCCESS: 'Logout success'
} as const
