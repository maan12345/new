function Limessage(props){
    const name=props.name
    const message=props.message
    return(
        <div className='flex items-center p-2'>
        <img className='h-8' src='https://img.icons8.com/?size=100&id=98957&format=png&color=000000'></img>
        <span className='font-bold px-2'> {name}</span>
        <span> {message}</span>
        </div>
    )
}
export default Limessage