# Local Event Page

Build with Next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Before Building: System Setup

1. Node version satisfies [here](https://nextjs.org/docs/getting-started); check your node version: `node -v`
2. `brew install nvm`
3. `npx create-next-app@latest <app-name>`
4. Run your app using: `npm run dev`

## Component one: File Structure and Data Fetching

Main logic is in `pages`
Components in `src/components`

### 1. Server-Side Rendering

```js
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

Use `getServerSideProps` only if you need to render a page whose data must be fetched at request time. It can also be cached if cache-control headers are configured.

### 2. Pre-render this page at build time

```js
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

 The data fetched by this method is fixed at build time and does not change unless the page is re-built. This method is typically used when the data being fetched is relatively stable and does not change frequently.

### 3. Dynamic Routes

```js
// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}
export default function Post({ post }) {
  // Render post...
}
```

### 4. Client-side Navigation

Avoid a full refresh of the page using `import Link from 'next/link';`
More information [here](https://nextjs.org/docs/api-reference/next/link)

## Now is time to run your code

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
