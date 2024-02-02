import { PrismaClient, Task } from '@prisma/client'

const prisma = new PrismaClient()

const tasks: Omit<Task, 'id'>[] = [
  {
    title: '[api] Implement the update route',
    completed: false,
  },
  {
    title: '[ui] Persist the changes to the backend',
    completed: false,
  },
  {
    title: '[api] Implement the create route',
    completed: false,
  },

  {
    title: '[ui] Implement the new task feature',
    completed: false,
  },
  {
    title: '[ui] Implement the delete feature',
    completed: false,
  },
  {
    title: '[ui] This request is running twice. How to fix that?',
    completed: false,
  },
  {
    title: '[ui] How to guarantee that data is an array of Task?',
    completed: false,
  },
]

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
