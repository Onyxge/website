import { useState, useEffect } from "react";
function Footer(){
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return (
        <>
        <hr />
        <footer>
        <p>© {year} Paramount Fusion. All rights reserved</p>
        </footer>
        </>
    );
}

export default Footer;