import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import * as dayjs from 'dayjs';
import { document } from '../services/dynamodbClient';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  console.log('Event: ', event);

  const { connectionId } = event.requestContext;

  const data = {
    id: connectionId,
    date: dayjs().format(),
    messages: []
  }

  await document.put({
    TableName: process.env.CONNECTIONS_TABLE,
    Item: data
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Connected'
    })
  }
};