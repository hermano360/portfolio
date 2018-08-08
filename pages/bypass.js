import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
  <Layout>
    <div id="header">
      <span class="logo icon fa-cogs"></span>
      <h1>Hi. I'm Herminio</h1>
      <p>I make web apps</p>
    </div>
    <div id="main">
      <header class="major container medium">
        <h2>Full Stack Engineer</h2>
        <p>
          With special emphasis on the React web and React Native ecosystem, I build fullstack applications using Node/Express backends, GraphQL querying, and AWS cloud services.
        </p>
      </header>

      <div class="box alt container">
        <section class="feature left">
          <Link  href={`/budsy`}>
            <a class="image list"><img src="static/images/budsyapp.png" alt=""/></a>
          </Link>
          <div class="content">
            <h3>Budsy</h3>
            <p>Using artificial intelligence, we are able to give you the best marijuana recommendations.</p>
          </div>
        </section>
        <section class="feature right">
          <Link  href={`/bypass`}>
            <a class="image icon fa-code"><img src="static/images/pic02.jpg" alt=""/></a>
          </Link>

          <div class="content">
            <h3>Bypass</h3>
            <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
          </div>
        </section>
        <section class="feature left">
          <a href="#" class="image icon fa-mobile"><img src="static/images/pic03.jpg" alt=""/></a>
          <div class="content">
            <h3>Aqua Data</h3>
            <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
          </div>
        </section>
        <section class="feature right">
          <a href="https://youtu.be/S0Y7gasAURs" class="image list"><img src="static/images/nuggitlogo.png" alt=""/></a>
          <div class="content">
            <h3>Nuggit</h3>
            <p>
              Giving an AR experience to the cannabis shopping experience.
            </p>
          </div>
        </section>
        <section class="feature left">
          <a href="#" class="image icon fa-mobile"><img src="static/images/pic03.jpg" alt=""/></a>
          <div class="content">
            <h3>Easy Weights</h3>
            <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
          </div>
        </section>
        <section class="feature right">
          <a href="#" class="image icon fa-mobile"><img src="static/images/pic03.jpg" alt=""/></a>
          <div class="content">
            <h3>Ether Lookup</h3>
            <p>
              Allows you to easily look up the current balance or previous transactions associated to a given ethereum address.
            </p>
          </div>
        </section>
        <section class="feature left">
          <a href="https://hermano360.github.io/howard-dental/" class="image icon fa-mobile"><img src="static/images/pic03.jpg" alt=""/></a>
          <div class="content">
            <h3>Fresh Dental</h3>
            <p>Client website used to give information about a launching dental practice.</p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)
