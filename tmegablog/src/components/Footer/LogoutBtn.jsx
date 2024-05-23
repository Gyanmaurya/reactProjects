
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/AuthSlice'

function LogoutBtn() {
   const dispatch = useDispatch()
   function logoutBtnHandler(){
     authService.logout().then(()=>{
          dispatch(logout())
     }).catch((error)=>{
          throw error
     })
   }  
  return (
    <div onClick={logoutBtnHandler}>LogOut</div>
  )
}

export default LogoutBtn