'use client'
import styles from "./page.module.scss";
import ResultModel from "@/models/result.model";
import {useEffect, useState} from "react";

export default function DashboardPage() {

    const [user, setUser] = useState<ResultModel | null>(null);

    useEffect(() => {
        const userJson = localStorage.getItem("user") || "";
        const userObj = JSON.parse(userJson) as ResultModel;
        setUser(userObj);
    }, []);

    return (
        <div className={styles.page}>
          <h1>Welcome to the Dashboard</h1>
            {!user && <p>loading...</p>}
            {user && <>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{user?.name.title} {user?.name.first} {user?.name.last}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{user?.email}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>{user?.phone}</td>
                        </tr>
                        <tr>
                            <td>Username:</td>
                            <td>{user?.cell}</td>
                        </tr>
                    </tbody>
                </table>
            </>}

        </div>
    );
}
