// src/mocks/node.js
import { setupServer } from 'msw/node';
import { checkLogin, randomeImage } from './Home.ts';

export const server = setupServer(...checkLogin, ...randomeImage);
