import React from "react";
import { GiCartwheel } from "react-icons/gi";
import { BiFlag } from "react-icons/bi";

const About = () => {
  return (
    <div className="about_section">
      <div className="container-fluid ">
        <div className="row g-0">
          {/* image */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6  order-1 order-sm-1 order-lg-1 order-md-1">
            <img
              src="https://electon6-store.myshopify.com/cdn/shop/files/about-2_700x650_crop_center.jpg?v=1673264657%27)"
              className="img-fluid h-100 object-fit-cover"
              alt=""
            />
          </div>
          {/* text */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6  order-2 order-sm-2 order-lg-1 order-md-1">
            <div className="d-flex justify-content-center  align-items-center h-100 p-5">
              <div className=" fw-semibold">
                <h6 className="text-primary"> Who we are</h6>
                <h3 className="fw-semibold   display-5">
                  PROFESSIONAL SUPPORT
                </h3>
                <p className=" ">
                  This striking collection is an inspiring take on the shape of
                  the initial letter adding a touch of modern luxury
                </p>
                <button className="btn btn-outline-primary text-uppercase py-3 px-4">
                  shop now
                </button>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6  order-3 order-sm-3 order-lg-1 order-md-1">
            <div className="d-flex justify-content-start  align-items-center h-100  p-5 ">
              <div className=" fw-semibold">
                <h6 className="text-primary"> Made with love</h6>
                <h3 className="fw-semibold   display-5">
                  PREMIUM DESIGN
                </h3>
                <p className=" ">
                  This striking collection is an inspiring take on the shape of
                  the initial letter adding a touch of modern luxury
                </p>
                <button className="btn btn-outline-primary text-uppercase py-3 px-4">
                  shop now
                </button>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6  order-2 order-sm-2 order-lg-1 order-md-1">
            <img
              src="https://electon6-store.myshopify.com/cdn/shop/files/about-1_700x650_crop_center.jpg?v=1673264657%27)"
              className="img-fluid h-100 object-fit-cover"
              alt=""
            />
          </div>
          {/* image */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6  order-3 order-sm-3 order-lg-1 order-md-1">
            <img
              src="https://electon6-store.myshopify.com/cdn/shop/files/about-3_700x650_crop_center.jpg?v=1673264657%27)"
              className="img-fluid h-100 object-fit-cover"
              alt=""
            />
          </div>
          {/* text */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-6  order-3 order-sm-3  order-lg-1 order-md-1">
            <div className="d-flex justify-content-center  align-items-center h-100  p-5">
              <div className="  fw-semibold">
                <h6 className="text-primary"> For everyday</h6>
                <h3 className="fw-semibold  display-5">
                  GENERAL DESTINATION
                </h3>
                <p className=" ">
                  This striking collection is an inspiring take on the shape of
                  the initial letter adding a touch of modern luxury
                </p>
                <button className="btn btn-outline-primary text-uppercase py-3 px-4">
                  shop now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row  py-5  text-secondary">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex justify-content-between align-items-center">
              <GiCartwheel size={140} className="text-primary p-3" />
              <div>
                <h5>Our vision</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
                  rutrum massa quis, porttitor lorem. Aliquam non est a ipsum
                  facilisis scelerisque eu sed lectus
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="d-flex justify-content-between align-items-center">
              <BiFlag size={140} className="text-primary p-3" />
              <div>
                <h5>Our mission</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
                  rutrum massa quis, porttitor lorem. Aliquam non est a ipsum
                  facilisis scelerisque eu sed lectus
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row   d-flex justify-content-center align-items-center flex-column" style={{height:'300px'}}   >
        <div className="position-absolute w-100   "    id="keyboard" ></div>
        <div className="position-absolute w-100   "  style={{height:'300px',background:'rgb(0, 0, 0,0.75)'}}   ></div>

            <div className="row z-1">
          
                <div className="col-6 col-sm-6 col-md-3 col-lg-3  ">
                <div className="text-white h-100 d-flex justify-content-center align-items-center flex-column ">
                    <p className=" fs-3">9521</p>
                    <p className="fs-5">Working hours</p>
                </div>
                </div>
                        
                <div className="col-6 col-sm-6 col-md-3 col-lg-3  ">
                <div className="text-white h-100 d-flex justify-content-center align-items-center flex-column ">
                    <p className=" fs-3">9521</p>
                    <p className="fs-5">Working hours</p>
                </div>
                </div>
                        
                <div className="col-6 col-sm-6 col-md-3 col-lg-3  ">
                <div className="text-white h-100 d-flex justify-content-center align-items-center flex-column ">
                    <p className=" fs-3">9521</p>
                    <p className="fs-5">Working hours</p>
                </div>
                </div>
                        
                <div className="col-6 col-sm-6 col-md-3 col-lg-3  ">
                <div className="text-white h-100 d-flex justify-content-center align-items-center flex-column ">
                    <p className=" fs-3">9521</p>
                    <p className="fs-5">Working hours</p>
                </div>
                </div>
            </div>
        </div>

        <div className="row text-center py-5 ">
            <h3 className="fs-1 fw-bold">OUR TEAM</h3>
            <p>Lorem ipsum is printing & typesetting industry's standard <br /> dummy text since texts</p>
        </div>

        <div className="row mx-2">
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 ">
                <img src="https://electon6-store.myshopify.com/cdn/shop/files/team-1.jpg?v=1673264657" alt=""  className="img-fluid pb-1" id="ourTeam"/>
                <h5>Maudud hossain</h5>
                <p className="text-secondary">Programmer</p>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 ">
                <img src="https://electon6-store.myshopify.com/cdn/shop/files/team-2.jpg?v=1673264657" alt=""  className="img-fluid pb-1" id="ourTeam"/>
                <h5>Nina theresa</h5>
                <p className="text-secondary">Managing director</p>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 ">
                <img src="https://electon6-store.myshopify.com/cdn/shop/files/team-3.jpg?v=1673264657" alt=""  className="img-fluid pb-1" id="ourTeam"/>
                <h5>Calista rose</h5>
                <p className="text-secondary">Manager</p>
            </div>
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 ">
                <img src="https://electon6-store.myshopify.com/cdn/shop/files/team-4.jpg?v=1673264657" alt=""  className="img-fluid pb-1" id="ourTeam"/>
                <h5>James micky</h5>
                <p className="text-secondary">Designer</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
