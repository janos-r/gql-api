import { app, type Float, type Int } from "@getcronit/pylon";
import type { Maybe } from "graphql/jsutils/Maybe";
import { ticketsQuery, ticketsMutation } from "./tickets";

export const graphql = {
    Query: {
        /** simple */
        hello: "World",

        /** mandatory by default */
        echoArr: (arr: string[]) => arr,

        /** explicit optionals */
        echoArrEmpty: (arr: Array<Maybe<string>>) => arr,

        /** validated types */
        echoObj: (int: Int, float: Float, date: Date) => ({
            name: "Gandalf",
            age: int,
            height: float,
            birth: date,
            /** logged only when called */
            address: () => {
                console.log("LONG RUNNING FUNCTION");
                return "Dublin";
            },
        }),

        tickets: ticketsQuery,
    },
    Mutation: {
        tickets: ticketsMutation,
    },
};

export default app;
