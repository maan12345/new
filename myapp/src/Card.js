function Card(props){
    const data=props.name
    console.log(data)
    return(
        <div className='p-2 m-2 w-72 shadow-lg py-2'>
        <img className='rounded-xl' src={data.snippet.thumbnails.high.url}></img>
        <ul>
            <li className='font-bold'>{data.snippet.title}</li>
            <li>{data.snippet.channelTitle}</li>
            <li>{data.statistics.viewCount} view</li>
        </ul>
        </div>
    )
}
export default Card