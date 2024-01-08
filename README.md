# embed-react

[React](https://react.dev/) hook and components for integrating with [IntegrationOS Embed](https://docs.integrationos.com/docs/embed-overview).

## Install

With npm:

```jsx
npm i @integrationos/embed-react
```

With yarn:

```jsx
yarn add @integrationos/embed-react
```

## Using the Embed component

You'll want to replace the `token URL` with your token endpoint URL, which can be securely generated from your backend using IntegrationOS' [Tokens](https://www.npmjs.com/package/@integrationos/tokens) library.

```jsx
import { useEmbed } from "@integrationos/embed-react";

const { open } = useEmbed({
  title: "Integrations",
  token: {
    url: "https://api.your-company-name.com/embed-token",
    headers: {},
  },
  onSuccess: (connections) => {},
  onError: (error) => {},
  onClose: () => {},
});
```

## Full Documentation

Please refer to the official [IntegrationOS Embed](https://docs.integrationos.com/docs/embed-overview) docs for a more holistic understanding of IntegrationOS Embed.
