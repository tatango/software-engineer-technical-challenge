import { faker } from '@faker-js/faker'
import { PrismaClient, Task } from '@prisma/client'

const prisma = new PrismaClient()
const N = 10

async function main() {
  const tasks = createTasks(N)
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

function createTasks(N): Omit<Task, 'id'>[] {
  return Array.from({ length: N }, () => ({
    title: faker.lorem.words(3),
    completed: faker.datatype.boolean(),
  }))
}
