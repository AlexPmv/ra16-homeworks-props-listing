export default function ItemPrice({currency_code = 'GBP', price}) {

  let finalPrice = price + ' GBP';
  
  let currencies = [
    {
      code: 'USD',
      symbol: '$'
    },
    {
      code: 'EUR',
      symbol: '€'
    }
  ]

  if (currency_code !== 'GBP') {
    let currency = currencies.find(item => item.code === currency_code);

    if (!currency) {
      return;
    }

    finalPrice = currency.symbol + price;
  }
  
  return (
    <p className="item-price">{finalPrice}</p>
  )
}
