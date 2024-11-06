import {useDispatch} from 'react-redux'
import {closeside} from './sideslice.js'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSearchParams} from 'react-router-dom'
import Comment from './Comment.js'
import Lichat from './Lichat.js'
function Card2(){
    useEffect(function(){
        dispatch(closeside())
    },[])
    const dispatch=useDispatch()
    const [searchparam]=useSearchParams()
    console.log(searchparam.get('v'))
    return(
        <div className='flex flex-col w-full'>
        <div className='px-5 flex w-full'>
            <div>
    <iframe width="1000" height="600" src={`https://www.youtube.com/embed/${searchparam.get('v')}?si=DMh8dkh7JJQC8CFX`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='w-full'>
        <Lichat></Lichat>
        </div>
        </div>
        <Comment></Comment>
        </div>
    )
}
export default Card2