class ShoppingList {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  displayItems() {
    this.items.forEach((item, index) => {
      console.log(`${index+1}. ${item}`)
    })
  }

  removeItem(item) {
    // Find index of item
    let index = this.items.indexOf(item);
    // Delete that item if its index > -1
    if (index>-1) this.items.splice(index, 1)
  }

  sortItems() {
    // Sort items alphabetically
    this.items.sort()
  }
}

list = new ShoppingList
list.addItem('Milk')
list.addItem('Orange juice')
list.addItem('Cheese')
list.addItem('Peanuts')
list.addItem('Half a dozen onions')

list.displayItems()

/*

Challenges:
1. Add a `removeItem(item)` method
2. Add a `sortItems()` method to sort alphabetically

*/

list.addItem('Peanut Butter')
list.displayItems()
list.removeItem('Peanut Butter')
list.displayItems()
list.sortItems()
list.displayItems()