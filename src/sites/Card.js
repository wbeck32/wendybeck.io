import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Card({state} ) {

  Card.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    state: PropTypes.object
  };
console.log(78, state)
const {url, title} = state;
// console.log(79, url, title)
  return (
    <div>
      <Router>
        <div>
          <Route path="/varcity" component={Card} />
          <Route path="/@@@@" component={Card} />
        </div>
      </Router>
      <div className="Card">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="http://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{title}</p>
            <div className="media-content">
              <p className="subtitle is-6">
                <span className="button is-small">
                  <a href={url}>
                    {' '}
                    <i className="fa fa-github fa-lg" aria-hidden="true" />
                  </a>
                </span>
                <span className="button is-small">
                  <i className="fa fa-external-link fa-lg" aria-hidden="true" />
                </span>
              </p>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
