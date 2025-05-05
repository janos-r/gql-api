import { tickets } from ".";

export const ticketsQuery = {
    findAll: () => tickets,
    findById: (id: number) => {
        const i = tickets.findIndex((t) => t?.id === id);
        if (i !== -1) {
            return tickets[i];
        }
    },
};
