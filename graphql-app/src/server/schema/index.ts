import {createSchema} from "graphql-yoga";
import schemaTypeDefs from "@/server/schema/schema.graphql";
import { GraphQLContext } from "../context";

export const schema = createSchema({
    typeDefs: schemaTypeDefs,
    resolvers: {
        Query: {
            posts: async (_parent, _args, ctx: GraphQLContext) => {
                return ctx.prisma.post.findMany();
            }
        }
    }
})
