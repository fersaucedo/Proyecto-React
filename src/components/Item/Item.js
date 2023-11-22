import "./Item.css"


const Item = ({ id, name, img, price, stock }) => {

    return (

        <div className="card card-item">

            <img src={img} className="card-img-top" alt={name} />

            <div className="card-body card-item-body">

                <h5 className="card-title">{name}</h5>

                <h6 className="card-subtitle mb-2 text-body-secondary">${price}</h6>

                <h6 className="card-subtitle mb-2 text-body-secondary">Stock disponible: {stock}</h6>

                <button className="btn btn-primary">Ver detalles</button>

            </div>
        </div>


    )
}

export default Item




