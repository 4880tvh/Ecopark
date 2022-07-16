import { useState } from "react";
import ChangePassword from "./ChangePassword/ChangePassword";
import RenderBarChart from "./Statistics";
import UserInfor from "./UserInfor/UserInfor";

export default function DashboardOfStaff({ setToken }) {
    const [setChange, setIsChange] = useState(false)
    return (
        <div>
            <UserInfor
                tag="Staff"
                setToken={setToken}
                setIsChange={setIsChange}
            >
            </UserInfor>
            <RenderBarChart></RenderBarChart>
            {
                (setChange) && <ChangePassword callBack={() => { setIsChange(false) }} />
            }
        </div>
    )
}