import RestaurantCard from "./RestaurantCard";
import './card-style.css'
import { useState } from "react";
function RestaurantList(){
    const [resturantList, setresturantList] = useState([
        {
        id:Math.random()*1000,
        name:'fride chicken',
        location:'zayona',
        rating:3
    
    },
    {
        id:Math.random()*1000,
        name:'fride chicken',
        location:'zayona',
        rating:5
        
    },
    {
        id:Math.random()*1000,
        name:'fride chicken',
        location:'zayona',
        rating:null
        
    },

      {
        id:Math.random()*1000,
        name:'fride chicken',
        location:'zayona',
        rating:3
    
    },
    {
        id:Math.random()*1000,
        name:'fride chicken',
        location:'zayona',
        rating:5
        
    },
    {
        id:Math.random()*1000,
        name:'fride chicken',
        location:'zayona',
        rating:null
        
    }
])


    const deleteItem = (item) => {
        const newList=[...resturantList]
        newList.splice(item,1)
        setresturantList(newList);
    }
    
   return(
    <div data-testid='restaurants-list' className="container">
        {
            resturantList.map((item)=>{
                return <RestaurantCard key={item.id} name={item.name} location={item.location} remove={() => deleteItem()} rate={item.rating}></RestaurantCard>
            }
            )
        }
        
    </div>
   )
}
export default RestaurantList;