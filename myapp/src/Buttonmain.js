import Button from './Button.js'
function Buttonmain(){
    const buttonall=['All','Music','Spiritual','News','Cooking','Song']
    return(
        <div className='flex'>
         {
            buttonall.map(function(b){
                return <Button name={b}></Button>
            })
         }
        </div>
    )
}
export default Buttonmain