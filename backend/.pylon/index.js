// src/index.ts
import { app } from "@getcronit/pylon";
import { handler as __internalPylonHandler } from "@getcronit/pylon";
var graphql = {
  Query: {
    // simple
    hello: "World",
    // mandatory by default
    echoArr: (arr) => arr,
    // explicit optionals
    echoArrEmpty: (arr) => arr,
    // validated types
    echoObj: (i, f, d) => ({
      name: "Gandalf",
      age: i,
      height: f,
      birth: d,
      address: () => {
        console.log("LONG RUNNING FUNCTION");
        return "Dublin";
      }
    })
  },
  Mutation: {}
};
var src_default = app;
var __internalPylonConfig = void 0;
try {
  __internalPylonConfig = config;
} catch {
}
app.use(__internalPylonHandler({
  typeDefs: "type Query {\nhello: String!\nechoArr(arr: [String!]!): [String!]!\nechoArrEmpty(arr: [String]!): [String]!\nechoObj(i: Int!, f: Float!, d: Date!): EchoObj!\n}\ntype EchoObj {\nname: String!\nage: Int!\nheight: Float!\nbirth: Date!\naddress: String!\n}\nscalar ID\nscalar Int\nscalar Float\nscalar Number\nscalar Any\nscalar Void\nscalar Object\nscalar File\nscalar Date\nscalar JSON\nscalar String\nscalar Boolean\n",
  graphql,
  resolvers: {},
  config: __internalPylonConfig
}));
export {
  src_default as default,
  graphql
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBhcHAsIHR5cGUgRmxvYXQsIHR5cGUgSW50IH0gZnJvbSBcIkBnZXRjcm9uaXQvcHlsb25cIjtcbmltcG9ydCB0eXBlIHsgTWF5YmUgfSBmcm9tIFwiZ3JhcGhxbC9qc3V0aWxzL01heWJlXCI7XG5cbmV4cG9ydCBjb25zdCBncmFwaHFsID0ge1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIC8vIHNpbXBsZVxuICAgICAgICBoZWxsbzogXCJXb3JsZFwiLFxuXG4gICAgICAgIC8vIG1hbmRhdG9yeSBieSBkZWZhdWx0XG4gICAgICAgIGVjaG9BcnI6IChhcnI6IHN0cmluZ1tdKSA9PiBhcnIsXG5cbiAgICAgICAgLy8gZXhwbGljaXQgb3B0aW9uYWxzXG4gICAgICAgIGVjaG9BcnJFbXB0eTogKGFycjogQXJyYXk8TWF5YmU8c3RyaW5nPj4pID0+IGFycixcblxuICAgICAgICAvLyB2YWxpZGF0ZWQgdHlwZXNcbiAgICAgICAgZWNob09iajogKGk6IEludCwgZjogRmxvYXQsIGQ6IERhdGUpID0+ICh7XG4gICAgICAgICAgICBuYW1lOiBcIkdhbmRhbGZcIixcbiAgICAgICAgICAgIGFnZTogaSxcbiAgICAgICAgICAgIGhlaWdodDogZixcbiAgICAgICAgICAgIGJpcnRoOiBkLFxuICAgICAgICAgICAgYWRkcmVzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGxvZ2dlZCBvbmx5IHdoZW4gY2FsbGVkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMT05HIFJVTk5JTkcgRlVOQ1RJT05cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRHVibGluXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIE11dGF0aW9uOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuICAgICAgaW1wb3J0IHtoYW5kbGVyIGFzIF9faW50ZXJuYWxQeWxvbkhhbmRsZXJ9IGZyb20gXCJAZ2V0Y3Jvbml0L3B5bG9uXCJcblxuICAgICAgbGV0IF9faW50ZXJuYWxQeWxvbkNvbmZpZyA9IHVuZGVmaW5lZFxuXG4gICAgICB0cnkge1xuICAgICAgICBfX2ludGVybmFsUHlsb25Db25maWcgPSBjb25maWdcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBjb25maWcgaXMgbm90IGRlY2xhcmVkLCBweWxvbkNvbmZpZyByZW1haW5zIHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBhcHAudXNlKF9faW50ZXJuYWxQeWxvbkhhbmRsZXIoe1xuICAgICAgICB0eXBlRGVmczogXCJ0eXBlIFF1ZXJ5IHtcXG5oZWxsbzogU3RyaW5nIVxcbmVjaG9BcnIoYXJyOiBbU3RyaW5nIV0hKTogW1N0cmluZyFdIVxcbmVjaG9BcnJFbXB0eShhcnI6IFtTdHJpbmddISk6IFtTdHJpbmddIVxcbmVjaG9PYmooaTogSW50ISwgZjogRmxvYXQhLCBkOiBEYXRlISk6IEVjaG9PYmohXFxufVxcbnR5cGUgRWNob09iaiB7XFxubmFtZTogU3RyaW5nIVxcbmFnZTogSW50IVxcbmhlaWdodDogRmxvYXQhXFxuYmlydGg6IERhdGUhXFxuYWRkcmVzczogU3RyaW5nIVxcbn1cXG5zY2FsYXIgSURcXG5zY2FsYXIgSW50XFxuc2NhbGFyIEZsb2F0XFxuc2NhbGFyIE51bWJlclxcbnNjYWxhciBBbnlcXG5zY2FsYXIgVm9pZFxcbnNjYWxhciBPYmplY3RcXG5zY2FsYXIgRmlsZVxcbnNjYWxhciBEYXRlXFxuc2NhbGFyIEpTT05cXG5zY2FsYXIgU3RyaW5nXFxuc2NhbGFyIEJvb2xlYW5cXG5cIixcbiAgICAgICAgZ3JhcGhxbCxcbiAgICAgICAgcmVzb2x2ZXJzOiB7fSxcbiAgICAgICAgY29uZmlnOiBfX2ludGVybmFsUHlsb25Db25maWdcbiAgICAgIH0pKVxuICAgICAgIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsV0FBaUM7QUFnQ3BDLFNBQVEsV0FBVyw4QkFBNkI7QUE3Qi9DLElBQU0sVUFBVTtBQUFBLEVBQ25CLE9BQU87QUFBQTtBQUFBLElBRUgsT0FBTztBQUFBO0FBQUEsSUFHUCxTQUFTLENBQUMsUUFBa0I7QUFBQTtBQUFBLElBRzVCLGNBQWMsQ0FBQyxRQUE4QjtBQUFBO0FBQUEsSUFHN0MsU0FBUyxDQUFDLEdBQVEsR0FBVSxPQUFhO0FBQUEsTUFDckMsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsU0FBUyxNQUFNO0FBRVgsZ0JBQVEsSUFBSSx1QkFBdUI7QUFDbkMsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsVUFBVSxDQUFDO0FBQ2Y7QUFFQSxJQUFPLGNBQVE7QUFJVCxJQUFJLHdCQUF3QjtBQUU1QixJQUFJO0FBQ0YsMEJBQXdCO0FBQzFCLFFBQVE7QUFFUjtBQUVBLElBQUksSUFBSSx1QkFBdUI7QUFBQSxFQUM3QixVQUFVO0FBQUEsRUFDVjtBQUFBLEVBQ0EsV0FBVyxDQUFDO0FBQUEsRUFDWixRQUFRO0FBQ1YsQ0FBQyxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
