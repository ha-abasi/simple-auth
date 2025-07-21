'use client'
import styles from "./page.module.scss";
import {fetchSampleApi} from "@/libs/fetchSampleApi";
import Button from "@/components/button/Button";
import {useState} from "react";
import PhoneInput from "@/components/phone_input/PhoneInput";

export default function AuthPage() {
    const [isLoading, setIsLoading] = useState(false);

    const onBtnClick = () => {
        setIsLoading(true)
        fetchSampleApi()
            .then(response => {
                // store user data in local storage and redirect to dashboard
                localStorage.setItem("user", JSON.stringify(response))
                window.location.href = "/dashboard"

            })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }



    const [phone, setPhone] = useState("")
    const onPhoneInputChange = (phone: string) => {
        setPhone(phone)
    }

    return (
    <div className={styles.page}>

        <PhoneInput onChange={onPhoneInputChange} />

        {isLoading && <div>Loading...</div>}
        {!isLoading && <Button enabled={phone.length > 0} onClick={onBtnClick}>Login</Button>}

    </div>
    );
}
