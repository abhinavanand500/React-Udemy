import React from "react";
import { NavLink } from "react-router-dom";
import LinksForApp from "../component/LinksForApp";
const Template = ({ h1Value, brand, h2Value, imgsrc, btname, visit, page }) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>
                                        {h1Value}{" "}
                                        <strong className='brand-name'>
                                            {brand}
                                        </strong>
                                    </h1>
                                    <h2 className='my-3'>{h2Value}</h2>
                                    {page === "home" ? <LinksForApp /> : null}
                                    <div className='my-3 mb-3'>
                                        <NavLink
                                            to={visit}
                                            exact
                                            className='btn btn-get-started'>
                                            {btname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img
                                        src={imgsrc}
                                        className='img-fluid animated'
                                        alt='Found'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Template;
