const cart = [];

function addProduct(product) {
  const { id, name, price, quantity } = product;
  cart.push({ id, name, price, quantity });
}

function removeProduct(id) {
  const index = cart.findIndex(product => product.id === id);
  if (index === -1) {
    throw new Error(`Produsul cu id-ul ${id} nu există în coș.`);
  }
  cart.splice(index, 1);
}

function updateQuantity(id, newQuantity) {
  const product = cart.find(product => product.id === id);
  if (!product) {
    throw new Error(`Produsul cu id-ul ${id} nu există în coș.`);
  }
  product.quantity = newQuantity;
}

function calculateTotal() {
  return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
}

// --- exemple de utilizare ---
addProduct({ id: 1, name: 'Laptop', price: 3500, quantity: 1 });
addProduct({ id: 2, name: 'Mouse', price: 80, quantity: 2 });
addProduct({ id: 3, name: 'Tastatură', price: 150, quantity: 1 });

console.log('Coș:', cart);
console.log('Total:', calculateTotal());

updateQuantity(2, 3);
console.log('Coș după actualizarea cantității:', cart);
console.log('Total actualizat:', calculateTotal());

try {
  removeProduct(99); // produs inexistent -> aruncă eroare
} catch (error) {
  console.log('Eroare:', error.message);
}

removeProduct(1);
console.log('Coș după ștergere:', cart);

export { addProduct, removeProduct, updateQuantity, calculateTotal, cart };
