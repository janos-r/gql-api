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
    /** simple */
    hello: "World",
    /** mandatory by default */
    echoArr: (arr) => arr,
    /** explicit optionals */
    echoArrEmpty: (arr) => arr,
    /** validated types */
    echoObj: (int, float, date) => ({
      name: "Gandalf",
      age: int,
      height: float,
      birth: date,
      /** logged only when called */
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
  typeDefs: 'input CreateTicketInput {\n	name: String!\n	age: Number!\n}\ninput PartialInput {\n	id: Number\n	name: String\n	age: Number\n}\ntype Query {\n"""\nsimple\n"""\nhello: String!\n"""\nmandatory by default\n"""\nechoArr(arr: [String!]!): [String!]!\n"""\nexplicit optionals\n"""\nechoArrEmpty(arr: [String]!): [String]!\n"""\nvalidated types\n"""\nechoObj(int: Int!, float: Float!, date: Date!): EchoObj!\ntickets: Tickets!\n}\ntype EchoObj {\nname: String!\nage: Int!\nheight: Float!\nbirth: Date!\n"""\nlogged only when called\n"""\naddress: String!\n}\ntype Tickets {\nfindAll: [Ticket]!\nfindById(id: Number!): Ticket\n}\ntype Ticket {\nid: Number!\nname: String!\nage: Number!\n}\ntype Mutation {\ntickets: Tickets_1!\n}\ntype Tickets_1 {\naddOne(ticket: CreateTicketInput!): Boolean!\ndelete(id: Number!): Boolean!\nupdateOne(id: Number!, update: PartialInput!): Boolean\n}\nscalar ID\nscalar Int\nscalar Float\nscalar Number\nscalar Any\nscalar Void\nscalar Object\nscalar File\nscalar Date\nscalar JSON\nscalar String\nscalar Boolean\n',
  graphql,
  resolvers: {},
  config: __internalPylonConfig
}));
export {
  src_default as default,
  graphql
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIiwgIi4uL3NyYy90aWNrZXRzL3RpY2tldHNRdWVyeS50cyIsICIuLi9zcmMvdGlja2V0cy90aWNrZXRzTXV0YXRpb24udHMiLCAiLi4vc3JjL3RpY2tldHMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGFwcCwgdHlwZSBGbG9hdCwgdHlwZSBJbnQgfSBmcm9tIFwiQGdldGNyb25pdC9weWxvblwiO1xuaW1wb3J0IHR5cGUgeyBNYXliZSB9IGZyb20gXCJncmFwaHFsL2pzdXRpbHMvTWF5YmVcIjtcbmltcG9ydCB7IHRpY2tldHNRdWVyeSwgdGlja2V0c011dGF0aW9uIH0gZnJvbSBcIi4vdGlja2V0c1wiO1xuXG5leHBvcnQgY29uc3QgZ3JhcGhxbCA9IHtcbiAgICBRdWVyeToge1xuICAgICAgICAvKiogc2ltcGxlICovXG4gICAgICAgIGhlbGxvOiBcIldvcmxkXCIsXG5cbiAgICAgICAgLyoqIG1hbmRhdG9yeSBieSBkZWZhdWx0ICovXG4gICAgICAgIGVjaG9BcnI6IChhcnI6IHN0cmluZ1tdKSA9PiBhcnIsXG5cbiAgICAgICAgLyoqIGV4cGxpY2l0IG9wdGlvbmFscyAqL1xuICAgICAgICBlY2hvQXJyRW1wdHk6IChhcnI6IEFycmF5PE1heWJlPHN0cmluZz4+KSA9PiBhcnIsXG5cbiAgICAgICAgLyoqIHZhbGlkYXRlZCB0eXBlcyAqL1xuICAgICAgICBlY2hvT2JqOiAoaW50OiBJbnQsIGZsb2F0OiBGbG9hdCwgZGF0ZTogRGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIG5hbWU6IFwiR2FuZGFsZlwiLFxuICAgICAgICAgICAgYWdlOiBpbnQsXG4gICAgICAgICAgICBoZWlnaHQ6IGZsb2F0LFxuICAgICAgICAgICAgYmlydGg6IGRhdGUsXG4gICAgICAgICAgICAvKiogbG9nZ2VkIG9ubHkgd2hlbiBjYWxsZWQgKi9cbiAgICAgICAgICAgIGFkZHJlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxPTkcgUlVOTklORyBGVU5DVElPTlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEdWJsaW5cIjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIHRpY2tldHM6IHRpY2tldHNRdWVyeSxcbiAgICB9LFxuICAgIE11dGF0aW9uOiB7XG4gICAgICAgIHRpY2tldHM6IHRpY2tldHNNdXRhdGlvbixcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG4gICAgICBpbXBvcnQge2hhbmRsZXIgYXMgX19pbnRlcm5hbFB5bG9uSGFuZGxlcn0gZnJvbSBcIkBnZXRjcm9uaXQvcHlsb25cIlxuXG4gICAgICBsZXQgX19pbnRlcm5hbFB5bG9uQ29uZmlnID0gdW5kZWZpbmVkXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIF9faW50ZXJuYWxQeWxvbkNvbmZpZyA9IGNvbmZpZ1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIGNvbmZpZyBpcyBub3QgZGVjbGFyZWQsIHB5bG9uQ29uZmlnIHJlbWFpbnMgdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGFwcC51c2UoX19pbnRlcm5hbFB5bG9uSGFuZGxlcih7XG4gICAgICAgIHR5cGVEZWZzOiBcImlucHV0IENyZWF0ZVRpY2tldElucHV0IHtcXG5cXHRuYW1lOiBTdHJpbmchXFxuXFx0YWdlOiBOdW1iZXIhXFxufVxcbmlucHV0IFBhcnRpYWxJbnB1dCB7XFxuXFx0aWQ6IE51bWJlclxcblxcdG5hbWU6IFN0cmluZ1xcblxcdGFnZTogTnVtYmVyXFxufVxcbnR5cGUgUXVlcnkge1xcblxcXCJcXFwiXFxcIlxcbnNpbXBsZVxcblxcXCJcXFwiXFxcIlxcbmhlbGxvOiBTdHJpbmchXFxuXFxcIlxcXCJcXFwiXFxubWFuZGF0b3J5IGJ5IGRlZmF1bHRcXG5cXFwiXFxcIlxcXCJcXG5lY2hvQXJyKGFycjogW1N0cmluZyFdISk6IFtTdHJpbmchXSFcXG5cXFwiXFxcIlxcXCJcXG5leHBsaWNpdCBvcHRpb25hbHNcXG5cXFwiXFxcIlxcXCJcXG5lY2hvQXJyRW1wdHkoYXJyOiBbU3RyaW5nXSEpOiBbU3RyaW5nXSFcXG5cXFwiXFxcIlxcXCJcXG52YWxpZGF0ZWQgdHlwZXNcXG5cXFwiXFxcIlxcXCJcXG5lY2hvT2JqKGludDogSW50ISwgZmxvYXQ6IEZsb2F0ISwgZGF0ZTogRGF0ZSEpOiBFY2hvT2JqIVxcbnRpY2tldHM6IFRpY2tldHMhXFxufVxcbnR5cGUgRWNob09iaiB7XFxubmFtZTogU3RyaW5nIVxcbmFnZTogSW50IVxcbmhlaWdodDogRmxvYXQhXFxuYmlydGg6IERhdGUhXFxuXFxcIlxcXCJcXFwiXFxubG9nZ2VkIG9ubHkgd2hlbiBjYWxsZWRcXG5cXFwiXFxcIlxcXCJcXG5hZGRyZXNzOiBTdHJpbmchXFxufVxcbnR5cGUgVGlja2V0cyB7XFxuZmluZEFsbDogW1RpY2tldF0hXFxuZmluZEJ5SWQoaWQ6IE51bWJlciEpOiBUaWNrZXRcXG59XFxudHlwZSBUaWNrZXQge1xcbmlkOiBOdW1iZXIhXFxubmFtZTogU3RyaW5nIVxcbmFnZTogTnVtYmVyIVxcbn1cXG50eXBlIE11dGF0aW9uIHtcXG50aWNrZXRzOiBUaWNrZXRzXzEhXFxufVxcbnR5cGUgVGlja2V0c18xIHtcXG5hZGRPbmUodGlja2V0OiBDcmVhdGVUaWNrZXRJbnB1dCEpOiBCb29sZWFuIVxcbmRlbGV0ZShpZDogTnVtYmVyISk6IEJvb2xlYW4hXFxudXBkYXRlT25lKGlkOiBOdW1iZXIhLCB1cGRhdGU6IFBhcnRpYWxJbnB1dCEpOiBCb29sZWFuXFxufVxcbnNjYWxhciBJRFxcbnNjYWxhciBJbnRcXG5zY2FsYXIgRmxvYXRcXG5zY2FsYXIgTnVtYmVyXFxuc2NhbGFyIEFueVxcbnNjYWxhciBWb2lkXFxuc2NhbGFyIE9iamVjdFxcbnNjYWxhciBGaWxlXFxuc2NhbGFyIERhdGVcXG5zY2FsYXIgSlNPTlxcbnNjYWxhciBTdHJpbmdcXG5zY2FsYXIgQm9vbGVhblxcblwiLFxuICAgICAgICBncmFwaHFsLFxuICAgICAgICByZXNvbHZlcnM6IHt9LFxuICAgICAgICBjb25maWc6IF9faW50ZXJuYWxQeWxvbkNvbmZpZ1xuICAgICAgfSkpXG4gICAgICAiLCAiaW1wb3J0IHsgdGlja2V0cyB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCBjb25zdCB0aWNrZXRzUXVlcnkgPSB7XG4gICAgZmluZEFsbDogKCkgPT4gdGlja2V0cyxcbiAgICBmaW5kQnlJZDogKGlkOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgaSA9IHRpY2tldHMuZmluZEluZGV4KCh0KSA9PiB0Py5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aWNrZXRzW2ldO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCAiaW1wb3J0IHsgdHlwZSBUaWNrZXQsIHRpY2tldHMgfSBmcm9tIFwiLlwiO1xuXG50eXBlIENyZWF0ZVRpY2tldCA9IFBpY2s8VGlja2V0LCBcIm5hbWVcIiB8IFwiYWdlXCI+O1xudHlwZSBVcGRhdGVUaWNrZXQgPSBQYXJ0aWFsPFRpY2tldD47XG5cbmV4cG9ydCBjb25zdCB0aWNrZXRzTXV0YXRpb24gPSB7XG4gICAgYWRkT25lOiAodGlja2V0OiBDcmVhdGVUaWNrZXQpID0+IHtcbiAgICAgICAgdGlja2V0cy5wdXNoKHsgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApLCAuLi50aWNrZXQgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgZGVsZXRlOiAoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBpID0gdGlja2V0cy5maW5kSW5kZXgoKHQpID0+IHQ/LmlkID09PSBpZCk7XG4gICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZSB0aWNrZXRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIHVwZGF0ZU9uZTogKGlkOiBudW1iZXIsIHVwZGF0ZTogVXBkYXRlVGlja2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IGkgPSB0aWNrZXRzLmZpbmRJbmRleCgodCkgPT4gdD8uaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCB3YXMgZm91bmQsIGl0J3Mgbm90IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICh0aWNrZXRzW2ldIGFzIFRpY2tldClba2V5XSA9IHVwZGF0ZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbiIsICJpbXBvcnQgdHlwZSB7IE1heWJlIH0gZnJvbSBcImdyYXBocWwvanN1dGlscy9NYXliZVwiO1xuXG5leHBvcnQgdHlwZSBUaWNrZXQgPSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWdlOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgdGlja2V0czogQXJyYXk8TWF5YmU8VGlja2V0Pj4gPSBbXTtcbmV4cG9ydCB7IHRpY2tldHNRdWVyeSB9IGZyb20gXCIuL3RpY2tldHNRdWVyeVwiO1xuZXhwb3J0IHsgdGlja2V0c011dGF0aW9uIH0gZnJvbSBcIi4vdGlja2V0c011dGF0aW9uXCI7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUEsU0FBUyxXQUFpQzs7O0FDRW5DLElBQU0sZUFBZTtBQUFBLEVBQ3hCLFNBQVMsTUFBTTtBQUFBLEVBQ2YsVUFBVSxDQUFDLE9BQWU7QUFDdEIsVUFBTSxJQUFJLFFBQVEsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQUU7QUFDL0MsUUFBSSxNQUFNLElBQUk7QUFDVixhQUFPLFFBQVEsQ0FBQztBQUFBLElBQ3BCO0FBQUEsRUFDSjtBQUNKOzs7QUNMTyxJQUFNLGtCQUFrQjtBQUFBLEVBQzNCLFFBQVEsQ0FBQyxXQUF5QjtBQUM5QixZQUFRLEtBQUssRUFBRSxJQUFJLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxHQUFJLEdBQUcsR0FBRyxPQUFPLENBQUM7QUFDaEUsV0FBTztBQUFBLEVBQ1g7QUFBQSxFQUNBLFFBQVEsQ0FBQyxPQUFlO0FBQ3BCLFVBQU0sSUFBSSxRQUFRLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFO0FBQy9DLFFBQUksTUFBTSxJQUFJO0FBQ1YsYUFBTyxPQUFPLFFBQVEsQ0FBQztBQUFBLElBQzNCO0FBQ0EsV0FBTztBQUFBLEVBQ1g7QUFBQSxFQUNBLFdBQVcsQ0FBQyxJQUFZLFdBQXlCO0FBQzdDLFVBQU0sSUFBSSxRQUFRLFVBQVUsQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFO0FBQy9DLFFBQUksTUFBTSxJQUFJO0FBQ1YsaUJBQVcsT0FBTyxRQUFRO0FBRXRCLFFBQUMsUUFBUSxDQUFDLEVBQWEsR0FBRyxJQUFJLE9BQU8sR0FBRztBQUFBLE1BQzVDO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNKO0FBQ0o7OztBQ25CTyxJQUFNLFVBQWdDLENBQUM7OztBSDZCeEMsU0FBUSxXQUFXLDhCQUE2QjtBQWpDL0MsSUFBTSxVQUFVO0FBQUEsRUFDbkIsT0FBTztBQUFBO0FBQUEsSUFFSCxPQUFPO0FBQUE7QUFBQSxJQUdQLFNBQVMsQ0FBQyxRQUFrQjtBQUFBO0FBQUEsSUFHNUIsY0FBYyxDQUFDLFFBQThCO0FBQUE7QUFBQSxJQUc3QyxTQUFTLENBQUMsS0FBVSxPQUFjLFVBQWdCO0FBQUEsTUFDOUMsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBO0FBQUEsTUFFUCxTQUFTLE1BQU07QUFDWCxnQkFBUSxJQUFJLHVCQUF1QjtBQUNuQyxlQUFPO0FBQUEsTUFDWDtBQUFBLElBQ0o7QUFBQSxJQUVBLFNBQVM7QUFBQSxFQUNiO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDYjtBQUNKO0FBRUEsSUFBTyxjQUFRO0FBSVQsSUFBSSx3QkFBd0I7QUFFNUIsSUFBSTtBQUNGLDBCQUF3QjtBQUMxQixRQUFRO0FBRVI7QUFFQSxJQUFJLElBQUksdUJBQXVCO0FBQUEsRUFDN0IsVUFBVTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFdBQVcsQ0FBQztBQUFBLEVBQ1osUUFBUTtBQUNWLENBQUMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
