export const fetchQuestionsAPI = async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  if (![200, 400].includes(response.status)) {
    return {
      status: "error",
      message: "Server temporarily unavailable, check your network & try again",
      data: [],
    };
  }

  const data = await response.json();

//   console.log("data", data);

  return {
    status: response.status === 200 ? "success" : "error",
    message: 'Questions fetched successfully',
    results: data.results as IQuestion[],
  };
};
