import React, { Component } from 'react';
import Parameters from './Parameters';
import Charts from './Charts';

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard-container'>
        <div className='dashboard-body row'>
          <div className='col-3'>
            <Parameters/>
          </div>

          <div className='col-9'>
            <Charts/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
