import { products} from '../db/store/store'

export function CardRender ({ style }: {style:string}) {

    return (
        <div 
            className={'card-container'}
            style={style==='view_list' ? {display:'table-row'} : {display: 'flex'}}
            >
        {products.map((product, index) => (
            <div className={'ShopCard '} key={index} style={style==='view_list' ? {
                display:'-webkit-box',
                width: '100%',
                height: '100px'
                } : {display: 'block'}}>
            <img src={product.img} alt={product.name} style={style==='view_list' ? {
                width:'100%',
                height: '100%'} : {
                height: '50%',
                width:'50%'
                }} />
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
