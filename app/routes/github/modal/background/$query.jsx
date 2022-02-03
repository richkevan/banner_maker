import { useLoaderData, useOutletContext } from "remix"

export const loader = async ({params}) => {
    const url =  `https://api.pexels.com/v1/search?query=${params.query}&per_page=10`
    const response = await fetch(url)
    return response.json()
}

const Query = () => {
    const [canvasStyle, setCanvasStyle] = useOutletContext()
    const photos = useLoaderData()
    
    const onChange = (img) => {
        let canvasStyle2 = Object.assign({}, canvasStyle)
        canvasStyle2.canvasBackgroundImage = `url(${img.src.large})`
        setCanvasStyle(canvasStyle2)
    }

    return (
        <div className="image-container">
            <h1>Photos</h1>
            {photos.photos.map(photo => {
                return(
                    <img key={photo.id} src={photo.src.medium} alt={photo.alt} onClick={(e) => {
                        onChange(photo)
                    }}/>
                )})}
        </div>
    )
}

export default Query