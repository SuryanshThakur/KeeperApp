import React from "react";
function Footer() {
    const year = new Date();
    const currYear = year.getFullYear();
    return (<footer>
        <p>Copyright ⓒ {currYear}</p>
    </footer>);
}
export default Footer;