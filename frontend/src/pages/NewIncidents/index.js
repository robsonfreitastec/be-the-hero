import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 
import api from '../../services/api';
import './style.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncidents() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try{
            await api.post('/incidents', data, {
                headers: {
                    authorization: ongId,
                 }
            })

            history.push('/profile');

        } catch (err) {
            alert('Erro ao cadastrar o caso, tente novamente.');
        }
    }


    return (
        <div className="new-incident-container">
        <div className="content">
        <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastrar novo Caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

            <Link to="/profile" className="back-link"> 
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
            </Link>
        </section>
        <form onSubmit={handleNewIncident}>
            <input placeholder="Título do Caso" value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea placeholder="descrição" value={description} onChange={e => setDescription(e.target.value)}/>
            <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>

            <button className="button" type="submit" >Cadastrar</button>
        </form>
        </div>
    </div>
    );
}

