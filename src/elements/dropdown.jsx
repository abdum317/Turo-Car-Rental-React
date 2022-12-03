import React from 'react';
import { Button, Dropdown } from 'antd';
import Menu from "../image/menu.svg";
import Profile from "../image/profile.svg";
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Log in
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Signup
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Become a Host
      </a>
    ),
  },
];
const DropDown = () => (
  <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button  type="text">
      <img style={{ paddingRight: "0.1rem" }} src={Menu} alt="Menu" />
          <img src={Profile} alt="profile" />
      </Button>
    </Dropdown>
  </>
);
export default DropDown;