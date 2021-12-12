import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { document } from '../services/dynamodbClient';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  console.log('Event: ', event);

  const { connectionId } = event.requestContext;

  const body = JSON.parse(event.body);

  const params = {
    TableName: process.env.CONNECTIONS_TABLE,
    Key: {
      id: connectionId
    }
  }

  try {
    const record = await document.get(params, (err) => {
      if (err) console.error(err);
    }).promise();
    const item = record.Item;
    const messages = item.messages;
    messages.push(body.message);

    const data = {
      ...item,
      messages
    };

    await document.put({
      TableName: process.env.CONNECTIONS_TABLE,
      Item: data
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Received a message'
      })
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Error while receiving the message'
      })
    }
  }
};