import React from "react";
import Navbar from "./../components/navbar";
import Footer from './../components/footer';

const shop = () => {
    const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is a short description of Product 1.',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is a short description of Product 2.',
      price: 49.99,
      originalPrice: 59.99,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is a short description of Product 3.',
      price: 19.99,
      originalPrice: 24.99,
      image: 'https://via.placeholder.com/300x200'
    },
     {
      id: 4,
      title: 'Product 4',
      description: 'This is a short description of Product 4.',
      price: 29.99,
      originalPrice: 23.99,
      image: 'https://via.placeholder.com/300x200'
    }
  ];
  return (
    
    <div>
         <Navbar />
      <h1 className="mt-4"> Shop Component</h1>
      <div>
        <div className="row">
            {products.map((product) => (
          <div className="col-md-3">
            <div className=" mt-5">
              <div className="card" >
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="Product Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                   {product.description}
                  </p>
                  <div className="d-flex justify-content-between">
                    <span className="text-success fw-bold">{product.price}</span>
                    <span className="text-muted">
                      <s>{product.originalPrice}</s>
                    </span>
                  </div>
                  <a href="#" className="btn btn-primary mt-3">
                    Buy Now
                  </a>
                  <a href="#" className="btn btn-outline-secondary mt-3">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
               ))}
        </div>
      </div>
    </div>
  );
};

export default shop;
