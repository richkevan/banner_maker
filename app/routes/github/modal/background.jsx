import { useEffect, useState } from "react"
import { useOutletContext } from "remix"
import axios from "axios"

const url =  "https://api.pexels.com/v1/search"
axios.defaults.headers.com

const ModalBackground = () => {
    const [canvasColor, setCanvasColor] = useOutletContext()
    const [query, setQuery] = useState("")
    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
        console.log(photos)
    }, [photos])
    
    const onChange = (e) => {
        setCanvasColor(e.target.value)
    }
    const queryValue = (e) => {
        setQuery(e.target.value)
    }
    const imageSearch = (e) => {
        e.preventDefault()
        const pexelSearch = async () => {
            const response = await axios.get(url, {
                params: {
                    query: query,
                    per_page: 6,
                },
                headers: {
                    Authorization: '${process.env.PEXELS}',
                }
            })
            .then(res => {
                setPhotos(res.data.photos)
                setQuery("")
            })
            .catch(err => {
                console.log(err)
            })
        }
        pexelSearch()
    }

    const selectBackground = (img) => {
        console.log(img)
    }
    return (
        <div className="modal-background">
            <label htmlFor="color"><h3>Background Color</h3>
            <input type="color" id="color" value={canvasColor} onChange={onChange}/></label>
            <form onSubmit={imageSearch}>
                <label htmlFor="search"><h3>Image Search</h3>
                <input type="search" id="search" value={query} onChange={queryValue}/>
                </label>
                <input type="submit" value="Search" />
            </form >
            {photos.length > 0 && photos.map((img) => {
                return (
                    <div key={img.id} >
                        <img src={img.src.small} alt={img.photographer} onClick={(e) => {selectBackground(img)}}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ModalBackground