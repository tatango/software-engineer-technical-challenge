import { PrismaClient, Task } from '@prisma/client'

const prisma = new PrismaClient()

const tasks: Omit<Task, 'id'>[] = [
  {
    title: 'Implement the update task endpoint',
    completed: false,
  },
  {
    title: 'Persist the changes to the database',
    completed: false,
  },
  {
    title: 'Implement the create task endpoint',
    completed: false,
  },

  {
    title: 'Implement the new task feature',
    completed: false,
  },
  {
    title: 'How to guarantee that data is an array of Task?',
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
