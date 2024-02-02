/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, ResponseToolkit, Server } from '@hapi/hapi'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const init = async () => {
  const server: Server = new Server({
    port: 3000,
    host: 'localhost',
  })

  /* list */
  server.route({
    method: 'GET',
    path: '/tasks',
    handler: async (request: Request, h: ResponseToolkit) => {
      return await prisma.task.findMany()
    },
  })

  /* view */
  server.route({
    method: 'GET',
    path: '/tasks/{id}',
    handler: async (request: Request, h: ResponseToolkit) => {
      return await prisma.task.findUnique({
        where: { id: Number(request.params.id) },
      })
    },
  })

  /* delete */
  server.route({
    method: 'DELETE',
    path: '/tasks/{id}',
    handler: async (request: Request, h: ResponseToolkit) => {
      return await prisma.task.delete({
        where: { id: Number(request.params.id) },
      })
    },
  })

  /* create */
  server.route({
    method: ['POST'],
    path: '/tasks',
    handler: async (request: Request, h: ResponseToolkit) => {
      // TO-DO
      throw new Error('Not implemented')
    },
  })

  /* update */
  server.route({
    method: ['PUT', 'PATCH'],
    path: '/tasks/{id}',
    handler: async (request: Request, h: ResponseToolkit) => {
      // TO-DO
      throw new Error('Not implemented')
    },
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
