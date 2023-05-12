import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {

    const {user} = useContext(AuthContext)
    const service = useLoaderData();
    const { _id, title,price, img } = service;


    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;

        const booking ={
            customerName: name,
            img,
            email,
            date,
            service: title,
            serviceId: _id,
            dueAmount: price
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Your service is booked',
                    'success'
                  )
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-orange-500 text-center">Book a service : {title} </h2>

            <div className="card-body">
                <form onSubmit={handleBooking}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" required className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name="email" defaultValue={user?.email} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="due" defaultValue={'$'+price} className="input input-bordered"  required/>
                        </div>


                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;