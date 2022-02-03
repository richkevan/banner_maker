import { useOutletContext } from "remix"

const Text = () => {
    const [canvasStyle, setCanvasStyle] = useOutletContext()
    
    return (
        <div className="modal-background">
            <label htmlFor="Title"><h3>Title</h3>
            <input type="text" id="Title" /></label>
            <label htmlFor="subTitle"><h3>Subtitle</h3>
            <input type="text" id="subTitle" />
            </label>
            <label htmlFor="text"><h3>Text</h3>
            <textarea id="text" rows="5" cols="50"></textarea>
            </label>
        </div>
    )
}

export default Text