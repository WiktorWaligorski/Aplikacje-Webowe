import express from 'express'
import { prisma } from '../../lib/prisma'

const commentRouter = express.Router()

commentRouter.post('/newComment', async (req, res) => {
    const { content, postId } = req.body

    const created = await prisma.comment.create({
        data: { content, postId }
    })

    res.json(created)
})

commentRouter.get('/read', async (req, res) => {
    const { id } = req.body

    const result = await prisma.comment.findUnique({
        where: { id }
    })

    res.json(result)
})

commentRouter.get('/readAll', async (req, res) => {
    const list = await prisma.comment.findMany()
    res.json(list)
})

commentRouter.put('/update', async (req, res) => {
    const { id, content } = req.body

    try {
        const exists = await prisma.comment.findUnique({ where: { id } })
        if (!exists) throw new Error("Post doesn't exist")

        const updated = await prisma.comment.update({
            where: { id },
            data: { content }
        })

        res.status(200).json(updated)
    } catch (e) {
        res.status(404).json({ error: e })
    }
})

commentRouter.delete('/delete', async (req, res) => {
    const { id } = req.body

    try {
        const removed = await prisma.comment.delete({
            where: { id }
        })

        res.json(removed)
    } catch (e) {
        res.status(404).json({ error: e })
    }
})

export { commentRouter }
