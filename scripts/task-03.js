"use ctrict";

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const ind = this.items.indexOf(item);
    if (ind !== -1) {
      this.items.splice(ind, 1);
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
