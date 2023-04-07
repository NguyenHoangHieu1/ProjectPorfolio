import { PropsWithChildren, useState } from "react"
import useInput from "../../hooks/useInput"
import Card from "../UI/Card"
import Input from "../UI/Input"
import Blur from "../UI/Blur"
import ButtonPurple from "../UI/ButtonPurple"
import Login from "./PopUp/Login"
import Register from "./PopUp/Register"

const AuthPanel: React.FC<PropsWithChildren> = (props) => {
  const [isLogin, setIsLogin] = useState(true)

  function changeToLogin() {
    setIsLogin(true)
  }
  function changeFromLogin() {
    setIsLogin(false)
  }
  return (
    <Card animation="animate-appear">
      <nav>
        <ul className=" mb-5 flex text-3xl">
          <li
            className={`hover:bg-blue-500 ${
              isLogin && "bg-blue-500"
            }  transition `}
          >
            <button onClick={changeToLogin} className="p-5">
              Login
            </button>
          </li>
          <li
            className={`hover:bg-blue-500 ${
              !isLogin && "bg-blue-500"
            }  transition `}
          >
            <button onClick={changeFromLogin} className="p-5">
              Register
            </button>
          </li>
        </ul>
      </nav>
      {isLogin ? <Login /> : <Register />}
      <ButtonPurple>{isLogin ? "Login" : "Register"}!</ButtonPurple>
    </Card>
  )
}

export default AuthPanel
