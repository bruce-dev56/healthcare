import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    errorFormat: 'minimal',
    // log: [
    //     { emit: 'event', level: 'query' },
    //     { emit: 'event', level: 'info' },
    //     { emit: 'event', level: 'warn' },
    //     { emit: 'event', level: 'error' }
    // ]
});

// prisma.$on('query', (e) => {
//     console.log('Query: ' + e.query);
//     console.log('Params: ' + e.params);
//     console.log('Duration: ' + e.duration + 'ms')
// });

// prisma.$on('error', (e) => {
//     console.error('Error occurred:', e);
// });

export default prisma;