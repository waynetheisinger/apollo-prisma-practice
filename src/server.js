const { ApolloServer } = require('apollo-server')
const { resolvers, typeDefs } = require('./schema')

const port = process.env.PORT || 8080

const cors = {
    origin: 'http://localhost:7777',
    credentials: true
}

new ApolloServer({ 
    resolvers, 
    typeDefs,
    cors
}).listen({ port }, () => console.log(`Server ready at: http://localhost:${port}`),)
