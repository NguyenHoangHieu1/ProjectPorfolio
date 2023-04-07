import { PropsWithChildren, useState } from "react"
import useInput from "../../../hooks/useInput"
import Card from "../../UI/Card"
import Input from "../../UI/Input"
import Blur from "../../UI/Blur"
import ButtonPurple from "../../UI/ButtonPurple"

const Login: React.FC<PropsWithChildren> = (props) => {
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

  const {
    inputValue: PasswordValue,
    changeInputFocus: changePasswordFocus,
    changeInputValue: changePasswordValue,
    inValid: PasswordInvalid,
    isValid: PasswordIsValid,
    reset: PasswordReset,
  } = useInput((value) => {
    return value.length > 6 ? true : false
  })

  let formSuccess = EmailIsValid && PasswordIsValid
  const PasswordClasses = PasswordInvalid
    ? "!text-red-900 !border-red-900 !bg-red-400"
    : ""
  const EmailClasses = EmailInvalid
    ? "!text-red-900 !border-red-900 !bg-red-400"
    : ""
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formSuccess) {
      return
    }

    EmailReset()
    PasswordReset()
  }

  return (
    <form
      className="flex flex-col gap-5 text-white dark:text-gray-900"
      onSubmit={submit}
      action=""
    >
      <label className="text-3xl " htmlFor="Email">
        Email:
      </label>
      <Input
        changedClasses={EmailClasses}
        inputValue={EmailValue}
        onBlur={changeEmailFocus}
        onChangeValue={changeEmailValue}
        width="full"
      >
        Your Email!
      </Input>
      <label className="text-3xl" htmlFor="Password">
        Password:
      </label>
      <Input
        changedClasses={PasswordClasses}
        inputValue={PasswordValue}
        onBlur={changePasswordFocus}
        onChangeValue={changePasswordValue}
        width="full"
      >
        Your Password!
      </Input>
    </form>
  )
}

export default Login
