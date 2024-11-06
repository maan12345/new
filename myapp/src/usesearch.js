function useSearch(value){
    useEffect(function(){
       const temp2=async function(){
        const data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=AIzaSyC5lfkPb8N5zY5XezBeGiFCjqOvY_28oEY`)
        const data2=await data.json()
        return data2;
       }
    },[])
}