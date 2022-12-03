import React from "react";
import Logo from "../image/image.svg";
import Menu from "../image/menu.svg";
import Profile from "../image/profile.svg";
import { Button, Dropdown } from "antd";
import DropDown from "../elements/dropdown";

export default function navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img style={{ paddingLeft: "1rem" ,marginTop:"1rem"}} src={Logo} alt="logo-image" />
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly", paddingTop:"1rem" , width:"18rem"}}>
        <div>
          <Button
            style={{
              border: "1px solid black",
              borderRadius: "0px",
              fontWeight: "bold",
            }}
            type="text"
          >
            Become a host
          </Button>
        </div>
        <DropDown/>
      </div>
    </div>
  );
}
