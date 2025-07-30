import { Button } from 'react-bootstrap';
import './Search.css';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Searchm = () => {
    const [selectedBHK, setSelectedBHK] = useState('');
    const handleSelect = (type) => {
        setSelectedBHK(type);
    };

    const propertyData = {
        "1 RK": [
            {
                id: 1,
                title:
                    <label>1 RK Flat, In Skyline Heights for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Skyline Heights, Near Parel cha Raja, Parmar Guruji Road, Paral, South Mumbai</h6>
                    </label>,
                images: [
                    "https://tse2.mm.bing.net/th/id/OIP.8DdHtdi51y0pX6LxhEkBEwHaEu?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fae8897bbd0380197bc3a17022782/8a9fae8897bbd0380197bc3a17022782_19711_323915_large.jpg",
                    "https://images.nobroker.in/images/8a9fae8897bbd0380197bc3a17022782/8a9fae8897bbd0380197bc3a17022782_98760_973330_large.jpg",
                    "https://images.nobroker.in/images/8a9fae8897bbd0380197bc3a17022782/8a9fae8897bbd0380197bc3a17022782_25402_579156_large.jpg",
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
                                <div style={{ fontWeight: 'bold', }}>₹25,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666', }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold', }}>₹1,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666', }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold', }}>500 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {

                id: 1.2,
                title:
                    <label>1 RK Flat, In Urban Nest Heights for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Urban Nest, ST Anthony Road, Bandra West, West Mumbai</h6>
                    </label>,
                images: [
                    "https://tse3.mm.bing.net/th/id/OIP.QD0yig-UDuCjPI5Yg5T-0wHaFj?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fc383893723b8018938f7d0cd4a87/8a9fc383893723b8018938f7d0cd4a87_33351_167001_large.jpg",
                    "https://images.nobroker.in/images/8a9fc383893723b8018938f7d0cd4a87/8a9fc383893723b8018938f7d0cd4a87_49174_657777_large.jpg",
                    "https://images.nobroker.in/images/8a9fc383893723b8018938f7d0cd4a87/8a9fc383893723b8018938f7d0cd4a87_31247_493719_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹30,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹1,80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>600 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },

            {
                id: 1.3,
                title:
                    <label>1 RK Flat, In Sunshine Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sunshine Apartment, Avenue-4, ST.3, Jio World Garden, Kurla, East Mumbai</h6>
                    </label>,
                images: [
                    "https://tse4.mm.bing.net/th/id/OIP.xaL9Ur_k_67ksPTkc7KY-wHaFj?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fa284984b1fe201984b5ac1231c62/8a9fa284984b1fe201984b5ac1231c62_53484_397752_large.jpg",
                    "https://images.nobroker.in/images/8a9fa284984b1fe201984b5ac1231c62/8a9fa284984b1fe201984b5ac1231c62_22234_583998_large.jpg",
                    "https://images.nobroker.in/images/8a9fa284984b1fe201984b5ac1231c62/8a9fa284984b1fe201984b5ac1231c62_44959_985559_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹26,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>800 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 1.4,
                title:
                    <label>1 RK Flat, In Aastha Residency For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Aastha Residency, Maharshi Arvind Chowk, MG-Road, Mulund, Mumbai</h6>
                    </label>,
                images: [
                    "https://media.istockphoto.com/id/1477199520/photo/aerial-view-of-the-parking-lot-of-a-high-rise-apartment-complex.jpg?s=612x612&w=0&k=20&c=0iVBByAIbL-ZE7IxrcnJirGE05_2Eksdp8XriuOn3Co=",
                    "https://images.nobroker.in/images/8a9fe9838a10b8b9018a11b1eef34483/8a9fe9838a10b8b9018a11b1eef34483_76000_960180_large.jpg",
                    "https://images.nobroker.in/images/8a9fe9838a10b8b9018a11b1eef34483/8a9fe9838a10b8b9018a11b1eef34483_92307_600142_large.jpg",
                    "https://images.nobroker.in/images/8a9fe9838a10b8b9018a11b1eef34483/8a9fe9838a10b8b9018a11b1eef34483_32812_364608_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹20,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>650 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 1.5,
                title:
                    <label>1 RK Flat, In Zenith Towers For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}> Zenith Towers, Near Sant Nirankari Udyan, Andheri-Ghatkopar Road, Andheri West, Mumbai</h6>
                    </label>,
                images: [
                    "https://up.yimg.com/ib/th/id/OIP.n2tuFyzxY0wVCNEr3K8KkAHaFc?pid=Api&rs=1&c=1&qlt=95&w=152&h=112",
                    "https://images.nobroker.in/images/ff8081814e53f3fb014e57745c7f1290/ff8081814e53f3fb014e57745c7f1290_24545_228989_large.jpg",
                    "https://images.nobroker.in/images/ff8081814e53f3fb014e57745c7f1290/ff8081814e53f3fb014e57745c7f1290_10399_245193_large.jpg",
                    "https://images.nobroker.in/images/ff8081814e53f3fb014e57745c7f1290/ff8081814e53f3fb014e57745c7f1290_75928_45372_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹28,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹1,25,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>700 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 1.6,
                title:
                    <label>1 RK Flat, In Grand Horizon For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Grand Horizon, Prabhat Colony, Near Chhatrpati Shivaji Maharaj International Airport, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse4.mm.bing.net/th/id/OIP.36IKnPOu-ljPKC12Uhq9ZAHaE8?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f918698127ae20198129de9450f10/8a9f918698127ae20198129de9450f10_5784_17619_large.jpg",
                    "https://images.nobroker.in/images/8a9f918698127ae20198129de9450f10/8a9f918698127ae20198129de9450f10_71742_309137_large.jpg",
                    "https://images.nobroker.in/images/8a9f918698127ae20198129de9450f10/8a9f918698127ae20198129de9450f10_95377_225681_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹30,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹1,30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>650 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 1.7,
                title:
                    <label>1 RK Flat, In Shantidham Residency For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Shantidham Residency, New Golden Rest Road, Near Zudio Sai-Plaza, Mirabhayander, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse4.mm.bing.net/th/id/OIP.Gp8F9eBUWQWg7VN8SlmG4QHaFO?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f9e8393df727a0193dfafc51e0ea6/8a9f9e8393df727a0193dfafc51e0ea6_100598_922283_large.jpg",
                    "https://images.nobroker.in/images/8a9f9e8393df727a0193dfafc51e0ea6/8a9f9e8393df727a0193dfafc51e0ea6_71478_887408_large.jpg",
                    "https://images.nobroker.in/images/8a9f9e8393df727a0193dfafc51e0ea6/8a9f9e8393df727a0193dfafc51e0ea6_808793_607187_large.jpg",
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
                            height: '70px'
                        }}>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹22,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>750 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 1.8,
                title:
                    <label>1 RK Flat, In Prabhakar Residency For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Prabhat Residency, ST Anthony Road, Near Bharat Petrolium, Andheri West, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse2.mm.bing.net/th/id/OIP.GillzdNA8NN2NfkGQoSCfQHaEK?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fa8827b2e3b21017b2e66f05b11ec/8a9fa8827b2e3b21017b2e66f05b11ec_46876_355546_large.jpg",
                    "https://images.nobroker.in/images/8a9fa8827b2e3b21017b2e66f05b11ec/8a9fa8827b2e3b21017b2e66f05b11ec_94230_825169_large.jpg",
                    "https://images.nobroker.in/images/8a9fa8827b2e3b21017b2e66f05b11ec/8a9fa8827b2e3b21017b2e66f05b11ec_35962_637359_large.jpg"
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
                                <div style={{ fontWeight: 'bold' }}>₹27,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>₹1,20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div style={{ margin: '10px' }}>
                                <div style={{ fontWeight: 'bold' }}>800 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                See More!
                            </button>
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
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Siddhhivinayak, Renuka Nagar, Near Piramal Museum of Art, Byculla Galary, West Mumbai</h6>
                    </label>,
                images: [
                    "https://media.istockphoto.com/id/971919418/photo/growing-cities-in-india.jpg?s=612x612&w=0&k=20&c=CpEJox-JMhsFpwrRhKLGc-DG_FhyYrViaK91pj3rdcM=",
                    "https://images.nobroker.in/images/8a9fbc8282a050c40182a09b1df436a0/8a9fbc8282a050c40182a09b1df436a0_98409_937561_large.jpg",
                    "https://images.nobroker.in/images/8a9fbc8282a050c40182a09b1df436a0/8a9fbc8282a050c40182a09b1df436a0_80445_666361_large.jpg",
                    "https://images.nobroker.in/images/8a9fbc8282a050c40182a09b1df436a0/8a9fbc8282a050c40182a09b1df436a0_10673_501348_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹1,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>800 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 2.2,
                title:
                    <label>1 BHK Flat, In Abhishek Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Abhishek, Juhu Nagar, Vashi Kopar khairane Road, Vashi, Navi Mumbai</h6>
                    </label>,
                images: [
                    "https://media.istockphoto.com/id/1027811370/photo/new-block-of-modern-apartments-stock-image.jpg?s=612x612&w=0&k=20&c=aFG6CgMG_M643DGwW48kisMGNnIiVpVh6mv78GQILr8=",
                    "https://images.nobroker.in/images/8a9fe1828880be980188811b7c394598/8a9fe1828880be980188811b7c394598_69910_363706_large.jpg",
                    "https://images.nobroker.in/images/8a9fe1828880be980188811b7c394598/8a9fe1828880be980188811b7c394598_71520_459570_large.jpg",
                    "https://images.nobroker.in/images/8a9fe1828880be980188811b7c394598/8a9fe1828880be980188811b7c394598_98163_363548_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹1,30,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1100 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 2.3,
                title:
                    <label>1 BHK Flat, In Sky-View Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sky-View, Shanti Nagar, Hindurao Patil Marg, Mohan Khoper Road, Navi Mumbai</h6>
                    </label>,
                images: [
                    "https://media.istockphoto.com/id/1027811130/photo/new-block-of-modern-apartments-stock-image.jpg?s=612x612&w=0&k=20&c=51Kc9YD6rXuU0G2c-4G1hFZ4aZ1UJeE_1n-1cgTfWO4=",
                    "https://images.nobroker.in/images/8a9f849d98474f650198475ae8c102ae/8a9f849d98474f650198475ae8c102ae_67308_20133_large.jpg",
                    "https://images.nobroker.in/images/8a9f849d98474f650198475ae8c102ae/8a9f849d98474f650198475ae8c102ae_64734_305929_large.jpg",
                    "https://images.nobroker.in/images/8a9f849d98474f650198475ae8c102ae/8a9f849d98474f650198475ae8c102ae_29528_916323_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹1,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>890 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 2.4,
                title:
                    <label>1 BHK Flat, In Sky Pearl For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sky Pearl, New Raymond Shop, Manpada Road, Dombivali, East Mumbai</h6>
                    </label>,
                images: [
                    "https://media.istockphoto.com/id/1027811370/photo/new-block-of-modern-apartments-stock-image.jpg?s=612x612&w=0&k=20&c=aFG6CgMG_M643DGwW48kisMGNnIiVpVh6mv78GQILr8=",
                    "https://images.nobroker.in/images/8a9f8d83963d69f901963dcb37102569/8a9f8d83963d69f901963dcb37102569_91099_201963_large.jpg",
                    "https://images.nobroker.in/images/8a9f8d83963d69f901963dcb37102569/8a9f8d83963d69f901963dcb37102569_41063_918060_large.jpg",
                    "https://images.nobroker.in/images/8a9f8d83963d69f901963dcb37102569/8a9f8d83963d69f901963dcb37102569_21815_963313_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>900 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 2.5,
                title:
                    <label>1 BHK Flat, In Harmony Heights For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Harmony, Baba Saheb Deshpande Chowk, Easten Express Highway, Sion, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse4.mm.bing.net/th?id=OIF.z3opWUWaFi%2bVjktC%2fbVJyQ&pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f8b4490fa4b690190fa693f250684/8a9f8b4490fa4b690190fa693f250684_64573_263732_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b4490fa4b690190fa693f250684/8a9f8b4490fa4b690190fa693f250684_22645_29366_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b4490fa4b690190fa693f250684/8a9f8b4490fa4b690190fa693f250684_9373_901515_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹2,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>800 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 2.6,
                title:
                    <label>1 BHK Flat, In Zenith Crest For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Zenith Crest, Near Diamond Garden, VN Purav Marg, Chembur, Central Mumbai</h6>
                    </label>,
                images: [
                    "https://tse4.mm.bing.net/th/id/OIP.ujianQz_nQ55j5psQouKQQHaFV?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fb08a97102dd70197106d5dc51ad2/8a9fb08a97102dd70197106d5dc51ad2_19097_154026_large.jpg",
                    "https://images.nobroker.in/images/8a9fb08a97102dd70197106d5dc51ad2/8a9fb08a97102dd70197106d5dc51ad2_88973_519285_large.jpg",
                    "https://images.nobroker.in/images/8a9fb08a97102dd70197106d5dc51ad2/8a9fb08a97102dd70197106d5dc51ad2_6655_139684_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>900 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 2.7,
                title:
                    <label>1 BHK Flat, In Cityscape Residency For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Cityscape, Bajarward Road, Near Siddhapura Estate, Santacruz-Chembur Link Road, Kurla West, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse3.mm.bing.net/th/id/OIP.UYFr-JzNbROKiB_yFoD1vQHaFj?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fb5827a9505c8017a951c2e560d36/8a9fb5827a9505c8017a951c2e560d36_39889_576465_large.jpg",
                    "https://images.nobroker.in/images/8a9fb5827a9505c8017a951c2e560d36/8a9fb5827a9505c8017a951c2e560d36_77605_150655_large.jpg",
                    "https://images.nobroker.in/images/8a9fb5827a9505c8017a951c2e560d36/8a9fb5827a9505c8017a951c2e560d36_6521_257687_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹2,20,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,150 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 2.8,
                title:
                    <label>1 BHK Flat, In Galaxy View Apartment For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Galaxy view, Udipi Vihar, Aarey Road, Near Goregaon Railway Station, Goregaon, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse1.mm.bing.net/th/id/OIP.33RnTOjqCI_EUZSXjuTtIgHaEK?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f8882795471f7017954bdb553189c/8a9f8882795471f7017954bdb553189c_7826_240215_large.jpg",
                    "https://images.nobroker.in/images/8a9f8882795471f7017954bdb553189c/8a9f8882795471f7017954bdb553189c_21310_214447_large.jpg",
                    "https://images.nobroker.in/images/8a9f8882795471f7017954bdb553189c/8a9f8882795471f7017954bdb553189c_7826_240215_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹50,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹3,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>900 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 2.9,
                title:
                    <label>1 BHK Flat, In Omkar Residency For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Omkar, Sitaram Patkar Road, Swami Vivekanand Marg, Goregaon East, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse1.mm.bing.net/th/id/OIP.33RnTOjqCI_EUZSXjuTtIgHaEK?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f84839578dca90195793d70001a00/8a9f84839578dca90195793d70001a00_43653_461000_large.jpg",
                    "https://images.nobroker.in/images/8a9f84839578dca90195793d70001a00/8a9f84839578dca90195793d70001a00_90906_853839_large.jpg",
                    "https://images.nobroker.in/images/8a9f84839578dca90195793d70001a00/8a9f84839578dca90195793d70001a00_19604_408934_large.jpg"
                    ,],
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
                                <div style={{ fontWeight: 'bold' }}>₹48,500 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹3,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>750 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 2.10,
                title:
                    <label>1 BHK Flat, In Marine Vista For Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Marine Vista, Naval Petrol Pump, Dr. Homi Bhabha Road, Colaba, South Mumbai</h6>
                    </label>,
                images: [
                    "https://tse1.mm.bing.net/th/id/OIP.Z8RXubIztiCddeoeHrWh4QHaIQ?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fbc8282a050c40182a09b1df436a0/8a9fbc8282a050c40182a09b1df436a0_98409_937561_large.jpg",
                    "https://images.nobroker.in/images/8a9fbc8282a050c40182a09b1df436a0/8a9fbc8282a050c40182a09b1df436a0_80445_666361_large.jpg",
                    "https://images.nobroker.in/images/8a9fbc8282a050c40182a09b1df436a0/8a9fbc8282a050c40182a09b1df436a0_10673_501348_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹2,80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>800 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
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
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Ravi Mahajan, Near Sarvodaya Hospital, Andheri Ghatkopar Link Road, Ghatkopar, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse1.mm.bing.net/th/id/OIP.X2-7HQfZX22KwNGza2vpkgHaFj?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f8b838f4e6b6e018f4ec356e320e3/8a9f8b838f4e6b6e018f4ec356e320e3_99491_76604_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b838f4e6b6e018f4ec356e320e3/8a9f8b838f4e6b6e018f4ec356e320e3_42469_886000_large.jpg",
                    "https://images.nobroker.in/images/8a9f8b838f4e6b6e018f4ec356e320e3/8a9f8b838f4e6b6e018f4ec356e320e3_11407_489650_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹50,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹2,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,000 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 3.2,
                title:
                    <label>2 BHK Flat, in Top View Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Top View, Ambrosia Gardan, Powai lake, Jogeshwari Vikroli Link Road, Powai, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse4.mm.bing.net/th/id/OIP.ZSq0Fuzfx6m5r2rugR7ZtQHaEt?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fad8a97734895019773b40a21311a/8a9fad8a97734895019773b40a21311a_71211_580186_large.jpg",
                    "https://images.nobroker.in/images/8a9fad8a97734895019773b40a21311a/8a9fad8a97734895019773b40a21311a_57723_631100_large.jpg",
                    "https://images.nobroker.in/images/8a9fad8a97734895019773b40a21311a/8a9fad8a97734895019773b40a21311a_74712_506465_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹2,75,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1100 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 3.3,
                title:
                    <label>2 BHK Flat, in Mhadha Complex for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Mhadha Complex, Mhasrul Road, Green Cannel, Near Forest Office, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse1.mm.bing.net/th/id/OIF.L3ivIHrRDOkdutAoOnrq5A?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fa2879768227b0197685ea7ae16e2/8a9fa2879768227b0197685ea7ae16e2_8926_837589_large.jpg",
                    "https://images.nobroker.in/images/8a9fa2879768227b0197685ea7ae16e2/8a9fa2879768227b0197685ea7ae16e2_29392_725141_large.jpg",
                    "https://images.nobroker.in/images/8a9fa2879768227b0197685ea7ae16e2/8a9fa2879768227b0197685ea7ae16e2_75388_199915_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹3,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 3.4,
                title:
                    <label>2 BHK Flat, in Lake Castle for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Lake Castle, Mahajan Forest Park, Lake Castle Internal Road, Powai, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse3.mm.bing.net/th/id/OIP.VQn7fNhcVWSecIYSrGNtcAHaFj?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fc28280bce0210180bd13e7871fca/8a9fc28280bce0210180bd13e7871fca_62299_116269_large.jpg",
                    "https://images.nobroker.in/images/8a9fc28280bce0210180bd13e7871fca/8a9fc28280bce0210180bd13e7871fca_65732_266010_large.jpg",
                    "https://images.nobroker.in/images/8a9fc28280bce0210180bd13e7871fca/8a9fc28280bce0210180bd13e7871fca_53544_947700_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹65,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹3,25,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1100 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },

            {
                id: 3.5,
                title:
                    <label>2 BHK Flat, in Rekha Sadan for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Rekha Sadan, Road No. 6, PA Wadia Park, Tilak Road, Central Dadar, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse1.mm.bing.net/th?id=OIF.cFlaVJN%2btrDT%2b6b6KNQx%2fQ&pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fa48382b5202e0182b549659a1a27/8a9fa48382b5202e0182b549659a1a27_26353_809822_large.jpg",
                    "https://images.nobroker.in/images/8a9fa48382b5202e0182b549659a1a27/8a9fa48382b5202e0182b549659a1a27_97502_796874_large.jpg",
                    "https://images.nobroker.in/images/8a9fa48382b5202e0182b549659a1a27/8a9fa48382b5202e0182b549659a1a27_39165_863130_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹80,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,100 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 3.6,
                title:
                    <label>2 BHK Flat, in Mhadha Building for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Mhadha Building, Mhasrul Road, Green Cannel, Near Forest Office, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse3.mm.bing.net/th/id/OIP.nT53kPDIG0XWG8vSvvNQDwHaDk?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fac827ee54431017ee5add8350496/8a9fac827ee54431017ee5add8350496_59490_789779_large.jpg",
                    "https://images.nobroker.in/images/8a9fac827ee54431017ee5add8350496/8a9fac827ee54431017ee5add8350496_6205_999787_large.jpg",
                    "https://images.nobroker.in/images/8a9fac827ee54431017ee5add8350496/8a9fac827ee54431017ee5add8350496_50863_192642_large.jpg",
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
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 3.7,
                title:
                    <label>2 BHK Flat, in Sagar Building for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sagar Heights, Near Podar Climbing Wall, Telang Road, Matunga, Mumbai</h6>
                    </label>,
                images: [
                   "https://tse1.mm.bing.net/th/id/OIP.X2-7HQfZX22KwNGza2vpkgHaFj?pid=Api&P=0&h=220",
                   "https://images.nobroker.in/images/8a9fe9828890e59e01889159816f4044/8a9fe9828890e59e01889159816f4044_30269_22421_large.jpg",
                   "https://images.nobroker.in/images/8a9fe9828890e59e01889159816f4044/8a9fe9828890e59e01889159816f4044_2055_921026_large.jpg",
                   "https://images.nobroker.in/images/8a9fe9828890e59e01889159816f4044/8a9fe9828890e59e01889159816f4044_16177_998156_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹65,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,200 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 3.8,
                title:
                    <label>2 BHK Flat, in Mehru Heights for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Mehru Heights, Near Podar Climbing Wall, Telang Road, Matunga, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse4.mm.bing.net/th/id/OIP.S4h_SDb1LBV4X1WRqAzQRwHaJ4?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/ff8081815a4b4a7a015a4b5359a30558/ff8081815a4b4a7a015a4b5359a30558_924972_97026_large.jpg",
                    "https://images.nobroker.in/images/ff8081815a4b4a7a015a4b5359a30558/ff8081815a4b4a7a015a4b5359a30558_798749_739332_large.jpg",
                    "https://images.nobroker.in/images/ff8081815a4b4a7a015a4b5359a30558/ff8081815a4b4a7a015a4b5359a30558_16729_317666_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹67,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 3.9,
                title:
                    <label>2 BHK Flat, in Samrat Heights for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Samrat Heights, Maharshi Karve Road, Near Church Gate Station, Mumbai</h6>
                    </label>,
                images: [
                   "https://tse2.mm.bing.net/th/id/OIP.qx1XXtGrv1UvzC_o4vrfxgAAAA?pid=Api&P=0&h=220",
                   "https://images.nobroker.in/images/ff8081814ffe57bd015014b4b87807e8/ff8081814ffe57bd015014b4b87807e8_91914_895755_large.jpg",
                   "https://images.nobroker.in/images/ff8081814ffe57bd015014b4b87807e8/ff8081814ffe57bd015014b4b87807e8_121545_539720_large.jpg",
                   "https://images.nobroker.in/images/ff80818169a9ea980169b29d68783c78/ff80818169a9ea980169b29d68783c78_80886_965761_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹1,00,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,95,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1000+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },

            {
                id: 3.10,
                title:
                    <label>2 BHK Flat, in Aairavat Heights for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Aairavat Heights, Near Paradox Museum Mumbai, Purushottamdas Thakurdas Road, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse4.mm.bing.net/th/id/OIP.METkFBJhYf1h2o5cKjuhKwHaHl?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/ff80818169a9ea980169b29d68783c78/ff80818169a9ea980169b29d68783c78_37113_736688_large.jpg",
                    "https://images.nobroker.in/images/ff80818169a9ea980169b29d68783c78/ff80818169a9ea980169b29d68783c78_73970_727576_large.jpg",
                    "https://images.nobroker.in/images/ff80818169a9ea980169b29d68783c78/ff80818169a9ea980169b29d68783c78_14385_64081_large.jpg",
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
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },


        ],
        "3 BHK": [
            {
                id: 4,
                title:
                    <label>3 BHK Flat, in Gurukrupa Alaknanda for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Gurukrupa Alaknanda, Airport Area, South West juhu, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse3.mm.bing.net/th/id/OIP.PmDLBankLHMnIbNEZXbq1AHaFj?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fa78597cffb7a0197d060cf7b27db/8a9fa78597cffb7a0197d060cf7b27db_29036_265126_large.jpg",
                    "https://images.nobroker.in/images/8a9fa78597cffb7a0197d060cf7b27db/8a9fa78597cffb7a0197d060cf7b27db_72574_501437_large.jpg",
                    "https://images.nobroker.in/images/8a9fa78597cffb7a0197d060cf7b27db/8a9fa78597cffb7a0197d060cf7b27db_85943_764524_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹75,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹3,80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 4.2,
                title:
                    <label>3 BHK Flat, in Vandana Apartments for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Vandana Apartments, Airport Area, South West Juhu, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse2.mm.bing.net/th/id/OIP.uUaPUEjX8WK2dGdAC_XkCAHaFj?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f9b8a981daf8801981e24f615274d/8a9f9b8a981daf8801981e24f615274d_32376_790064_large.jpg",
                    "https://images.nobroker.in/images/8a9f9b8a981daf8801981e24f615274d/8a9f9b8a981daf8801981e24f615274d_65883_18207_large.jpg",
                    "https://images.nobroker.in/images/8a9f9b8a981daf8801981e24f615274d/8a9f9b8a981daf8801981e24f615274d_65098_273300_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹72,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹4,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1250 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 4.3,
                title:
                    <label>3 BHK Flat, in Tulsi Aastha Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Tulsi Aastha, Near Power House, Old Cannel, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse3.mm.bing.net/th/id/OIP.FS3ToJUG-ymXi5Xq56oDjgHaE8?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fb3827bdac026017bdaed64d30d0f/8a9fb3827bdac026017bdaed64d30d0f_803356_608257_large.jpg",
                    "https://images.nobroker.in/images/8a9fb3827bdac026017bdaed64d30d0f/8a9fb3827bdac026017bdaed64d30d0f_505772_944417_large.jpg",
                    "https://images.nobroker.in/images/8a9fb3827bdac026017bdaed64d30d0f/8a9fb3827bdac026017bdaed64d30d0f_401867_866722_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹85,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹4,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 4.4,
                title:
                    <label>3 BHK Flat, in Disha Tulip Phase I for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Disha Tulip, Dheeraj Sagar, Near Paradigm Mall, Malad West, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse3.mm.bing.net/th/id/OIF.tGMTwcUW63FZ3E9W55lSyQ?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f888279a2fac50179a35a8b3f2577/8a9f888279a2fac50179a35a8b3f2577_39028_652050_large.jpg",
                    "https://images.nobroker.in/images/8a9f888279a2fac50179a35a8b3f2577/8a9f888279a2fac50179a35a8b3f2577_72395_742156_large.jpg",
                    "https://images.nobroker.in/images/8a9f888279a2fac50179a35a8b3f2577/8a9f888279a2fac50179a35a8b3f2577_45392_180138_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹80,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1300+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },

            {
                id: 4.5,
                title:
                    <label>3 BHK Flat, in Orbit Eternia for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Orbit Eternia, Opposite Deepak Theatre, N M Joshi Marg, Lower Parel, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse3.mm.bing.net/th/id/OIP.m-wMPDY6ddW2JfyVXEkVvgAAAA?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f974492287325019228a79abf103e/8a9f974492287325019228a79abf103e_88302_789024_large.jpg",
                    "https://images.nobroker.in/images/8a9f974492287325019228a79abf103e/8a9f974492287325019228a79abf103e_92177_703295_large.jpg",
                    "https://images.nobroker.in/images/8a9f974492287325019228a79abf103e/8a9f974492287325019228a79abf103e_79365_506688_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹77,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹4,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,300+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 4.6,
                title:
                    <label>3 BHK Flat, in Mhadha Building for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Mhadha Building, Makhmalabad Road, Near North-Point School Mumbai</h6>
                    </label>,
                images: [
                   "https://tse1.mm.bing.net/th/id/OIF.vyP397W6R2ao1ESqJnNPPQ?pid=Api&P=0&h=220",
                   "https://images.nobroker.in/images/8a9f974492287325…4492287325019228a79abf103e_75552_697326_large.jpg",
                   "https://images.nobroker.in/images/8a9f974492287325019228a79abf103e/8a9f974492287325019228a79abf103e_3256_791534_large.jpg",
                   "https://images.nobroker.in/images/8a9f974492287325019228a79abf103e/8a9f974492287325019228a79abf103e_1747_148232_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹75,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,350 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 4.7,
                title:
                    <label>3 BHK Flat, in Runwal Nirvana for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Runwal Nirvana, Mahadevachi Wadi, Parel, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse4.mm.bing.net/th/id/OIP.68a0w23VW9wJKmS4ZRN3YAHaEo?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f8792982801530198286c7d93296a/8a9f8792982801530198286c7d93296a_29547_923341_large.jpg",
                    "https://images.nobroker.in/images/8a9f8792982801530198286c7d93296a/8a9f8792982801530198286c7d93296a_40447_54621_large.jpg",
                    "https://images.nobroker.in/images/8a9f8792982801530198286c7d93296a/8a9f8792982801530198286c7d93296a_46647_152480_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹75,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹4,80,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,200 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 4.8,
                title:
                    <label>3 BHK Flat, in Aristo Residency for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Aristo Residency, Sayani Road, Prabhadevi, Mumbai</h6>
                    </label>,
                images: [
                   "https://tse3.mm.bing.net/th/id/OIP.pumKx4ngndXkwRslrLp12AHaEo?pid=Api&P=0&h=220",
                   "https://images.nobroker.in/images/8a9f8fc392038403019203a8da6c0a88/8a9f8fc392038403019203a8da6c0a88_834276_35664_large.jpg",
                    "https://images.nobroker.in/images/8a9f8fc392038403019203a8da6c0a88/8a9f8fc392038403019203a8da6c0a88_245640_802025_large.jpg",
                   "https://images.nobroker.in/images/8a9f8fc392038403019203a8da6c0a88/8a9f8fc392038403019203a8da6c0a88_617407_479165_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹77,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 4.9,
                title:
                    <label>3 BHK Flat, in Saraswati Building for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Saraswati Building, Charni Road East, Girgaon, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse1.mm.bing.net/th/id/OIP.fg4v_RzHSZG4iSTDHqIhsgAAAA?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9fae82820150a801820165d9210b3b/8a9fae82820150a801820165d9210b3b_32996_205575_large.jpg",
                    "https://images.nobroker.in/images/8a9fae82820150a801820165d9210b3b/8a9fae82820150a801820165d9210b3b_94479_657161_large.jpg",
                    "https://images.nobroker.in/images/8a9fae82820150a801820165d9210b3b/8a9fae82820150a801820165d9210b3b_40116_519512_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹85,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹4,70,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1200+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },

            {
                id: 4.10,
                title:
                    <label>3 BHK Flat, in Sugee Mahalaxmi for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sugee Mahalaxmi, Dadar, Mumbai</h6>
                    </label>,
                images: [
                    "https://tse3.mm.bing.net/th/id/OIP.vZ-mAH2T3CmXIEYmrR7XgQHaEo?pid=Api&P=0&h=220",
                    "https://images.nobroker.in/images/8a9f9982803655bd01803698b82d31ce/8a9f9982803655bd01803698b82d31ce_40060_516131_large.jpg",
                    "https://images.nobroker.in/images/8a9f9982803655bd01803698b82d31ce/8a9f9982803655bd01803698b82d31ce_38267_956664_large.jpg",
                    "https://images.nobroker.in/images/8a9f9982803655bd01803698b82d31ce/8a9f9982803655bd01803698b82d31ce_42173_452127_large.jpg",
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
                                <div style={{ fontWeight: 'bold' }}>₹82,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1300+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
        ],
        "4 BHK": [
            {
                id: 5,
                title:
                    <label>4 BHK Flat, in  Lodha World Crest for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}> Lodha World Crest,  Near Kamala Mills compound, Lower Parel West, Mumbai</h6>
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
                                <div style={{ fontWeight: 'bold' }}>₹90,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,500 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 5.2,
                title:
                    <label>4 BHK Villa, in  Sunteck City for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Sunteck City, Near Ram Mandir Road, Goregaon West, Mumbai</h6>
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
                                <div style={{ fontWeight: 'bold' }}>₹92,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,25,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,500 sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 5.3,
                title:
                    <label>4 BHK Flat, in Oberoi Realty Sky Heights for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Oberoi Realty Sky Heights, Andheri West, Mumbai</h6>
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
                                <div style={{ fontWeight: 'bold' }}>₹90,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹5,50,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,400+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 5.4,
                title:
                    <label>4 BHK Flat, in Kanakia Levels Heights for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Kanakia Levels, Malad East, Mumbai</h6>
                    </label>,
                images: [
                    "https://images.nobroker.in/images/8a9fef82856134a4018561879fdc2e99/8a9fef82856134a4018561879fdc2e99_33945_723055_large.jpg",
                    "https://images.nobroker.in/images/8a9fef82856134a4018561879fdc2e99/8a9fef82856134a4018561879fdc2e99_44413_873469_large.jpg",
                    "https://images.nobroker.in/images/8a9fef82856134a4018561879fdc2e99/8a9fef82856134a4018561879fdc2e99_1033_263879_large.jpg",
                    "https://images.nobroker.in/images/8a9fef82856134a4018561879fdc2e99/8a9fef82856134a4018561879fdc2e99_622410_92203_large.jpg",

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
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },

            {
                id: 5.5,
                title:
                    <label>4 BHK Flat, in Lodha Altamount Apartment for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Lodha Altamount, Opposite of Antilia (Ambani House) Gowalia Tank, Tardeo Road, Mumbai</h6>
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
                                <div style={{ fontWeight: 'bold' }}>₹1,50,000 <span style={{ color: '#007bff', fontSize: '12px' }}>+ Included</span></div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Rent</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>₹7,00,000</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Deposit</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>1,300+ sqft</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>Builtup</div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 5.6,
                title:
                    <label>4 BHK House, in Peninsula Salsette for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Peninsula Salsette, Near Great Eastern Mills, Byculla East, Mumbai</h6>
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
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
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
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Vardhman Estate, Pathardi Phata, Pathardi Road, Near Zudio, Mumbai</h6>
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
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 6.2,
                title:
                    <label>4+ BHK Flat, in Kanakia Paris for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Kanakia Paris, Mumbai-Agra Road, Near Hari Om Dhaba, Mumbai</h6>
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
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 6.3,
                title:
                    <label>4+ BHK Flat, in Blue Meados for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Blue Meados, Pathardi Phata, Pathardi Road, Near Zudio, Mumbai</h6>
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
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
            {
                id: 6.4,
                title:
                    <label>4 BHK Flat, in Prabhu City for Rent
                        <br />
                        <h6 style={{ marginTop: '12px', color: 'grey', fontSize: '15px' }}>Prabhu City, Mumbai-Agra Road, Near Jatra Dhaba, Mumbai</h6>
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
                            <button style={{
                                backgroundColor: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer'

                            }}>
                                See More!
                            </button>
                        </div>
                    </>
            },
        ]
    };

    return (
        <>
            <div className="cc" style={{ display: 'flex', backgroundColor: '#F2F2F2', padding: '20px' }}>
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
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck1" style={{ boxShadow: 'none' }}>1 RK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"
                                        checked={selectedBHK === "1 BHK"}
                                        onChange={() => handleSelect("1 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck2" style={{ boxShadow: 'none' }}>1 BHK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"
                                        checked={selectedBHK === "2 BHK"}
                                        onChange={() => handleSelect("2 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck3" style={{ boxShadow: 'none' }}>2 BHK</label>
                                </div>


                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off"
                                        checked={selectedBHK === "3 BHK"}
                                        onChange={() => handleSelect("3 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck4" style={{ boxShadow: 'none' }}>3 BHK</label>
                                </div>
                                <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off"
                                        checked={selectedBHK === "4 BHK"}
                                        onChange={() => handleSelect("4 BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck5" style={{ boxShadow: 'none' }}>4 BHK</label>
                                </div>
                                {/* <div className="col-4">
                                    <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off"
                                        checked={selectedBHK === "4+ BHK"}
                                        onChange={() => handleSelect("4+ BHK")} />
                                    <label className="btn btn-outline-primary w-100" htmlFor="btncheck6" style={{ boxShadow: 'none' }}>4+ BHK</label>
                                </div> */}
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
                                            style={{ height: '200px', objectFit: 'cover' }}
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

export default Searchm;
