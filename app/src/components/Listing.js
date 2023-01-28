import Item from "./Item"

export default function Listing({items}) {
  const catalog = items.map((item) => {
    return <Item key={item.listing_id} url={item.url} img={item.MainImage.url_570xN}
            title={item.title} currency_code={item.currency_code} price={item.price} quantity={item.quantity}/>
    })

  return (
    <div className="item-list">
      {catalog}
    </div>
  )
}