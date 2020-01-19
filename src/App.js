import React, { useState, useEffect} from 'react';
import api from'./services/api';

//CSS Global

import './css/Global.css';
import './css/App.css';
import './css/Sidebar.css';
import './css/Main.css';


import FormDevs from './components/FormDevs';
import ListaDevs from './components/ListaDevs/index';





function App() {
  const [devs, setDevs] = useState([])


useEffect(() =>{
async function loadDevs(){
  const response = await api.get('/devs')

  setDevs(response.data);

  }

  loadDevs();

},[]); 

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)
setDevs([...devs, response.data]);  
  
}

  return (
  
    <div id="app">
      <aside>
        <strong> Cadastrar Devs Wooza </strong>
        <FormDevs onSubmit={handleAddDev} />
       </aside>

       <main>
         <ul>
          {devs.map(dev =>(
            <ListaDevs key={dev._id} dev={dev} />
          ))}
         </ul>
       </main>
     </div>
  )
}

export default App;
