import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

  console.log('Propiedades del producto:', { id, name, img, category, description, price, stock });
  return (


    <div className="card mb-3 card-detail">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">${price}</h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">Stock disponible: {stock}</h6>
            <p className="card-text">{description}</p>
            <div className="card-footer">
              <ItemCount inicio={1} stock={stock} onAdd={(cantidad) => console.log('cantidad agregada ', cantidad)} />
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ItemDetail