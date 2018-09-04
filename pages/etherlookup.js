import Layout from '../components/Layout'

export default () => (
<Layout>
  <div id="header">
    <span className="logo icon fa-leaf"></span>
    <h1>Ether Lookup</h1>
  </div>
  <div id="main">
    <div className="box alt container">
      <section className="feature left">
        <a href="https://cryptic-caverns-28884.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="image list"><img src="static/images/ethereum.png" alt="" /></a>
        <div className="content">
          <h3>Customer Application</h3>
          <p>Using an ethereum address, you can see the account balance and transaction history.</p>
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
          <li>Leveraging Next.js, Node, GraphQL, and Express, I built a fully-</li>
          <li>Using React and Material-UI, I leveraged Google Maps to provide a clean and sleak interface.</li>
          <li>I also architected the backend, using NodeJS, DynamoDB from AWS, and optimizing browser localStorage,
            I was able to provide a speedy service for users.</li>
          <li>To provide a better experience, I integrated Twilio SMS in order to text the appropriate parties of any activity reported.
          </li>
        </ul>
      </section>
    </div>
  </div>
  </Layout>
)
