import { setupWorker } from 'msw/browser';
import { profile } from './me/me';

export const worker = setupWorker(...profile);
