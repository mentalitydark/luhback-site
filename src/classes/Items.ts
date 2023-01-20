import IItems from "@/interfaces/Items"
import Item from "@/types/Item"
import fs from 'fs'

class Items implements IItems {
    private items: Item[] = []

    public constructor() {
        this.items = require('@/data/items.json')
    }

    public getAll() {
        return this.items
    }

    public getItem(idItem: number): Item {
        const [item] = this.items.filter(({id}) => id === idItem)

        if(!item)
            throw new Error("Item not found")

        return item
    }

    public addItem(item: Item): void {
        item.id = this.items.length ? Math.max(...this.items.map(({id}) => id)) + 1 : 1

        this.items.push(item)

        this.saveItems()
    }

    public editItem(item: Item): void {
        const oldItem = this.getItem(item.id)

        Object.assign(oldItem, item)

        this.saveItems()
    }

    public removeItem(idToRemove: number): void {
        this.items = this.items.filter(({id}) => id !== idToRemove)

        this.saveItems()
    }

    private saveItems() {
        fs.writeFileSync("src/data/user.json", JSON.stringify(this.items, null, 4))
    }

}

export default Items