import React, {useState} from "react";
import Addresspng from "../../../../shared/icons/address.png";
import Emailpng from "../../../../shared/icons/email.png";
import Phonepng from "../../../../shared/icons/phone.png";
import Avtpng from "../../../../shared/images/Avatar.jpg";
import logout from "../../../../shared/icons/logout.png";
import changepasspng from "../../../../shared/icons/sync-alt.png";
import ChangePassword from "../ChangePassword/ChangePassword";
import "./UserInfor.css";
import {useNavigate} from "react-router-dom";
function UserInfor(props) {
  const tag = props.tag;
  let info = JSON.parse(localStorage.getItem("info"));
  if (localStorage.getItem("role") === "admin") {
    info = {
      name: "Admin",
      identifyNumber: "Loading...",
      email: "",
      phoneNumber: "Loading...",
    };
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
      ></ProFile>
    </div>
  );
}

function ProFile(user) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <div id="Avartar">
        <img id="InsideAvt" src={user.avatar} alt="" />
      </div>
      <div className="line" style={{marginLeft: "10px"}}>
        <div className="name">
          <span className="fullName">{user.name}</span>
          <span className="tag">{user.tag}</span>
        </div>
      </div>
    </div>
  );
}
export default UserInfor;
