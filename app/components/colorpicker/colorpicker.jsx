

const ColorPicker = () => {
    const backgroundColor = (e) => {
        let canvas = document.getElementsByClassName("canvas")
        canvas[0].style.backgroundColor = e.target.value;
    }
    return (
        <form>
            <label htmlFor="color"><h3>Background Color</h3>
            <input type="color" name="background" id="background" onChange={backgroundColor}/>
            </label>
        </form>
        
    )
}

export default ColorPicker;