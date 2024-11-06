function Header2(){
    return(
        <div>
            Header2
        </div>
    )
}

export const Header12=function (Header2){
    return function(props){
        return(
            <div>
            <label> promote</label>
            <Header2></Header2>
            </div>
        )
    }
}