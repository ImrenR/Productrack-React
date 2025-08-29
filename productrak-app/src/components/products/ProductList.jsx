

const ProductList = ({products})=> {
  // console.log(props.products) //! we can go into the array withthis
  
  const {title,price, image,id } = products
  
  return (
<div>
  {
    products.map((item)=> {
      return (
        <div>
              {item.id}
              <div>{item.title}</div>
               <img src={item.image}/>
          
        </div>
      )
    })
  }
</div>
  )
}


export default ProductList