import React from 'react';
import Rainbow from '../hoc/Rainbow'
function About() {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Hey there, I'm ze Full-Stack Dev!</p>
    </div>
  )
}

export default Rainbow(About);
