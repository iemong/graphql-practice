import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export type GraphQLContext = {
    prisma: PrismaClient
}

export const context: GraphQLContext = {
    prisma: prisma,
}
