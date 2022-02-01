import { Link, Outlet } from "remix"
import {  useState } from "react";
import styles from "~/styles/github.css";


export function links() {
  return [{rel:"stylesheet", href:styles}]
}


const Github = () => {
    const [backgroundColor, setBackgroundColor] = useState("#fff");
    const [backgroundImage, setBackgroundImage] = useState("inherit");
    const [imagePosition, setImagePosition] = useState("center");
    const [imageRepeat, setImageRepeat] = useState("no-repeat");

    return(
        <div>
            <h1>Github</h1>
            <Link to="/github/modal/background">Background</Link>
            <Outlet context={[backgroundColor, setBackgroundColor]}/>
            <div className="main">
                <div className="canvas" style={{width:'1280px',height:'640px', backgroundColor: backgroundColor, background: `${backgroundImage} ${imagePosition} ${imageRepeat}`}}></div>
            </div>
        </div>
    )
}

export default Github