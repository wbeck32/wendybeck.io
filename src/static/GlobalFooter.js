import React from 'react';

export default function GlobalFooter() {
  return (
    <div className="GlobalFooter footer has-text-centered">
      <span className="is-centered">
        <a href="https://github.com/wbeck32?tab=repositories&sort=updated">
          {' '}
          <i className="fa fa-github fa-4x" aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/wendybeck/">
          <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
        </a>
      </span>
    </div>
  );
}
