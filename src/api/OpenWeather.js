import axios from 'axios';

export default axios.create({
  baseURL: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
  params: {
    aggregateHours: '12',
    contentType: 'json',
    unitGroup: 'metric',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_KEY,
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
  }
})