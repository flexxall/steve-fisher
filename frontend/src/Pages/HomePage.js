import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="row col-sm-4 col-md-3 col-lg-2 mx-5 my-4 float-end">
        <button className="btn btn-outline-info">Download Resume</button>
      </div>
      <div className="row mx-auto col-12">
        <img
          src="/images/IMG_2146.jpg"
          className="col-5 col-xl-4 p-0 mx-auto"
          alt="Steve Fisher"
        />
      </div>
      <h1 className="text-center name-container">Steve Fisher</h1>
      <div className="row mx-auto text-center pt-4 col-12">
        <span className="myfont">My Projects</span>
      </div>
    </>
  );
};

export default HomePage;
