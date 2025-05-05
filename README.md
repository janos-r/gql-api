# Modern GraphQL API

## Tools used

- Pylon
  - on the backend
  - generates the gql schema from the typescript resolvers
  - [https://pylon.cronit.io/](https://pylon.cronit.io/)
- Gqty
  - on the frontend
  - generates the typescript interface from the gql schema
    - this is conveniently done already during the Pylon build
  - provides a typed and userfriendly way how to silently generate the gql query
    from the FE to the BE
  - [gqty.dev](https://gqty.dev/)
- Workspaces
  - The generated `gqty` folder is shared as a workspace member and is a
    dependency of the FE. Thereby accessible to possibly several frontends and
    able to use it's own dependencies and imports.
- Bun
  - js runtime [bun.sh](https://bun.sh/)
  - just for fast prototyping, could be done with node as well

## Try it yourself

```
cd api/
bun install
```

- installs all dependencies of all packages in one place

```
cd apps/backend/
bun dev
```

- builds the `backend/.pylon/schema.graphql`
- generates the `gqty` folder/package
- starts the BE dev server on http://localhost:3000
- starts the graphiql client with inspectable schema on
  http://localhost:3000/graphql

```
cd libs/frontend/
bun dev
```

- starts the FE dev server on http://localhost:5173/

### Observe

- While you have both running, changing the return value (not the type) of a
  resolver in `backend/src/index.ts` immediately hot reloads the value on the
  frontend.
- If you add a new resolver or change a return type, after restarting the BE dev
  server, the FE in `frontend/src/App.tsx` will immediately know about the new
  shape of the API through gqty's `useQuery()` and suggest the correct API path
  and type! 🤩 Isn't that cool?
