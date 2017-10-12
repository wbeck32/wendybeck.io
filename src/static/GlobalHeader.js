import React from 'react';

export default function GlobalHeader() {
return (
  <div className="GlobalHeader">
  <div className="columns">
<div className="column">
  <h1>Wendy Beck</h1>
  <h2>full-stack React developer</h2>
  <h3>{`[{'db': 'mongoDB'}, {'ORM', 'mongoose'},`}</h3>
  <h3>{`{'server': 'Express'}, {'library': 'React'}]`}</h3>
    <h4>Portland, OR 97210</h4>
  </div>
</div>
</div>
);
}