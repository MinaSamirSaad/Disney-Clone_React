import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Login, Logo, UserImage } from "./Header.styles";
import headerLogo from "../../assets/images/logo.svg";
import HeaderMenu from "../../components/Header-menu/HeaderMenu.component";
import { signInWithGooglePopUp,onAuthStateChangedListiners,signOutOfAuth } from "../../utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import Logout from './../../components/Logout/Logout.component';
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userPhoto = useSelector(selectUserPhoto);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
 
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoUrl,
      })
    );
  };
  useEffect(()=>{
  onAuthStateChangedListiners((user) => {
      if(user){
        setUser(user.reloadUserInfo);
        navigate("/home")
      }
    })
  },[userName])

  const handleAuth = async () => {
    if(!userName){
    const {user} = await signInWithGooglePopUp();
    setUser(user.reloadUserInfo);
    }else if(userName){
      signOutOfAuth()
      .then(()=>{
        dispatch(setSignOutState());
        navigate('/')
      }).catch((err)=>{console.log(err)})
    }
  };
  const handleImgError = e => {
    e.target.src = `${userPhoto}`
  }
  console.log(userName)
  console.log(userPhoto)
  return (
    <>
      <HeaderContainer>
        <Logo>
          <img src={headerLogo} alt="" />
        </Logo>
        {!userName ? (
          <Login onClick={handleAuth}>Login</Login>
        ) : (
          <>
            <HeaderMenu />
            <Logout onClick={handleAuth}>
            <UserImage src={userPhoto} onError={handleImgError} alt={userName}/>
            </Logout>
          </>
        )}
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
