const { prisma } = require("../db");

const Query = {
    items: (parent, args, context, info) => {
        return prisma.item.findMany();
    },
    feed: (parent, args) => {
    return prisma.post.findMany({
        where: { published: true },
    })
    },
    post: (parent, args) => {
    return prisma.post.findOne({
        where: { id: Number(args.id) },
    })
    },
};
module.exports = {Query};