import { PropsWithChildren, useEffect } from "react"
import useInput from "../../hooks/useInput"
import ButtonPurple from "../UI/ButtonPurple"
import Input from "../UI/Input"
import AOS from "aos"
import "aos/dist/aos.css"

const Footer: React.FC<PropsWithChildren> = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])

  const {
    inputValue: EmailValue,
    changeInputFocus: changeEmailFocus,
    changeInputValue: changeEmailValue,
    inValid: EmailInvalid,
    isValid: EmailIsValid,
    reset: EmailReset,
  } = useInput((value) => {
    if (
      /^([\w.%+-]+)@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|protonmail\.com|icloud\.com|zoho\.com|mail\.com|yandex\.com)$/.test(
        value
      )
    )
      return true
    else return false
  })

  let formSuccess = EmailIsValid
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formSuccess) {
      return
    }
    EmailReset()
  }

  const EmailClasses = EmailInvalid
    ? "!text-red-900 !border-red-900 !bg-red-400"
    : ""

  return (
    <footer data-aos="fade-up" className="  container m-auto max-w-6xl px-2">
      <div className="md:grid md:grid-cols-2 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center">
          <nav>
            <h3 className="uppercase font-bold mb-5">General</h3>
            <ul className="flex flex-col gap-3">
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Home</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">About</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Projects</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Blog</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="uppercase font-bold mb-5">Specifics</h3>
            <ul className="flex flex-col gap-3">
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Stats</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Community Wall</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">ToolBox</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Speaking</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3 className="uppercase font-bold mb-5">Extra</h3>
            <ul className="flex flex-col gap-3">
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Changelog</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Meet up</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">NewsLetter</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Resume</a>
              </li>
              <li className="dark:text-gray-200/50 text-slate-900 hover:dark:text-gray-200 hover:underline">
                <a href="">Snippets</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center">
          <h3 className="uppercase font-semibold">NewsLetter</h3>
          <p className="my-5">Get new articles delivered to your inbox!</p>
          <Input
            changedClasses={EmailClasses}
            inputValue={EmailValue}
            onBlur={changeEmailFocus}
            onChangeValue={changeEmailValue}
            width="fit"
          >
            Your Email!
          </Input>
          <ButtonPurple>Subscribe</ButtonPurple>
        </div>
      </div>
      <div className="flex justify-between mt-10 pb-5 text-lg text-slate-300">
        <div>
          <p>© 2023 Hoang Hieu</p>
        </div>
        <div className="flex gap-5">
          <a href="" className="hover:-rotate-12 transition">
            <i className="fa-brands fa-facebook-f "></i>
          </a>
          <a href="" className="hover:-rotate-12 transition">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="" className="hover:-rotate-12 transition">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="" className="hover:-rotate-12 transition">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
