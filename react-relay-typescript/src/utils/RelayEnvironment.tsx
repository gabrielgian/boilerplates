import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  RequestParameters,
  GraphQLResponse,
  ObservableFromValue
} from 'relay-runtime';
import fetchGraphQL from './fetchQuery';

function fetchRelay(
  params: RequestParameters,
  variables: Variables
): ObservableFromValue<GraphQLResponse> {
  return fetchGraphQL(params.text, variables);
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
});
