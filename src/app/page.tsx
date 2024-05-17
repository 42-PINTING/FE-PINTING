import Home from './Home/Home';
import { server } from '../mocks/node.js';

server.listen();

export default async function main() {
  return <Home />;
}
