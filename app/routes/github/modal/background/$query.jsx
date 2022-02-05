import { useLoaderData, useOutletContext } from "remix"
import axios from "axios"


const Query = () => {
    const [canvasStyle, setCanvasStyle] = useOutletContext()
    const photos = useLoaderData()

    console.log(process.env.REACT_APP_PEXELS)
    
    const onChange = (img) => {
        let canvasStyle2 = Object.assign({}, canvasStyle)
        canvasStyle2.canvasBackgroundImage = `url(${img.src.large})`
        setCanvasStyle(canvasStyle2)
    }

    return (
        <div className="image-container">
            <h1>Photos</h1>
            {/* {photos.photos.map(photo => (
                    <img key={photo.id} src={photo.src.medium} alt={photo.alt} onClick={(e) => {
                        onChange(photo)
                    }}/>
                ))} */}
        </div>
    )
}

export default Query