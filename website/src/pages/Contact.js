import React, { useState } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from '../apis/axios'
toast.configure();

const submitSuccessfully = async (coll) => {
    console.log(JSON.stringify(coll))
    const response = await axios.post("contact/postquery",{
        params : coll,
    });
    
    console.log(response.data)
    const status = response.data.status
    if(status=='success'){
    toast.success(
        "Hey your message is sent Successfully. Thankyou for visiting this website.",
    );}
    else if(status =='error'){
        toast.error(
            "Hey your message is sent Successfully. Thankyou for visiting this website.",
        );
    }
};



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [query, setQuery] = useState("");
    const resetAllField = () => {
        setName("");
        setEmail("");
        setPhone("");
        setQuery("");
};

    const action = (event) => {
        event.preventDefault();
        const coll = { name: name, email: email, phone: phone, query: query };
        // console.log(coll);
        submitSuccessfully(coll);
        resetAllField();
    };

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Abhinav 😄</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <form onSubmit={action}>
                        <div className='col-md-6 col-10 mx-auto'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleFormControlInput1'
                                    className='form-label'>
                                    Full Name
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleFormControlInput1'
                                    placeholder='Enter your name'
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleFormControlInput2'
                                    className='form-label'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='exampleFormControlInput2'
                                    placeholder='name@example.com'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleFormControlInput3'
                                    className='form-label'>
                                    Phone Number
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='exampleFormControlInput3'
                                    placeholder='+91XXXXXXXXX'
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </div>

                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleFormControlTextarea1'
                                    className='form-label'>
                                    Enter your query
                                </label>
                                <textarea
                                    className='form-control'
                                    id='exampleFormControlTextarea1'
                                    rows='3'
                                    onChange={(e) => setQuery(e.target.value)}
                                    value={query}></textarea>
                            </div>
                            <hr />
                            <button
                                type='submit'
                                className='btn btn-outline-success text-center'
                                // onClick={action}>
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
