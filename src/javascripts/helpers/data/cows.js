import axios from 'axios';

const getCows = () => axios.get('https://teamtreehouse.com/ivanphelps2.json');

export default { getCows };
