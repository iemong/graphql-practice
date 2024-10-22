import {PrismaClient} from '@prisma/client'
import {createSchema, createYoga} from 'graphql-yoga'
import schema from './schema.graphql'

const prisma = new PrismaClient()

// PrismaClientはシングルトンとして再利用
if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.prisma = prisma
}


const {handleRequest} = createYoga({
    schema: createSchema({
        typeDefs: schema,
        resolvers: {
            Query: {
            }
        }
    }),
    graphqlEndpoint: '/api/graphql',
    fetchAPI: {Response}
})

export {handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS}
