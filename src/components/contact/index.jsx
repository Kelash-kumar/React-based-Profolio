import './contact.css';
// eslint-disable-next-line react/no-unescaped-entities
const Contact = () => {
    return (
      <section className="contact section">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2  className='section__title'>Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <h3>Let's talk about everything!</h3>
              </div>
            </div>
            <div className="col-md-6">
              <form
                action="https://formspree.io/f/xjvjjzqy"
                method="POST"
                className="contact-form"
              >
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
                <input
                  type="submit"
                  className="form-control submit"
                  value="SEND MESSAGE"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact;

