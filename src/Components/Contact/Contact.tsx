import { PropsWithChildren } from "react"
import ButtonPurple from "../UI/ButtonPurple"
import Container from "../UI/Container"
import Input from "../UI/Input"
import useInput from "../../hooks/useInput"

const Contact: React.FC<PropsWithChildren> = (props) => {
  const {
    inputValue: FirstNameValue,
    changeInputFocus: changeFirstNameFocus,
    changeInputValue: changeFirstNameValue,
    inValid: FirstNameInvalid,
    isValid: FirstNameIsValid,
    reset: FirstNameReset,
  } = useInput((value) => {
    if (value.length > 0) return true
    else return false
  })
  const {
    inputValue: LastNameValue,
    changeInputFocus: changeLastNameFocus,
    changeInputValue: changeLastNameValue,
    inValid: LastNameInvalid,
    isValid: LastNameIsValid,
    reset: LastNameReset,
  } = useInput((value) => {
    if (value.length > 0) return true
    else return false
  })
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
    inputValue: ReasonValue,
    changeInputFocus: changeReasonFocus,
    changeInputValue: changeReasonValue,
    inValid: ReasonInvalid,
    isValid: ReasonIsValid,
    reset: ReasonReset,
  } = useInput((value) => {
    if (value.length > 20) return true
    else return false
  })

  let formSuccess =
    FirstNameIsValid && LastNameIsValid && EmailIsValid && ReasonIsValid
  const FirstNameClasses = FirstNameInvalid
    ? "!text-red-900 !border-red-900 !bg-red-400"
    : ""
  const LastNameClasses = LastNameInvalid
    ? "!text-red-900 !border-red-900 !bg-red-400"
    : ""
  const EmailClasses = EmailInvalid
    ? "!text-red-900 !border-red-900 !bg-red-400"
    : ""
  const ReasonClasses = ReasonInvalid
    ? "!text-red-900 !border-red-900 !bg-red-400"
    : ""

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formSuccess) {
      return
    }
    FirstNameReset()
    LastNameReset()
    EmailReset()
    ReasonReset()
  }

  return (
    <Container>
      <div className=" p-5 flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div className=" basis-1/2 ">
          <h1 className="text-4xl font-bold ">Contact</h1>
          <p className="text-xl">
            if you want to contact me and do some works, then please fill out
            the form then we can get into bussiness as soon as possible.you and
            me, dream works
          </p>
        </div>
        <main className=" basis-1/2 border-slate-900 dark:border-slate-200 border-2 bg-slate-600/25 dark:bg-slate-100/25 ">
          <form onSubmit={submit} className="p-5 flex flex-col gap-5" action="">
            <div className="flex sm:flex-row flex-col  sm:p-2 gap-2">
              <div>
                <label className="pl-5  uppercase" htmlFor="firstName">
                  first Name:
                </label>
                <Input
                  changedClasses={FirstNameClasses}
                  inputValue={FirstNameValue}
                  onBlur={changeFirstNameFocus}
                  onChangeValue={changeFirstNameValue}
                  width="full"
                >
                  Your First Name!
                </Input>
              </div>
              <div>
                <label className="pl-5 uppercase" htmlFor="lastName">
                  last Name:
                </label>
                <Input
                  changedClasses={LastNameClasses}
                  inputValue={LastNameValue}
                  onBlur={changeLastNameFocus}
                  onChangeValue={changeLastNameValue}
                  width="full"
                >
                  Your Last Name!
                </Input>
              </div>
            </div>
            <div className="flex flex-col ">
              <label className="pl-5 uppercase" htmlFor="email">
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
            </div>
            <div className="flex flex-col ">
              <label className="pl-5 uppercase" htmlFor="Message">
                Message:
              </label>
              <Input
                changedClasses={ReasonClasses}
                inputValue={ReasonValue}
                onBlur={changeReasonFocus}
                onChangeValue={changeReasonValue}
                width="full"
              >
                Your Message!
              </Input>
            </div>
            <ButtonPurple>Send!</ButtonPurple>
          </form>
        </main>
      </div>
    </Container>
  )
}

export default Contact
