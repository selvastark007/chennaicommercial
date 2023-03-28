import React, { useEffect, useState } from "react";
import axios from "axios";

// sass
import "./Filter2.scss";

// Bootstarp
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";

// Data
import {
  saleProperties,
  cardDatas,
  FeaturedListing,
  RecentSearch,
} from "../../components/data/DataHome";

// icon
import {
  BsFillGridFill,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";

// pagination
import ReactPaginate from "react-paginate";

const Filter2 = () => {

  const [posts, setPosts] = useState([]);

  const API_URL = "https://chennai-commercials-admin-mern.vercel.app/api/v2/properties/"

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
    .get(`${API_URL}`,{ cancelToken: cancelToken.token})
    .then((responce) => {
    console.log('response',responce)
    const data = responce.data?.data ? responce.data?.data : null ;
      setPosts(data)
     })
     .catch((error) => {
      console.warn(error)
     })
     return () => {
      cancelToken.cancel()
     }
  }, []);

  const [card2, setCard2] = useState("card");
  const reset = () => {
    return setCard2("card");
  };

  const card2Click = () => {
    return setCard2("card2");
  };

  const handlePageClick = (data) => {
    console.log(data.selected);
  };
  return (
    <>
      <div className="filter2-wrapper">
        <div className="filter2 py-3">
          <Container>
            <div className="filter2__searchSection py-4">
              <form action="" className="form">
                <select aria-label="Default select example">
                  <option>Property type</option>
                  {saleProperties.map((salePropertie) => {
                    return (
                      <option
                        key={salePropertie.id}
                        value={salePropertie.title}
                      >
                        {salePropertie.title}
                      </option>
                    );
                  })}
                </select>

                <select aria-label="Default select example">
                  <option>Type</option>
                  <option value="rent">Rent</option>
                  <option value="sale">Sale</option>
                </select>

                <select aria-label="Default select example">
                  <option>Loaction</option>
                  {saleProperties.map((salePropertie) => {
                    return (
                      <option
                        key={salePropertie.id}
                        value={salePropertie.location}
                      >
                        {salePropertie.location}
                      </option>
                    );
                  })}
                </select>

                <button type="submit" className="submit">
                  {" "}
                  Submit
                </button>
              </form>
            </div>
          </Container>
          <div className="filter2__mainSection-wrapper">
            <Container>
              <div className="mainSection d-flex py-4">
                <div className="mainSection__left">
                  <div className="result__title pt-2">
                    <p>
                      Showing all Properties listings tagged "Good condition"
                    </p>
                  </div>
                  <hr />
                  <div className="resultSort d-flex py-4">
                    <div className="resultSort__left">
                      <p>15 Results found</p>
                    </div>
                    <div className="resultSort__right d-flex">
                      <p>sort by :</p>
                      <select aria-label="Default select example">
                        <option>Date</option>
                        <option value="price">Price</option>
                        <option value="sqft">Sqft</option>
                        <option value="land">Land</option>
                      </select>
                      <div className="icons d-flex">
                        <i onClick={reset}>
                          <BsFillGridFill />
                        </i>
                        <i onClick={card2Click}>
                          <BsGrid3X3GapFill />
                        </i>
                        {/* <i onClick={card2Click}>
                          <FaThList />
                        </i> */}
                      </div>
                    </div>
                  </div>
                  <div className={` ${card2} d-grid`}>
                    {cardDatas.map((cardData) => {
                      return (
                        <div className="imgDiv" key={cardData.id}>
                          <div className="imgDiv__top">
                            <img src={cardData.img} alt={cardData.title} />
                            {/* <button>
                              <BsBookmarkHeartFill />
                            </button> */}
                          </div>
                          <div className="imgDiv__bottom py-2">
                            <p>{cardData.title}</p>
                            <p>
                              <strong>Price : </strong> {cardData.price}
                            </p>
                            <small>
                              <GoLocation /> {cardData.location}
                            </small>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* pagination start */}
                  <div className="pagination d-flex justify-content-center mt-4">
                    <ReactPaginate
                      previousLabel={"<<"}
                      nextLabel={">>"}
                      breakLabel={"..."}
                      pageCount={4}
                      marginPagesDisplayed={3}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextClassName={"page-item"}
                      nextLinkClassName={"page-link"}
                      breakClassName={"page-item"}
                      breakLinkClassName={"page-link"}
                      activeClassName={"active"}
                    />
                  </div>
                  {/* pagination end */}
                </div>
                <div className="mainSection__right">
                  <div className="filterForm mb-5">
                    <div className="title">
                      <h4>Filter Listing</h4>
                    </div>
                    <form action="">
                      <div className="listingType py-2">
                        <label htmlFor="">Listing type</label>
                        <select name="" id="">
                          <option value="rent">Rent</option>
                          <option value="Sale">Sale</option>
                          <option value="Lese">Lease</option>
                        </select>
                      </div>
                      <div className="keyWord py-2">
                        <label htmlFor="key">Keyword</label>
                        <input type="text" id="key" />
                      </div>
                      <div className="price d-flex py-2">
                        <div className="priceF">
                          <label htmlFor="priceFrom">Price From</label>
                          <input type="text" name="priceFrom" id="priceFrom" />
                        </div>
                        <div className="priceT">
                          <label htmlFor="priceTo">Price To</label>
                          <input type="text" name="priceTo" id="priceTo" />
                        </div>
                      </div>
                      <div className="filterButton py-2">
                        <button>Filter</button>
                      </div>
                    </form>
                  </div>
                  <div className="featuredListing my-3">
                    <div className="title">
                      <h4>Featured Listing</h4>
                    </div>

                    {FeaturedListing.map(({ id, img, location, sqft }) => {
                      return (
                        <div
                          className="featuredListing__card d-flex my-2"
                          key={id}
                        >
                          <div className="imgDiv">
                            <img src={img} alt={location} />
                          </div>
                          <div className="content">
                            <p>{location}</p>
                            <small>{sqft}</small>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="recentSearch my-3">
                    <div className="title">
                      <h4>Recent Search</h4>
                    </div>
                    {RecentSearch.map(({ id, img, location, sqft }) => {
                      return (
                        <div
                          className="recentSearch__card d-flex my-2"
                          key={id}
                        >
                          <div className="imgDiv">
                            <img src={img} alt={location} />
                          </div>
                          <div className="content">
                            <p>{location}</p>
                            <small>{sqft}</small>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter2;
