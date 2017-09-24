import React from 'react';

export default function Card() {
  return (
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
          <p className="title is-4">John Smith</p>
          <div className="media-content">
            <p className="subtitle is-6">
              <span className="button is-small">
                <i className="fa fa-github fa-lg" aria-hidden="true" />
              </span>
              <span className="button is-small">
                <i className="fa fa-external-link fa-lg" aria-hidden="true" />
              </span>
            </p>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.
            <a href="">#css</a> <a href="">#responsive</a>
            <br />
            <p>11:09 PM - 1 Jan 2016</p>
          </div>
        </div>
      </div>
    </div>
  );
}
