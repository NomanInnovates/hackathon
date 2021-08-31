import { Link } from "react-router-dom";
import ResturantSection from "../modules/resturants/ResturantSection";

function LanginPage() {
    return (
        <div style={{padding:'50px', textAlign:"center"}}>
         <h2>Register to see amazing Deals from top resturants</h2>
         <Link to="/signup">REGISTER NOW</Link>
        </div>
    )
}

export default LanginPage