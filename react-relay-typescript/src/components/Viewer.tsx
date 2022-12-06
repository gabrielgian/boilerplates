import React from 'react';
import graphql from 'babel-plugin-relay/macro';

import { loadQuery, usePreloadedQuery } from 'react-relay/hooks';
import RelayEnvironment from '../utils/RelayEnvironment';
import { ViewerInfoQuery$data } from './__generated__/ViewerInfoQuery.graphql';

const ViewerInfoQuery = graphql`
  query ViewerInfoQuery {
    viewer {
      id
      name
      login
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, ViewerInfoQuery, {});

const Viewer: React.FC = () => {
  const { viewer } = usePreloadedQuery(ViewerInfoQuery, preloadedQuery) as ViewerInfoQuery$data;

  return (
    <React.Suspense fallback={'Loading...'}>
      <div>{viewer.id}</div>
      <div>{viewer.name}</div>
      <div>{viewer.login}</div>
    </React.Suspense>
  );
};

export default Viewer;
