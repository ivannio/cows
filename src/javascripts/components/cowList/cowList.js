import smush from '../../helpers/data/smush';

import './cowList.scss';

const buildCows = () => {
  smush.getCompleteCows()
    .then((cows) => {
      console.log('cow array from cowList', cows);
    })
    .catch((error) => {
      console.error('didn\'t work!', error);
    });
};

export default { buildCows };
