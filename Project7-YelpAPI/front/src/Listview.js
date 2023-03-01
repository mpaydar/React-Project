
function Listview(props) {
    return ( 


        <>
        
             <ol className='mylist' >
                <h1>Search Results:</h1>
                {props.data}
            </ol>
        
        
        </>

     );
}

export default Listview;