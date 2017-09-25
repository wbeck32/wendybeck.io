import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ state }) {
  Card.propTypes = {
    desc : PropTypes.string,
    github: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    state: PropTypes.object
  };

  const { desc, github, image, title, url } = state;
  return (
    <div>
      <div className="Card">
        <div className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img src={image} alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">
            <p className="title is-4">{title}</p>
            <div className="media-content">
              <p className="subtitle is-6">
                <span className="button is-small">
                  <a href={github}>
                    {' '}
                    <i className="fa fa-github fa-lg" aria-hidden="true" />
                  </a>
                </span>
                <span className="button is-small">
                  <a href={url}>
                    <i
                      className="fa fa-external-link fa-lg"
                      aria-hidden="true"
                    />
                  </a>
                </span>
              </p>
            </div>

            <div className="content">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
