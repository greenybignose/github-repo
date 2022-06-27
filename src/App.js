import React, {useState, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fillinnow } from './reducerch.js'

const App = () => {

const nilainya = useRef();
const isigithubrep = [];
let listofrepo = useSelector((state) => state);
let tampilnow = listofrepo.reducernya;
const isinow = [];
const dispatch = useDispatch();

const handleClick = (event) => {
   event.preventDefault();
   
   let m = nilainya.current.value;
   let url = "https://api.github.com/users/" + m + "/repos"
console.log(url);

 fetch(url)
      .then((response) => response.json())
      .then(data =>  {
console.log(data);
for(let u=0; u < data.length; u++){
    console.log(data[u].full_name);
    isinow.push(data[u].full_name);
}
dispatch(fillinnow(isinow));
}
) .catch(error => console.log(error));


}
console.log(listofrepo.reducernya);


return(
<>
<label>Please input name to search:</label>
<input type="text" size="100" ref={nilainya} />
<br></br>
<button size="50" onClick={(e) => handleClick(e)} >
Submit
</button>
{tampilnow}
</>
)
}

export default App;
