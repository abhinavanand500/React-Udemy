import React from "react";

const Contact = () => {
    const action = event => {
        event.preventDefault();
        alert("Done");
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <div className="mb-3">
                            <label
                                for="exampleFormControlInput1"
                                className="form-label"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleFormControlInput2"
                                className="form-label"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput2"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleFormControlInput3"
                                className="form-label"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput3"
                                placeholder="+918095509320"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleFormControlInput4"
                                className="form-label"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput4"
                                placeholder="Enter your address"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleFormControlTextarea1"
                                className="form-label"
                            >
                                Enter your query
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>
                        </div>
                        <hr />
                        <button
                            type="button"
                            className="btn btn-outline-success text-center"
                            onClick={action}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
