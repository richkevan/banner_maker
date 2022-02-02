import { Link, Outlet } from "remix"
import {  useState } from "react";
import styles from "~/styles/github.css";


export function links() {
  return [{rel:"stylesheet", href:styles}]
}

const Github = () => {
    const [canvasStyle, setCanvasStyle] = useState({
        canvasBackgroundColor:"#ffffff",
        canvasBackgroundImage:"none",
        canvasBackgroundSize:"cover",
        canvasBackgroundRepeat:"no-repeat",
        canvasBackgroundPosition:"center"
    });
    
    return(
        <div>
            <h1>Github</h1>
            <Link to="/github/modal/background">Background</Link>
            <Outlet context={[canvasStyle, setCanvasStyle]}/>
            <div className="main">
                <div className="canvas" style={{width:'1280px',height:'640px', backgroundColor: canvasStyle.canvasBackgroundColor, backgroundImage: canvasStyle.canvasBackgroundImage, backgroundPosition: canvasStyle.canvasBackgroundPosition, backgroundRepeat: canvasStyle.canvasBackgroundRepeat}}></div>
            </div>
        </div>
    )
}

export default Github