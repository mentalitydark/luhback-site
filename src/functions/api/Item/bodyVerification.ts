import Exception from "@/classes/Exception"
import Item from "@/types/Item"
import { Type as ItemType } from '@/enums'

function objectVerification(object: any, item: Item) {
    for (const [key, value] of Object.entries(item)) {
        if(Object.hasOwn(object, key))
            if(typeof value === object[key])
                continue
            else
                throw new Exception(`Key [${key}] has type incorrect.`)
        else
            throw new Exception(`Key [${key}] not requested.`)
    }

    for(const [key, _] of Object.entries(object)) {
        if(!Object.hasOwn(item, key))
            throw new Exception(`Key [${key}] requested.`)
    }
}

export function bodyVerification(item: Item, extraData = {}) {
    const object: any = {
        text: "string",
        type: "string",
        ...extraData
    }

    switch(item.type) {
        case ItemType.Link:
            object.link = "string"
            objectVerification(object, item)
            break
        case ItemType.Route:
            object.route = "string"

            objectVerification(object, item)
            break
        case ItemType.List:
            object.list = "object"

            objectVerification(object, item)
            break
        default:
            throw new Exception("Item type unknown.")
    }
}