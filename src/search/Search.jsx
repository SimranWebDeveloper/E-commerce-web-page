import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import SingleCard from "../pages/home/myproduct/SingleCard";

const Search = () => {
  // get search input  value
  const { search, setSearch } = useContext(GlobalContext);
  // console.log(search);

  // get All data
  const { data } = useContext(GlobalContext);

  //filter All data
  const filterData = (titleName) => {
  

    const filteredData = data.filter((element) => element.title.toLowerCase().includes(titleName));
    return filteredData;
  };

  return (
    <div className="Search-section py-5">
      <div className="container">
        <div className="row">
          {filterData(search).map((element, index) => {
            return <SingleCard product={element} key={element.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
