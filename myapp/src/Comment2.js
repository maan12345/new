function Comment2(props){
    const data=props.name
    return(
        <div className='flex shadow-sm bg-gray-100 p-2 m-2 rounded-xl'>
            <img className='w-8 h-8' src={'https://img.icons8.com/?size=100&id=98957&format=png&color=000000'}></img>
            <div className='px-3'>
            <p className='font-bold'> {data.name}</p>
            <p> {data.text}</p>
            </div>
        </div>
    )
}
export default Comment2