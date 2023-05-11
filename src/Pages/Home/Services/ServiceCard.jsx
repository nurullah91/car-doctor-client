/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="service" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="flex items-center">
                    <p className="text-xl font-bold text-orange-600">Price: ${price}</p>
                    <div className="card-actions">
                        <Link to={`/checkout/${_id}`}> <FaArrowRight className="text-orange-600"></FaArrowRight> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;