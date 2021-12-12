import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { document } from '../services/dynamodbClient';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  console.log('Event: ', event);

  const { connectionId } = event.requestContext;

  const params = {
    TableName: process.env.CONNECTIONS_TABLE,
    Key: {
      id: connectionId
    }
  }

  await document.delete(params, (err) => {
    if (err) console.log(err);
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Disconnected'
    })
  }
};