import { setupWorker } from 'msw/browser';
import { profile } from './api/me';
import { signIn } from './api/signIn';
import { posts } from './api/posts';

export const worker = setupWorker(...profile, ...signIn, ...posts);
