function getInvoice(name, items) {
  const customerName = name
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
  console.log("The customer name", customerName);

  let subTotal = items.reduce((total, items) => {
    return total + items.price * items.qty;
  }, 0);

  //7.5%VAT
  let vat = subTotal * 0.075;
  let totals = vat + subTotal;

  //generate random inovice number
  let invNum = "INV " + (Math.floor(Math.random() * 90000) + 10000);
  console.log(invNum);
  items.forEach((item, index) => {
    let itemTotal = item.price * item.qty;
    console.log(`${index + 1}. #${item.price}*${item.qty} =#${itemTotal}`);
  });

  console.log("\nSubtotal: NGN" + subTotal.toFixed(2));
  console.log("VAT (7.5%): NGN " + vat.toFixed(2));
  console.log("Total: NGN " + vat.toFixed(2));
}
getInvoice("  chiamaka eze  ", [
  { price: 5000, qty: 2 },
  { price: 3000, qty: 1 },
]);
