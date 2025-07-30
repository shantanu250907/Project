import { Button } from 'react-bootstrap';
import './Search.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Search = () => {
    const [selectedBHK, setSelectedBHK] = useState('');
    const handleSelect = (type) => {
        setSelectedBHK(type);
    };

    const propertyData = {
        "1 RK": [
            {
                id: 1,
                title:
                    <label>1 RK Flat, In Sai Villa Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sai Villa , Govind Nagar Near Prakash Petrol Pump, Nashik</h6>
                    </label>,
                images: [

                    "https://images.nobroker.in/images/8a9fa28497e86b4b0197e8fa25ea4015/8a9fa28497e86b4b0197e8fa25ea4015_62427_831677_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8c8390b459960190b46f694b025f/8a9f8c8390b459960190b46f694b025f_60245_695971_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8c8390b459960190b46f694b025f/8a9f8c8390b459960190b46f694b025f_98726_966558_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8c8390b459960190b46f694b025f/8a9f8c8390b459960190b46f694b025f_46020_141717_medium.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            justifyContent: 'space-between',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            height: '70px',

                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold', }}>₹10,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666', }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold', }}>₹40,000</div>
                                <div style={{ fontSize: '12px', color: '#666', }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold', }}>1000 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                Book Now!
                            </button></Link>
                        </div>
                    </>
            },
            {

                id: 1.2,
                title:
                    <label>1 RK Flat, In Shivlila Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Shivlila, Indira Nagar Behind City Garden Jogging Track, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8ea497fecf530197ff1bef7c1eb4/8a9f8ea497fecf530197ff1bef7c1eb4_88340_644504_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8ea497fecf530197ff1bef7c1eb4/8a9f8ea497fecf530197ff1bef7c1eb4_96291_320211_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8ea497fecf530197ff1bef7c1eb4/8a9f8ea497fecf530197ff1bef7c1eb4_77405_216634_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8ea497fecf530197ff1bef7c1eb4/8a9f8ea497fecf530197ff1bef7c1eb4_20450_791803_medium.jpg"
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹10,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹40,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>900 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },

            {
                id: 1.3,
                title:
                    <label>1 RK Flat, In Shiv Shrushti Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Shiv Shrushti, Pushpanjali, Rane Nagar, Mahamarg, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_32325_403535_medium.jpg",
                    "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_16781_891750_large.jpg",
                    "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_77426_988672_large.jpg",
                    "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_48534_969280_large.jpg",
                    "https://images.nobroker.in/images/8a9f88838eb38273018eb3e7ce412f00/8a9f88838eb38273018eb3e7ce412f00_89492_867908_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹8,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>800 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 1.4,
                title:
                    <label>1 RK Flat, In Aashirwad Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Aashirwad, Satpur Colony,Near Satpur Bus-Stand, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa28497e86b4b0197e8fa25ea4015/8a9fa28497e86b4b0197e8fa25ea4015_62427_831677_medium.jpg",
                    "https://images.nobroker.in/images/8a9f82ed716311b201716336d16307cf/8a9f82ed716311b201716336d16307cf_16644_552381_large.jpg",
                    "https://images.nobroker.in/images/8a9f82ed716311b201716336d16307cf/8a9f82ed716311b201716336d16307cf_12223_860593_large.jpg",
                    "https://images.nobroker.in/images/8a9f82ed716311b201716336d16307cf/8a9f82ed716311b201716336d16307cf_23921_70295_large.jpg",

                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹7,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>650 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 1.5,
                title:
                    <label>1 RK Flat, In Sonamrut Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sonamrut, Govind Nagar, Unthwadi Road, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8b8597de2cb60197de92348a3631/8a9f8b8597de2cb60197de92348a3631_48312_256182_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b8597de2cb60197de92348a3631/8a9f8b8597de2cb60197de92348a3631_11893_47822_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b8597de2cb60197de92348a3631/8a9f8b8597de2cb60197de92348a3631_59898_600682_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b8597de2cb60197de92348a3631/8a9f8b8597de2cb60197de92348a3631_48305_528523_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹8,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹25,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>700 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                             <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 1.6,
                title:
                    <label>1 RK Flat, In Abhinav Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Abhinav, Govind Nagar, Unthwadi Road, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8c91982c505d01982c72fe670d81/8a9f8c91982c505d01982c72fe670d81_35270_146275_medium.jpg",
                    "https://images.nobroker.in/images/8a9f94899796ef6c019796fee1ae0601/8a9f94899796ef6c019796fee1ae0601_61030_948945_large.jpg",
                    "https://images.nobroker.in/images/8a9f94899796ef6c019796fee1ae0601/8a9f94899796ef6c019796fee1ae0601_4798_510494_large.jpg",
                    "https://images.nobroker.in/images/8a9f94899796ef6c019796fee1ae0601/8a9f94899796ef6c019796fee1ae0601_53204_146946_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹7,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>650 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                             <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 1.7,
                title:
                    <label>1 RK Flat, Tirupati Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Tirupati, Indira Nagar Cannel, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8203901521ff0190154c34e712ca/8a9f8203901521ff0190154c34e712ca_84024_460192_large.jpg",
                    "https://images.nobroker.in/images/8a9fb08283409b23018340f91dfd40df/8a9fb08283409b23018340f91dfd40df_436908_579196_large.jpg",
                    "https://images.nobroker.in/images/8a9fb08283409b23018340f91dfd40df/8a9fb08283409b23018340f91dfd40df_651012_152603_large.jpg",
                    "https://images.nobroker.in/images/8a9fb08283409b23018340f91dfd40df/8a9fb08283409b23018340f91dfd40df_540979_153457_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹9,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹25,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>750 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                             <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 1.8,
                title:
                    <label>1 RK Flat, In Roongta Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Roongta Bellavista, Kamod Nagar, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f858897f0454e0197f087b8b109e3/8a9f858897f0454e0197f087b8b109e3_30242_135709_large.jpg",
                    "https://images.nobroker.in/images/8a9fae83825ecf2901825f29ccfa3633/8a9fae83825ecf2901825f29ccfa3633_395133_803377_large.jpg",
                    "https://images.nobroker.in/images/8a9fae83825ecf2901825f29ccfa3633/8a9fae83825ecf2901825f29ccfa3633_789682_401384_large.jpg",
                    "https://images.nobroker.in/images/8a9fae83825ecf2901825f29ccfa3633/8a9fae83825ecf2901825f29ccfa3633_750583_34742_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            marginRight: '1px',
                            // width: '450px',
                            justifyContent: 'space-between',
                            // marginTop: '80px',
                            backgroundColor: '#f9f9f9',
                            padding: '1px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            // marginLeft: 'auto',
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹7,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>800 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                             <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },






        ],
        "1 BHK": [
            {
                id: 2,
                title:
                    <label>1 BHK Flat, In Siddhhivinayak Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Siddhhivinayak, Renuka Nagar, Near Mahamarg Bus-Stand, Mumbai Naka, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa2849823a43c019823b795f90390/8a9fa2849823a43c019823b795f90390_69980_379772_large.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_3643_460080_medium.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_4632_726792_medium.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_31812_206171_medium.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹12,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹40,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1000 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                             <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 2.2,
                title:
                    <label>1 BHK Flat, In Abhishek Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Abhishek, Renuka Nagar, Near Mahamarg Bus-Stand, Mumbai Naka, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_16552_262615_large.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_13401_530658_large.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_47266_64380_large.jpg",
                    "https://images.nobroker.in/images/ff80818164e0ee580164e1c37ba757d0/ff80818164e0ee580164e1c37ba757d0_89487_757318_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹13,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1100 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                             <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 2.3,
                title:
                    <label>1 BHK Flat, In Aashiyana Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Aashiyana, Lekha Nagar, Near Grand Rio Hotel, Mahamarg, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f9187980d8f5c01980dc8e2ad18a8/8a9f9187980d8f5c01980dc8e2ad18a8_96223_718539_medium.jpg",
                    "https://images.nobroker.in/images/8a9f0a838a4e8503018a4f7a00b30d4b/8a9f0a838a4e8503018a4f7a00b30d4b_60591_94426_large.jpg",
                    "https://images.nobroker.in/images/8a9f0a838a4e8503018a4f7a00b30d4b/8a9f0a838a4e8503018a4f7a00b30d4b_13137_941837_large.jpg",
                    "https://images.nobroker.in/images/8a9f0a838a4e8503018a4f7a00b30d4b/8a9f0a838a4e8503018a4f7a00b30d4b_96936_752182_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹10,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>890 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                             <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>e!
                            
                        </div>
                    </>
            },
            {
                id: 2.4,
                title:
                    <label>1 BHK Flat, In Chandravel Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Chandravel, Indira Nagar, Near Jogging Track, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fb28278a4b7c00178a52f89010d19/8a9fb28278a4b7c00178a52f89010d19_2153_70881_large.jpg",
                    "https://images.nobroker.in/images/8a9fb28278a4b7c00178a52f89010d19/8a9fb28278a4b7c00178a52f89010d19_23124_533983_large.jpg",
                    "https://images.nobroker.in/images/8a9fb28278a4b7c00178a52f89010d19/8a9fb28278a4b7c00178a52f89010d19_91217_202854_large.jpg",
                    "https://images.nobroker.in/images/8a9fb28278a4b7c00178a52f89010d19/8a9fb28278a4b7c00178a52f89010d19_8211_622870_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹15,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 2.5,
                title:
                    <label>1 BHK Flat, In Dhananjay Building For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Dhananjay, Rane Nagar, Ambadgaon Poilce Station, Mahamarg, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa9859758486101975944df5e7096/8a9fa9859758486101975944df5e7096_21744_852911_large.jpg",
                    "https://images.nobroker.in/images/8a9fa9859758486101975944df5e7096/8a9fa9859758486101975944df5e7096_90302_409188_large.jpg",
                    "https://images.nobroker.in/images/8a9fa9859758486101975944df5e7096/8a9fa9859758486101975944df5e7096_58488_335493_large.jpg",
                    "https://images.nobroker.in/images/8a9fa9859758486101975944df5e7096/8a9fa9859758486101975944df5e7096_58467_760625_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹9,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>800 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 2.6,
                title:
                    <label>1 BHK Flat, In Gokuldham Residency For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Gokuldham Residency, Pathardi Phata, Pathardi Road, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/ff808181527970bd015281fe60fb318e/ff808181527970bd015281fe60fb318e_82636_682493_large.jpg",
                    "https://images.nobroker.in/images/ff808181527970bd015281fe60fb318e/ff808181527970bd015281fe60fb318e_60699_529674_large.jpg",
                    "https://images.nobroker.in/images/ff808181527970bd015281fe60fb318e/ff808181527970bd015281fe60fb318e_86051_983499_large.jpg",
                    "https://images.nobroker.in/images/ff808181527970bd015281fe60fb318e/ff808181527970bd015281fe60fb318e_59754_665740_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹12,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>900 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 2.7,
                title:
                    <label>1 BHK Flat, In Vinay Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Vinay, Pathardi Phata, Pathardi Road, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fac8497fd725f0197fdd8fa4b36b6/8a9fac8497fd725f0197fdd8fa4b36b6_89245_379809_large.jpg",
                    "https://images.nobroker.in/images/8a9fac8497fd725f0197fdd8fa4b36b6/8a9fac8497fd725f0197fdd8fa4b36b6_45536_820639_large.jpg",
                    "https://images.nobroker.in/images/8a9fac8497fd725f0197fdd8fa4b36b6/8a9fac8497fd725f0197fdd8fa4b36b6_80985_785053_large.jpg",
                    "https://images.nobroker.in/images/8a9fac8497fd725f0197fdd8fa4b36b6/8a9fac8497fd725f0197fdd8fa4b36b6_13059_810827_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹13,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹45,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,250 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 2.8,
                title:
                    <label>1 BHK Flat, In Avenue Building For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Avenue, Govind Nagar, Near Four-Points, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa08282687bf10182689b91a9139b/8a9fa08282687bf10182689b91a9139b_35023_573369_large.jpg",
                    "https://images.nobroker.in/images/8a9fb6827f0d9424017f0e2e6c372baf/8a9fb6827f0d9424017f0e2e6c372baf_28361_378616_large.jpg",
                    "https://images.nobroker.in/images/8a9fb6827f0d9424017f0e2e6c372baf/8a9fb6827f0d9424017f0e2e6c372baf_84733_43723_large.jpg",
                    "https://images.nobroker.in/images/8a9fb6827f0d9424017f0e2e6c372baf/8a9fb6827f0d9424017f0e2e6c372baf_47887_746563_large.jpg",],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹12,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>900 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 2.9,
                title:
                    <label>1 BHK Flat, In Shrinivas Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Shrinivas, Ekta Nagar, Jatra Hotel, Mumbai-Agra Highway, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f85838ce82320018ce83867650bde/8a9f85838ce82320018ce83867650bde_24861_938098_medium.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_20472_584785_large.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_78891_276152_large.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_8189_881970_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹8,500 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>850 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 2.10,
                title:
                    <label>1 BHK Flat, In Nova Residency For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Nova, Keshavrao More Marg, Near Movie-Max Theater, College Road, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/ff80818151920543015194c88cfa0b1f/ff80818151920543015194c88cfa0b1f_55846_316414_medium.jpg",
                    "https://images.nobroker.in/images/8a9fee82872474660187249cbb160412/8a9fee82872474660187249cbb160412_72412_198222_large.jpg",
                    "https://images.nobroker.in/images/8a9fee82872474660187249cbb160412/8a9fee82872474660187249cbb160412_80956_486961_large.jpg",
                    "https://images.nobroker.in/images/8a9fee82872474660187249cbb160412/8a9fee82872474660187249cbb160412_43494_469724_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹20,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,000 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
        ],

        "2 BHK": [
            {
                id: 3,
                title:
                    <label>2 BHK Flat, in Ravi Mahajan Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Ravi Mahajan, Near Mahamarg Bus-Stand,Mumbai Naka, Nashik</h6>
                    </label>,
                images: [
                    "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2018/10/03/Project-Photo-9-Amodini-Nashik-5042475_588_1054_0_320.jpg",
                    "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/08/Photo_h0_w320/67420719_12_PropertyImage781-1021406909131_0_320.jpg",
                    "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/08/Photo_h0_w320/67420719_10_PropertyImage354-121717458311_0_320.jpg",
                    "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/08/Photo_h0_w320/67420719_15_PropertyImage567-2119774831037_0_320.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹22,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1100 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 3.2,
                title:
                    <label>2 BHK Flat, in Karda Hari Krishna Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Hari Krishna 4-A, Nashik Road Railway Station, Near Gopal Tea House Nashik</h6>
                    </label>,
                images: [
                    "https://newprojects.99acres.com/projects/bafna_buiders_and_golden_dreams/anmol_nayantara_gold/images/sup11.jpg",
                    "https://imagecdn.99acres.com/media1/31078/11/621571991O-1753077591686.jpg",
                    "https://imagecdn.99acres.com/media1/31078/13/621573393O-1753077745039.jpg",
                    "https://newprojects.99acres.com/projects/bafna_buiders_and_golden_dreams/anmol_nayantara_gold/images/ic985rwt.jpeg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹19,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹75,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1150 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 3.3,
                title:
                    <label>2 BHK Flat, in Krishnapranit Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Krishnapranit, Mhasrul Road, Green Cannel, Near Forest Office, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f9187980d8f5c01980dc8e2ad18a8/8a9f9187980d8f5c01980dc8e2ad18a8_96223_718539_medium.jpg",
                    "https://images.nobroker.in/images/8a9fae8897ee18de0197ee3132d309e2/8a9fae8897ee18de0197ee3132d309e2_92479_77835_large.jpg",
                    "https://images.nobroker.in/images/8a9fae8897ee18de0197ee3132d309e2/8a9fae8897ee18de0197ee3132d309e2_53078_685155_large.jpg",
                    "https://images.nobroker.in/images/8a9fae8897ee18de0197ee3132d309e2/8a9fae8897ee18de0197ee3132d309e2_94791_539548_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹20,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 3.4,
                title:
                    <label>2 BHK Flat, in Amrutdham Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Amrutdham, KK Wagh College Road, Near Saptshrunngi Bunglows, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fc9828108d5bc0181091a0d722a85/8a9fc9828108d5bc0181091a0d722a85_48770_273635_large.jpg",
                    "https://images.nobroker.in/images/8a9f8c8898030cd00198033cce48182e/8a9f8c8898030cd00198033cce48182e_3500_801628_large.jpg",
                    "https://images.nobroker.in/images/8a9f8c8898030cd00198033cce48182e/8a9f8c8898030cd00198033cce48182e_20839_68460_large.jpg",
                    "https://images.nobroker.in/images/8a9f8c8898030cd00198033cce48182e/8a9f8c8898030cd00198033cce48182e_83681_286789_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹22,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1100 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },

            {
                id: 3.5,
                title:
                    <label>2 BHK Flat, in Laxmi Avenue for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Laxmi Avenue, Ashok Stambh, Near Vitthal Park, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fc3828253b60a018254176ceb5e4d/8a9fc3828253b60a018254176ceb5e4d_90075_592862_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8b0393c4d6ca0193c51482fe165d/8a9f8b0393c4d6ca0193c51482fe165d_11783_203639_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b0393c4d6ca0193c51482fe165d/8a9f8b0393c4d6ca0193c51482fe165d_90730_45647_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b0393c4d6ca0193c51482fe165d/8a9f8b0393c4d6ca0193c51482fe165d_57892_511807_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹18,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,000 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 3.6,
                title:
                    <label>2 BHK Flat, in Mhadha Building for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Mhadha Building, Makhmalabad Road, Near North-Point School Nashik</h6>
                    </label>,
                images: [
                    "https://imagecdn.99acres.com/media1/30847/9/616949889M-1752047047332.jpg",
                    "https://images.nobroker.in/images/8a9f938395d74ff90195d7a8dd641ff7/8a9f938395d74ff90195d7a8dd641ff7_82275_497778_large.jpg",
                    "https://images.nobroker.in/images/8a9f938395d74ff90195d7a8dd641ff7/8a9f938395d74ff90195d7a8dd641ff7_997601_606346_large.jpg",
                    "https://images.nobroker.in/images/8a9f938395d74ff90195d7a8dd641ff7/8a9f938395d74ff90195d7a8dd641ff7_697851_982807_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹25,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,150 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 3.7,
                title:
                    <label>2 BHK Flat, in Blue Meados for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Blue Meados, Pathardi Phata, Pathardi Road, Near Zudio, Nashik</h6>
                    </label>,
                images: [
                    "https://newprojects.99acres.com/projects/prabhat_developers_nasik/prabhat_parivar_apartment/images/bhzfnvo_1714648938_489652626.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_20472_584785_large.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_37753_482569_large.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_78891_276152_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹25,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,200 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 3.8,
                title:
                    <label>2 BHK Flat, in Prabhu City for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Prabhu City, Mumbai-Agra Road, Near Hari Om Dhaba, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f9187980d8f5c01980dc8e2ad18a8/8a9f9187980d8f5c01980dc8e2ad18a8_96223_718539_medium.jpg",
                    "https://images.nobroker.in/images/8a9fae8897ee18de0197ee3132d309e2/8a9fae8897ee18de0197ee3132d309e2_92479_77835_large.jpg",
                    "https://images.nobroker.in/images/8a9fae8897ee18de0197ee3132d309e2/8a9fae8897ee18de0197ee3132d309e2_53078_685155_large.jpg",
                    "https://images.nobroker.in/images/8a9fae8897ee18de0197ee3132d309e2/8a9fae8897ee18de0197ee3132d309e2_94791_539548_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹27,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 3.9,
                title:
                    <label>2 BHK Flat, in Sai Sudarshan Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sai Sudarshan, College Road, Near Vyankatesh Hotel, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa9839573d068019574281f9818f7/8a9fa9839573d068019574281f9818f7_42474_136741_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8fc391da51170191da8aba8a1286/8a9f8fc391da51170191da8aba8a1286_67719_60002_large.jpg",
                    "https://images.nobroker.in/images/8a9f8fc391da51170191da8aba8a1286/8a9f8fc391da51170191da8aba8a1286_91128_913015_large.jpg",
                    "https://images.nobroker.in/images/8a9f8fc391da51170191da8aba8a1286/8a9f8fc391da51170191da8aba8a1286_36361_295574_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹25,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹95,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },

            {
                id: 3.10,
                title:
                    <label>2 BHK Flat, in Dev Mohan Society for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Dev Mohan, Khode Mala, Near Bhamre Misal, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fb282788ee84001788f649975064f/8a9fb282788ee84001788f649975064f_44647_334007_large.jpg",
                    "https://images.nobroker.in/images/8a9fb282788ee84001788f649975064f/8a9fb282788ee84001788f649975064f_72562_238084_large.jpg",
                    "https://images.nobroker.in/images/8a9fb282788ee84001788f649975064f/8a9fb282788ee84001788f649975064f_25597_563572_large.jpg",
                    "https://images.nobroker.in/images/8a9fb282788ee84001788f649975064f/8a9fb282788ee84001788f649975064f_62355_22284_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹27,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1300+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },


        ],
        "3 BHK": [
            {
                id: 4,
                title:
                    <label>3 BHK Flat, in Pushpanjali Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Pushpanjali, Near Mahamarg Bus-Stand,Mumbai Naka, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8ec38d2b160a018d2bffe9de4518/8a9f8ec38d2b160a018d2bffe9de4518_9978_381792_large.jpg",
                    "https://images.nobroker.in/images/8a9f8792982801530198286c7d93296a/8a9f8792982801530198286c7d93296a_29547_923341_large.jpg",
                    "https://images.nobroker.in/images/8a9f8792982801530198286c7d93296a/8a9f8792982801530198286c7d93296a_40447_54621_large.jpg",
                    "https://images.nobroker.in/images/8a9f8792982801530198286c7d93296a/8a9f8792982801530198286c7d93296a_76231_188715_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹28,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 4.2,
                title:
                    <label>3 BHK Flat, in Star Galaxy Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Star Galaxy, Ambadgaon Road, Near Ambad MIDC, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8ec38d2b160a018d2bffe9de4518/8a9f8ec38d2b160a018d2bffe9de4518_46087_50726_large.jpg",
                    "https://images.nobroker.in/images/8a9f8ec38d2b160a018d2bffe9de4518/8a9f8ec38d2b160a018d2bffe9de4518_68372_402261_large.jpg",
                    "https://images.nobroker.in/images/8a9f8ec38d2b160a018d2bffe9de4518/8a9f8ec38d2b160a018d2bffe9de4518_26849_817504_large.jpg",
                    "https://images.nobroker.in/images/8a9f8ec38d2b160a018d2bffe9de4518/8a9f8ec38d2b160a018d2bffe9de4518_66736_281725_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹30,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1250 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 4.3,
                title:
                    <label>3 BHK Flat, in Tulsi Aastha Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Tulsi Aastha, Near Power House, Old Cannel, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9ff88489bad5cb0189bb4dd34351b3/8a9ff88489bad5cb0189bb4dd34351b3_37878_392506_large.jpg",
                    "https://images.nobroker.in/images/8a9ff88489bad5cb0189bb4dd34351b3/8a9ff88489bad5cb0189bb4dd34351b3_485462_41378_large.jpg",
                    "https://images.nobroker.in/images/8a9ff88489bad5cb0189bb4dd34351b3/8a9ff88489bad5cb0189bb4dd34351b3_609066_343266_large.jpg",
                    "https://images.nobroker.in/images/8a9ff88489bad5cb0189bb4dd34351b3/8a9ff88489bad5cb0189bb4dd34351b3_80926_225894_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹35,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1300+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 4.4,
                title:
                    <label>3 BHK Flat, in Sharada Nikentan Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sharda Nikentan, Rajiv Nagar, Bhagwati Chowk, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fbd827d7ae717017d7af0669003b7/8a9fbd827d7ae717017d7af0669003b7_171886_58314_large.jpg",
                    "https://images.nobroker.in/images/8a9fe3828611c708018611e217550fcb/8a9fe3828611c708018611e217550fcb_65177_665682_large.jpg",
                    "https://images.nobroker.in/images/8a9fe3828611c708018611e217550fcb/8a9fe3828611c708018611e217550fcb_85326_536545_large.jpg",
                    "https://images.nobroker.in/images/8a9fe3828611c708018611e217550fcb/8a9fe3828611c708018611e217550fcb_761257_797635_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹32,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },

            {
                id: 4.5,
                title:
                    <label>3 BHK Flat, in Galaxy Park for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Galaxypark Apartment, College Road, Near Cycling Track , Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f914392aae2e00192ab0528f8042b/8a9f914392aae2e00192ab0528f8042b_51148_343942_large.jpg",
                    "https://images.nobroker.in/images/8a9f914392aae2e00192ab0528f8042b/8a9f914392aae2e00192ab0528f8042b_41379_50046_large.jpg",
                    "https://images.nobroker.in/images/8a9f914392aae2e00192ab0528f8042b/8a9f914392aae2e00192ab0528f8042b_61461_268003_large.jpg",
                    "https://images.nobroker.in/images/8a9f914392aae2e00192ab0528f8042b/8a9f914392aae2e00192ab0528f8042b_74328_506662_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹33,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,300+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 4.6,
                title:
                    <label>3 BHK Flat, in Mhadha Building for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Mhadha Building, Makhmalabad Road, Near North-Point School Nashik</h6>
                    </label>,
                images: [
                    "https://imagecdn.99acres.com/media1/30847/9/616949889M-1752047047332.jpg",
                    "https://images.nobroker.in/images/8a9f938395d74ff90195d7a8dd641ff7/8a9f938395d74ff90195d7a8dd641ff7_82275_497778_large.jpg",
                    "https://images.nobroker.in/images/8a9f938395d74ff90195d7a8dd641ff7/8a9f938395d74ff90195d7a8dd641ff7_997601_606346_large.jpg",
                    "https://images.nobroker.in/images/8a9f938395d74ff90195d7a8dd641ff7/8a9f938395d74ff90195d7a8dd641ff7_697851_982807_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹25,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,150 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 4.7,
                title:
                    <label>3 BHK Flat, in Blue Meados for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Blue Meados, Pathardi Phata, Pathardi Road, Near Zudio, Nashik</h6>
                    </label>,
                images: [
                    "https://newprojects.99acres.com/projects/prabhat_developers_nasik/prabhat_parivar_apartment/images/bhzfnvo_1714648938_489652626.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_20472_584785_large.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_37753_482569_large.jpg",
                    "https://images.nobroker.in/images/8a9f91eb735b430001735bf3621f4b92/8a9f91eb735b430001735bf3621f4b92_78891_276152_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹25,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,200 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 4.8,
                title:
                    <label>3 BHK Flat, in Prabhu City for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Prabhu City, Mumbai-Agra Road, Near Hari Om Dhaba, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f9187980d8f5c01980dc8e2ad18a8/8a9f9187980d8f5c01980dc8e2ad18a8_96223_718539_medium.jpg",
                    "https://images.nobroker.in/images/8a9fae8897ee18de0197ee3132d309e2/8a9fae8897ee18de0197ee3132d309e2_92479_77835_large.jpg",
                    "https://images.nobroker.in/images/8a9fae8897ee18de0197ee3132d309e2/8a9fae8897ee18de0197ee3132d309e2_53078_685155_large.jpg",
                    "https://images.nobroker.in/images/8a9fae8897ee18de0197ee3132d309e2/8a9fae8897ee18de0197ee3132d309e2_94791_539548_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹27,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 4.9,
                title:
                    <label>3 BHK Flat, in Sudarshan Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sudarshan Apartment, College Road, Near Vinay Hotel, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa9839573d068019574281f9818f7/8a9fa9839573d068019574281f9818f7_42474_136741_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8fc391da51170191da8aba8a1286/8a9f8fc391da51170191da8aba8a1286_67719_60002_large.jpg",
                    "https://images.nobroker.in/images/8a9f8fc391da51170191da8aba8a1286/8a9f8fc391da51170191da8aba8a1286_91128_913015_large.jpg",
                    "https://images.nobroker.in/images/8a9f8fc391da51170191da8aba8a1286/8a9f8fc391da51170191da8aba8a1286_36361_295574_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹25,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹95,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },

            {
                id: 4.10,
                title:
                    <label>3 BHK Flat, in Dev Mohan Society for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Dev Mohan, Khode Mala, Near Bhamre Misal Hotel, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fb282788ee84001788f649975064f/8a9fb282788ee84001788f649975064f_44647_334007_large.jpg",
                    "https://images.nobroker.in/images/8a9fb282788ee84001788f649975064f/8a9fb282788ee84001788f649975064f_72562_238084_large.jpg",
                    "https://images.nobroker.in/images/8a9fb282788ee84001788f649975064f/8a9fb282788ee84001788f649975064f_25597_563572_large.jpg",
                    "https://images.nobroker.in/images/8a9fb282788ee84001788f649975064f/8a9fb282788ee84001788f649975064f_62355_22284_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹27,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1300+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
        ],
        "4 BHK": [
            {
                id: 5,
                title:
                    <label>4 BHK Flat, in Ganesha Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Ganesha, Near Ganpati Mandir, Gangapur Road, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f918b97c623490197c66b684e181b/8a9f918b97c623490197c66b684e181b_61138_993689_medium.jpg",
                    "https://images.nobroker.in/images/8a9f8e87970800d40197082f6a980c50/8a9f8e87970800d40197082f6a980c50_49413_470652_large.jpg",
                    "https://images.nobroker.in/images/8a9f8e87970800d40197082f6a980c50/8a9f8e87970800d40197082f6a980c50_74596_897597_large.jpg",
                    "https://images.nobroker.in/images/8a9f8e87970800d40197082f6a980c50/8a9f8e87970800d40197082f6a980c50_81275_109262_large.jpg",

                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹40,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,500 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 5.2,
                title:
                    <label>4 BHK Villa, in Sai Dwarka for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sai Dwarka Villa, Vijay Nagar, Near D-Mart Road, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f920592be38ff0192be54a92a0b4b/8a9f920592be38ff0192be54a92a0b4b_116293_833525_large.jpg",
                    "https://images.nobroker.in/images/8a9f920592be38ff0192be54a92a0b4b/8a9f920592be38ff0192be54a92a0b4b_605723_900602_large.jpg",
                    "https://images.nobroker.in/images/8a9f920592be38ff0192be54a92a0b4b/8a9f920592be38ff0192be54a92a0b4b_203334_426726_large.jpg",
                    "https://images.nobroker.in/images/8a9f920592be38ff0192be54a92a0b4b/8a9f920592be38ff0192be54a92a0b4b_807483_80117_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹42,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,60,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,500 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 5.3,
                title:
                    <label>4 BHK Flat, in Sukhwani Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sukhwani, Near Power House, Old Cannel, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fa28597af5d540197af725ac6048c/8a9fa28597af5d540197af725ac6048c_project_840692_large.jpg",
                    "https://images.nobroker.in/images/8a9fa28597af5d540197af725ac6048c/8a9fa28597af5d540197af725ac6048c_4380_743104_large.jpg",
                    "https://images.nobroker.in/images/8a9fa28597af5d540197af725ac6048c/8a9fa28597af5d540197af725ac6048c_79398_914568_large.jpg",
                    "https://images.nobroker.in/images/8a9fa28597af5d540197af725ac6048c/8a9fa28597af5d540197af725ac6048c_93407_475424_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹45,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,400+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 5.4,
                title:
                    <label>4 BHK Flat, in Anurag Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Anurag Apartment, Rajiv Nagar, Near Bhagwati Chowk, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f89839647484e0196476a51de0ed3/8a9f89839647484e0196476a51de0ed3_575266_629971_large.jpg",
                    "https://images.nobroker.in/images/8a9f89839647484e0196476a51de0ed3/8a9f89839647484e0196476a51de0ed3_47438_417341_large.jpg",
                    "https://images.nobroker.in/images/8a9f89839647484e0196476a51de0ed3/8a9f89839647484e0196476a51de0ed3_83798_445491_large.jpg",
                    "https://images.nobroker.in/images/8a9f89839647484e0196476a51de0ed3/8a9f89839647484e0196476a51de0ed3_7226_827414_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹47,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,70,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,500+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },

            {
                id: 5.5,
                title:
                    <label>4 BHK Flat, in Galaxy Park for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Galaxypark Apartment, College Road, Near Cycling Track , Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f91859786a53c019786fb49df2475/8a9f91859786a53c019786fb49df2475_45608_350190_large.jpg",
                    "https://images.nobroker.in/images/8a9f91859786a53c019786fb49df2475/8a9f91859786a53c019786fb49df2475_9539_954382_large.jpg",
                    "https://images.nobroker.in/images/8a9f91859786a53c019786fb49df2475/8a9f91859786a53c019786fb49df2475_59452_399120_large.jpg",
                    "https://images.nobroker.in/images/8a9f91859786a53c019786fb49df2475/8a9f91859786a53c019786fb49df2475_57493_80820_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹45,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹2,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,500+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 5.6,
                title:
                    <label>4 BHK House, in Krishna Kunj for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Krishna Kunj, Makhmalabad Road, Near North-Point School Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f8785974dfa7701974e400d6521f8/8a9f8785974dfa7701974e400d6521f8_11640_294387_large.jpg",
                    "https://images.nobroker.in/images/8a9f8785974dfa7701974e400d6521f8/8a9f8785974dfa7701974e400d6521f8_21148_563721_large.jpg",
                    "https://images.nobroker.in/images/8a9f8785974dfa7701974e400d6521f8/8a9f8785974dfa7701974e400d6521f8_8520_121134_large.jpg",
                    "https://images.nobroker.in/images/8a9f8785974dfa7701974e400d6521f8/8a9f8785974dfa7701974e400d6521f8_38728_large.jpg",

                     ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹25,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,150 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },

        ],
        "4+ BHK": [
            {
                id: 6,
                title:
                    <label>4+ BHK Flat, in Vardhman Estate for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Vardhman Estate, Pathardi Phata, Pathardi Road, Near Zudio, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f92848b981c7a018b987871992718/8a9f92848b981c7a018b987871992718_75906_25200_large.jpg",
                    "https://images.nobroker.in/images/8a9f92848b981c7a018b987871992718/8a9f92848b981c7a018b987871992718_98216_463248_large.jpg",
                    "https://images.nobroker.in/images/8a9f92848b981c7a018b987871992718/8a9f92848b981c7a018b987871992718_86571_913019_large.jpg",
                    "https://images.nobroker.in/images/8a9f92848b981c7a018b987871992718/8a9f92848b981c7a018b987871992718_65370_772956_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹55,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹2,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,600+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 6.2,
                title:
                    <label>4+ BHK Flat, in Kanakia Paris for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Kanakia Paris, Mumbai-Agra Road, Near Hari Om Dhaba, Nashik</h6>
                    </label>,
                images: [
                   "https://images.nobroker.in/images/ff808181697c625c01697d0aeb82270f/ff808181697c625c01697d0aeb82270f_542139_241669_large.jpg",
                   "https://images.nobroker.in/images/ff808181697c625c01697d0aeb82270f/ff808181697c625c01697d0aeb82270f_469313_214794_large.jpg",
                   "https://images.nobroker.in/images/ff808181697c625c01697d0aeb82270f/ff808181697c625c01697d0aeb82270f_628508_555654_large.jpg",
                   "https://images.nobroker.in/images/ff808181697c625c01697d0aeb82270f/ff808181697c625c01697d0aeb82270f_639435_553747_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹57,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹2,25,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,500+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
             {
                id: 6.3,
                title:
                    <label>4+ BHK Flat, in Blue Meados for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Blue Meados, Pathardi Phata, Pathardi Road, Near Zudio, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9f84828205d206018205d9569a01bf/8a9f84828205d206018205d9569a01bf_859697_433414_large.jpg",
                    "https://images.nobroker.in/images/8a9f84828205d206018205d9569a01bf/8a9f84828205d206018205d9569a01bf_136190_905323_large.jpg",
                    "https://images.nobroker.in/images/8a9f84828205d206018205d9569a01bf/8a9f84828205d206018205d9569a01bf_36823_883240_large.jpg",
                    "https://images.nobroker.in/images/8a9f84828205d206018205d9569a01bf/8a9f84828205d206018205d9569a01bf_353510_478746_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹60,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹2,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,550 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
            {
                id: 6.4,
                title:
                    <label>4 BHK Flat, in Prabhu City for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Prabhu City, Mumbai-Agra Road, Near Jatra Dhaba, Nashik</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fbf828175a01101817609cd2a5e0f/8a9fbf828175a01101817609cd2a5e0f_30086_157726_large.jpg",
                    "https://images.nobroker.in/images/8a9fbf828175a01101817609cd2a5e0f/8a9fbf828175a01101817609cd2a5e0f_647683_528588_large.jpg",
                    "https://images.nobroker.in/images/8a9fbf828175a01101817609cd2a5e0f/8a9fbf828175a01101817609cd2a5e0f_112550_858450_large.jpg",
                    "https://images.nobroker.in/images/8a9fbf828175a01101817609cd2a5e0f/8a9fbf828175a01101817609cd2a5e0f_810350_44902_large.jpg",
                ],
                description:
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                            backgroundColor: '#f9f9f9',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹55,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹2,20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1600+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <Link to='/Booknow' >
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Book Now !
                            </button></Link>
                        </div>
                    </>
            },
        ]
    };

    return (
        <>
            <div className="cc" style={{ display: 'flex', backgroundColor: '#F2F2F2', padding: '20px'}}>
                <div className="card 0" style={{ width: 400, height: 550, minWidth: 400, minHeight: 550, maxWidth: 400, maxHeight: 550, overflow: 'hidden', boxSizing: 'border-box', backgroundColor: 'white', position: 'fixed' }}>
                    <div className="card-body">
                        <h6 style={{ marginTop: 1, fontFamily: "sans-serif" }}>Preferred Type</h6>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"
                            /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckDefault" style={{ color: 'grey' }}>
                                Family
                            </label>
                            &nbsp;&nbsp;
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{ marginLeft: 75 }} /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckDefault" style={{ color: 'grey' }}>
                                Commercial
                            </label>
                        </div>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Bachelor Male
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" style={{ marginLeft: 30 }} /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Bachelor Female
                            </label>
                        </div>

                        <h6 style={{ marginTop: 20, fontFamily: "sans-serif" }}>Property Type</h6>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Apartment
                            </label>
                        </div>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Independent House/Villa
                            </label>
                        </div>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Gated Community Villa
                            </label>
                        </div>

                        <h6 style={{ marginTop: 20, fontFamily: "sans-serif" }}>Furnishing</h6>
                        <div class="form-check" style={{ display: 'flex', marginTop: 10 }}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Full
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" style={{ marginLeft: 50 }} /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                Semi
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" style={{ marginLeft: 50 }} /> &nbsp; &nbsp;
                            <label class="form-check-label" for="flexCheckChecked" style={{ color: 'grey' }}>
                                None
                            </label>
                        </div>

                        <h6 style={{ marginTop: 20, fontFamily: "sans-serif" }}>BHK Type</h6>

                        <div className="container" style={{ marginTop: 15 }}>
                            <div className="row g-2" >
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"
                                        checked={selectedBHK === "1 RK"}
                                        onChange={() => handleSelect("1 RK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck1" style={{boxShadow:'none'}}>1 RK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"
                                        checked={selectedBHK === "1 BHK"}
                                        onChange={() => handleSelect("1 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck2" style={{boxShadow:'none'}}>1 BHK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"
                                        checked={selectedBHK === "2 BHK"}
                                        onChange={() => handleSelect("2 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck3" style={{boxShadow:'none'}}>2 BHK</label>
                                </div>


                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off"
                                        checked={selectedBHK === "3 BHK"}
                                        onChange={() => handleSelect("3 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck4" style={{boxShadow:'none'}}>3 BHK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off"
                                        checked={selectedBHK === "4 BHK"}
                                        onChange={() => handleSelect("4 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck5" style={{boxShadow:'none'}}>4 BHK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off"
                                        checked={selectedBHK === "4+ BHK"}
                                        onChange={() => handleSelect("4+ BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck6" style={{boxShadow:'none'}}>4+ BHK</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ss'>



                </div>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        marginLeft: '450px',
                    }}
                >
                    {(propertyData[selectedBHK] || []).map((property) => (
                        <div
                            key={property.id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                width: '400px',
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                                textAlign: 'left',

                            }}

                        >
                            <Carousel fade indicators={false} style={{ margin: '10px', borderRadius: '5px' }}>
                                {property.images.map((img) => (
                                    <Carousel.Item key={img}>
                                        <img
                                            src={img}
                                            className="d-block w-100"
                                            alt={`Property ${img}`}
                                            style={{ height: '200px', objectFit: 'cover'}}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                            <div style={{ padding: '10px' }}>
                                <h5> {property.title}</h5>
                                <p>{property.location}</p>
                                <p> {property.price}</p>
                                <p> {property.description}</p>
                                <p> {property.contact}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Search;
