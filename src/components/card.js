import './card.css'
import { useState, useEffect } from 'react';
import api from '../services/request_api';

function CardTecnologia(){

    const [data, setData] = useState([])

    useEffect(() => {
        api.get('all')
          .then(async(res) => {
            await setData(res.data)
            console.log(res.data)
          })
        .catch(err => console.log(err))
      }, [])


    return(
        <div className='card-div'>
    {data.map(props =>( 
    <div className='card-container'>

        <img src={props.logo_tecnologia} alt='Logo tecnologia' className='logo-tecnologia'></img>

        <div className='card-info'>
            <h4><span>Nome:</span> {props.nome}</h4>
        </div>

        <div className='card-info'>
            <h4><span>Criador(es): </span>{props.criador} </h4>
        </div>

        <div className='card-info'>
            <h4><span>Data de lançamento: </span>{props.data_lancamento}</h4>
        </div>

        <div className='div-salario'>
            <center className='mt-3'> <h3>Salário Anual</h3> </center>

            <div className='card-info-salario'>
                <span>2022</span>
                <h4> {props.salario[2022]}</h4>
            </div>

            <div className='card-info-salario'>
                <span>2023</span>
                <h4>{props.salario[2023]}</h4>
            </div>

        </div>
        
        <div className='div-curiosidade'>
            <h5>{props.curiosidade} </h5>
        </div>

    </div>
    ) ) }
    </div>
)  
}

export default CardTecnologia