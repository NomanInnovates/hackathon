import { useDispatch } from "react-redux"
import {doLogOut} from '../../redux/actions/AuthAction'
// import ResturantSection from "../modules/resturants/ResturantSection";
import ResturantSection from "../resturants/ResturantSection";

function Home() {
    const dispatch = useDispatch()
    const ctaLogOut = () =>{
      dispatch(doLogOut())
    }
    return (
        <div>
          <button style={{position:"absolute",right:"0",border:"0",cursor:'pointer'}} className="logoutBtn" onClick={ctaLogOut}>Log Out</button>
          <ResturantSection/>
        </div>
    )
}

export default Home