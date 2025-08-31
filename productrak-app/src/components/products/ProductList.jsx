import ProductCard from "./ProductCard"
import "./Product.scss"

const ProductList = ({products})=> {
  // console.log(props.products) //! we can go into the array withthis
  
  return (
<div className="product-list">
  {
    products.map((products)=> <ProductCard key={products.id} {...products} />)
  }
</div>
  )
}


export default ProductList