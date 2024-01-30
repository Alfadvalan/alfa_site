import { useNavigate } from 'react-router-dom';
import logo_color from '../assets/logo_color.png';
import logo from '../assets/logo.png';
import { FaWhatsapp } from 'react-icons/fa';


const TermsScreen = () => {
    const navigate = useNavigate();

    return (
        <div className='overflow-x-hidden w-full bg-gray-100 flex flex-col font-montserrat items-center relative'>
            <header className='bg-white h-10 w-full flex flex-row items-center justify-evenly lg:justify-around md:h-16 lg:h-20'>
                <img src={logo_color} alt='logo' className='w-32 md:w-48 lg:w-60 cursor-pointer' onClick={() => navigate(-1)} />
                <a className='bg-green-500 py-1 px-2 text-sm rounded-lg shadow-bs1 text-white font-bold flex gap-2 items-center justify-around md:text-lg lg:py-3 lg:px-6 md:py-2 md:px-3 cursor-pointer' href='https://bit.ly/3Sk88LS'>
                <FaWhatsapp className='lg:w-6 lg:h-6 w-3 h-3 md:w-5 md:h-5'/>
                Fale conosco
                </a>
            </header>
            <section className='h-full'>
                <div className='w-[80%] m-auto text-justify flex flex-col gap-10 my-20'>
                    <h1 className='font-bold text-center text-2xl text-blue'>TERMOS E CONDIÇÕES DE USO DO SITE</h1>
                    <p className=''>
                        1. Este Termo se refere ao(à) Alfa clube de Benefícios. Ao navegar neste site e usar os serviços que são fornecidos, você AFIRMA que LEU, COMPREENDEU e CONCORDA com nossos Termos e Condições. Estes Termos e Condições abrangem todos os aplicativos, serviços de Internet ou extensões dos sites relacionados. Caso você não concorde ou não tenha ficado claro algum ponto, sugere-se que você NÃO NAVEGUE MAIS NELE até que você tenha sanado todas as suas dúvidas. Você poderá ainda, a qualquer tempo, retornar ao site, clicar em termos de uso e reler quantas vezes desejar.
                    </p>
                    <h1 className='font-bold text-lg text-blue'>Termos e Condições</h1>
                    <p>
                        2. Os Termos e Condições de Alfa clube de Benefícios regem o uso deste Site e todo o seu conteúdo ("Site"). Estes Termos descrevem as regras e regulamentos que orientam o uso de Alfa clube de Benefícios localizado pelo link URL <a className='underline text-red-600 cursor-pointer' href='https://alfacb.org.br/'>https://alfacb.org.br/</a>. Todos os materiais/informações/documentos/serviços ou todas as outras entidades (coletivamente referidas como "conteúdo'') que aparecem em <a className='underline text-red-600 cursor-pointer' href='https://alfacb.org.br/'>https://alfacb.org.br/</a> serão administrados de acordo com estes Termos e Condições. ATENÇÃO: Não continue a usar este site se você tiver qualquer objeção a qualquer uma das disposições dos Termos e Condições declarados nesta página.
                    </p>
                    <p>
                        3. O site é destinado a usuários com 18 (dezoito) anos de idade ou mais. Se você tem menos de 18 (dezoito) anos, não poderá usar ou registrar-se para usar este site ou seus serviços sem a permissão ou consentimento dos pais. Ao concordar com estes Termos e Condições, você tem a capacidade legal necessária para cumprir e ficar vinculado por estes Termos e Condições.
                    </p>
                    <p>
                        4. Alfa clube de Benefícios faz uso de cookies. Ao acessar nosso site, você concorda em usar cookies nos termos da nossa Política de Cookies. Salienta-se que algum dos nossos parceiros de site podem usar cookies.
                    </p>
                    <p>
                        5. Alfa clube de Benefícios detêm os direitos de propriedade intelectual de todo o conteúdo. Todos os direitos de propriedade intelectual são reservados. Você pode acessar qualquer conteúdo do site para seu uso pessoal, sujeito às restrições definidas nestes termos e condições. Alfa clube de Benefícios, por meio deste, determina que o usuário do site não cometa as seguintes ações:
                        <ul className='flex flex-col gap-10 list-disc mt-10 ml-10'>
                            <li>Reproduzir, republicar, duplicar ou copiar qualquer conteúdo de Alfa clube de Benefícios;</li>
                            <li>Vender, alugar, sublicenciar e/ou de outra forma comercializar qualquer conteúdo de Alfa clube de Benefícios ;</li>
                            <li>Executar e/ou exibir publicamente qualquer conteúdo de Alfa clube de Benefícios;</li>
                            <li>Usar este site de forma que seja, ou talvez, danifique e/ou afete o acesso do usuário a este site;</li>
                            <li>Usar este site contrário às regras, leis e regulamentos relevantes do seu país de residência, ou de uma maneira que cause, ou possa causar, danos ao site ou a qualquer pessoa ou entidade comercial;</li>
                            <li>Realizar mineração de dados ou qualquer outra atividade semelhante relacionada a este site, ou durante o uso deste site; e</li>
                            <li>Usando este site para se envolver em qualquer forma de publicidade ou marketing empresarial.</li>
                        </ul>
                    </p>
                    <p>
                        6. Áreas específicas deste site podem ser restritas ao acesso do usuário, e Alfa clube de Benefícios pode estender ainda mais essa restrição a todo o site, a qualquer momento e a seu exclusivo critério. Qualquer identificação de usuário, chave de segurança ou senha que você possa ter neste site são confidenciais e você é responsável por manter a confidencialidade dessas informações.
                    </p>
                    <h1 className='font-bold text-lg text-blue'>Link e Hiperlink</h1>
                    <p>
                        7. Nós nos reservamos o direito de registrar solicitações para que você remova todos os links ou qualquer link específico criado por você que redirecione para o nosso site, e você aprova a remoção imediata desses links para o nosso site, mediante solicitação.
                    </p>
                    <p>
                        8. Podemos alterar os termos e condições desses direitos de vinculação a qualquer momento. Ao conectar-se continuamente ao nosso site, você concorda em se comprometer e seguir os termos desta política de links.
                    </p>
                    <p>
                        9. Por favor, entre em contato conosco se encontrar algum link em nosso site que seja ofensivo, e poderemos considerar e analisar solicitações de remoção de tais links.
                    </p>
                    <h1 className='font-bold text-lg text-blue'>Link para conteúdo de terceiros</h1>
                    <p>
                        10. Este site pode conter links para sites ou aplicativos operados por terceiros. Não controlamos nenhum desses sites ou aplicativos de terceiros ou o operador de terceiros. Este Site, objeto do presente Termos de Uso não é responsável e não endossa quaisquer sites ou aplicativos de terceiros ou sua disponibilidade ou conteúdo. Alfa clube de Benefícios não se responsabiliza pelos anúncios contidos no site. Você concorda em fazê-lo por sua própria conta e risco ao adquirir quaisquer bens e / ou serviços de terceiros. O anunciante é quem permanece responsável por tais bens e/ou serviços, e se você tiver alguma dúvida ou reclamação sobre eles, você deve entrar em contato com o anunciante.
                    </p>
                    <h1 className='font-bold text-lg text-blue'>Conteúdo do usuário</h1>
                    <p>
                        11. Importante salientar que o termo usado "Conteúdo do Usuário" significa qualquer áudio, vídeo, texto, imagens ou outro material ou conteúdo que você decida exibir neste Site. Com relação ao conteúdo do usuário, ao exibi-lo, você concede para Alfa clube de Benefícios uma licença não exclusiva, mundial, irrevogável, isenta de royalties e sublicenciável para usar, reproduzir, adaptar, publicar, traduzir e distribuir em qualquer mídia.
                    </p>
                    <p>
                        12. O Conteúdo do Usuário deve ser seu e não deve infringir os direitos de terceiros. Alfa clube de Benefícios reserva-se o direito de remover qualquer parte do seu conteúdo deste site a qualquer momento, sem aviso prévio. Alfa clube de Benefícios tem permissão para monitorar suas atividades no site e remover qualquer conteúdo do usuário considerado impróprio, ofensivo, contrário às leis e regulamentos aplicáveis, ou que cause uma violação destes Termos e Condições.
                    </p>
                    <h1 className='font-bold text-lg text-blue'>Política de Privacidade</h1>
                    <p>
                        13. Ao acessar este Site, informações específicas sobre o Usuário, como endereços de Protocolo de Internet (IP), navegação no site, software do usuário e tempo de navegação, juntamente com outras informações semelhantes, serão armazenadas nos servidores de Alfa clube de Benefícios. As informações sobre suas identidades, como nome, endereço, detalhes de contato, informações de faturamento e outras informações armazenadas neste site, serão estritamente usadas apenas para fins estatísticos e não serão publicadas para acesso geral. Alfa clube de Benefícios, no entanto, não assume nenhuma responsabilidade pela segurança dessas informações.
                    </p>
                    <p>
                        14. O site é fornecido, com todas as responsabilidades e não assume compromissos, representações ou garantias expressas ou implícitas de qualquer tipo relacionadas a este site ou ao conteúdo nele contido.
                    </p>
                    <h1 className='font-bold text-lg text-blue'>Indenização</h1>
                    <p>
                        15. O usuário concorda em indenizar o Site e suas afiliadas em toda a extensão, frente à todas as ações, reclamações, responsabilidades, perdas, danos, custos, demandas e despesas decorrentes do uso deste Site pelo Usuário, incluindo, sem limitação, qualquer reclamação relacionada à violação de qualquer uma das disposições destes Termos e Condições. Se estiver insatisfeito com algum ou todo o conteúdo deste site ou qualquer um ou todos os seus Termos e Condições, o usuário pode interromper o uso deste site.
                    </p>
                    <p>
                        16. Em qualquer momento, os usuários podem interromper o uso do Site para isso, no site, estão disponíveis as orientações necessárias. Caso ainda fique algum dúvida, não hesite em enviar um e-mail para axleads9791@gmail.com.
                    </p>
                    <p>
                        17. Nós nos reservamos o direito e critério exclusivo de, e sem aviso prévio ou responsabilidade, negar o acesso e uso do site (incluindo o bloqueio de endereços IP específicos) a qualquer usuário por qualquer motivo, incluindo, mas não se limitando à violação de qualquer representação, garantia ou acordo nestes Termos ou em qualquer lei ou regulamento aplicável.
                    </p>
                    <h1 className='font-bold text-lg text-blue'>Disposições Gerais</h1>
                    <p>
                        18. Os Termos e Condições deste site serão regidos e interpretados de acordo com as leis do país ou estado em que o site opera. Você, por meio deste, se submete incondicionalmente à jurisdição não exclusiva dos tribunais localizados no Brasil para a resolução de quaisquer disputas.
                    </p>
                    <p>
                        19. Este Site reserva-se o direito de revisar estes Termos a qualquer momento conforme julgar adequado. Por isso é fundamental que os seus usuários estejam atentos à essas aleterações.
                    </p>
                    <p>
                        20. O Site reserva-se o direito de ceder, transferir e subcontratar seus direitos e/ou obrigações sob este Acordo sem qualquer notificação ou consentimento prévio necessário. Os usuários não terão permissão para atribuir, transferir ou subcontratar qualquer um de seus direitos e/ou obrigações sob estes Termos. Além disso, uma pessoa que não seja parte destes Termos e Condições não terá o direito de fazer cumprir qualquer disposição neles contida.
                    </p>
                    <p>
                        21. Estes Termos e Condições, incluindo quaisquer avisos legais e isenções de responsabilidade neste site, constituem o acordo completo entre o site e você em relação ao uso deste site. Em última análise, este Acordo substitui todos os acordos e entendimentos anteriores relativos ao mesmo.
                    </p>
                    <p>
                        22. Qualquer dúvida, entre em contato por meio do endereço de e-mail: <a className='underline text-red-600 cursor-pointer' href='mailto:axleads9791@gmail.com'>axleads9791@gmail.com</a>.
                    </p>
                </div>
            </section>
            <footer className='flex items-center justify-around w-full h-10 bg-[#353535] md:h-20 '>
                <div className='flex w-full items-center justify-between'>
                <div className='flex justify-center w-full'>
                    <img src={logo} alt="alfa logo" className='w-20 md:w-36 lg:w-44' />
                </div>
                <div className='flex flex-col items-center justify-center w-full'>
                    <h2 className=' text-white md:text-base text-[8px]'>CNPJ: 36.117.103/0001-83</h2>
                    <h2 className=' text-white md:text-base text-[8px]'>Telefone: (81) 3771-4938</h2>
                </div>
                <div className='flex justify-center w-full'>
                    <h2 className=' text-white md:text-base text-[8px]'>{(new Date().getFullYear())} - Copyright ©</h2>
                </div>    
                </div>
            </footer>
        </div>
    )
}

export default TermsScreen;