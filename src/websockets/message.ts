import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  console.log('Event: ', event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Received a message'
    })
  }
};