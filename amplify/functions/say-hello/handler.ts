import type { Handler } from "aws-lambda";

export const handler: Handler = async (event) => {
  console.log("Event: \n" + JSON.stringify(event, null, 2));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
};
