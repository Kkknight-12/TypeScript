// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItem() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem("Knight")
textStorage.addItem("Luffy")
textStorage.removeItem("Knight")
console.log(textStorage.getItem()) // ['Luffy']
