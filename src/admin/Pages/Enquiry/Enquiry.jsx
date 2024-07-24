import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const AllEnquiry = () => {
    const [enquiry, setEnquiry] = useState([]);


    const handleFetch = async () => {
        console.log("hey");
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-all-enquiry`);
            const reverseData = res.data.data
            const main = reverseData.reverse()
            setEnquiry(main)
            // console.log(enquiry)
        } catch (error) {
            console.error('There was an error fetching the Enquiries!', error);
        }
    }

    useEffect(() => {
        handleFetch();
    }, []);
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete-enquiry/${id}`);
                    console.log(res.data);
                    toast.success("Enquiry Deleted");
                    handleFetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Enquiry has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error(error);
                    toast.error(error.response.data.message);
                }
            }
        });
    };
    return (
        <>
            <ToastContainer />
            <section className="breadCmb">
                <div>
                    <h2>All Enquiry</h2>
                    <ul>
                        <li><Link to="/admin/dashboard">Home / </Link></li>
                        <li>All Enquiry</li>
                    </ul>
                </div>
                <div className="btn1">

                </div>
            </section>

            <section className="tables">
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email Id</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Enquiry At</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enquiry.map((enq, index) => (
                                    <tr key={enq._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{enq.firstName}</td>
                                        <td>{enq.email_id}</td>
                                        <td>{enq.address}</td>
                                        <td>
                                            {isNaN(Date.parse(enq.createdAt)) ? 'Invalid date' : format(new Date(enq.createdAt), 'dd MMMM yyyy, HH:mm')}
                                        </td>
                                        <td className='upd-btns'><button onClick={()=>{handleDelete(enq._id)}} className='upd-btns delete'><i className="fa-solid fa-trash-arrow-up"></i></button></td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllEnquiry