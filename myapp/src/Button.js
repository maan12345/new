function Button(props){
    const name=props.name
    return(
        <div>
            <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>{name}</button>
        </div>
    )
}
export default Button