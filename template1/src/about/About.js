import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2 className="special-heading">About</h2>
        <p>Less is more work</p>
        <div className="about-content">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFib3V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              tempora aliquid perspiciatis similique eum odit, doloribus et.
              Aliquam, dolorum? Placeat neque saepe quisquam a earum, facilis
              inventore itaque voluptatem ipsam.
            </p>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              accusantium dicta consectetur ea quod sed repudiandae provident
              nesciunt rem nisi perspiciatis, minus aspernatur obcaecati
              deserunt quaerat quas in iusto omnis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
