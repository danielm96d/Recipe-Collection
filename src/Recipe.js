import { useLocation, useNavigate } from "react-router-dom";

function Recipe(){
  const details = useLocation().state;
  const navigate = useNavigate();
  return(
    <>
      <button onClick={()=>{navigate('/')}}>Back</button>
      <h1>{details.name}</h1>
      <p>{details.instructions}</p>
    </>
  )
}

export default Recipe;