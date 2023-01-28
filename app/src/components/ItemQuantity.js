export default function ItemQuantity({quantity}) {

let currentLevel = 'level-low';

switch (true) {
  case (quantity <= 10):
    currentLevel = 'level-low';
    break;
  case (quantity <= 20):
    currentLevel = 'level-medium';
    break;
  case (quantity > 20):
    currentLevel = 'level-high';
    break;
  default:

}
  return (
    <p className={`item-quantity ${currentLevel}`}>{quantity} left</p>
  )
}