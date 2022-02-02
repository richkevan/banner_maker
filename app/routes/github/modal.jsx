import { Link, Outlet, useOutletContext } from "remix"


const Modal = () => {
    const [canvasStyle, setCanvasStyle] = useOutletContext()
    return (
        <div className="modal">
            <h1>Modal</h1>
            <Link to="/github"><div className="close"></div></Link>
            <Outlet context={[canvasStyle, setCanvasStyle]}/>
        </div>
    )
}

export default Modal