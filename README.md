# tailwind standalone

Use tailwindcss without any build tool, directly in you Node.js project.

## Usage

```bash
npm install tailwind-standalone postcss tailwindcss
```

```javascript
// esm
import { createStandaloneTailwind } from 'tailwind-standalone'
// or commonjs
// const { createStandaloneTailwind } = require('tailwind-standalone')

const tailwind = createStandaloneTailwind({
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
      },
    },
  },
})

console.log(tailwind('text-primary'))
```
