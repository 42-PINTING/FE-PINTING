import { setupWorker } from 'msw/browser';
import { profile } from './api/me';

export const worker = setupWorker(...profile);
