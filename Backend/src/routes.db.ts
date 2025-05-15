import express from 'express'
import type { Request, Response } from 'express'
import { Router } from 'express'

import db from './db'

import type {note} from './types/ObjectTypes' 

const router = Router()

router.get('/getNotes', async (req:Request, res:Response) => {

    const query = await db.query('SELECT * FROM Notes')
    const reponse:note[] = query.rows

    res.json(reponse)
})

router.post('/createNote', async (req:Request, res:Response) => {
    const {author,content}:note = req.body

    const query = await db.query('INSERT INTO Notes (Author,Content) VALUES ($1,$2)',[author,content])
    const reponse:note[] = query.rows

    res.json(reponse)
})


export default router