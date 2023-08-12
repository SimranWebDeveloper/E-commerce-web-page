import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { NavLink, Outlet } from "react-router-dom";

const Collection = () => {
  const { data, setData } = useContext(GlobalContext);

  return (
    <div className="collection_section py-5">
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div id="phone"  className="electronic d-flex justify-content-center align-items-center" >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">Smartfonlar</button>

                <NavLink to={`/shop/smartphones`} id="phone-btn-2" className="btn  fw-semibold text-center">      Shop now    </NavLink>
                
              


          

              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div id="laptop"   className="electronic d-flex justify-content-center align-items-center"  >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">   Notbuklar, PC, Plansetler    </button>
                <NavLink to={`/shop/laptops-notebooks`} id="phone-btn-2" className="btn  fw-semibold">  Shop now    </NavLink>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div id="tablet"   className="electronic d-flex justify-content-center align-items-center"  >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">   Tabletler   </button>
                <NavLink to={`/shop/tablets`} id="phone-btn-2" className="btn  fw-semibold">            Shop now    </NavLink>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              id="camera"
              className="electronic d-flex justify-content-center align-items-center"
            >
              <div className="position_r">
                <button
                  id="phone-btn-1"
                  className="btn fw-semibold"
                  onClick={() => setCategory("camera")}
                >
                  Camera
                </button>
                <NavLink to={`/shop/camera`} id="phone-btn-2" className="btn  fw-semibold">             Shop now    </NavLink>

              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              id="tv"
              className="electronic d-flex justify-content-center align-items-center"
            >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">
                  TV
                </button>
                <NavLink to={`/shop/tv`} id="phone-btn-2" className="btn  fw-semibold">                 Shop now    </NavLink>

              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              id="home"
              className="electronic d-flex justify-content-center align-items-center"
            >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">
                  Meiset texnikasi
                </button>
                <NavLink to={`/shop/home-decoration`} id="phone-btn-2" className="btn  fw-semibold">    Shop now    </NavLink>

              </div>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              id="phone_a"
              className="electronic d-flex justify-content-center align-items-center"
            >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">
                  Telefon aksessuarları
                </button>
                <NavLink to={`/shop/phone_a`} id="phone-btn-2" className="btn  fw-semibold">            Shop now    </NavLink>

              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              id="laptop_a"
              className="electronic d-flex justify-content-center align-items-center"
            >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">
                  Kompüter aksessuarları
                </button>
                <NavLink to={`/shop/laptop_a`} id="phone-btn-2" className="btn  fw-semibold">           Shop now    </NavLink>

              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              id="child"
              className="electronic d-flex justify-content-center align-items-center"
            >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">
                  Usaq alemi
                </button>
                <NavLink to={`/shop/child`} id="phone-btn-2" className="btn  fw-semibold">              Shop now    </NavLink>

              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              id="fan"
              className="electronic d-flex justify-content-center align-items-center"
            >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">
                  Kondisioner
                </button>
                <NavLink to={`/shop/fan`} id="phone-btn-2" className="btn  fw-semibold">                Shop now    </NavLink>

              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              id="wash"
              className="electronic d-flex justify-content-center align-items-center"
            >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">
                  Paltaryuyan
                </button>
                <NavLink to={`/shop/wash`} id="phone-btn-2" className="btn  fw-semibold">               Shop now    </NavLink>

              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              id="car"
              className="electronic d-flex justify-content-center align-items-center"
            >
              <div className="position_r">
                <button id="phone-btn-1" className="btn fw-semibold">
                  Avtomobil hisseleri
                </button>
                <NavLink to={`/shop/car`} id="phone-btn-2" className="btn  fw-semibold">                Shop now    </NavLink>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
