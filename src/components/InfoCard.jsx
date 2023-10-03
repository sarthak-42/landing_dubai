import React from "react";
import Rating from "@mui/material/Rating";






export default function InfoCard(props) {
  const textStyle = {
    textDecoration: 'none'
  }
  return (
    <>
      {props.details.map((value, index) => (
  
 
        <div className="col-md-3 d-inline-flex px-4 ">
       
          <a href={value.urlToPage} style={textStyle}>
            <div className="card " style={{ width: "20rem" }} key={index}>
              <img
                src={value.imageUrl}
                className="card-img-top"
                alt="..."
                height={250}
              />
              <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.description}</p>
              </div>
              {/* <ul className="list-group list-group-flush">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
    </ul> */}
              <div className="card-body d-flex justify-content-evenly align-items-center ">
                <Rating name="read-only" value={value.rating} readOnly />
                <div className="container d-flex justify-content-end">
                  Starting From
                  <br></br>
                  {value.price}
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
