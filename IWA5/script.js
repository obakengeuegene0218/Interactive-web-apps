 const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;
let locationCurrent = 'RSA';
let currency = 'R';
let customers = 1;
let shipping;
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;
if (locationCurrent=== 'RSA') {
  shipping = 400;
} else if (locationCurrent === 'NAM') {
  shipping = 600;
} else if (locationCurrent === 'NK') {
  console.log(BANNED_WARNING);
} else {
  shipping = 800;
}
const subtotal = shoes + toys + shirts + batteries + pens;
if ((subtotal >= 1000) && (locationCurrent === 'RSA' || locationCurrent=== 'NAM') && (customers === 1)) {
  shipping = 0;
} else if (shipping === undefined) {
  console.log(BANNED_WARNING);
} else if ((shipping === 0) && (customers !== 1)) {
  console.log(FREE_WARNING);
}
const total = subtotal + shipping;
console.log('Price:', currency, total);