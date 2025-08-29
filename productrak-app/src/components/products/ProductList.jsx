import ProductCard from "./ProductCard"


const ProductList = ({products})=> {
  // console.log(props.products) //! we can go into the array withthis
  
  const {title,price, image,id } = products
  
  return (
<div>
  {
    products.map((products)=> <ProductCard {...products} />)
  }
</div>
  )
}


export default ProductList