import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

type IBGEUFResponse = {
    id: number;
    sigla: string;
    nome: string;
};

type IBGECITYResponse = {
    id: number;
    nome: string;
};

const BoxCity = () => {
    const navigate = useNavigate();
    const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
    const [cities, setCities] = useState<IBGECITYResponse[]>([]);
    const [selectedUf, setSelectedUf] = useState('0');

    useEffect(()=>{
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then(response => {
          setUfs(response.data);
        });
      }, []);
      useEffect(()=>{
        axios
          .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
            setCities(response.data);
          });
      }, [selectedUf]);

      function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>){
        const uf = event.target.value;
        setSelectedUf(uf)
      };
    
      const onClick = () => {
        navigate('./terms')
      };

    return (
        <div className='bg-white aspect-square rounded-3xl flex flex-col justify-center items-center gap-[3vw] px-[8vw]'>
            <div className='p-[3vw]'>
              <h1 className='text-grey font-extrabold text-center text-[7vw]'>
                Proteja seu veículo,
              </h1>
              <h1 className='text-grey font-extrabold text-center text-[7vw]'>
                Faça sua cotação
              </h1>
            </div>
            <div className='flex flex-col gap-[2vw]'>
                <label className='text-grey font-semibold text-[3vw]'>Moro no Estado:</label>
              <select name="uf" id="uf" onChange={handleSelectedUf} className='w-full rounded-lg bg-light-grey placeholder-black/50 p-[3vw] text-[3vw]'>
                <option value="0"></option>
                {ufs.map(ufs => (
                    <option key={ufs.id} value={ufs.sigla} className='bg-white'>{ufs.nome}</option>
                ))}
              </select>
              <label className='text-grey font-semibold text-[3vw]'>Moro na Cidade:</label>
              <select name="city" id="city" className='w-full rounded-lg bg-light-grey placeholder-black/50 p-[3vw] text-[3vw]'>
                <option value="0"></option>
                {cities.map(city => (
                    <option key={city.id} value={city.nome}>{city.nome}</option>
                ))}
              </select>

                <button className='bg-red-700 rounded-lg text-white uppercase font-extrabold hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] w-full p-[4vw] text-[4vw] mt-[2vw]'>próximo passo</button>
              
              <p className='text-grey text-center text-[3vw]'>Ao preencher o formulário, concordo em receber comunicação e estou de acordo com os <a onClick={onClick} className='cursor-pointer underline font-semibold text-[#0029AA]'>termos de uso</a>.</p>
            </div>
          </div>
    )
}

export default BoxCity;