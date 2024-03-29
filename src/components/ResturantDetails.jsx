import { useLocation } from 'react-router-dom';
function ResturantDetails() {
  const {state} = useLocation();
  if (!state) {
    return <div>No restaurant details available.</div>;
  }
  return (
    <div>
     <h1>{state.name}</h1>
      <p>{state.location}</p>
     
      
    </div>
  );
}

export default ResturantDetails;