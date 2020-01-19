import React  from 'react';

import './styles.css'


function ListaDevs({ dev }) {
return(
     <li  className="dev-item">
      <header>
       <img src={dev.avatar_url} alt={dev.name}/>
        <div className="user-info">
         <strong>{dev.name} </strong>
         <span>{dev.techs}</span>
        </div>
      </header>
       <p>{dev.bio}</p>
        <a href={`http://github/${dev.github_username}`}> Acessar Perfil no GITHUB</a>
     </li>
  );
}

export default ListaDevs;