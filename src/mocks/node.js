// src/mocks/node.js
import { setupServer } from 'msw/node';
import { checkLogin, randomeImage } from './Login';
// import { validateEmail } from './SignUp.js';

export const server = setupServer(
  ...checkLogin,
  ...randomeImage
  // ...validateEmail
);
