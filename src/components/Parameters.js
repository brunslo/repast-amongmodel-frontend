import React, { Component } from 'react';
import axios from 'axios';

function getParams() {
  return axios.get(`/api/parameters`)
    .then(response => (response.data))
}

export default class Parameters extends Component {
  state = {
    params: {}
  };

  componentDidMount() {
    getParams()
      .then(data => (this.setState({ params: data })));
  }

  onChange = (e, name) => {
    let value = e.target.value;

    if (name === 'aggregate' || name === 'csv' || name === 'webService_useWebParameters') {
      if (this.state.params[name] === 'false') {
        value = 'true'
      } else {
        value = 'false'
      }
    }

    return axios({
      method: 'post',
      url: `/api/parameters/setParam?name=${name}&value=${value}`,
      config: { headers: { 'Content-Type': 'application/json' }}
    }).then(
      getParams()
        .then((data => (this.setState({ params: data }))))
    )
  };

  render() {
    const params = this.state.params;

    return (
      <div className='parameters-container text-center'
           style={{ height: '100vh', overflow: 'hidden' }}
      >
        <div className='parameters-header'>
          <h3>Parameters</h3>
        </div>

        <div className='parameters-body row'>
          <div className='params-1 col-6'>
            <label>Aggregate Data Output</label>
            <p>
              <input type='checkbox' checked={params.aggregate == 'true'} onChange={(e) => this.onChange(e, 'aggregate')}/>
            </p>

            <label>File Output Enabled</label>
            <p>
              <input type='checkbox' checked={params.csv == 'true'} onChange={(e) => this.onChange(e, 'csv')}/>
            </p>

            <label>WebService Use WebParameters</label>
            <p>
              <input type='checkbox' checked={params.webService_useWebParameters == 'true'} onChange={(e) => this.onChange(e, 'webService_useWebParameters')}/>
            </p>

            <label>CGT Shock Magnitude</label>
            <p>
              <input type='number' step='1' defaultValue={params.CGTMagnitude} onChange={(e) => this.onChange(e, 'CGTMagnitude')}/>
            </p>

            <label>Capital Gains Tax Discount</label>
            <p>
              <input type='number' step='0.2' defaultValue={params.cgt} onChange={(e) => this.onChange(e, 'cgt')}/>
            </p>

            <label>Default Random Seed</label>
            <p>
              <input type='number' step='1' defaultValue={params.randomSeed} onChange={(e) => this.onChange(e, 'randomSeed')}/>
            </p>

            <label>Demand Shock</label>
            <p>
              <input type='number' step='1' defaultValue={params.shockDemand} onChange={(e) => this.onChange(e, 'shockDemand')}/>
            </p>

            <label>Demand Shock Magnitude</label>
            <p>
              <input type='number' step='1' defaultValue={params.demandMagnitude} onChange={(e) => this.onChange(e, 'demandMagnitude')}/>
            </p>

            <label>Households</label>
            <p>
              <input type='number' step='1' defaultValue={params.households} onChange={(e) => this.onChange(e, 'households')}/>
            </p>

            <label>Income Shock</label>
            <p>
              <input type='number' step='1' defaultValue={params.shockIncome} onChange={(e) => this.onChange(e, 'shockIncome')}/>
            </p>
          </div>

          <div className='params-2 col-6'>
            <label>Income Shock Magnitude</label>
            <p>
              <input type='number' step='0.2' defaultValue={params.incomeMagnitude} onChange={(e) => this.onChange(e, 'incomeMagnitude')}/>
            </p>

            <label>NG Shock Magnitude</label>
            <p>
              <input type='number' step='1' defaultValue={params.NGMagnitude} onChange={(e) => this.onChange(e, 'NGMagnitude')}/>
            </p>

            <label>Negative Gearing</label>
            <p>
              <input type='number' step='1' defaultValue={params.ng} onChange={(e) => this.onChange(e, 'ng')}/>
            </p>

            <label>Policy Shock</label>
            <p>
              <input type='number' step='1' defaultValue={params.policyShock} onChange={(e) => this.onChange(e, 'policyShock')}/>
            </p>

            <label>Run</label>
            <p>
              <input type='number' step='1' defaultValue={params.run} onChange={(e) => this.onChange(e, 'run')}/>
            </p>

            <label>Supply Shock</label>
            <p>
              <input type='number' step='1' defaultValue={params.shockSupply} onChange={(e) => this.onChange(e, 'shockSupply')}/>
            </p>

            <label>Supply Shock Magnitude</label>
            <p>
              <input type='number' step='0.2' defaultValue={params.supplyMagnitude} onChange={(e) => this.onChange(e, 'supplyMagnitude')}/>
            </p>

            <label>WebService Polling Interval</label>
            <p>
              <input type='number' step='1' defaultValue={params.webService_pollingInterval} onChange={(e) => this.onChange(e, 'webService_pollingInterval')}/>
            </p>

            <label>Web Service Url</label>
            <p>
              <input type='text' step='0.2' defaultValue={params.webService_url} onChange={(e) => this.onChange(e, 'webService_url')}/>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
