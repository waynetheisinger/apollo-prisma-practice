
const { prisma } = require("../db");

const Mutation = {
    createItem: (parent, args, context, info) => {
      return prisma.item.create({
        data: {
          ...args
        }
      });
    },
    createDraft: (parent, args, context, info) => {
      return prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
        },
      })
    },
    publish: (parent, args, context, info) => {
      return prisma.post.update({
        where: {
          id: Number(args.id),
        },
        data: {
          published: true,
        },
      })
    },
  };
module.exports = {Mutation};