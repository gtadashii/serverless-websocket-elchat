const { response } = require('../factories/responseFactory');

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  return response(200, 'default');
};
