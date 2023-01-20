import Item from "@/types/Item"

export default interface Items {
    getAll: () => Item[]

    getItem: (id: number) => Item

    addItem: (item: Item) => void

    editItem: (item: Item) => void

    removeItem: (idToRemove: number) => void
}