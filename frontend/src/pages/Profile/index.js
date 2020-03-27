import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg';


export default function Profile() {
    const history = useHistory();

    const [incidents,setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

  

    useEffect(() => {
        api.get('/profile', {
           headers: {
               authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        }) 
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try{
            await api.delete(`/incidents/${id}`, {
                headers: {
                    authorization: ongId,
                 }
            });

            setIncidents(incidents.filter(incidents => incidents.id !== id));
        }catch (err) {
            alert('Erro ao deletar o caso, tente novamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vindo, {ongName}</span>

                <Link className="button" to="/incidents/new" >Cadastrar nono caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>

            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incidents => (
                           <li key={incidents.id}>
                           <strong>CASO:</strong>
                           <p>{incidents.title}</p>
       
                           <strong>DESCRIÇÃO:</strong>
                           <p>{incidents.description}</p>
       
                           <strong>VALOR:</strong>
                           <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>
                           <button onClick={() => handleDeleteIncident(incidents.id)} type="button">
                               <FiTrash2 size={20} color="#a8a8b3"/>
                           </button>
                       </li>
                ))}
            </ul>
        </div>
    );
}