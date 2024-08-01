// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// async function insertUser(username: string , password: string , firstName: string , lastName: string ){
//     const res = await prisma.user.create({
//         data: {
//             email: username,
//             password,
//             firstName,
//             lastName
//         },
//         select: {
//             id: true,
//             password: true
//         }
//     })
//     console.log(res);
// }

// insertUser("test1", "test", "test", "test")

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
 const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName
    }
  })
  console.log(res);
  
}

updateUser("test1", { firstName: "test", lastName: "test" })