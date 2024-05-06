
import styles from './Sections.module.css'



function Portfolio(){

    const portfolio = [
        {   
            name: 'Netflix',
            text: 'Clone da Netflix feito com React Js.',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/netflix.png?alt=media&token=e3c12088-24cc-4795-88ef-808abeaaa4dd',
            site: 'https://clone-netflix-green.vercel.app/',
            github: 'https://github.com/brunodior/Clone-Netflix'
        },
        {   
            name: 'Clima agora',
            text: 'Sistema com consumo de API que mostra o clima atual da cidade.',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/climaagora.png?alt=media&token=199b5954-1d59-477b-b692-770cb3e05948',
            site: 'https://clima-agora-beta.vercel.app/',
            github: 'https://github.com/brunodior/Clima-Agora-'
        },
        {   
            name: 'Jogo da velha',
            text: 'Jogo de velha feito com HTML JS e CSS puro.',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/jogodavellha.png?alt=media&token=b4ad2819-5917-43a4-846a-e09f234ae0ef',
            site: 'https://jogo-da-velha-ecru.vercel.app/',
            github: 'https://github.com/brunodior/Jogo-da-velha'
        },
        {   
            name: 'Loucos por pastel',
            text: 'Sistema de cardário online de uma lanchonete.',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/loucosporpaste%3B.png?alt=media&token=25a5b9e1-89b5-48e9-8c41-aeeef89c0686',
            site: 'https://loucos-por-pastel.vercel.app/',
            github: 'https://github.com/brunodior/Loucos-por-Pastel'
        },
        {   
            name: 'Miaudota',
            text: 'Sistema de adoção de pets, feito com React JS, Bootstrap, Node js e MongoDB.',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/miaudota.png?alt=media&token=8dee9e36-8eac-4364-9788-c9bcd798d169',
            site: 'https://miaudota.vercel.app/',
            github: 'https://github.com/brunodior/miaudota-frontend'
        },
        {   
            name: 'KnowMe',
            text: 'Joguinho de perguntas sobre o tanto que você me conhece.',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/knowme.png?alt=media&token=71ee530f-b27f-491a-95f1-44f417fca3ac',
            site: 'https://know-me-liard.vercel.app/',
            github: 'https://github.com/brunodior/KnowMe'
        },
        {   
            name: 'DevMemory',
            text: 'Jogo da memoria com com icones',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/jogodamemoria.png?alt=media&token=cddf60e6-e902-49f3-a8e7-85ea10b159d1',
            site: 'https://dev-memory-seven.vercel.app/',
            github: 'https://github.com/brunodior/DevMemory'
        },
        {   
            name: 'Calculadora de IMC',
            text: 'Calculadora básica que calcula o seu IMC',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/calculadoraIMC.png?alt=media&token=b8e78cb4-5ac3-41af-a9f8-c6681c467724',
            site: 'https://imc-calculadora-nine.vercel.app/',
            github: 'https://github.com/brunodior/IMC-calculadora'
        },
        
      
        {   
            name: 'Arrasta e solta',
            text: 'Sistema básico de arrasta e solta de quadrados.',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/arrastaesolta.png?alt=media&token=10fb3ce4-2a3a-4cdd-ac1b-4e4c9ebeae4c',
            site: 'https://arrasta-e-solta.vercel.app/',
            github: 'https://github.com/brunodior/Arrasta-e-Solta'
        },
        {   
            name: 'To-do list',
            text: 'Sistema de Lista de afazeres diários (sem backend). ',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/todo.png?alt=media&token=be333b5c-0f9a-4de4-a202-83b615b09b10',
            site: 'https://to-do-list-mu-gilt-87.vercel.app/',
            github: 'https://github.com/brunodior/To-Do-List'
        },
        
        
        {   
            name: 'Bateria',
            text: 'Batéria que emite sons de acordo com as teclas digitadas.',
            url: 'https://firebasestorage.googleapis.com/v0/b/portifolio-4a7bd.appspot.com/o/bateria.png?alt=media&token=4841bb45-c7c3-4c09-a9cf-d4cad6877afe',
            site: 'https://bateria-iota.vercel.app/',
            github: 'https://github.com/brunodior/Bateria'
        },
       
    
    ]

    return (
        <section id='portfolio' className="p-md-5 px-3 py-4  bg-primary">
            
                <div className="position-relative d-flex justify-content-center align-items-center">
                    <h3 className="m-0 fw-bold text-white  position-absolute border-3 border-bottom border-secondary unbounded">Portfólio</h3>

                    <h1 className="m-0 fw-bolder text-dark unbounded text-opacity-50">Portifólio</h1>
                </div>


                <div className="row g-md-3 mt-4">
                {portfolio.map((data, index) => (
                    <div className="col-md-4 align-items-stretch">
                        <div className={`border border-2 border-secondary rounded-5 d-flex flex-column justify-content-between h-100 p-3 ${styles.scale}`}>
                            <div>
                                <img className="w-100 rounded-4" style={{height: '150px', objectFit: 'cover'}} alt="logo" src={data.url}/>
                                <h4 className="text-secondary fw-bold mt-3 montserrat">{data.name}</h4>
                                <h6 className="text-light montserrat">{data.text}</h6>
                            </div>
                           
                            <div className="d-flex w-100 mt-3">
                                <a href={data.site} target='_blank' className="btn btn-light text-decoration-none p-2 w-75 h6 rounded-4 m-0 me-2 d-flex align-items-center justify-content-center">Acessar projeto</a>
                                <a href={data.github} target='_blank' className="btn btn-outline-light light text-decoration-none p-1 w-25 h6 rounded-4 m-0"><i class="bi bi-github fs-4"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
                    
                </div>
        </section>
    )
}

export default Portfolio