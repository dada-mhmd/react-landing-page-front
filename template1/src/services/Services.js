import "./services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="container">
        <h2 className="special-heading">Services</h2>
        <p>Don't be busy, be productive</p>
        <div className="services-content">
          <div className="col">
            <div className="srv">
              <i className="fas fa-palette fa-2x"></i>
              <div className="text">
                <h3>Graphic Design</h3>
                <p>
                  Graphic design is the process of visual communication and
                  problem-solving using one or more of typography, photography
                  and illustration
                </p>
              </div>
            </div>
            <div className="srv">
              <i className="fab fa-sketch fa-2x"></i>
              <div className="text">
                <h3>UI & UX</h3>
                <p>
                  Process of enhancing user satisfaction with a product by
                  improving the usability, accessibility, and pleasure provided
                  in the interaction
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="srv">
              <i className="fas fa-vector-square fa-2x"></i>
              <div className="text">
                <h3>Web Design</h3>
                <p>
                  Web design encompasses many different skills and discipline in
                  the production and maintenance of websites.
                </p>
              </div>
            </div>
            <div className="srv">
              <i className="fas fa-pencil-ruler fa-2x"></i>
              <div className="text">
                <h3>Web Development</h3>
                <p>
                  Web development is a broad term of the work involved in
                  developing a website for the Internet or an intarnet
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image image-column">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
