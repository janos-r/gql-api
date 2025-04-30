// src/index.ts
import { app } from "@getcronit/pylon";

// src/tickets/ticketsQuery.ts
var ticketsQuery = {
  findAll: () => tickets,
  findById: (id) => {
    const i = tickets.findIndex((t) => t?.id === id);
    if (i !== -1) {
      return tickets[i];
    }
  }
};

// src/tickets/ticketsMutation.ts
var ticketsMutation = {
  addOne: (ticket) => {
    tickets.push({ id: Math.floor(Math.random() * 1e3), ...ticket });
    return true;
  },
  delete: (id) => {
    const i = tickets.findIndex((t) => t?.id === id);
    if (i !== -1) {
      return delete tickets[i];
    }
    return false;
  },
  updateOne: (id, update) => {
    const i = tickets.findIndex((t) => t?.id === id);
    if (i !== -1) {
      for (const key in update) {
        tickets[i][key] = update[key];
      }
      return true;
    }
  }
};

// src/tickets/index.ts
var tickets = [];

// src/index.ts
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
    }),
    tickets: ticketsQuery
  },
  Mutation: {
    tickets: ticketsMutation
  }
};
var src_default = app;
var __internalPylonConfig = void 0;
try {
  __internalPylonConfig = config;
} catch {
}
app.use(__internalPylonHandler({
  typeDefs: "input CreateTicketInput {\n	name: String!\n	age: Number!\n}\ninput PartialInput {\n	id: Number\n	name: String\n	age: Number\n}\ntype Query {\nhello: String!\nechoArr(arr: [String!]!): [String!]!\nechoArrEmpty(arr: [String]!): [String]!\nechoObj(i: Int!, f: Float!, d: Date!): EchoObj!\ntickets: Tickets!\n}\ntype EchoObj {\nname: String!\nage: Int!\nheight: Float!\nbirth: Date!\naddress: String!\n}\ntype Tickets {\nfindAll: [Ticket]!\nfindById(id: Number!): Ticket\n}\ntype Ticket {\nid: Number!\nname: String!\nage: Number!\n}\ntype Mutation {\ntickets: Tickets_1!\n}\ntype Tickets_1 {\naddOne(ticket: CreateTicketInput!): Boolean!\ndelete(id: Number!): Boolean!\nupdateOne(id: Number!, update: PartialInput!): Boolean\n}\nscalar ID\nscalar Int\nscalar Float\nscalar Number\nscalar Any\nscalar Void\nscalar Object\nscalar File\nscalar Date\nscalar JSON\nscalar String\nscalar Boolean\n",
  graphql,
  resolvers: {},
  config: __internalPylonConfig
}));
export {
  src_default as default,
  graphql
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIiwgIi4uL3NyYy90aWNrZXRzL3RpY2tldHNRdWVyeS50cyIsICIuLi9zcmMvdGlja2V0cy90aWNrZXRzTXV0YXRpb24udHMiLCAiLi4vc3JjL3RpY2tldHMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGFwcCwgdHlwZSBGbG9hdCwgdHlwZSBJbnQgfSBmcm9tIFwiQGdldGNyb25pdC9weWxvblwiO1xuaW1wb3J0IHR5cGUgeyBNYXliZSB9IGZyb20gXCJncmFwaHFsL2pzdXRpbHMvTWF5YmVcIjtcbmltcG9ydCB7IHRpY2tldHNRdWVyeSwgdGlja2V0c011dGF0aW9uIH0gZnJvbSBcIi4vdGlja2V0c1wiO1xuXG5leHBvcnQgY29uc3QgZ3JhcGhxbCA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICAvLyBzaW1wbGVcbiAgICAgICAgaGVsbG86IFwiV29ybGRcIixcblxuICAgICAgICAvLyBtYW5kYXRvcnkgYnkgZGVmYXVsdFxuICAgICAgICBlY2hvQXJyOiAoYXJyOiBzdHJpbmdbXSkgPT4gYXJyLFxuXG4gICAgICAgIC8vIGV4cGxpY2l0IG9wdGlvbmFsc1xuICAgICAgICBlY2hvQXJyRW1wdHk6IChhcnI6IEFycmF5PE1heWJlPHN0cmluZz4+KSA9PiBhcnIsXG5cbiAgICAgICAgLy8gdmFsaWRhdGVkIHR5cGVzXG4gICAgICAgIGVjaG9PYmo6IChpOiBJbnQsIGY6IEZsb2F0LCBkOiBEYXRlKSA9PiAoe1xuICAgICAgICAgICAgbmFtZTogXCJHYW5kYWxmXCIsXG4gICAgICAgICAgICBhZ2U6IGksXG4gICAgICAgICAgICBoZWlnaHQ6IGYsXG4gICAgICAgICAgICBiaXJ0aDogZCxcbiAgICAgICAgICAgIGFkZHJlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBsb2dnZWQgb25seSB3aGVuIGNhbGxlZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTE9ORyBSVU5OSU5HIEZVTkNUSU9OXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkR1YmxpblwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG5cbiAgICAgICAgdGlja2V0czogdGlja2V0c1F1ZXJ5LFxuICAgIH0sXG4gICAgTXV0YXRpb246IHtcbiAgICAgICAgdGlja2V0czogdGlja2V0c011dGF0aW9uLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG5cbiAgICAgIGltcG9ydCB7aGFuZGxlciBhcyBfX2ludGVybmFsUHlsb25IYW5kbGVyfSBmcm9tIFwiQGdldGNyb25pdC9weWxvblwiXG5cbiAgICAgIGxldCBfX2ludGVybmFsUHlsb25Db25maWcgPSB1bmRlZmluZWRcblxuICAgICAgdHJ5IHtcbiAgICAgICAgX19pbnRlcm5hbFB5bG9uQ29uZmlnID0gY29uZmlnXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gY29uZmlnIGlzIG5vdCBkZWNsYXJlZCwgcHlsb25Db25maWcgcmVtYWlucyB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgYXBwLnVzZShfX2ludGVybmFsUHlsb25IYW5kbGVyKHtcbiAgICAgICAgdHlwZURlZnM6IFwiaW5wdXQgQ3JlYXRlVGlja2V0SW5wdXQge1xcblxcdG5hbWU6IFN0cmluZyFcXG5cXHRhZ2U6IE51bWJlciFcXG59XFxuaW5wdXQgUGFydGlhbElucHV0IHtcXG5cXHRpZDogTnVtYmVyXFxuXFx0bmFtZTogU3RyaW5nXFxuXFx0YWdlOiBOdW1iZXJcXG59XFxudHlwZSBRdWVyeSB7XFxuaGVsbG86IFN0cmluZyFcXG5lY2hvQXJyKGFycjogW1N0cmluZyFdISk6IFtTdHJpbmchXSFcXG5lY2hvQXJyRW1wdHkoYXJyOiBbU3RyaW5nXSEpOiBbU3RyaW5nXSFcXG5lY2hvT2JqKGk6IEludCEsIGY6IEZsb2F0ISwgZDogRGF0ZSEpOiBFY2hvT2JqIVxcbnRpY2tldHM6IFRpY2tldHMhXFxufVxcbnR5cGUgRWNob09iaiB7XFxubmFtZTogU3RyaW5nIVxcbmFnZTogSW50IVxcbmhlaWdodDogRmxvYXQhXFxuYmlydGg6IERhdGUhXFxuYWRkcmVzczogU3RyaW5nIVxcbn1cXG50eXBlIFRpY2tldHMge1xcbmZpbmRBbGw6IFtUaWNrZXRdIVxcbmZpbmRCeUlkKGlkOiBOdW1iZXIhKTogVGlja2V0XFxufVxcbnR5cGUgVGlja2V0IHtcXG5pZDogTnVtYmVyIVxcbm5hbWU6IFN0cmluZyFcXG5hZ2U6IE51bWJlciFcXG59XFxudHlwZSBNdXRhdGlvbiB7XFxudGlja2V0czogVGlja2V0c18xIVxcbn1cXG50eXBlIFRpY2tldHNfMSB7XFxuYWRkT25lKHRpY2tldDogQ3JlYXRlVGlja2V0SW5wdXQhKTogQm9vbGVhbiFcXG5kZWxldGUoaWQ6IE51bWJlciEpOiBCb29sZWFuIVxcbnVwZGF0ZU9uZShpZDogTnVtYmVyISwgdXBkYXRlOiBQYXJ0aWFsSW5wdXQhKTogQm9vbGVhblxcbn1cXG5zY2FsYXIgSURcXG5zY2FsYXIgSW50XFxuc2NhbGFyIEZsb2F0XFxuc2NhbGFyIE51bWJlclxcbnNjYWxhciBBbnlcXG5zY2FsYXIgVm9pZFxcbnNjYWxhciBPYmplY3RcXG5zY2FsYXIgRmlsZVxcbnNjYWxhciBEYXRlXFxuc2NhbGFyIEpTT05cXG5zY2FsYXIgU3RyaW5nXFxuc2NhbGFyIEJvb2xlYW5cXG5cIixcbiAgICAgICAgZ3JhcGhxbCxcbiAgICAgICAgcmVzb2x2ZXJzOiB7fSxcbiAgICAgICAgY29uZmlnOiBfX2ludGVybmFsUHlsb25Db25maWdcbiAgICAgIH0pKVxuICAgICAgIiwgImltcG9ydCB7IHRpY2tldHMgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgY29uc3QgdGlja2V0c1F1ZXJ5ID0ge1xuICAgIGZpbmRBbGw6ICgpID0+IHRpY2tldHMsXG4gICAgZmluZEJ5SWQ6IChpZDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGkgPSB0aWNrZXRzLmZpbmRJbmRleCgodCkgPT4gdD8uaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdGlja2V0c1tpXTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuIiwgImltcG9ydCB7IHR5cGUgVGlja2V0LCB0aWNrZXRzIH0gZnJvbSBcIi5cIjtcblxudHlwZSBDcmVhdGVUaWNrZXQgPSBQaWNrPFRpY2tldCwgXCJuYW1lXCIgfCBcImFnZVwiPjtcbnR5cGUgVXBkYXRlVGlja2V0ID0gUGFydGlhbDxUaWNrZXQ+O1xuXG5leHBvcnQgY29uc3QgdGlja2V0c011dGF0aW9uID0ge1xuICAgIGFkZE9uZTogKHRpY2tldDogQ3JlYXRlVGlja2V0KSA9PiB7XG4gICAgICAgIHRpY2tldHMucHVzaCh7IGlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSwgLi4udGlja2V0IH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGRlbGV0ZTogKGlkOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgaSA9IHRpY2tldHMuZmluZEluZGV4KCh0KSA9PiB0Py5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxldGUgdGlja2V0c1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICB1cGRhdGVPbmU6IChpZDogbnVtYmVyLCB1cGRhdGU6IFVwZGF0ZVRpY2tldCkgPT4ge1xuICAgICAgICBjb25zdCBpID0gdGlja2V0cy5maW5kSW5kZXgoKHQpID0+IHQ/LmlkID09PSBpZCk7XG4gICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgd2FzIGZvdW5kLCBpdCdzIG5vdCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAodGlja2V0c1tpXSBhcyBUaWNrZXQpW2tleV0gPSB1cGRhdGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBNYXliZSB9IGZyb20gXCJncmFwaHFsL2pzdXRpbHMvTWF5YmVcIjtcblxuZXhwb3J0IHR5cGUgVGlja2V0ID0ge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFnZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IHRpY2tldHM6IEFycmF5PE1heWJlPFRpY2tldD4+ID0gW107XG5leHBvcnQgeyB0aWNrZXRzUXVlcnkgfSBmcm9tIFwiLi90aWNrZXRzUXVlcnlcIjtcbmV4cG9ydCB7IHRpY2tldHNNdXRhdGlvbiB9IGZyb20gXCIuL3RpY2tldHNNdXRhdGlvblwiO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsV0FBaUM7OztBQ0VuQyxJQUFNLGVBQWU7QUFBQSxFQUN4QixTQUFTLE1BQU07QUFBQSxFQUNmLFVBQVUsQ0FBQyxPQUFlO0FBQ3RCLFVBQU0sSUFBSSxRQUFRLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFO0FBQy9DLFFBQUksTUFBTSxJQUFJO0FBQ1YsYUFBTyxRQUFRLENBQUM7QUFBQSxJQUNwQjtBQUFBLEVBQ0o7QUFDSjs7O0FDTE8sSUFBTSxrQkFBa0I7QUFBQSxFQUMzQixRQUFRLENBQUMsV0FBeUI7QUFDOUIsWUFBUSxLQUFLLEVBQUUsSUFBSSxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksR0FBSSxHQUFHLEdBQUcsT0FBTyxDQUFDO0FBQ2hFLFdBQU87QUFBQSxFQUNYO0FBQUEsRUFDQSxRQUFRLENBQUMsT0FBZTtBQUNwQixVQUFNLElBQUksUUFBUSxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRTtBQUMvQyxRQUFJLE1BQU0sSUFBSTtBQUNWLGFBQU8sT0FBTyxRQUFRLENBQUM7QUFBQSxJQUMzQjtBQUNBLFdBQU87QUFBQSxFQUNYO0FBQUEsRUFDQSxXQUFXLENBQUMsSUFBWSxXQUF5QjtBQUM3QyxVQUFNLElBQUksUUFBUSxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRTtBQUMvQyxRQUFJLE1BQU0sSUFBSTtBQUNWLGlCQUFXLE9BQU8sUUFBUTtBQUV0QixRQUFDLFFBQVEsQ0FBQyxFQUFhLEdBQUcsSUFBSSxPQUFPLEdBQUc7QUFBQSxNQUM1QztBQUNBLGFBQU87QUFBQSxJQUNYO0FBQUEsRUFDSjtBQUNKOzs7QUNuQk8sSUFBTSxVQUFnQyxDQUFDOzs7QUg2QnhDLFNBQVEsV0FBVyw4QkFBNkI7QUFqQy9DLElBQU0sVUFBVTtBQUFBLEVBQ25CLE9BQU87QUFBQTtBQUFBLElBRUgsT0FBTztBQUFBO0FBQUEsSUFHUCxTQUFTLENBQUMsUUFBa0I7QUFBQTtBQUFBLElBRzVCLGNBQWMsQ0FBQyxRQUE4QjtBQUFBO0FBQUEsSUFHN0MsU0FBUyxDQUFDLEdBQVEsR0FBVSxPQUFhO0FBQUEsTUFDckMsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsU0FBUyxNQUFNO0FBRVgsZ0JBQVEsSUFBSSx1QkFBdUI7QUFDbkMsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNKO0FBQUEsSUFFQSxTQUFTO0FBQUEsRUFDYjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ2I7QUFDSjtBQUVBLElBQU8sY0FBUTtBQUlULElBQUksd0JBQXdCO0FBRTVCLElBQUk7QUFDRiwwQkFBd0I7QUFDMUIsUUFBUTtBQUVSO0FBRUEsSUFBSSxJQUFJLHVCQUF1QjtBQUFBLEVBQzdCLFVBQVU7QUFBQSxFQUNWO0FBQUEsRUFDQSxXQUFXLENBQUM7QUFBQSxFQUNaLFFBQVE7QUFDVixDQUFDLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
