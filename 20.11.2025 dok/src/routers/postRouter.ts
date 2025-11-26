import express from 'express'
import { prisma } from '../../lib/prisma'

const postRouter = express.Router()

postRouter.post('/newPost', async (req, res) => {
    const { categoryId, content, title } = req.body

    try {
        const exists = await prisma.category.findUnique({ where: { id: categoryId } })
        if (!exists) throw new Error("Category does not exist")

        const created = await prisma.post.create({
            data: { title, content, categoryId }
        })

        res.status(200).json(created)
    } catch (e) {
        res.status(404).json({ error: e })
    }
})

postRouter.get('/read', async (req, res) => {
    const { id } = req.body

    const result = await prisma.post.findUnique({
        where: { id }
    })

    res.status(200).json(result)
})

postRouter.get('/readAll', async (req, res) => {
    const list = await prisma.post.findMany()
    res.status(200).json(list)
})

postRouter.put('/update', async (req, res) => {
    const { id, title, content, categoryId } = req.body

    try {
        const exists = await prisma.post.findUnique({ where: { id } })
        if (!exists) throw new Error("Post does not exist")

        const updated = await prisma.post.update({
            where: { id },
            data: { title, content, categoryId }
        })

        res.status(200).json(updated)
    } catch (e) {
        res.status(404).json({ error: e })
    }
})

postRouter.delete('/delete', async (req, res) => {
    const { id } = req.body

    try {
        const exists = await prisma.post.findUnique({ where: { id } })
        if (!exists) throw new Error("Post does not exist")

        const removed = await prisma.post.delete({ where: { id } })
        res.status(200).json(removed)
    } catch (e) {
        res.status(404).json({ error: e })
    }
})

await prisma.$disconnect()

export { postRouter }
