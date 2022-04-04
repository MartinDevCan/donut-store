function Donuts({itemsForSale}) {
    
    return(<div className="products">
        {itemsForSale.map((element => {
            const {id, name, price, description,image} = element;
            return(
                <div className="product-card info" key={id}>
                    <img className="donutImage" src={image} width="350px" height="250px" alt="donut"/>
                    <div className="info">
                        <h3>{name}</h3>
                        <h4 className="donutDescription">{description}</h4>
                        <h4>$ {price}</h4>
                    </div>
                </div>
            )
        })) }
    </div>)
}

export default Donuts;