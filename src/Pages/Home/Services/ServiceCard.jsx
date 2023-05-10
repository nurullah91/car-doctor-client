/* eslint-disable react/prop-types */


const ServiceCard = ({service}) => {
    const {img, title, price} = service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="service" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="text-xl font-bold text-orange-600">Price: ${price}</p> 
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;