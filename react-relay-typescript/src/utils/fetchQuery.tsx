import { GraphQLResponse, Variables } from 'relay-runtime';

async function fetchQuery(text: string | null, variables: Variables): Promise<GraphQLResponse> {
  const { REACT_APP_GITHUB_API_URL = '', REACT_APP_GITHUB_API_TOKEN = '' } = process.env;

  const response = await fetch(REACT_APP_GITHUB_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${REACT_APP_GITHUB_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  });

  return await response.json();
}

export default fetchQuery;
