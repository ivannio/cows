import 'bootstrap';
import '../styles/main.scss';
import cows from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';
import farmerCowList from './components/farmerCowList/farmerCowList';


const init = () => {
  cows.buildCows();
  farmerList.buildFarmers();
  farmerCowList.buildFarmerCows();
};

init();
