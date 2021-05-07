import styled from 'styled-components';

const SearchForm=styled.div`

  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;


& .search-bar {
  width: 50%;
  border: none;
  padding: 10px;
  background-color:${props=>(props.load && props.inputs===0)?'#ed5454;':'none'};
  font-weight:500;
  color:crimson;

}

& .search-button {
  background:${props=>props.inputs>0?'gray':'crimson'};
  border: none;
  padding: 10px 20px;
  color: white;
  font-weight:500;
  
}
`;

export default SearchForm;