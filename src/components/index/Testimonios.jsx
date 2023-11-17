import React from "react";

const Testimonios = () => {
  return (
    <div className="section-area section-sp2 bg-fix bg-black" style={{ backgroundImage: "url(assets/images/background/bg1.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white heading-bx text-center">
            <div className="col-md-12 heading-bx left">
              <h1 className="title-head text-uppercase mt-5 ">
                opiniones <span>nuestras</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                impedit molestias quibusdam, at rem quaerat, atque beatae
                delectus
              </p>
            </div>
          </div>
        </div>
        <div>
          {/*coments*/}
          <div className="row bg-black">
        <div className="col-2 mt-2 d-flex justify-content-end">
          <img
            className="d-flex mt-5 rounded-circle bg-dark"
            src=""
            alt="Image Description"
            style={{ width: '50px', height: '50px' }}
          />
        </div>
        <div className="col-8 bg-dark rounded mb-5 mt-5">
          <div>
            <div className=" text-white">
              <h5 className="mb-0">John Doe</h5>
              <span className="text-secondary mx-2">5 days ago</span>
              <p className="mt-2 text-secondary">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in faucibus
                ras purus odio, vestibulum in vulputate at, tempus viverra
                turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
          {/*coments end*/}
                    {/*coments*/}
                    <div className="row d-flex justify-content-center">

        <div className="col-8 bg-dark rounded mb-5 ">
          <div>
            <div className=" text-white text-end">
              <h5 className="mb-0">John Doe</h5>
              <span className="text-secondary mx-2">5 days ago</span>
              <p className="mt-2 text-secondary">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in faucibus
                ras purus odio, vestibulum in vulputate at, tempus viverra
                turpis.
              </p>
            </div>
          </div>
        </div>
                <div className="col-1 mt-2 d-flex justify-content-start">
          <img
            className="d-flex mt-5 rounded-circle bg-dark"
            src=""
            alt="Image Description"
            style={{ width: '50px', height: '50px' }}
          />
        </div>
      </div>
          {/*coments end*/}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
