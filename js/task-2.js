'use strict';
class Storage {
	#items;

	constructor(startItems) {
		this.#items = startItems;
	}

	// Публічний метод для отримання поточного товару
	getItems() {
		return this.#items;
	}

	// Публічний метод для додавання товару
	addItem(newItem) {
		this.#items.push(newItem);
	}

	// Публічний метод для видалення вибраного товару
	removeItem(itemToRemove) {
		this.#items = this.#items.filter(item => item !== itemToRemove);
	}
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
