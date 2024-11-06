import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {addli} from './lislice.js'
import {useEffect} from 'react'
import Limessage from './Limessage.js'
import {useState} from 'react'
function Lichat(){
    useEffect(function(){
     const lime=setInterval(function(){
        const data={name:'aman',message:'this is a cricket match'}
        dispatch(addli(data))
     },2000)
     return function(){
        clearInterval(lime)
     }
    },[])
    const dispatch=useDispatch()
    const limeda=useSelector(function(state){
        return state.lichat.state
    })
    const [message,setmessage]=useState('')
    function changemessage(b){
          setmessage(b.target.value)
    }
    function changemessage2(){
        const data={name:'aman',message:message}
        dispatch(addli(data))
    }
    return(
        <div>
        <div className='ml-2 p-2 bg-slate-100 border border-black rounded-xl w-full h-[600px] overflow-y-scroll flex-col-reverse'>
              Livechat
              {
                limeda.map(function(b){
                    return <Limessage name={b.name} message={b.message}></Limessage>
                })
              }
        </div>
        <div className='w-full flex justify-between p-2 ml-2 border border-black'>
            <input type='text' className='w-[70%]' placeholder='write your message' onChange={changemessage}></input>
            <button onClick={changemessage2}> submit</button>
        </div>
        </div>
    )
}
export default Lichat