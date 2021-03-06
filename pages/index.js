import Layout from '../components/Layout'
import Link from 'next/link'

const Index = props => (<Layout>
  <div id="header">
    <span className="logo icon fa-cogs"></span>
    <h1>Hi. I'm Herminio</h1>
    <p>Welcome To My Portfolio Site!</p>
  </div>
  <div id="main">
    <header className="major container medium">
      <h2>Full Stack Engineer</h2>
      <p>
        Specializing in React, I build fullstack applications using Node/Express backends, GraphQL querying, and AWS cloud services.
      </p>
    </header>

    <div className="box alt container">
      <section className="feature left">
        <Link  href={`/budsy`}>
          <a className="image icon list"><img src="static/images/budsyapp.png" alt=""/></a>
        </Link>
        <div className="content">
          <h3>Budsy</h3>
          <p>Using artificial intelligence, we are able to give you the best marijuana recommendations.</p>
        </div>
      </section>
      <section className="feature right">
        <Link  href={`/bypass`}>
          <a className="image icon fa-code"><img src="static/images/bypassapp.png" alt=""/></a>
        </Link>
        <div className="content">
          <h3>Bypass</h3>
          <p>Giving users the knowledge to safely navigate their city.</p>
        </div>
      </section>
      <section className="feature left">
        <Link  href={`/aquadata`}>
          <a className="image icon fa-mobile"><img src="static/images/aquadata.png" alt=""/></a>
        </Link>
        <div className="content">
          <h3>Aqua Data</h3>
          <p>Empowering citizens to view and report water-related incidents</p>
        </div>
      </section>
      <section className="feature right">
        <a href="https://youtu.be/S0Y7gasAURs"  target="_blank" rel="noopener noreferrer" className="image icon list"><img src="static/images/nuggitlogo.png" alt=""/></a>
        <div className="content">
          <h3>Nuggit</h3>
          <p>
            Giving an AR experience to the cannabis shopping experience.
          </p>
        </div>
      </section>
      <section className="feature left">
        <a href="https://hermano360.github.io/howard-dental/" target="_blank" rel="noopener noreferrer"  className="image icon fa-mobile list"><img src="static/images/dental-cover.png" alt=""/></a>
        <div className="content">
          <h3>Fresh Dental</h3>
          <p>Client website used to give information about a launching dental practice.</p>
        </div>
      </section>
      <section className="feature right">
        <Link  href={`/etherlookup`}>
          <a href="https://cryptic-caverns-28884.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="image icon fa-mobile"><img src="static/images/ethereum.png" alt=""/></a>
        </Link>
        <div className="content">
          <h3>Ether Lookup</h3>
          <p>
            Allows you to easily look up the current balance or previous transactions associated to a given ethereum address.
          </p>
        </div>
      </section>
    </div>
  </div>
</Layout>)


export default Index
