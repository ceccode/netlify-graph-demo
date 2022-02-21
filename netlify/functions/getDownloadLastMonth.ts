import NetlifyGraph, { NetlifyGraphFunctionOptions } from "./netlifyGraph";

export const handler = async (event, context) => {
  const { errors: getDownloadLastMonthErrors, data: getDownloadLastMonthData } =
    await NetlifyGraph.fetchDownloadLastMonth({});

  if (getDownloadLastMonthErrors) {
    console.error(JSON.stringify(getDownloadLastMonthErrors, null, 2));
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      getDownloadLastMonthErrors,
      getDownloadLastMonthData,
    }),
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
};
