import React from 'react'

function Footer() {
  let year = new Date().getFullYear();
  return <>
    <footer className="footer">CopyRight © {year} </footer>
  </>;
}

export default Footer