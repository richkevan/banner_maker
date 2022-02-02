import { useState } from "react"
import { Link, Outlet, useOutletContext } from "remix"




const ModalBackground = () => {
    const [canvasStyle, setCanvasStyle] = useOutletContext()
    const [query, setQuery] = useState("")
    
    const onChange = (e) => {
        let canvasStyle2 = Object.assign({}, canvasStyle)
        canvasStyle2.canvasBackgroundColor = e.target.value
        setCanvasStyle(canvasStyle2)
    }
    const queryValue = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div className="modal-background">
            <label htmlFor="color"><h3>Background Color</h3>
            <input type="color" id="color" value={canvasStyle.canvasBackgroundColor} onChange={onChange}/></label>
                <label htmlFor="search"><h3>Image Search</h3>
                <input type="search" id="search" value={query} onChange={queryValue}/>
                </label>
                <Link to={`/github/modal/background/${query}`}><input type="submit" value="Search" /></Link>
            <Outlet context={[canvasStyle, setCanvasStyle]}/>
        </div>
    )
}

export default ModalBackground