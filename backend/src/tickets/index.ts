import type { Maybe } from "graphql/jsutils/Maybe";

export type Ticket = {
    id: number;
    name: string;
    age: number;
};

export const tickets: Array<Maybe<Ticket>> = [];
export { ticketsQuery } from "./ticketsQuery";
export { ticketsMutation } from "./ticketsMutation";
