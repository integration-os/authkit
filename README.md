# authkit-react

[React](https://react.dev/) hook and components for integrating with [IntegrationOS AuthKit](https://docs.integrationos.com/docs/authkit).

## Install

With npm:

```jsx
npm i @integrationos/authkit-react
```

With yarn:

```jsx
yarn add @integrationos/authkit-react
```

## Using the AuthKit component

You'll want to replace the `token URL` with your token endpoint URL, which can be securely generated from your backend using IntegrationOS' [AuthKit Node](https://www.npmjs.com/package/@integrationos/authkit-node) library.

```jsx
import { useAuthKit } from "@integrationos/authkit-react";

const { open } = useAuthKit({
  title: "Integrations",
  token: {
    url: "https://api.your-company-name.com/authkit-token",
    headers: {},
  },
  onSuccess: (connections) => {},
  onError: (error) => {},
  onClose: () => {},
});
```

## Full Documentation

Please refer to the official [IntegrationOS AuthKit](https://docs.integrationos.com/docs/authkit) docs for a more holistic understanding of IntegrationOS AuthKit.
