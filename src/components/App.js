import React,{useEffect, useState} from "react"; 
import {create} from 'apisauce'     //apisauce
import { createSelector } from 'reselect' // reselect
 
import SearchForm from './search'   // styled-components
import './App.css';                    
import Songs from './songs';        //components

const baseURL='https://itunes.apple.com';
const api = create({
  baseURL: baseURL,
  headers: { Accept: 'application/json' },
});


const App = () => {

  const [songData, setSongs] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Arijit Singh');
  const [isLoading, setLoading] = useState(false);
  // const [onChange,setChange]=useState(false);



  // const t=createSelector(
  // (onChange)=>{onChange},
  //   () =>{
  //     const getSongs = async () =>{
  //       setLoading(true);
  //       await api.get( `/search?term=${query}`)
  //          .then(response=>{
  //            const data =  response.data;
  
  //            console.log(data)
  //            if(query.length>0 && data.results.length>0){
  //               setSongs(data.results);
  //            }
                 
  //          });
  //       setLoading(false);
  //     };
  
  //     getSongs()
  //   }
  // )

 
  useEffect(() =>{


    const getSongs = async () =>{
      setLoading(true);
      await api.get( `/search?term=${query}`)
         .then(response=>{
           const data =  response.data;

           console.log(data)
          //  if(query.length>0 && data.results.length>0){
          //     setSongs(data.results);
          //  }
          if(data!==null)
           setSongs(data.results);
               
         });
      setLoading(false);
    };


    // const getSongs = async () => {
    //   setLoading(true)
    //   const response = await fetch(`https://itunes.apple.com/search?term=${query}`);
    //   const data = await response.json();
    //   setSongs(data.results);
    //   setLoading(false);
    // };


    getSongs()
  }, [query]);



  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    
    e.preventDefault();
    if(search.trim().length>=0){
      setQuery(search);
    }
   
  }

  return(
    <div className='App' id="home">

      <SearchForm as="form"onSubmit={getSearch}  inputs={search.length} load={isLoading}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search artist here..." />
          <button className="search-button" type="submit">
              Search
          </button>
      </SearchForm>
    
      <div className="cards" id="song" >
       
                { !isLoading && songData.length>0 
                  && songData.map(song => (
                 song.previewUrl!==undefined &&
                  <Songs
                        title={song.collectionName}
                        image={song.artworkUrl100}
                        song={song.previewUrl}
                        artistName={song.artistName}
                        Date={song.releaseDate}
                  />
                ))
                }
                {console.log(songData.length)}
                { isLoading && (query.trim().length===0)?
                              <div><p style={{"color":"white","fontSize":"25px",fontWeight:"500"}}>Search Something....</p></div>:""
                              
                }

                { isLoading? <div class="loader"></div>:""}

      </div>


    </div>  
  );
};

export default App;

