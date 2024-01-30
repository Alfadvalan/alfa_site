import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const BoxCar = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const currentDateTime = new Date();
        const formattedDateTime = format(currentDateTime, "dd-MM-yyyy HH:mm:ss");
      
        const formData = {
          Nome: e.currentTarget.Nome.value,
          Whatsapp: e.currentTarget.Whatsapp.value,
          DataHoraPreenchimento: formattedDateTime,
        };
      
        console.log('Dados do formulário antes do envio:', formData);
      
        try {
          const response = await fetch(import.meta.env.VITE_REACT_APP_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            console.log('Dados enviados com sucesso!', response);
            console.log('Redirecionando...');
            navigate('/VideoScreen')
          } else {
            console.error('Erro ao enviar dados:', response.status, response.statusText);
            
            // Adicione esta parte para logar a resposta da API em caso de erro
            const responseData = await response.json();
            console.error('Resposta da API:', responseData);
    
            if (window.location.pathname !== '/VideoScreen') {
              console.error('Rota não encontrada: /VideoScreen');
            }
          }
        } catch (error) {
          console.error('Erro durante a requisição:', error);
        }
      };

      const onClick = () => {
        navigate('./terms')
      };

    return (
        <div className='bg-white aspect-square rounded-3xl flex flex-col justify-center items-center gap-[2vw] px-[8vw]'>
            <div className='p-[3vw]'>
              <h1 className='text-grey font-extrabold text-center text-[7vw]'>
                Proteja seu veículo,
              </h1>
              <h1 className='text-grey font-extrabold text-center text-[7vw]'>
                Faça sua cotação
              </h1>
            </div>
            <div className='flex flex-col gap-[5vw]'>
              <form className='flex flex-col gap-[2vw]' onSubmit={handleFormSubmit}>
                <h1 className='text-[3vw] font-semibold text-grey mb-0'>Tipo de veículo:</h1>
                  <div className='flex w-full gap-[5vw] justify-center'>
                    <div className='bg-light-grey w-full rounded-lg flex justify-center py-[3vw]'>
                      <label className='flex justify-around gap-[2vw] text-[3vw] font-semibold text-[#555555]'>
                        <input 
                          type="radio" 
                          name="Carro" 
                          value="carro"
                          checked={false}
                          className='w-10'
                        />
                          Carro
                        </label>
                    </div>
                    <div className='bg-light-grey w-full rounded-lg flex justify-center py-[3vw]'>
                      <label className='flex justify-around gap-[2vw] text-[3vw] font-semibold text-[#555555]'>
                        <input 
                          type="radio" 
                          name="Moto" 
                          value="moto"
                          checked={false}
                          className='w-10'
                        />
                        Moto
                      </label>
                    </div>
                    <div className='bg-light-grey w-full rounded-lg flex justify-center py-[3vw]'>
                      <label className='flex justify-around gap-[2vw] text-[3vw] font-semibold text-[#555555]'>
                        <input 
                          type="radio" 
                          name="Caminhão" 
                          value="caminhão"
                          checked={false}
                          className='w-10'
                        />
                        Caminhão
                      </label>
                    </div>
                  </div>
                  <div className='flex w-full gap-[5vw]'>
                    <div className='w-full'>
                      <h1 className='text-[3vw] font-semibold text-grey mb-0'>Marca:</h1>
                      <select className='w-full rounded-lg bg-light-grey placeholder-black/50 p-[3vw] text-[3vw]'>
                        
                      </select>
                    </div>
                    <div className='w-full'>
                      <h1 className='text-[3vw] font-semibold text-grey mb-0'>Modelo:</h1>
                      <select className='w-full rounded-lg bg-light-grey placeholder-black/50 p-[3vw] text-[3vw]'>
                        
                      </select>
                    </div>
                    <div className='w-full'>
                      <h1 className='text-[3vw] font-semibold text-grey mb-0'>Ano:</h1>
                      <select className='w-full rounded-lg bg-light-grey placeholder-black/50 p-[3vw] text-[3vw]'>
                        
                      </select>
                    </div>
                  </div>
                <button className='bg-red-700 rounded-lg text-white uppercase font-extrabold hover:animate-spin shadow-bs1 hover:shadow-red-700/80 shadow-red-700/50 hover:scale-[1.03] w-full p-[4vw] text-[4vw] mt-[3vw]'>próximo passo</button>
              </form>
              <p className='text-grey text-center text-[3vw]'>Ao preencher o formulário, concordo em receber comunicação e estou de acordo com os <a onClick={onClick} className='cursor-pointer underline font-semibold text-[#0029AA]'>termos de uso</a>.</p>
            </div>
          </div>
    )
}

export default BoxCar;