import Addresspng from '../../../../shared/icons/address.png'
import Emailpng from '../../../../shared/icons/email.png'
import Phonepng from '../../../../shared/icons/phone.png'
import Avtpng from '../../../../shared/images/Avatar.jpg'
import logout from '../../../../shared/icons/logout.png'
import changepasspng from '../../../../shared/icons/sync-alt.png'
import ChangePassword from '../ChangePassword/ChangePassword'
import './UserInfor.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function UserInfor(props) {
    const tag = props.tag
    let info = JSON.parse(localStorage.getItem("info"))
    if (localStorage.getItem("role") === "admin") {
        info = {
            name: "Admin",
            identifyNumber: "Loading...",
            email: "admin@gmail.com",
            phoneNumber: "Loading..."
        }
    }
    return (
        <div>
            <ProFile
                setToken={props.setToken}
                avatar={Avtpng}
                name={info.name}
                tag={tag}
                phoneNumber={info.phoneNumber}
                email={info.email}
                idCode={info.identifyNumber}
                setIsChange={props.setIsChange}
            >
            </ProFile>
        </div>
    )
}

function ProFile(user) {
    const navigate = useNavigate()
    return (
        <div className="userInfor">
            <div id="Avartar">
                <img id="InsideAvt" src={user.avatar} alt="" />
            </div>
            <div className="line">
                <div className="line1">
                    <div className="name" style={{ margin: "0px 180px 0px 10px" }}>
                        <span className="fullName">{user.name}</span>
                        <span className="tag">{user.tag}</span>
                    </div>
                    <div className="idDivision" style={{ margin: "0px 40px" }}>
                        {/* <div className="image">
                            <img className='image1' src={Addresspng} alt="" />
                        </div> */}
                        <div className='USdetail' style={{ margin: "0px 40px" }}>
                            <span className="titleOfInfor">Identity Code</span>
                            <span className="detail">{user.idCode}</span>
                        </div>
                    </div>
                    <div className="emailDivision" style={{ margin: "0px 40px" }}>
                        {/* <div className="image">
                            <img className='image1' src={Emailpng} alt="" />
                        </div> */}
                        <div className='USdetail' style={{ margin: "0px 40px" }}>
                            <span className="titleOfInfor">Email</span>
                            <span className="detail">{user.email}</span>
                        </div>
                    </div>
                    <div className="phoneDivision" style={{ margin: "0px 40px", width: "400px" }}>
                        {/* <div className="image">
                            <img className='image1' src={Phonepng} alt="" />
                        </div> */}
                        <div className='USdetail' style={{ margin: "0px 40px" }}>
                            <span className="titleOfInfor">Phone Number</span>
                            <span className="detail">{user.phoneNumber}</span>
                        </div>
                    </div>
                    <button className="changePass" onClick={() => {
                        user.setIsChange(true)
                    }}>
                        <span className="insideChangePass" style={{ margin: "0px 10px", width: "170px" }}>Change password</span>
                    </button>
                    <button className="logOut" onClick={() => {
                        user.setToken(null)
                        navigate("/login")
                    }}>
                        <span className="insideLogOut" style={{ margin: "0px 10px" }}>Logout</span>
                    </button>
                </div>
            </div>

        </div>
    )
}
export default UserInfor
