import { LOGIN ,LOGOUT ,SIGNUP} from "../constants/constants";
import { auth } from "../../config/firebase";
export const doLogin = (email, password) => async (dispatch) => {
    try {
    let userCrediential =  auth.signInWithEmailAndPassword(email, password)
      let user = userCrediential.user;
      console.log(user);

 
    dispatch({
      type: LOGIN,
      payload: user
    });
  } catch (error) {
    let errorMesage = error.message;
    alert(errorMesage)
    console.log(error);
  }
};

export const doSignUp = (dataFromCom) => async (dispatch) => {
    
  try {
  console.log("action", dataFromCom);
  let userCredential = auth.createUserWithEmailAndPassword(
    dataFromCom.email,
    dataFromCom.pasword
  );

    dispatch({
      type: SIGNUP,
      payload: userCredential,
    });
  } catch (error) {
    let errorMesage = error.message;
    alert(errorMesage)
    console.log("action=>", error.message);
  }
};

export const doLogOut = () => async (dispatch) => {
    
  try {
    let logout = auth.signOut()

    dispatch({
      type: LOGOUT,
      payload: logout,
    });
  } catch (error) {
    let errorMesage = error.message;
    alert(errorMesage)
    console.log("action=>", error.message);
  }
};
