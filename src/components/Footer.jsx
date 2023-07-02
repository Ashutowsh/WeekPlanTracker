import React from "react";

let year = new Date().getFullYear() ;

function Footer(){
    return <div className="footer center">
        <p>Copyright {year} </p>
    </div>
}

export default Footer;