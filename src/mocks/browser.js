import { setupWorker } from 'msw/browser';
import { profile } from './api/me';
import { posts } from './api/posts';

export const worker = setupWorker(...profile, ...posts);
