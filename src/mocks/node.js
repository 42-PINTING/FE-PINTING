// src/mocks/node.js
import { setupServer } from 'msw/node';
import { loginToken, randomeImage } from './home';

export const server = setupServer(...loginToken, ...randomeImage);
