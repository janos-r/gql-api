import { app, type Float, type Int } from "@getcronit/pylon";
import type { Maybe } from "graphql/jsutils/Maybe";

export const graphql = {
    Query: {
        // simple
        hello: "World",

        // mandatory by default
        echoArr: (arr: string[]) => arr,

        // explicit optionals
        echoArrEmpty: (arr: Array<Maybe<string>>) => arr,

        // validated types
        echoObj: (i: Int, f: Float, d: Date) => ({
            name: "Gandalf",
            age: i,
            height: f,
            birth: d,
            address: () => {
                // logged only when called
                console.log("LONG RUNNING FUNCTION");
                return "Dublin";
            },
        }),
    },
    Mutation: {},
};

export default app;
