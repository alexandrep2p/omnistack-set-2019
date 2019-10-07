import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg';
import api from '../../services/api';
import './style.css';

export default function New({ history }) {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    },
        [thumbnail])

    async function handleSubmit() {
        //Payload caso a request espere dados no formato mult-part e nao JSON como no login
        const data = new FormData();
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);
        data.append('thumbnail', thumbnail);

        const user_id = localStorage.getItem('user');

        //Endpoint, payload, parametros de configurações
        await api.post('/spots', data, {
            //Enviado pelo Headers o ID do usuario logado
            headers: { user_id }
        });

        history.push('/dashboard');
    }

    return (
        <form onSubmit="{handleSubmit}">
            <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="Selecione a imagem" />
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input
                id="company"
                placeholder="Sua empresa"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS *<span>(separadas por vírgula)</span></label>
            <input
                id="techs"
                placeholder="Stack utilizada"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="techs">VALOR DA DIÁRIA *<span>(em branco se for gratuito)</span></label>
            <input
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}