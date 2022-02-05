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
        canvasBackgroundPosition:"center",
        canvasTitle:"",
        canvasSubtitle:"",
        canvasText:"",
        canvasFontSize:12,
        canvasFontColor:"#000000",
        canvasFontAlignment:"left"
    });
 
    return(
        <div>
            <div className="github-menu">
            <h1>Github Banner 1280x640</h1>
            <Link to="/github/modal/background"><button><h2>Edit Banner Background</h2></button></Link>
            <Link to="/github/modal/text"><button><h2>Edit Banner Text</h2></button></Link>
            </div>
            <Outlet context={[canvasStyle, setCanvasStyle]}/>
            <div className="main">
                <div className="canvas" style={{width:'1280px',height:'640px', backgroundColor: canvasStyle.canvasBackgroundColor, backgroundImage: canvasStyle.canvasBackgroundImage, backgroundPosition: canvasStyle.canvasBackgroundPosition, backgroundRepeat: canvasStyle.canvasBackgroundRepeat, backgroundSize: canvasStyle.canvasBackgroundSize, fontSize: canvasStyle.canvasFontSize, color: canvasStyle.canvasFontColor, textAlign: canvasStyle.canvasTextAlign}}>
                <h1 style={{fontSize: "2em"}}>{canvasStyle.canvasTitle}</h1>
                <h3 style={{fontSize: "1.5em"}}>{canvasStyle.canvasSubtitle}</h3>
                <p>{canvasStyle.canvasText}</p>
                </div>
            </div>
        </div>
    )
}

export default Github