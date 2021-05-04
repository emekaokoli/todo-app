export const validateAndGetData = async (response) => {
  const jsonBody = await response.json();

  if (!!jsonBody.error) throw Error(jsonBody.error);
  else return jsonBody.data;
};

// handle any fetch request.
export const handleRequest = async (requestFn) => {
  const response = await requestFn();
  return await validateAndGetData(response);
};
