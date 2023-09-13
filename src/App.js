import {  useEffect } from 'react'
import api from './services/request_api';

export default function App(){

   // const [resultado,setResultado] = useState(null);

    useEffect(() => {
       
    async function recuperarDados (){

         await api.get('marcos')
        .then((data) => {console.log(data)} )
        .catch((erro) => {alert("Erro: "+ erro)} )
    }


        recuperarDados()
    }, []);

    return(
        <div>
            <p> Olha o console</p>
        </div>
    )
}