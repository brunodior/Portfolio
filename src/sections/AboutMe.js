import foto from '../assets/fotoAboutme.png'
function AboutMe() {
    return (
        <section className="px-5 py-5 bg-secondary row">
            <div className='col-6'>
                <img src={foto} className='w-100' alt='foto'/>

            </div>
                <div className='col-6 d-flex justify-content-center flex-column'>
                    <h2 className='text-white fw-normal'>Sobre mim</h2>
                    <p className='text-primary fw-bold'>Eu comecei no mundo da programação em 2019 quando entrei na faculdade. Atualmente sou formado em Ciências e Tecnologia pela UFRN, e também curso Engenharia da Computação pela mesma Universidade, além disso, fiz alguns cursos online que aprimoraram meu conhecimento. <br/> <br/> Me considero uma pessoa bastante comunicativa, divertido e empático. Gosto de mater uma boa relação com pessoas, principalmente em ambiente de trabalho. <br/> <br/> Sou bastante empenhado e focado no que me empenho em fazer, tenho uma grande fome de aprender, principalmente no mundo da programação, estou sempre buscando me aprimorar.</p>
                </div>
        </section>
    )
}
export default AboutMe