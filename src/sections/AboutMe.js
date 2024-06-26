import foto from '../assets/fotoAboutme.png'
function AboutMe() {
    return (
        <section className="px-3 px-md-5 py-5 bg-secondary row" id='aboutme'>
            <div className='col-md-6'>
                <img src={foto} className='w-100' alt='foto'/>

            </div>
                <div className='col-md-6 d-flex justify-content-center flex-column'>
                    <h2 className='text-white fw-normal'>Sobre mim</h2>
                    <p className='text-primary fw-bold m-0'>Me chamo Bruno, tenho 23 anos e sou estudante de Engenharia de Computação pela UFRN. 
                                                            Minha trajetória profissional está centrada no 
                                                            desenvolvimento de projetos que visam aprimorar a 
                                                            experiência dos usuários, através de soluções
                                                            responsivas, acessíveis e criativas. 
                                                            <br></br><br></br>
                                                            Tenho um forte 
                                                            compromisso em me aprofundar nas tarefas que 
                                                            assumo e estou constantemente em busca de novos 
                                                            conhecimentos em cada desafio que enfrento. Tenho 
                                                            ampla experiência como Design Gráfico, no qual já trabalho 
                                                            por 9 anos com diversas empresas. A 1 ano descobri o
                                                            mundo de UI/UX design no qual venho me aprofundando. 
                                                            Além disso, sou Desenvolvedor Front-end com amplo 
                                                            domínio.
                                                            <br></br><br></br>
                                                            Me considero uma pessoa bastante comunicativa, divertida e 
                                                            empática. Gosto de manter uma boa relação com pessoas, 
                                                            principalmente em ambiente de trabalho.</p>
                </div>
        </section>
    )
}
export default AboutMe