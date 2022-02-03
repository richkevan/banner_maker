import { useOutletContext } from "remix"

const Text = () => {
    const [canvasStyle, setCanvasStyle] = useOutletContext()

    return (
        <div className="modal-content">
            <label htmlFor="text"><h3>Text</h3>
            <input type="text" id="text" value={canvasStyle.canvasText} onChange={onChange}/></label>
        </div>
    )
}

export default Text