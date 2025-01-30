# eslint-config-ts

## Install

1. Install Eslint on your projet

```shell
yarn add --dev eslint @eslint/js
```

2. Install config

```shell
yarn add --dev @nodstudio/eslint-config-ts
```

3. Add config to yours

```js
import nodStudioConfigTs from "@nodstudio/eslint-config-ts";

export default [
    // ...
    ...nodStudioConfigTs
];
```
