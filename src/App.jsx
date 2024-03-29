import './App.css';
import RestaurantForm from './components/RestaurantForm';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <>
   <div className='App'>
   <h1 className='header'>Fried Checken </h1>
   <RestaurantList></RestaurantList>
    <RestaurantForm></RestaurantForm>
   </div>
    </>
  );
}

export default App;
