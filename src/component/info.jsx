import { React, useState } from "react";
import { Input } from "antd";
import { SlArrowDown } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";

export default function Info() {
  const [style, setStyles] = useState("a");
  function changeStyle(e) {
    // console.log(e.target.style.border);
    setStyles((e.target.style.border = "1px solid black"));
  }
  function oldStyle(e) {
    // console.log(e.target.style.border);
    setStyles((e.target.style.border = "0px solid black"));
  }
  return (
    <div
      style={{
        backgroundImage:
          "url('//resources.turo.com/f/81934/480x422/324dab085b/480-uk.jpg')",
        height: "40rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        marginTop: "1.5rem",
      }}
    >
      <div>
        <div className="d-flex justify-content-center">
          <div className="mt-5 bg-white ps-3 pt-1" style={{ width: "18rem" , borderTopLeftRadius:"2rem" , borderBottomLeftRadius:"2rem" }}>
            <label style={{ fontSize: "1rem" }}>Where</label>
            <Input
              style={{ border: "0px solid black" }}
              onFocus={changeStyle}
              onBlur={oldStyle}
              bordered={false}
              placeholder="City, airport, address or hotel"
            />
          </div>
          <div className="mt-5 bg-white">
            <label style={{ fontSize: "0.8rem" }}>From</label>
            <p>
              12/05/2022 <SlArrowDown />{" "}
              <span className="ms-4">
                10:00 <SlArrowDown />
              </span>{" "}
            </p>
          </div>
          <div className="mt-5 bg-white ps-5 pe-2" style={{borderTopRightRadius:"2rem" , borderBottomRightRadius:"2rem" }}>
            <label style={{ fontSize: "0.8rem" }}>From</label>
            <p>
              12/08/2022 <SlArrowDown />{" "}
              <span className="ms-4">
                10:00 <SlArrowDown />
              </span>{" "}
              <span
                className="ms-4 p-3 rounded-circle "
                style={{
                  backgroundColor: "#593CFB",
                  color: "white",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                <BsSearch />
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
