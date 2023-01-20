import { Type as ItemType } from "@/enums"

type Base = {
    id: number
    text: string
}

export type ItemRoute = Base & {
    type: ItemType.Route
    route: string
}

export type ItemLink = Base & {
    type: ItemType.Link
    link: string
}

export type ItemList = Base & {
    type: ItemType.List
    children: (ItemLink|ItemList)[]
}

type Item = ItemRoute | ItemLink | ItemList

export default Item