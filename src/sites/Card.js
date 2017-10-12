import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Link } from 'react-router-dom';

export default function Card({ info }) {
  Card.propTypes = {
    desc : PropTypes.string,
    github: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  };

  return (
    <div>
      <div className="Card">
        <div className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img src={info.image} alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{info.title}</p>
            <div className="media-content">
              <p className="subtitle is-6">
                <span className="button is-small">
                  <a href={info.github}>
                    {' '}
                    <i className="fa fa-github fa-lg" aria-hidden="true" />
                  </a>
                </span>
                <span className="button is-small">
                  <Link href={info.url}>
                    <i
                      className="fa fa-external-link fa-lg"
                      aria-hidden="true"
                    />
                  </Link>
                </span>
              </p>
            </div>

            <div className="content">{info.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
