import React, { useState } from "react";

export default function Textdesain() {
  const [input, setInput] = useState("");
  const validNumber = (pNumber) => {
    let countNumber = 0;
    for (var i = 0; i < pNumber.length; i++) {
      if (isNumeric(pNumber.charAt(i))) countNumber += 1;
    }
    return countNumber;
  };
  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }
  const capitalize = (text) => {
    let capitalize = 0;
    for (let i = 0; i < text.length; i++) {
      const huruf = text.charAt(i);
      if (
        huruf == huruf.toUpperCase() &&
        huruf != " " &&
        !isNumeric(huruf) &&
        !symbols(huruf)
      )
        capitalize++;
    }
    return capitalize;
  };
  const lowcase = (text) => {
    let lowcase = 0;

    for (let i = 0; i < text.length; i++) {
      const huruf = text.charAt(i);
      if (
        huruf == huruf.toLowerCase() &&
        huruf != " " &&
        !symbols(huruf) &&
        !isNumeric(huruf)
      )
        lowcase++;
    }
    return lowcase;
  };
  const spacess = (text) => {
    let spacess = 0;
    for (let i = 0; i < text.length; i++) {
      const huruf = text.charAt(i);
      if (huruf == " ") spacess++;
    }
    return spacess;
  };
  const rex = (text) => {
    let rex = 0;
    for (let i = 0; i < text.length; i++) {
      const huruf = text.charAt(i);
      if (symbols(huruf)) rex++;
    }
    return rex;
  };
  function symbols(value) {
    return /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(value);
  }
  return (
    <div>
      <div class="backg">
        <div class="planet">
          <div class="r1"></div>
          <div class="r2"></div>
          <div class="r3"></div>
          <div class="r4"></div>
          <div class="r5"></div>
          <div class="r6"></div>
          <div class="r7"></div>
          <div class="r8"></div>
          <div class="shad"></div>
        </div>
        <div class="stars">
          <div class="s1"></div>
          <div class="s2"></div>
          <div class="s3"></div>
          <div class="s4"></div>
          <div class="s5"></div>
          <div class="s6"></div>
        </div>
        <div class="an">
          <div class="tank"></div>
          <div class="astro">
            <div class="helmet">
              <div class="glass">
                <div class="shine"></div>
              </div>
            </div>
            <div class="dress">
              <div class="c">
                <div class="btn1"></div>
                <div class="btn2"></div>
                <div class="btn3"></div>
                <div class="btn4"></div>
              </div>
            </div>
            <div class="handl">
              <div class="handl1">
                <div class="glovel">
                  <div class="thumbl"></div>
                  <div class="b2"></div>
                </div>
              </div>
            </div>
            <div class="handr">
              <div class="handr1">
                <div class="glover">
                  <div class="thumbr"></div>
                  <div class="b1"></div>
                </div>
              </div>
            </div>
            <div class="legl">
              <div class="bootl1">
                <div class="bootl2"></div>
              </div>
            </div>
            <div class="legr">
              <div class="bootr1">
                <div class="bootr2"></div>
              </div>
            </div>
            <div class="pipe">
              <div class="pipe2">
                <div class="pipe3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "80%" }}>
        <h1 style={{ textAlign: "center", color: "brown" }}>
          CHARACTER COUNTER
        </h1>

        <div className="textareaxx">
          <textarea
            placeholder="ketik disini..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></textarea>
          <div className="inputxx">
            <p>LENGTH : {input.length}</p>
            <p>SYMBOLS :{rex(input)}</p>
            <p>NUMBER : {validNumber(input)}</p>
            <p>SPACES : {spacess(input)}</p>
            <p>UPPER CASE : {capitalize(input)}</p>
            <p>LOWER CASE : {lowcase(input)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
