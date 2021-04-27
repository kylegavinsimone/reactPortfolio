import React, { useState, useEffect } from "react";

function Navbar(props) {
  return (
    <div>
      <ul>
        <li onClick={() => props.setCurrent(props.components[0])}>about</li>
        <li onClick={() => props.setCurrent(props.components[1])}>contact</li>
        <li onClick={() => props.setCurrent(props.components[2])}>portfolio</li>
      </ul>
    </div>
  );
}

export default Navbar;
