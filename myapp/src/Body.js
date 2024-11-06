import Sidebar from './Sidebar.js'
import Maincontainer from './Maincontainer.js'
import useVideo from './useVideo.js'
import {Outlet} from 'react-router-dom'
function Body(){
    //const data=useVideo()
    return(
        <div className='flex'>
    <Sidebar></Sidebar>
    <Outlet></Outlet>
        </div>
    )
}
export default Body