import {useRef} from 'react'
function Card18(){
    let b=10
    function incre(){
        b=b+1;
    }
    function incre2(){
        c.current=c.current+1
    }
    const c=useRef(0)
    return(
        <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
         <div>
            <h2 className='font-bold text-xl'> hello world</h2>
            <p> {b}</p>
            <button onClick={incre}></button>
            <p> {c.current}</p>
            <button onClick={incre2}></button>
         </div>
        </div>
    )
}