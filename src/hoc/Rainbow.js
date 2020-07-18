import React from 'react';

function Rainbow(WrappedComponent) {
  const colors = ["teal", "red", "green", "orange", "blue", "yellow", "purple"];
  const randomColor = colors[Math.floor(Math.random() * 6)];
  const className = randomColor + "-text";

  return (props) => {
    return (
      <div className={className}>
      <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default Rainbow;
