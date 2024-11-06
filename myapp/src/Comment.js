import Comment2 from './Comment2.js'
const Commentlist=function(props){
    const data=props.name
    return(
       <div>
      {
         data.map(function(b){
            return(
            <div>
            <Comment2 name={b}></Comment2>
            <div className='pl-5 border border-l-black ml-5'>
               {
                b.reply.length>0 && <Commentlist name={b.reply}></Commentlist>
               }
            </div>
            </div>
            )
         })
      }
      </div>)
}
function Comment(){
    const data=[
        {
            name:'aman',
            text:'this is a youtube app',
            reply:[
                {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[
                        {
                        name:'aman',
                        text:'this is a youtube app',
                        reply:[],
                        }
                    ]
                },
                {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[
                    {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[],
                    }
                    ]
                },
                {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[]
                }
            ]
        },{
            name:'aman',
            text:'this is a youtube app',
            reply:[
                {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[
                        {
                        name:'aman',
                        text:'this is a youtube app',
                        reply:[],
                        }
                    ]
                },
                {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[
                    {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[],
                    }
                    ]
                },
                {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[]
                }
            ]
        },{
            name:'aman',
            text:'this is a youtube app',
            reply:[
                {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[
                        {
                        name:'aman',
                        text:'this is a youtube app',
                        reply:[],
                        }
                    ]
                },
                {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[
                    {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[],
                    }
                    ]
                },
                {
                    name:'aman',
                    text:'this is a youtube app',
                    reply:[]
                }
            ]
        }
    ]
    return(
        <div className='m-5 p-2'>
         <h2 className='text-2xl font-bold'> comments</h2>
         <Commentlist name={data}></Commentlist>
        </div>
    )
}
export default Comment