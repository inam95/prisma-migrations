// import { PrismaClient } from "../generated/prisma";

// const prisma = new PrismaClient();

// async function main() {
//   // Clear existing data
//   await prisma.user.deleteMany({});

//   // Create seed users
//   const users = await Promise.all([
//     prisma.user.create({
//       data: {
//         email: "user1@example.com",
//       },
//     }),
//     prisma.user.create({
//       data: {
//         email: "user2@example.com",
//       },
//     }),
//     prisma.user.create({
//       data: {
//         email: "user3@example.com",
//       },
//     }),
//   ]);

//   console.log("Seeded users:", users);
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
