export default () => (
  <div id="footer">
    <div className="container medium">

      <header className="major last">
        <h2>Questions or comments?</h2>
      </header>

      <p>Please reach out for any reason! I am more than happy to answer anything you may be curious about!</p>

      <form method="post" action="#">
        <div className="row">
          <div className="col-6 col-12-mobilep">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="col-6 col-12-mobilep">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="col-12">
            <textarea name="message" placeholder="Message" rows="6"></textarea>
          </div>
          <div className="col-12">
            <ul className="actions special">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </div>
        </div>
      </form>

      <ul className="icons">
        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
        <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
      </ul>

    </div>
  </div>
)
