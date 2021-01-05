import { ApolloServer } from 'apollo-server'
import { InitDB } from './connectors/mongodb/connector'
import { generateSchema } from './utils/schema-generator'

InitDB()
const schema = generateSchema()
const apolloServer = new ApolloServer({ schema: schema })
const port = process.env.PORT || 4000
apolloServer.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})
