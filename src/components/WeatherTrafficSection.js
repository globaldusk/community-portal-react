import React, {Component} from 'react';

/*weather iframe widget do sdisplay a simple weather map of user location and the club location
table and ifram in same section  to keep them inline on the web page */
export class WeatherTrafficSection extends Component {
  render(){
    return (
      <section id="weather-and-traffic">
        
        <div className='block'>
          <h2>Weather Widget And Average Traffic Per Day:</h2>
          
        </div>
        <div className="iframeDiv">
          <iframe
            className='iframeWeather'
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://embed.windy.com/embed2.html?lat=-34.904&lon=151.249&detailLat=-34.904&detailLon=151.249&width=650&height=450&zoom=7&level=surface&overlay=clouds&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1">
          </iframe>
        </div>
        <table>
          <thead>
              <tr>
                  <td>MON</td>
                  <td>TUE</td>
                  <td>WED</td>
                  <td>THU</td>
                  <td>FRI</td>
                  <td>SAT</td>
                  <td>SUN</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>40%</td>
                  <td>50%</td>
                  <td>75%</td>
                  <td>40%</td>
                  <td>75%</td>
                  <td>80%</td>
                  <td>90%</td>
              </tr>
          </tbody>
      </table>
        </section>
      );
  }
}