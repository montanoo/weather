import axios from 'axios';

export default axios.create({
  baseURL: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
  params: {
    aggregateHours: '24',
    contentType: 'json',
    unitGroup: 'metric',
  },
  headers: {
    'X-RapidAPI-Key': 'd3fb2d9be0mshbecca5fe738ac6dp149be7jsna8b1657c8928',
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
  }
})