import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  console.log(event.rawUrl)
  return {
    statusCode: 200,
    body: JSON.stringify({
      rawUrl: event.rawUrl,
    }),
  };
};
