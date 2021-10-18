export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=wrMHbNUxnP6XcVHFeY9EzNBuATj3Osq1`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    });

    //console.log(gifs);
    //setImages( gifs );
    return gifs;

}