import React from "react";
const Card = (props) => {
    console.log(props);
    return (
        <div className='col-md-4 col-12 mx-auto'>
            <div className='card mt-3'>
                <img
                    src={props.imgsrc}
                    className='card-img-top'
                    style={{ maxHeight: "210px", minHeight: "210px" }}
                    alt='...'
                />
                <div className='card-body'>
                    <h5
                        className='card-title font-weight-bold'
                        style={{ color: "#3D856D" }}>
                        {props.title}
                    </h5>
                    <p className='card-text'>{props.content}</p>
                    <div className='row'>
                        {props.plink ? (
                            <div className='col-6 mt-1'>
                                <a
                                    href={props.plink}
                                    className='btn btn-primary'>
                                    Visit Website
                                </a>
                            </div>
                        ) : null}
                        <div className='col-6 mt-1'>
                            <a href={props.glink} className='btn btn-primary'>
                                Get Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;
