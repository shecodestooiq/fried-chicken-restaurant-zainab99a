import { StarRating } from "star-ratings-react";
import './card-style.css'


function RestaurantCard({name,location,remove,rating}){
    
   
    return (
        
   <div >
  
   <div className="card">
        <h1 data-testid='restaurant-name'>{name}</h1>
        <p data-testid='restaurant-location'>{location}</p>
        <button onClick={remove}>Delete</button>
        <div data-testid='restaurant-rating' className="star">
        <StarRating rate={rating}size={20} starColor={"yellow"} maxRating={5}/>
        </div>
    </div>

   </div>
    )
}
export default RestaurantCard;