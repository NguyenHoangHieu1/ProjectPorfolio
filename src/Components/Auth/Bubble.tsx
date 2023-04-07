import { PropsWithChildren, useState } from "react"
import AbsElement from "../UI/AbsElement"
import Blur from "../UI/Blur"
import Button from "../UI/Button"
import AuthPanel from "./AuthPanel"
import Login from "./PopUp/Login"

const Bubble: React.FC<PropsWithChildren> = (props) => {
  const [appear, setAppear] = useState(false)
  const [isBlur, setIsBlur] = useState(false)
  let blurEl
  if (isBlur) {
    blurEl = <Blur onChangeBlur={changeAppear} />
  }
  function changeAppear() {
    setAppear(!appear)
    setIsBlur(!isBlur)
  }
  return (
    <>
      <AbsElement
        isAnimated={appear}
        animation={"animate-spin"}
        onClick={changeAppear}
        position="bottom-5 left-5"
      >
        <h1>Auth</h1>
      </AbsElement>
      {appear && (
        <>
          {blurEl}
          <AuthPanel />
        </>
      )}
    </>
  )
}

export default Bubble
