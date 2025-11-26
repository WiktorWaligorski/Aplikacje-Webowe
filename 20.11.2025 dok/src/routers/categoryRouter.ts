import express from 'express'
import { prisma } from '../../lib/prisma'

const categoryRouter = express.Router()

categoryRouter.post('/new', async (req, res) => {
    const { name } = req.body

    const created = await prisma.category.create({
        data: { name }
    })

    res.status(200).json(created)
})

categoryRouter.get('/read', async (req, res) => {
    const { id } = req.body

    const found = await prisma.category.findUnique({
        where: { id }
    })

    res.status(200).json(found)
})

categoryRouter.get('/readAll', async (req, res) => {
    const list = await prisma.category.findMany()
    res.status(200).json(list)
})

categoryRouter.put('/update', async (req, res) => {
    const { id, name } = req.body

    try {
        const exists = await prisma.category.findUnique({ where: { id } })
        if (!exists) throw new Error("Category doesn't exist")

        const updated = await prisma.category.update({
            where: { id },
            data: { name }
        })

        res.status(200).json(updated)
    } catch (e) {
        res.status(404).json({ error: e })
    }
})

categoryRouter.delete('/delete', async (req, res) => {
    const { id } = req.body

    try {
        const exists = await prisma.category.findUnique({ where: { id } })
        if (!exists) throw new Error("Category doesn't exist")

        const removed = await prisma.category.delete({
            where: { id }
        })

        res.status(200).json(removed)
    } catch (e) {
        res.status(404).json({ error: e })
    }
})

export { categoryRouter }
