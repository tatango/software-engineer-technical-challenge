/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, ResponseToolkit, Server } from '@hapi/hapi'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const init = async () => {
  const server: Server = new Server({
    port: 1984,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
    debug: {
      request: ['error'],
    },
  })

  /* list */
  server.route({
    method: 'get',
    path: '/tasks',
    handler: async (request: Request, h: ResponseToolkit) => {
      return await prisma.task.findMany()
    },
  })

  /* delete */
  server.route({
    method: 'delete',
    path: '/tasks/{id}',
    handler: async (request: Request, h: ResponseToolkit) => {
      return await prisma.task.delete({
        where: { id: Number(request.params.id) },
      })
    },
  })

  /* create */
  server.route({
    method: ['post'],
    path: '/tasks',
    handler: async (request: Request, h: ResponseToolkit) => {
      /**
       * TO-DO: Implement the create task endpoint
       *
       * Useful links:
       *
       * - https://hapi.dev/api#path-parameters
       * - https://hapi.dev/api#-requestpayload
       * - https://www.prisma.io/docs/orm/prisma-client/queries/crud#create
       */
      throw new Error('Not implemented')
    },
  })

  /* update */
  server.route({
    method: ['put', 'patch'],
    path: '/tasks/{id}',
    handler: async (request: Request, h: ResponseToolkit) => {
      /**
       * TO-DO: Implement the update task endpoint
       *
       * Useful links:
       *
       * - https://hapi.dev/api#-requestpayload
       * - https://www.prisma.io/docs/orm/prisma-client/queries/crud#update
       */
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
