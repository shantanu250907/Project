import React from 'react'
import "./Selling.css";

const Selling = () => {
  return (
    <>
      <div className='contanier'>
        <h className='a' >Sell or Rent your Property for Free</h>
        <h className='b'>Looking for a Property?<a href='/Owner1' style={{ fontSize: '17px' }}>Click here!</a></h>
      </div>


      <div className='container bg-tertiary'>
        <div className='d-flex justify-content-center'>

          <div className='card' style={{ width: 400, height: 500 }}>
            <div className='card-body'>
              <h4 style={{ fontSize: '20px', marginLeft: '10px', marginBottom: '20px', fontWeight: 'bold', marginTop: '20px' }}>Why Post through us ?</h4>&nbsp;&nbsp;
              <img src='https://assets.nobroker.in/static/img/postYourProperty/Zero_Brokerage.svg' style={{ marginLeft: '30px', color: 'gray', fontWeight: 'lighter' }} />&nbsp;&nbsp;&nbsp;&nbsp;
              <label> Zero Brokerage</label>
              <br />&nbsp;&nbsp;
              <img src='https://assets.nobroker.in/static/img/postYourProperty/Tenant.svg' style={{ marginLeft: '30px', color: 'gray', fontWeight: 'lighter', marginTop: 'px' }} />&nbsp;&nbsp;&nbsp;&nbsp;
              <label style={{ marginTop: '15px' }}> Faster Tenants</label>
              <br />&nbsp;&nbsp;
              <img src='https://assets.nobroker.in/static/img/postYourProperty/tenant_buyer_connections.svg' style={{ marginLeft: '25px', color: 'gray', fontWeight: 'lighter', marginTop: '8px' }} />&nbsp;&nbsp;&nbsp;&nbsp;
              <label style={{ marginTop: '15px' }}> 10 lac tenants/buyers connections</label><br /><br />


              <h4 style={{ fontSize: '20px', marginLeft: '10px', marginBottom: '-20px', fontWeight: 'bold' }}>10 Lac+ Home Owners Trust Us</h4><br />&nbsp;&nbsp;
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <p>   I found Nobroker very helpful for house rent advertisements. The team was very responsive and enthusiastic to help us find a good tenant in a very short span of time. Within a week this property listing site was able to get me a tenant and exceed my expectations.</p>
                  </div>
                  <div class="carousel-item ">
                    <p>NoBroker is doing a very good job out there saving us all from the general brokers and from all those extra brokerage expenses. They have a lot of real estate ads and options to choose from, they will be with you until you find your house. They did a great job by helping me throughout the whole process.</p>
                  </div>
                  <div class="carousel-item">
                    <p>I posted a property ad online on NoBroker. Its an efficient real estate website because despite my busy schedule they did a great job of contacting me at the right times. To keep me updated they sent mails & messages. They found a great tenant for my rental property as per my demands.</p>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>


          <div className='card' style={{ width: 900, height: 500 }}>
            <div className='card-body'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type='text' id='name' name='name' placeholder=' Name' style={{ marginTop: 20, width: 350, height: 40, marginRight: 60 }} />
              <input type='email' id='email' name='email' placeholder=' Email' style={{ marginTop: 20, width: 350, height: 40 }} />


              <input type='tel' id='101' name='mobile' placeholder=' Ind +91  Mobile Number' style={{ marginTop: 20, marginLeft: 48, width: 350, height: 40, marginRight: 60 }} />
              <input type='text' id='111' name='city' placeholder=' City' style={{ marginTop: 20, width: 350, height: 40 }} />
              <br /><br />
              <h style={{ marginLeft: 45 }}>Get updates on Whatsapp </h>
              <br />
              <h6 style={{ marginBottom: 20 }}><center>Property Type</center></h6>

              <center><div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label class="btn btn-outline-danger" for="btnradio1" style={{ fontSize: 17, borderRadius: 3, paddingLeft: 20, paddingRight: 20,boxShadow:'none' }}>Residential</label>
                  &nbsp;&nbsp;
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked />
                <label class="btn btn-outline-danger" for="btnradio2" style={{ fontSize: 17, borderRadius: 2, paddingLeft: 20, paddingRight: 20,boxShadow:'none' }}>Commercial</label>
                &nbsp;&nbsp;
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked />
                <label class="btn btn-outline-danger" for="btnradio3" style={{ fontSize: 17, borderRadius: 3, paddingLeft: 20, paddingRight: 20,boxShadow:'none' }}>Land/Plot</label>
              </div></center><br />
              <div className='card' style={{ height: 115, width: 700, background: 'white', marginLeft: 90 }} >
                <h6 style={{ marginTop: 19, marginBottom: 17 }}><center>Select Property Ad Type</center></h6>
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" style={{ marginLeft: 60, marginRight: 60 }}>
                  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="btncheck1" style={{ fontSize: 17, borderRadius: 3, paddingLeft: 20, paddingRight: 20,boxShadow:'none' }} >Rent</label>
                  &nbsp;&nbsp;
                  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="btncheck2" style={{ fontSize: 17, borderRadius: 3, paddingLeft: 20, paddingRight: 20,boxShadow:'none' }}>Resale</label>
                  &nbsp;&nbsp;
                  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="btncheck2" style={{ fontSize: 17, borderRadius: 3, paddingLeft: 20, paddingRight: 20,boxShadow:'none' }}>PG/Hostels</label>
                  &nbsp;&nbsp;  
                  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
                  <label class="btn btn-outline-primary" for="btncheck3" style={{ fontSize: 17, borderRadius: 3, paddingLeft: 20, paddingRight: 20 ,boxShadow:'none'}}>Flatmates</label>
                </div>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto my-3">
                <button class="btn btn-danger" type="button" style={{boxShadow:'none'}}><center>Start Posting Your Ad for FREE</center></button>
               
              </div>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default Selling
