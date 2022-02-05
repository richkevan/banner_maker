import { useOutletContext } from "remix"

const Text = () => {
    const [canvasStyle, setCanvasStyle] = useOutletContext()

    const handleChange = (e) => {
        console.log(e.target.id)
        let canvasStyle2 = Object.assign({}, canvasStyle)
        switch(e.target.id) {
            case "Title":
                canvasStyle2.canvasTitle = e.target.value
                break;
            case "subTitle":
                canvasStyle2.canvasSubtitle = e.target.value
                break;
            case "text":
                canvasStyle2.canvasText = e.target.value
                break;
            case "fontSize":
                canvasStyle2.canvasFontSize = parseInt(e.target.value)
                break;
            case "fontColor":
                canvasStyle2.canvasFontColor = e.target.value
                break;
        }
        setCanvasStyle(canvasStyle2)
        console.log(canvasStyle2, canvasStyle)
    }

    return (
        <div className="modal-background">
            <label htmlFor="Title"><h3>Title</h3>
            <input type="text" id="Title"  onChange={handleChange} value={canvasStyle.canvasTitle}/></label>
            <label htmlFor="subTitle"><h3>Subtitle</h3>
            <input type="text" id="subTitle" onChange={handleChange} value={canvasStyle.canvasSubtitle}/>
            </label>
            <label htmlFor="text"><h3>Text</h3>
            <textarea id="text" rows="5" cols="50"  onChange={handleChange} value={canvasStyle.canvasText}></textarea>
            </label>
            <label htmlFor="fontSize"><h3>Font Size</h3>
            <input type="number" id="fontSize" min={12} max={72} onChange={handleChange} value={canvasStyle.canvasFontSize}/>
            </label>
            <label><h3>Font Alignment</h3></label>
            <label htmlFor="left">
            <input type="radio" name="left" value="left" /><h3>Left</h3></label>
            <label htmlFor="center">
            <input type="radio" name="center" value="center" /><h3>Center</h3></label>
            <label htmlFor="right">
            <input type="radio" name="right" value="right" /><h3>Right</h3></label>
            <label htmlFor="fontColor"><h3>Font Color</h3>
            <input type="color" id="fontColor" onChange={handleChange} value={canvasStyle.canvasFontColor}/>
            </label>

        </div>
    )
}

export default Text