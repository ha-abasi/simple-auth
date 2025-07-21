
import styles from "./PhoneInput.module.scss";
import {useState} from "react";
export default function PhoneInput({onChange} : {onChange: (value: string) => void}) {

  const [phone, setPhone] = useState("");
  const isValidPhoneNumber = (phone: string) => {
    // it should be valid Iran phone number format
    const regex = /^(\+98|0)?9\d{9}$/
    return regex.test(phone)
  }

  const handlePhoneNumberChange = (phone: string) => {
    if (isValidPhoneNumber(phone)) {
      onChange(phone)
    }else{
      // show error message
      onChange("")
    }
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
    handlePhoneNumberChange(e.target.value)
  }

  return <div className={styles.phoneInputWrapper}>
    <input type={"text"}
           onChange={onChangeHandler}
           value={phone}
           className={styles.phoneInput + " " + (isValidPhoneNumber(phone)? "" : styles.invalidInput)}
           placeholder={"Phone number"}/>
    {!isValidPhoneNumber(phone) && <span className={styles.error}>Please enter a valid phone number</span>}

  </div>;
}

