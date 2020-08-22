import React from 'react';
import Card from './needed/Card';
import Sdata from './needed/Sdata';

const Service = () => {
    const printdata = Sdata.map((val, ind) => {
        return <Card imgsrc={val.imgsrc} title={val.title} key={ind} />
    })
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {printdata}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;