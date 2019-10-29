import axios from 'axios';

// const getCows = () => axios.get('https://teamtreehouse.com/ivanphelps2.json');

const getCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/cows.json').then((response) => {
    const themCows = response.data.cows;
    const cows = [];
    Object.keys(themCows).forEach((cowId) => {
      themCows[cowId].id = cowId;
      cows.push((themCows[cowId]));
    });
    resolve(cows);
  }).catch((error) => reject(error));
});

export default { getCows };
