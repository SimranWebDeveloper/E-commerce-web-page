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
  // console.log(categoryName);



  //filter All data
  const filterDataFunc = (categoryName) => {
    if (categoryName=='all') return data
    else {
        const filteredData = data.filter((element) => element.category == categoryName);
      // window.location.reload()
      return filteredData;
    }
  };

  // card situation small or large
  const [situation, setSituation] = useState(true);

  // visible when click filter
  const [filterSituation,setfilterSituation]=useState(false)


// seting product which one category filtered
const[categoryData,setCategoryData]=useState([])
useEffect(()=> {
  setCategoryData(filterDataFunc(categoryName))
},[categoryName])
console.log(categoryData);

// fiter content name (min,max,a-z)
const [forFilter,setForFilter]=useState('')

// call filterCategoryFunc() function when forFilter-state change
useEffect(()=> {
  filterCategoryFunc()
},[forFilter])



 // Resul array
const[resultArr,setResultArr]=useState([])

  // Filter product which one category filtered
    const filterCategoryFunc = () => {
      
    if      (forFilter=='min')   setResultArr( categoryData.sort((a,b)=>b.price-a.price) )
    else if (forFilter=='max')   setResultArr( categoryData.sort((a,b)=>a.price-b.price) )
    else if (forFilter=='a-z')   setResultArr( categoryData.sort((a,b)=>{  if ((a.title).toLowerCase() > (b.title).toLowerCase())    return -1;    }) )
    else if (forFilter=='z-a')   setResultArr( categoryData.reverse((a,b)=>{if ((a.title).toLowerCase()< (b.title).toLowerCase())   return -1;    }) )
 

  }



  return (
    <section className="shop-section">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block">
            <h3>Categories</h3>
            <ul className="list-unstyled  ">
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/all`} id="phone-btn-2" className="btn  fw-semibold">                Butun mehsullar                </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/smartphones`} id="phone-btn-2" className="btn  fw-semibold">        Smartfonlar                 </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/laptops-notebooks`} id="phone-btn-2" className="btn  fw-semibold">  Notbuklar, PC, Plansetler    </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/tablets`} id="phone-btn-2" className="btn  fw-semibold">            Tabletler                     </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/camera`} id="phone-btn-2" className="btn  fw-semibold">             Camera                        </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/tv`} id="phone-btn-2" className="btn  fw-semibold">                 TV                            </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/home-decoration`} id="phone-btn-2" className="btn  fw-semibold">    Meiset texnikasi               </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/phone_a`} id="phone-btn-2" className="btn  fw-semibold">            Telefon aksessuarları         </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/laptop_a`} id="phone-btn-2" className="btn  fw-semibold">           Kompüter aksessuarları         </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/child`} id="phone-btn-2" className="btn  fw-semibold">              Usaq alemi                    </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/fan`} id="phone-btn-2" className="btn  fw-semibold">                Kondisioner                   </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/wash`} id="phone-btn-2" className="btn  fw-semibold">               Paltaryuyan                   </NavLink></li>
              <li><NavLink onClick={()=>setfilterSituation(false)} to={`/shop/car`} id="phone-btn-2" className="btn  fw-semibold">                Avtomobil hisseleri           </NavLink></li>
              
              
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
              <div className="d-flex justify-content-between">
                <div>
                  <span>
                    <button className="btn" onClick={() => setSituation(!situation)}><CgMenuGridO /> </button>
                  </span>
                  <span>
                    <button className="btn" onClick={() => setSituation(!situation)}><CgMenu /> </button>
                  </span>
                </div>
                <div>


                    <button className="btn" onClick={()=>{setForFilter('min');setfilterSituation(true)}}>Ucuzdan bahaya</button>
                    <button className="btn" onClick={()=>{setForFilter('max');setfilterSituation(true)}}>Bahadan ucuza</button>
                    <button className="btn" onClick={()=>{setForFilter('a-z');setfilterSituation(true)}}>a-z</button>
                    <button className="btn" onClick={()=>{setForFilter('z-a');setfilterSituation(true)}}>z-a</button>

                  
                </div>
              </div>

              <div className="row">
                
              {/* { 
         

          resultArr
                      .map((element, index) => {
                      return situation ? (<SingleShopCard product={element} key={element.id} />) 
                      :                  (<SingleShopCardFull product={element} key={element.id} />);
                    })
                } */}
                {(filterSituation ? resultArr :filterDataFunc(categoryName))
                    .map((element, index) => {
                      return situation ? (<SingleShopCard product={element} key={element.id} />) 
                      :                  (<SingleShopCardFull product={element} key={element.id} />);
                    })
                }

                                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;







