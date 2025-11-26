import express from 'express'
import type {Express} from 'express';
import { postRouter } from './routers/postRouter'
import { commentRouter } from "./routers/commentRouter";
import { categoryRouter } from "./routers/categoryRouter";
import { prisma } from "../lib/prisma"
import 'dotenv/config'
const app: Express = express()

async function main() {
    app.use("/post", postRouter)
    app.use("/comment", commentRouter)
    app.use("/category", categoryRouter)

    app.listen(3000, () => {
        console.log('App is running on http://localhost:3000')
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
