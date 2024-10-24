import { schema } from '@/server/schema'
import {createYoga} from 'graphql-yoga'
import {context} from "@/server/context";

const {handleRequest} = createYoga({
    schema,
    context,
    graphqlEndpoint: '/api/graphql',
    fetchAPI: {Response}
})

export {handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS}
