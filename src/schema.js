const { gql } = require('apollo-server')
const { Mutation } = require("./resolvers/Mutation");
const { Query } = require("./resolvers/Query");

const typeDefs = gql`
  type Post {
    content: String
    id: ID!
    published: Boolean!
    title: String!
  }

  type Item {
    id: ID!
    title: String!
    description: String!
    image: String
    largeImage: String
    price: Int!
  }

  type Query {
    feed: [Post!]!
    post(id: ID!): Post
    items: [Item]!
  }

  type Mutation {
    createDraft(content: String, title: String!): Post!
    publish(id: ID!): Post
    createItem(title: String, description: String, price: Int, image: String, largeImage: String): Item!
  }
`

const resolvers = {
  Query,
  Mutation,
}

module.exports = {
  resolvers,
  typeDefs,
}
