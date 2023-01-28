
import PropTypes from 'prop-types';
import ItemPrice from './ItemPrice';
import ItemQuantity from './ItemQuantity';

export default function Item({url, img, title, currency_code, price, quantity}) {
  
  let parsedTitle = title;

  if (parsedTitle && parsedTitle.length > 50) {
    parsedTitle = parsedTitle.slice(50, parsedTitle.length - 1) + '...';
  };

  const itemPrice = <ItemPrice currency_code={currency_code} price={price}/>
  const itemQuantity = <ItemQuantity quantity={quantity}/>

  return (
    <div className="item">
      <a href={url}>
        <img className="item-image" src={img}></img>
      </a>
      <div className="item-details">
        <p className="item-title">{parsedTitle}</p>
        {itemPrice}
        {itemQuantity}
      </div>
    </div>
  )
}

Item.propTypes = {
  url: PropTypes.string, 
  img: PropTypes.string,
  title: PropTypes.string, 
  currency_code: PropTypes.string, 
  price: PropTypes.string, 
  quantity: PropTypes.number,
}
