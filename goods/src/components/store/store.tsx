import { products} from '../db/store/store'

export function CardRender ({ style }: {style:string}) {

    return (
        <div className={'card-container ' + style}>
        {products.map((product, index) => (
            <div className={'ShopCard ' + style} key={index}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.color}</p>
            <button>
                Add to cart
            </button>
            </div>
      ))}
    </div>
    )
}
