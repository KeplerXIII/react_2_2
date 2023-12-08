import { products } from '../db/store/store'

export function ProductCardList({ style }: { style: string }) {
  const cardContainerStyle =
    style === 'view_list' ? { display: 'table-row' } : { display: 'flex' }
  return (
    <div className={'card-container'} style={cardContainerStyle}>
      {products.map((product, index) => (
        <div className={'ShopCard'} key={index} style={getStyleForCard(style)}>
          <img
            src={product.img}
            alt={product.name}
            style={getImageStyle(style)}
          />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.color}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

function getStyleForCard(style: string) {
  return style === 'view_list'
    ? {
        display: '-webkit-box',
        width: '100%',
        height: '100px'
      }
    : {
        display: 'block'
      }
}

function getImageStyle(style: string) {
  return style === 'view_list'
    ? {
        width: '100%',
        height: '100%'
      }
    : {
        height: '50%',
        width: '50%'
      }
}
