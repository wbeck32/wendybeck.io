import React from 'react';
import Card from './Card'

export default function SiteContainer() {

return (
<div className="SiteContainer">
<div className="columns">
<div className="column border">
<Card/>
<Card/>
<Card/>
  </div>

  <div className="column border">
  <Card/>
<Card/>
<Card/>
  </div>

  <div className="column border">
  <Card/>
<Card/>
<Card/>
  </div>

  <div className="column border">
Column
  </div>
  </div>
</div>

);



}