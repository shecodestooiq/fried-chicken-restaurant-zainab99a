import { useState } from "react";
import { StarRating } from "star-ratings-react";
import'./form.css'

function RestaurantForm(){
    const [resturant, setresturant] = useState([]);
    const [name, setname] = useState('');
    const [location, setlocation] = useState('');
    const [rating, setrating] = useState(null);

    const addRestaurant = (event) => {
        event.preventDefault();
    
        const newRestaurant = {
          id: Math.random() * 1000,
          name: name,
          location: location,
          rating: rating,
          
        };
    
        setresturant([...resturant, newRestaurant]);
        setname('');
        setlocation('');
        setrating('');
      };
    
      const deleteItem = (item) => {
        const newList=[...resturant]
        newList.splice(item,1)
        setresturant(newList);
    }
    
    
    return(
       <div className="form-container">
        <form className='form' onSubmit={addRestaurant}>
            
          <input data-testid='restaurant-name-input' type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Resturant Name" />
          <br/>
          
          <input type="text" data-testid='restaurant-location-input' value={location} onChange={(e)=>setlocation(e.target.value)} placeholder="Resturant Location"/>
          <br/>
          
          <input type="range" />
          <br/>
          <button  type="submit">addNewItem</button>
        </form>
        <div  className="formadd">
            {
                resturant.map((e)=>(
                    <div className='inputCard' key={e.id}>
                        <h1 className="newname">{e.name}</h1>
                        <p className="newlocation">{e.location}</p>
                        <button onClick={deleteItem}>Delete</button>
                       <div className="rating"> <StarRating rate={rating}size={20} starColor={"white"} maxRating={5}/></div>
                    </div>
                ))}
        </div>
       </div>
        
    )
    
}

export default RestaurantForm;