import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import SingleShopCard from "./SingleShopCard";
import { CgMenuGridO, CgMenu } from "react-icons/cg";
import SingleShopCardFull from "./SingleShopCardFull";
import { NavLink, useParams,useSearchParams } from "react-router-dom";

const Shop = () => {
  // get All data
  const { data } = useContext(GlobalContext);


  let{ categoryName}=useParams()
  console.log(categoryName);



  //filter All data
  const filterData = (categoryName) => {
    if (categoryName=='all') return data
    else {
        const filteredData = data.filter((element) => element.category == categoryName);
      // window.location.reload()
      return filteredData;
    }
  };

  // card situation small or large
  const [situation, setSituation] = useState(true);



  return (
    <section className="shop-section">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <h3>Categories</h3>
            <ul className="list-unstyled  ">
              <li><NavLink to={`/shop/all`} id="phone-btn-2" className="btn  fw-semibold">                Butun mehsullar                </NavLink></li>
              <li><NavLink to={`/shop/smartphones`} id="phone-btn-2" className="btn  fw-semibold">        Smartfonlar                 </NavLink></li>
              <li><NavLink to={`/shop/laptops-notebooks`} id="phone-btn-2" className="btn  fw-semibold">  Notbuklar, PC, Plansetler    </NavLink></li>
              <li><NavLink to={`/shop/tablets`} id="phone-btn-2" className="btn  fw-semibold">            Tabletler                     </NavLink></li>
              <li><NavLink to={`/shop/camera`} id="phone-btn-2" className="btn  fw-semibold">             Camera                        </NavLink></li>
              <li><NavLink to={`/shop/tv`} id="phone-btn-2" className="btn  fw-semibold">                 TV                            </NavLink></li>
              <li><NavLink to={`/shop/home-decoration`} id="phone-btn-2" className="btn  fw-semibold">    Meiset texnikasi               </NavLink></li>
              <li><NavLink to={`/shop/phone_a`} id="phone-btn-2" className="btn  fw-semibold">            Telefon aksessuarları         </NavLink></li>
              <li><NavLink to={`/shop/laptop_a`} id="phone-btn-2" className="btn  fw-semibold">           Kompüter aksessuarları         </NavLink></li>
              <li><NavLink to={`/shop/child`} id="phone-btn-2" className="btn  fw-semibold">              Usaq alemi                    </NavLink></li>
              <li><NavLink to={`/shop/fan`} id="phone-btn-2" className="btn  fw-semibold">                Kondisioner                   </NavLink></li>
              <li><NavLink to={`/shop/wash`} id="phone-btn-2" className="btn  fw-semibold">               Paltaryuyan                   </NavLink></li>
              <li><NavLink to={`/shop/car`} id="phone-btn-2" className="btn  fw-semibold">                Avtomobil hisseleri           </NavLink></li>
              
              
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="img-box">
              <img src="https://electon6-store.myshopify.com/cdn/shop/files/collection-pages.jpg?v=1650968334"  alt=""
                className="img-fluid" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              non totam eum velit voluptas adipisci, ab vel voluptates soluta
              error cumque iusto facilis, aspernatur reprehenderit! Et
              distinctio amet expedita nemo tempore similique consequatur ipsa
              iste, natus magni deserunt optio fugiat laboriosam eos placeat
              mollitia aliquid architecto nobis odio fuga nisi.
            </p>
            <hr />
            <div className="container-fluid">
              <span>
                <button className="btn" onClick={() => setSituation(!situation)}><CgMenuGridO /> </button>
              </span>
              <span>
                <button className="btn" onClick={() => setSituation(!situation)}><CgMenu /> </button>
              </span>

              <div className="row">
                {filterData(categoryName).map((element, index) => {
                  return situation ? (<SingleShopCard product={element} key={element.id} />) 
                  :                  (<SingleShopCardFull product={element} key={element.id} />);
                })}
                                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;







