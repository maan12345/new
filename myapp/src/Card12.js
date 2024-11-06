import {useMemo} from 'react'
function Card12(){
    const [data,setdata]=useState('')
    function changedata(b){
        setdata(b.target.value)
    }
    //suppose this is a very heavy operation so everytime our page rerender due to dome state change this function call everytime so we want that if the value saved corresponding
    //to it does not change and then this function not call so we cahce the re
    //const data2=function(){
    //    return 'hello';
    //}
    const data2=useMemo(function(){
        return 'hello'
    },[data])
    return(
        <div className='m-4 p-2 w-96 h-96 border border-black'>
        <input type='text' value={data} onChange={changedata}></input>
        </div>
    )
}
export default Card12