import { PrismaClient } from "@prisma/client";

// instance for prisma/client
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], //use for development for better error logging
});

// shotdown handling prevent db from hanging
process.on('beforeExit', async () => {
    await prisma.$disconnect();
});
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});

export default prisma;