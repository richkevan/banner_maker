import { useLoaderData, useOutletContext } from "remix"

export const loader = async ({params}) => {
    const url =  `https://api.pexels.com/v1/search?query=${params.query}&per_page=6`
    console.log(url)
    const response = await fetch(url)
    return response.json()
}

const Query = () => {
    // const [canvasStyle, setCanvasStyle] = useOutletContext()
    const photos = useLoaderData()
    console.log(photos)
    return (
        <div className="image-container">
            <h1>Photos</h1>
            {photos.photos.map(photo => {
                return(
                    <img key={photo.id} src={photo.src.medium} alt={photo.alt}/>
                )})}
        </div>
    )
}

export default Query