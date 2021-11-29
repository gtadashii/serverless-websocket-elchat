import { response } from '../factories/responseFactory';

const handler = async (event) => {
  console.log('Event: ', event);
  return response(200, 'successfully connected');
};

export { handler };