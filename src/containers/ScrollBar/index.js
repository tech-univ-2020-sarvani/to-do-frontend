import React from 'react';
import Card from '../../components/Card';
import './index.css';

function ScrollBar() {
  return (
    <div className="ScrollBar">
      <Card text="Complete HW" />
      <Card text="Read more on event loops" />
      <Card text="Go to Gym" />
    </div>
  );
}

export default ScrollBar;
