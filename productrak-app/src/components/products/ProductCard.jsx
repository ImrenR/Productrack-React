

const ProductCard = ({price, title, image }) => {

  return (
    <div className="card" >
     <div className="price"  >
      <h3>{price}$</h3>
      </div>
      <img src={image} alt="{title}" className="img" />
      <div className="card-over">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default ProductCard