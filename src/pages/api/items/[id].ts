import type { NextApiRequest, NextApiResponse } from 'next'

import Exception from '@/classes/Exception'
import Items from '@/classes/Items'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        switch(req.method) {
          case 'GET':
            return methodGet(req, res)
          default:
            throw new Exception("Method not supported.", 400)
        }
    } catch (error: any) {
        if(error instanceof Exception)
            return res.status(error.code).json(error)

        return res.status(500).json({message: error.message})
    }
}

function methodGet(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id as string
    return res.status(200).json((new Items()).getItem(parseInt(id)))
}