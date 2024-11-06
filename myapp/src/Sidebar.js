import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
function Sidebar(){
    const temp2=useSelector(function(state){
        return state.side.value
    })
    console.log(temp2)
    if(temp2==true){
        return
    }
    return(
        <div className='p-5 shadow-xl w-48'>
            <h2></h2>
            <ul>
                <Link to={'/'}> <li> Home</li></Link>
                <li> Short</li>
                <li> Video</li>
                <li> Live</li>
            </ul>
         <h2 className='font-bold pt-5'> Subscription</h2>
         <ul>
            <li> Music</li>
            <li> Sports</li>
            <li> Gaming</li>
            <li> Movie</li>
         </ul>
         <h2 className='font-bold pt-5'>Watch Later</h2>
         <ul>
            <li>Music</li>
            <li> Sports</li>
            <li> Gaming</li>
            <li> Movies</li>
         </ul>
        </div>
    )
}
export default Sidebar