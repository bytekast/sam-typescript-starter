import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  console.log(JSON.stringify(event, null, 2))
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hola! Your function executed successfully!',
      context,
      event,
    }),
  }
}
