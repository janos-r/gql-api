import { type Ticket, tickets } from ".";

type CreateTicket = Pick<Ticket, "name" | "age">;
type UpdateTicket = Partial<Ticket>;

export const ticketsMutation = {
    addOne: (ticket: CreateTicket) => {
        tickets.push({ id: Math.floor(Math.random() * 1000), ...ticket });
        return true;
    },
    delete: (id: number) => {
        const i = tickets.findIndex((t) => t?.id === id);
        if (i !== -1) {
            return delete tickets[i];
        }
        return false;
    },
    updateOne: (id: number, update: UpdateTicket) => {
        const i = tickets.findIndex((t) => t?.id === id);
        if (i !== -1) {
            for (const key in update) {
                // if it was found, it's not undefined
                (tickets[i] as Ticket)[key] = update[key];
            }
            return true;
        }
    },
};
