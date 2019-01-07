import React, { Component } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Loading from "./Loading";

function getCharts() {
  return axios.get(`/api/charts/`)
    .then(response => (response.data))
}

export default class Charts extends Component {
  state = {
    charts: null
  };

  componentDidMount() {
    getCharts()
      .then(data => {
        this.setState({ charts: data })
      });
  }

  render() {
    const charts = this.state.charts;

    let ticks = [];

    let propertyValue_averagePropertyValue = [];
    let propertyValue_marketValue = [];
    let propertyValue_soldValue = [];

    let normalisedOs_renter = [];
    let normalisedOs_investor = [];
    let normalisedOs_owner = [];

    let ownershipState_investor = [];
    let ownershipState_owner = [];
    let ownershipState_renter = [];

    let aar = [];

    let auctions_auctions = [];
    let auctions_completed = [];
    let auctions_developer = [];
    let auctions_remaining = [];

    if (charts) {
      charts.forEach((tick) => {
        ticks.push(tick.tick);

        propertyValue_averagePropertyValue.push(tick.propertyValue_averagePropertyValue);
        propertyValue_marketValue.push(tick.propertyValue_marketValue);
        propertyValue_soldValue.push(tick.propertyValue_soldValue);

        normalisedOs_renter.push(tick.normalisedOs_renter);
        normalisedOs_investor.push(tick.normalisedOs_investor);
        normalisedOs_owner.push(tick.normalisedOs_owner);

        ownershipState_investor.push(tick.ownershipState_investor);
        ownershipState_owner.push(tick.ownershipState_owner);
        ownershipState_renter.push(tick.ownershipState_renter);

        aar.push(tick.aar);

        auctions_auctions.push(tick.auctions_auctions);
        auctions_completed.push(tick.auctions_completed);
        auctions_developer.push(tick.auctions_developer);
        auctions_remaining.push(tick.auctions_remaining);
      });

      return (
        <div className='text-center charts-container'>
          <div className='charts-container-header'>
            <h3>Charts</h3>
          </div>
          <div className='row'>
            <div className='col-6'>
              <Line
                data={{
                  labels: ticks,
                  datasets: [
                    {
                      label: 'Auctions',
                      data: auctions_auctions,
                      fill: false,
                      backgroundColor: 'rgba(245, 245, 34, 0.6)',
                      borderColor:'rgba(245, 245, 34, 0.6)',
                      borderWidth: 1
                    },
                    {
                      label: 'Completed',
                      data: auctions_completed,
                      fill: false,
                      backgroundColor: 'rgba(245, 34, 34, 0.6)',
                      borderColor:'rgba(245, 34, 34, 0.6)',
                      borderWidth: 1
                    },
                    {
                      label: 'Remaining',
                      data: auctions_remaining,
                      fill: false,
                      backgroundColor: 'rgba(34, 245, 34, 0.6)',
                      borderColor:'rgba(34, 245, 34, 0.6)',
                      borderWidth: 1
                    },
                    {
                      label: 'By developer',
                      data: auctions_developer,
                      fill: false,
                      backgroundColor: 'rgba(245, 34, 245, 0.6)',
                      borderColor:'rgba(245, 34, 245, 0.6)',
                      borderWidth: 1
                    }
                  ]
                }}
              />
              <h5>Auctions</h5>
            </div>

            <div className='col-6'>
              <Line
                data={{
                  labels: ticks,
                  datasets: [
                    {
                      label: 'AAR',
                      data: aar,
                      fill: false,
                      backgroundColor: 'rgba(34, 245, 34, 0.6)',
                      borderColor:'rgba(34, 245, 34, 0.6)',
                      borderWidth: 1
                    }
                  ]
                }}
              />
              <h5>AAR</h5>
            </div>
          </div>

          <div className='row' style={{ marginTop: '100px'}}>
            <div className='col-4'>
              <Line
                data={{
                  labels: ticks,
                  datasets: [
                    {
                      label: 'Property Value',
                      data: propertyValue_averagePropertyValue,
                      fill: false,
                      backgroundColor: 'rgba(245, 34, 34, 0.6)',
                      borderColor:'rgba(245, 34, 34, 0.6)',
                      borderWidth: 1
                    },
                    {
                      label: 'Property Sold Value',
                      data: propertyValue_soldValue,
                      fill: false,
                      backgroundColor: 'rgba(245, 245, 34, 0.6)',
                      borderColor:'rgba(245, 245, 34, 0.6)',
                      borderWidth: 1
                    },
                    {
                      label: 'Property Book Value',
                      data: propertyValue_marketValue,
                      fill: false,
                      backgroundColor: 'rgba(34, 245, 34, 0.6)',
                      borderColor:'rgba(34, 245, 34, 0.6)',
                      borderWidth: 1
                    }
                  ]
                }}
              />
              <h5>Property Value</h5>
            </div>

            <div className='col-4'>
              <Line
                data={{
                  labels: ticks,
                  datasets: [
                    {
                      label: 'Renter',
                      data: ownershipState_renter,
                      fill: false,
                      backgroundColor: 'rgba(34, 245, 34, 0.6)',
                      borderColor:'rgba(34, 245, 34, 0.6)',
                      borderWidth: 1
                    },
                    {
                      label: 'Owner',
                      data: ownershipState_owner,
                      fill: false,
                      backgroundColor: 'rgba(245, 245, 34, 0.6)',
                      borderColor:'rgba(245, 245, 34, 0.6)',
                      borderWidth: 1
                    },
                    {
                      label: 'Investor',
                      data: ownershipState_investor,
                      fill: false,
                      backgroundColor: 'rgba(245, 34, 245, 0.6)',
                      borderColor:'rgba(245, 34, 245, 0.6)',
                      borderWidth: 1
                    }
                  ]
                }}
              />
              <h5>Ownership State</h5>
            </div>

            <div className='col-4'>
              <Line
                data={{
                  labels: ticks,
                  datasets: [
                    {
                      label: 'Renter',
                      data: normalisedOs_renter,
                      fill: false,
                      backgroundColor: 'rgba(34, 245, 34, 0.6)',
                      borderColor:'rgba(34, 245, 34, 0.6)',
                      borderWidth: 1
                    },
                    {
                      label: 'Owner',
                      data: normalisedOs_owner,
                      fill: false,
                      backgroundColor: 'rgba(245, 245, 34, 0.6)',
                      borderColor:'rgba(245, 245, 34, 0.6)',
                      borderWidth: 1
                    },
                    {
                      label: 'Investor',
                      data: normalisedOs_investor,
                      fill: false,
                      backgroundColor: 'rgba(245, 34, 245, 0.6)',
                      borderColor:'rgba(245, 34, 245, 0.6)',
                      borderWidth: 1
                    }
                  ]
                }}
              />
              <h5>Normalized OS</h5>
            </div>
          </div>
        </div>
      )
    } else {
      return <Loading />
    }
  }
}
