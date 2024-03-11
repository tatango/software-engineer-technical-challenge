import { faker } from '@faker-js/faker'
import { PrismaClient, Task } from '@prisma/client'

const prisma = new PrismaClient()

const tasks: Omit<Task, 'id'>[] = Array(5)
  .fill({})
  .map(() => ({
    title: faker.lorem.sentence(3),
    completed: false,
  }))

async function main() {
  for (const task of tasks) {
    await prisma.task.upsert({
      where: { title: task.title },
      update: {},
      create: { ...task },
    })
  }

  console.log({ tasks })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
