import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import visa from "../pages/home/img/visa.png";
import paypal from "../pages/home/img/paypal.png";
import master from "../pages/home/img/master.png";
import american from "../pages/home/img/american.png";
import watchImg687 from "../images/wristwatch_687.jpg";
import { TransformComponent, TransformWrapper, useControls } from "react-zoom-pan-pinch";

const DetailsProduct = () => {
  // Navlink id of product
  const { id } = useParams();
  console.log(id);
  // All data
  const { data } = useContext(GlobalContext);
  // console.log(allData);

  // product object
  const detailedProduct = data.find((item) => item.id.toString() === id);
  console.log('detailedProduct',detailedProduct.images[0]);

  // For change image
  const [imageSrc, setImageSrc] = useState();

  const setImageSrcFunc = (src) => {
    setImageSrc(src);
  };

  // When detailProduct refresh, set thumbnail
  // ? when comes none not error
  // ?? when comes  null or undefine give use '' outwise value
  useEffect(() => {
    setImageSrc(detailedProduct?.thumbnail);
    
  }, [detailedProduct]);

  // Zoom icin
  const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools w-100">
      <button className="btn btn-outline-danger" onClick={() => zoomIn()}>+</button>
      <button className="btn btn-outline-danger" onClick={() => zoomOut()}>-</button>
      <button className="btn btn-outline-danger" onClick={() => resetTransform()}>x</button>
    </div>
  );
};

  return (
    <>
      <div className="detailsProduct-section p-5 ">
        <div className="container">
          <div className="row">
            <p className="fs-3" style={{ textShadow: "2px 2px 3px #8D8D8D " }}>
              Əsl baxılası kampaniya Kontakt-da!{" "}
              <span className="fw-semibold text-danger">30</span> avqustadək
              hissəli alışda 24 ayadək faizsiz təkliflər, nağd alışda{" "}
              <span className="fw-semibold text-danger">{`${Math.ceil(
                detailedProduct?.discountPercentage
              )}`}</span>
              -%-dək endirimlər var!
            </p>
{/* {import.meta.env.VITE_BACKEND_URL + product.images[0]} */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 " >
              <div className="row ">
                {/* ul images  */}
                <div className="col-12 col-sm-12 col-md-2 col-lg-2 ">
                  <ul className="list-unstyled d-flex d-lg-block d-md-block ">
                    <li className="border p-2">
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL+ detailedProduct?.images[0]}`}
                        alt=""
                        className="img-fluid"
                        onClick={() =>
                          setImageSrcFunc(detailedProduct?.images[0])
                        }
                      />
                    </li>
                    <li className="border p-2">
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL+detailedProduct?.images[1]}`}
                        alt=""
                        className="img-fluid"
                        onClick={() =>
                          setImageSrcFunc(detailedProduct?.images[1])
                        }
                      />
                    </li>
                    <li className="border p-2">
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL+detailedProduct?.images[2]}`}
                        alt=""
                        className="img-fluid"
                        onClick={() =>
                          setImageSrcFunc(detailedProduct?.images[2])
                        }
                      />
                    </li>
                    <li className="border p-2">
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL+detailedProduct?.images[3]}`}
                        alt=""
                        className="img-fluid"
                        onClick={() =>
                          setImageSrcFunc(detailedProduct?.images[3])
                        }
                      />
                    </li>
                    <li className="border p-2">
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL+detailedProduct?.images[4]}`}
                        alt=""
                        className="img-fluid"
                        onClick={() =>
                          setImageSrcFunc(detailedProduct?.images[4])
                        }
                      />
                    </li>
                  </ul>
                </div>
                {/* detail images  */}
                <div className="col-12 col-sm-12 col-md-10 col-lg-10  "  >
                  <TransformWrapper
                        initialScale={1}
                        initialPositionX={200}
                        initialPositionY={100}
                        wheel={{ disabled: true }} // Maus təkəri ilə zoom deaktiv edilir
                        doubleWheel={{ disabled: true }} // İki barmaqla zoom deaktiv edilir
                        panning={{ disabled: true }} // Sürükləmə deaktiv edilir
                      >
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                          <>
                            <Controls />
                            <TransformComponent>
                              <img className="w-100" src={import.meta.env.VITE_BACKEND_URL+ imageSrc ?? ""} alt="test" />
                              {/* <div>Example text</div> */}
                            </TransformComponent>
                          </>
                        )}
                      </TransformWrapper>
                      
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4" >
              <div className="center-left h-100">
                <h2>{`${detailedProduct?.title}`}</h2>
                <ul className="list-unstyled d-flex justify-content-between  w-75">
                  <li>
                    <NavLink
                      to={
                        "https://www.visa.com.az/az_AZ/pay-with-visa/find-a-card/debit-cards.html"
                      }
                    >
                      <img src={visa} style={{ width: "50px" }} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"https://www.paypal.com/az/home"}>
                      <img src={paypal} style={{ width: "50px" }} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"https://www.mastercard.az/az-az.html"}>
                      <img src={master} style={{ width: "50px" }} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"https://www.americanexpress.com/"}>
                      <img src={american} style={{ width: "50px" }} />
                    </NavLink>
                  </li>
                </ul>
                <span>qiymet</span>
                <br />
                <p
                  className=" fs-1 fw-semibold text-decoration-line-through"
                  style={{ textDecorationColor: "blue !important" }}
                >{`${detailedProduct?.price} ₼`}</p>
                <p className="text-danger fs-2 fw-semibold">{`${Math.ceil(
                  detailedProduct?.price -
                    (detailedProduct?.price *
                      Math.ceil(detailedProduct?.discountPercentage)) /
                      100
                )} ₼`}</p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div
                className="fs-5"
                style={{ textShadow: "2px 2px 3px #8D8D8D " }}
              >
                <h3>Properties</h3>
                <hr />
                <p>{`Brand: ${detailedProduct?.brand}`}</p>
                <p>{`Model: ${detailedProduct?.title}`}</p>
                <p>{`Category: ${detailedProduct?.category}`}</p>
                <p>{`Description: ${detailedProduct?.description}`}</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6"></div>
          </div>
        </div>
      </div>

      {}
    </>
  );
};

export default DetailsProduct;
