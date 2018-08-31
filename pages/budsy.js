import Layout from '../components/Layout'

export default () => (
<Layout>
  <div id="header">
    <span className="logo icon fa-leaf"></span>
    <h1>Budsy</h1>
  </div>
  <div id="main">
    <div className="box alt container">
      <section className="feature left">
        <a href="https://vimeo.com/283833042" target="_blank" rel="noopener noreferrer" className="image list"><img src="static/images/budsyapp.png" alt="" /></a>
        <div className="content">
          <h3>Customer Application</h3>
          <p>Giving a responsive interface for customers to order marijuana through pickup or delivery.</p>
        </div>
      </section>
      <section className="feature right">
        <a href="https://vimeo.com/283838463" target="_blank" rel="noopener noreferrer" className="image list" alt=""><img src="static/images/budsydashboard.png" alt="" /></a>
        <div className="content">
          <h3>Dashboard Application</h3>
          <p>Used to process the incoming orders for the customers.</p>
        </div>
      </section>
      <section className="feature left">
        <a href="http://www.budsy.io" target="_blank" rel="noopener noreferrer" className="image list"><img src="static/images/budsywebsite.png" alt="" /></a>
        <div className="content">
          <h3>Landing Page</h3>
          <p>Gives the user an introduction to the service to allow for easy onboarding.</p>
        </div>
      </section>
      <section className="feature right">
        <a href="https://vimeo.com/283841207" target="_blank" rel="noopener noreferrer" className="image list"><img src="static/images/budsynative.png" alt="" /></a>
        <div className="content">
          <h3>Native Application</h3>
          <p>
            Allows us to bring the non-transactional aspects of customer application to app store
            to avoid infringing on App Store/ Play Store policies of cannabis ordering limitations.
          </p>
        </div>
      </section>
    </div>
    <div className="box container">
      <header>
        <h2>About</h2>
      </header>
      <section>
        <header>
          <h3>Customer App</h3>
        </header>
        <ul className="default">
          <li>Using Create-React-App as the React rendering engine, I was responsible for this application capable of interacting with
          our Django backend web services. The designs are based on initial UX wireframes that were adapted to fit unexpected app screens.</li>
          <li>The application uses server-side events to render incoming orders in real time.</li>
          <li>The application was originally deployed using Vagrant to manage a controlled environment but
          proved to be much too memory intesive to keep using as our main deployment strategy.
          We are currently migrating to Docker to leverage the performance and cost savings of containers
          deployed on our IBM Bluemix Cloud instances.</li>
          <li>The application uses a portion of Redux to manage pieces of state that span multiple layers of components.</li>
          <li>Using a combination of Jest, Enzyme, Nock, and Puppeteer, we are able to run unit tests and end-to-end integration tests for key aspects of design.</li>
        </ul>
        <hr />
        <header>
          <h3>Dashboard App</h3>
        </header>
        <ul className="default">
          <li>Again, using Create-React-App, we developed an application that was going to be our back office management for incoming orders.</li>
          <li>Using this application, we are able to add strains for dispensaries, add deals for dispensaries, check the status of each order, process each order, and approve customers based on
          identification card and/or medical recommendations.</li>
          <li>We currently deploy the application as a standalone Node project onto IBM Bluemix but we are working on implementing Docker to better manage the code enviroment</li>
          <li>The application uses a portion of Redux to manage pieces of state that span multiple layers of components.</li>
        </ul>
        <hr />
        <header>
          <h3>Landing Page</h3>
        </header>
        <ul className="default">
          <li>This static application is responsible for educating the public and potential parters about our service and value proposition</li>
          <li>Using SCSS, we are able to efficiently process the resulting CSS to minimize redudant code.</li>
        </ul>
        <hr />
        <header>
          <h3>Native Application</h3>
        </header>
        <ul className="default">
          <li>As a personal contribution to the team, I was responsible for
            developing the first AI system that we use for our recommendation engine.
            The inital Node application that did the recommendations was adapted to become the engine for this application.
          </li>
          <li>Because the App Store/ Play Store don't allow cannabis transactions, we were initially weary about developing on native platforms.</li>
          <li>We later decided to provide an insight into our recommendation system by allowing people to try it out and hopefully get driven to our web application.</li>
          <li>I am using React Native, react-navigation, and Expo to develop the application. I am also working on a Node/Express backend to provide the necessary web services to power the application</li>
          <li>Mostly leveraging statistical javascript libraries, we are starting to incorporate user feedback and behavior. New development is using python though numpy and sklearn to develop basic models.</li>
        </ul>
      </section>
    </div>
  </div>
  </Layout>
)
