import farmerData from '../../helpers/data/farmerCowData';
import './farmerCowList.scss';

const buildFarmerCows = () => {
  farmerData.getFarmerCows()
    .then((farmerCows) => {
      console.log('farmerCow Array from farmer list', farmerCows);
    })
    .catch((error) => console.error('shit broke', error));
};

export default { buildFarmerCows };
