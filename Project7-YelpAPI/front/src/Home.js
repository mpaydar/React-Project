
import React, { useState, useEffect} from 'react';
import Listview from './Listview';
// const pool =require("./db")

function Home() {
    const image=require('./yelp.png')
    const[service,setService]=useState()
    const [city,setCity]=useState()
    const [buttonValue,setbuttonValue]=useState(false)
    const [apiData, setAPiRespond]=useState()
    let result=[]
    function handleSubmit()
    {
            console.log("You just clicked")
            setbuttonValue(true)
    }

    useEffect
    (
         ()=>
        {
            if(buttonValue)
            {
                console.log(`city:${city},service:${service}`)
                setbuttonValue(false)
                mountAPI()
            }

        },
        [buttonValue]
    )


        async function mountAPI()
        {
            const requestOptions ={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({"search_city":city,"search_service":service})
            }

             var api_respond=await fetch("http://localhost:5000/yelpAPI",requestOptions);
             var data=await api_respond.json();
             data=JSON.stringify(data)
             data=data.replace('[','')
             data=data.replace(']' ,'')
             data=data.replace('"','')
             data=data.replace('"',"")
             var bus_list=data.split(',')
             bus_list.forEach(element=>{ result.push(<li id='listItem'>{element}</li>)})
             setAPiRespond(result)
        }




     







    return ( 

        <>
            <img src={image} className="yelp_logo"/>
            <div className='formcontainer'>
            <h1 className="mainHeader">Service App</h1>

                 <form onSubmit={handleSubmit}>

                        <div  className="cityInput">
                                 <input type="text" placeholder="City" onChange={(event)=>{setCity(event.target.value)}}  className="c"/ >
                        </div>

                        <div  className="serviceInput" >
                            <input type="text" placeholder="Service/Food/Product" onChange={(event)=>{setService(event.target.value)}} className="s"/>
                        </div>
                       
                        <input type="button" value="search" onClick={handleSubmit} className="searchObject"/>
                 </form>   
            </div>

            {<Listview data={apiData}/>}
           
        </>




     );
}

export default Home;