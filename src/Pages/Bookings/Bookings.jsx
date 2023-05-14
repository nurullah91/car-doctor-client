import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `https://car-doctor-server-nurllah91.vercel.app/bookings?email=${user.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {

                if(!data.error){
                    setBookings(data);

                }
                else{
                    // logout and then redirect 
                    navigate('/')
                }

            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://car-doctor-server-nurllah91.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                        }
                    })
            }
        })
    }


    const handleBookingConfirm = id =>{
        fetch(`https://car-doctor-server-nurllah91.vercel.app/bookings/${id}`,{
            method:'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0) {
                // update status
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking =>booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings);
            }
        })


    }


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>Action</th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Email</th>
                        <th>Due Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default Bookings;