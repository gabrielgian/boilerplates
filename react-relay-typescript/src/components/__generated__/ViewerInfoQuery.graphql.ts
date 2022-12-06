/**
 * @generated SignedSource<<3545d53036f1f6ab11983d6302254c69>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ViewerInfoQuery$variables = {};
export type ViewerInfoQuery$data = {
  readonly viewer: {
    readonly id: string;
    readonly login: string;
    readonly name: string | null;
  };
};
export type ViewerInfoQuery = {
  response: ViewerInfoQuery$data;
  variables: ViewerInfoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "login",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewerInfoQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ViewerInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "286ff5a2e7a780f917ad911b4bef60ed",
    "id": null,
    "metadata": {},
    "name": "ViewerInfoQuery",
    "operationKind": "query",
    "text": "query ViewerInfoQuery {\n  viewer {\n    id\n    name\n    login\n  }\n}\n"
  }
};
})();

(node as any).hash = "0b1b940899d5f408e5e5891c21624b85";

export default node;
