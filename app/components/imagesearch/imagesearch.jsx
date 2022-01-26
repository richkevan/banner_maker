import { useEffect } from "react";


const ImageSearch = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState("");
    
    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`);
            const data = await response.json();
            setImages(data.results);
        }
        fetchImages();
    }, [query]);
    return (
    <>
        <label htmlFor="search"><h3>Search</h3>
        <input type="search" name="search" onChange={(e) => {setQuery(e.target.value)}}/>
        </label>
        
    </>
    )
}

export default ImageSearch;