import Card from './Card.js'
import {Link} from 'react-router-dom'
function Videomain(props){
    const data=props.name
    return(
        <div className='flex flex-wrap'>
          {
            data.length!=0 && data.map(function(b){
                return <Link to={`/watch?v=${b.id}`}><Card name={b}></Card></Link>
            })
          }
        </div>
    )
}
export default Videomain