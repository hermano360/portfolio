import Layout from '../components/Layout'

export default () => (
<Layout>
  <div id="header">
    <span className="logo icon fa-leaf"></span>
    <h1>Bypass</h1>
  </div>
  <div id="main">
    <div className="box alt container">
      <section className="feature left">
        <a href="https://www.youtube.com/watch?v=8YItubAhGH0" target="_blank" rel="noopener noreferrer" className="image list"><img src="static/images/bypassapp.png" alt="" /></a>
        <div className="content">
          <h3>Customer Application</h3>
          <p>Giving users the ability to safely maneuver their city with the knowledge derived from intelligent analysis of crime data.</p>
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
          <li>As a team, we were responsible for creating and testing in-house UI/UX designs.</li>
          <li>Using Create-React-App as the React rendering engine, I was responsible for this application capable of interacting with
          a Node backend webservice.</li>
          <li>I was responsible for cleaning and standardizing crime data coming from cities using numpy and panda. Using gaussian distribution,
            a heatmap effect was created.</li>
          <li>I developed the nascent machine learning models, using SkLearn to use intermediate maps and the contributing weights to build the
            final map used for navigation.
          </li>
          <li>
            Using a third-party routing algorithm from ArcGIS, we used the crime map with final severity levels to adjust a walking route for users.
          </li>
        </ul>
      </section>
    </div>
  </div>
  </Layout>
)
