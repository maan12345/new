import {useEffect} from 'react'
import {api2} from './utils/util.js'
import {useState} from 'react'
function useVideo(){
    const [videos,setvideo]=useState([])
    useEffect(function(){
        async function video(){
            const data=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${api2}`)
            const data2=await data.json()
            console.log(data2.items)
            setvideo(data2.items)
        }
        video();
    },[])
    return videos
}
export default useVideo