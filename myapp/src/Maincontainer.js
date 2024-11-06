import Buttonmain from './Buttonmain.js'
import Videomain from './Videomain.js'
import useVideo from './useVideo.js'
function Maincontainer(){
    const data=useVideo()
    return(
        <div className='ml-20'>
        <Buttonmain></Buttonmain>
        <Videomain name={data}></Videomain>
        </div>
    )
}
export default Maincontainer