import React, { Component } from 'react';

import SurfboardCard from '../components/SurfboardCard';
import './Surfboards.css';

class Surfboards extends Component {
  render() {
    return (
      <div className="SurfboardsContainer">
        <h1>Surfboards Component</h1>
        {this.props.surfboards.map(surfboard => (
          <SurfboardCard key={surfboard.id} surfboard={surfboard} />
        ))}
      </div>
    );
  }
}

export default Surfboards;
