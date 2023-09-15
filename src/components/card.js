import './card.css'
import { useState, useEffect } from 'react';
import api from '../services/request_api';
import FiltrarCards from '../controller/filtrarCard';
import LimparFiltro from '../controller/limparFiltro';

function CardTecnologia(){

    
    // Guarda os valores do array gerado pela API
    const [data, setData] = useState([])

    //Guarda os valores do input Filtro
    const [valorInput, setValorInput] = useState("");

    //Guarda a nova lista (caso filtrada)
    const [dataFiltro,setDataFiltro] = useState([])
    
    //Define o valor do input Filtro 
    const handleInputChange = (event) => {
        setValorInput(event.target.value)
        
      };

    // Antes do site carregar ele faz uma requisição para a api
    useEffect(() => {
        api.get('all')
          .then(async(res) => {
            await setData(res.data) // Caso a requisição tenha dado certo ele guarda no data
            await setDataFiltro(res.data)
            console.log(res.data)   // Testa no console a resposta da api
          })
        .catch(err => alert("Erro inesperado: " + err))   // Caso tenha gerado algum erro no processo ele da um alerta com o erro
      }, [])


    // Parte que vai ser renderizada
    return(
        
    <div className='filtro-div'>
        <center className='mt-5'>
        <input
            type="text"
            value={valorInput}
            onInput={handleInputChange}
            placeholder='Digite o nome da tecnologia'
        />
        
       <button onClick={ () => FiltrarCards(valorInput,valorInput,data,setDataFiltro)} placeholder='Digite o nome'>Filtrar</button>
       <button onClick={ () => LimparFiltro(setValorInput,setDataFiltro,data)} placeholder='Digite o nome'>Limpar Filtro</button>
       </center>
    <div className='card-div'>
    {
    dataFiltro
    .map(props =>( 
    <div className='card-container'>

        <div className='div-logo-tecnologia'>
            <center>
            <img src={props.logo_tecnologia} alt='Logo tecnologia' className='logo-tecnologia'></img>
            </center>
        </div>    

        <div className='card-info'>
            <h5><span>Nome:</span> {props.nome}</h5>
        </div>

        <div className='card-info'>
            <h5><span>Criador(es): </span>{props.criador} </h5>
        </div>

        <div className='card-info'>
            <h5><span>Data de lançamento: </span>{props.data_lancamento}</h5>
        </div>

        <div className='card-info'>
                <center className='mt-3'> <h3>Salário Anual</h3> </center>

        </div>

        <div className='div-salario'>
            

            <div className='card-info-salario'>
                <span>2022</span>
                <h5> {props.salario[2022]}</h5>
            </div>

            <div className='card-info-salario'>
                <span>2023</span>
                <h5>{props.salario[2023]}</h5>
            </div>

        </div>
        
        <div className='div-curiosidade'>
            <h6>{props.curiosidade} </h6>
        </div>

    </div>
    ) ) }
    </div> 
</div>  
)  
}

export default CardTecnologia