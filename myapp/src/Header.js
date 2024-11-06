import {useDispatch} from 'react-redux'
import {changeside} from './sideslice.js'
import {useState} from 'react'
import {useEffect} from 'react'
//import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {addsear} from './searchslice.js'
function Header(){
    const dispatch=useDispatch()
    function changeside2(){
         dispatch(changeside())
    }
    function search(b){
       setsedata(b.target.value)
    }
    const [sedata,setsedata]=useState('')
    const [searchsugg,setsearchsugg]=useState([])
    const [sugg,setsugg]=useState(true)
    const searda=useSelector(function(state){
        return state.search.search
    })
    //const dispatch=useDispatch()
    useEffect(function(){
         const temp2=async function(){
            if(sedata.length==0){
                return;
            }
            if(searda[sedata]){
                setsearchsugg(searda[sedata])
                return
            }
            const data=await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${sedata}`)
            console.log(data)
            //const data12= await data.text();
            //console.log(data12)
            const data2=await data.json() 
            console.log(data2)
            dispatch(addsear({[sedata]:data2[1]}))
            /*const data12=data2.items.map(function(b){
                  const data18=b.snippet.title.split(' ')
                  if(data18.length>2){
                    const data28=data18[0]+data18[1]
                    return data28
                  }
                  else if(data18.length<=2){
                    return b.snippet.title
                  }
            })
            setsearchsugg(data12)*/
            setsearchsugg(data2[1])
         }
        const ourse=setTimeout(function(){
            temp2()
        },280)
        return function(){
            clearTimeout(ourse)
        }
    },[sedata])
    function changesugg(){
        setsugg(false)
    }
    function changesugg2(){
        setsugg(true)
    }
    //const [sedata,setsedata]=useState('')
    //https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=faded
    //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${sedata}&key=AIzaSyC5lfkPb8N5zY5XezBeGiFCjqOvY_28oEY
    return(
        <div className='grid grid-flow-col p-2 m-2 shadow-xl h-20 items-center mb-8 relative'>
        <div className='flex col-span-1 items-center'>
            <img className='h-8' onClick={changeside2} src="https://img.icons8.com/?size=100&id=120374&format=png&color=000000"></img>
            <img className='h-8 ml-8' src="https://img.icons8.com/?size=100&id=37325&format=png&color=000000"></img>
            <p> YouTube</p>
        </div>
        <div className='col-span-10 ml-40 '>
        <div className='flex'>
            <input className='w-80 border border-blue-800' type='text' value={sedata} onChange={search} onFocus={changesugg} onBlur={changesugg2} onScroll={changesugg2}></input>
            <button className='ml-10'> search</button>
        </div>
        {searchsugg.length!=0 && sugg==false &&
        <div className='bg-white w-80 py-2 px-2 rounded-xl shadow-lg absolute'>
            <ul>
            {
                searchsugg.map(function(b){
                    return <li className='py-2 shadow-sm hover:bg-gray-100'>{b}</li>
                })
            }
            </ul>
        </div>
}
        </div>
        <div classname='col-span-1'>
            <img className='h-8'src="https://img.icons8.com/?size=100&id=98957&format=png&color=000000"></img>
        </div>
        </div>
    )
}
export default Header