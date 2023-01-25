import type { NextApiRequest, NextApiResponse } from 'next'

import Exception from '@/classes/Exception'
import Items from '@/classes/Items'
import Item from '@/types/Item'
import { bodyVerification } from '@/functions'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch(req.method) {
            case 'GET':
                return methodGet(req, res)
            case 'POST':
                return methodPost(req, res)
            default:
                throw new Exception("Method not supported.", 405)
        }
    } catch (error: any) {
        if(error instanceof Exception)
            return res.status(error.code).json(error)
        return res.status(500).json({message: error.message})
    }
}

function methodGet(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json((new Items()).getAll())
}

function methodPost(req: NextApiRequest, res: NextApiResponse) {
    try {
        const item = req.body as Item
        bodyVerification(item)

        new Items().addItem(item)
    } catch(error: any) {
        if(error instanceof Exception)
            return res.status(error.code).json(error)

        return res.status(500).json({message: error.message})
    }

    return res.status(201).end()
}
