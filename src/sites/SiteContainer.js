import React, { Component } from 'react';
import Card from './Card';
import siteData from './siteData';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class SiteContainer extends Component {
  constructor() {
    super();
    this.state = {
      desc: '',
      github: '',
      image: '',
      title: '',
      url: ''
    };
  }

  render() {
    const { beerSeeker, varcity, treksmith} = siteData;

    return (
      <div>
        {/* <Router>
          <div>
            <Route path="/beerseeker" component={Card} />
            <Route path="/@@@@" component={Card} />
          </div>
        </Router> */}
        <div className="SiteContainer">
          <div className="columns">
            <div className="column">
              <Card state={beerSeeker} />
            </div>

            <div className="column">
              <Card state={varcity} />
            </div>
            <div className="column">
              <Card state={treksmith} />
            </div>



            <div className="column bio">
              <figure className="image is-128x128">
                <img src="../images/2320919.jpeg" alt="selfie" />
              </figure>
              <p>
                I&#39;m a MERN stack developer - MongoDB, Express, React +
                Redux, Node.js - with extensive experience writing and using
                RESTful APIs. I love ES6, JWT, Mongoose ODM, SCSS, superagent,
                TDD with Mocha and the command line. I have a previous 12+ years
                experience in front-end development with HTML5, CSS3 and
                responsive web design.
              </p>
              <p>
                As a team member, I’m a diligent problem solver who
                troubleshoots, analyzes solutions, and implements changes. I’m
                an approachable communicator who is able to explain coding
                solutions in non-technical terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
