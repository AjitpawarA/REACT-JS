import React, { useEffect } from "react";
import "./pass.css";
import { useState } from "react";
import { useCallback } from "react";

function Passwardgen() {
  let [length, setlength] = useState(10);
  let [numallowed, setnumallowed] = useState(false);
  let [symbolallwed, setsymbolallwed] = useState(false);
  let [passwads, setpasswads] = useState("");

  let passwardgenerate = useCallback(() => {
    let str = "ASDFGHJKLXCVBNMQWERTYUIOPasdfghjklzxcvbnmqwertyuiop";
    let pass = "";

    if (numallowed) str += "0123456789";
    if (symbolallwed) str += "!@#$%^&*()<>?://-+";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpasswads(pass);
    console.log(pass);
  }, [length, numallowed, symbolallwed]);

  useEffect(() => {
    passwardgenerate();
  }, [length, numallowed, symbolallwed, passwardgenerate]);
  return (
    <div>
      <div className="container">
        <div className="main">
          <div className="passwardgenrator">
            <h2>Random Passward</h2>
            <br />
            <div className="one">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Passward"
                value={passwads}
              />
              <button type="button" className="btn btn-primary">
                Copy
              </button>
            </div>
            <div className="two">
              <div className="lengthdiv">
                <label htmlFor="customRange2" className="form-label">
                  Length : {length}
                </label>
                <input
                  type="range"
                  className="form-range"
                  min={10}
                  max={50}
                  id="customRange2"
                  onChange={(e) => {
                    setlength(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                  onChange={() => {
                    setsymbolallwed((prev) => !prev);
                  }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Symbols
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                  onChange={() => {
                    setnumallowed((prev) => !prev);
                  }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Numbers
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passwardgen;
