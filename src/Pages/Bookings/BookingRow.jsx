

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, dueAmount, email, img, service, date } = booking;


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24 rounded-lg">
                        <img src={img} alt="service" />
                    </div>
                </div>

            </td>
            <td>
                {service}
            </td>

            <td>
                {email}
            </td>
            <td>
                ${dueAmount}
            </td>
            <td>
                {date}
            </td>
            <th>
                <button onClick={() =>handleBookingConfirm(_id)} className="btn btn-primary">Confirm</button>
            </th>
        </tr>
    );
};

export default BookingRow;