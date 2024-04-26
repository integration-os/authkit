# authkit

Hook and components for integrating with [IntegrationOS AuthKit](https://docs.integrationos.com/docs/authkit). Compatible with React, Next.js, Vue, Svelte and more.

## Install

With npm:

```jsx
npm i @integrationos/authkit
```

With yarn:

```jsx
yarn add @integrationos/authkit
```

## Using the AuthKit component

You'll want to replace the `token URL` with your token endpoint URL, which can be securely generated from your backend using IntegrationOS' [AuthKit Node](https://www.npmjs.com/package/@integrationos/authkit-node) library.

```jsx
import { useAuthKit } from "@integrationos/authkit";

const { open } = useAuthKit({
  token: {
    url: "https://api.your-company-name.com/authkit-token",
    headers: {},
  },
  onSuccess: (connection) => {},
  onError: (error) => {},
  onClose: () => {},
});
```

## Full Documentation

Please refer to the official [IntegrationOS AuthKit](https://docs.integrationos.com/docs/authkit) docs for a more holistic understanding of IntegrationOS AuthKit.
