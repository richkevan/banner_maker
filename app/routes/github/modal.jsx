import { Link, Outlet, useOutletContext } from "remix"


const Modal = () => {
    const [canvasColor, setCanvasColor] = useOutletContext()
    return (
        <div className="modal">
            <h1>Modal</h1>
            <Link to="/github"><div className="close"></div></Link>
            <Outlet context={[canvasColor, setCanvasColor]}/>
        </div>
    )
}

export default Modal