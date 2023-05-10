import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div className="text-center space-y-5 my-10">
                <h4 className="text-2xl text-orange-500 font-bold">Services</h4>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don&apos;t look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {
                    services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;