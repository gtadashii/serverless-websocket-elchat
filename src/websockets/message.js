const { response } = require('../factories/responseFactory');

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  const { connectionId } = event.requestContext;

  const data = {
    Id: connectionId,
    date: new Date(),
    messages: []
  }

  return response(200, 'received a message');
};
