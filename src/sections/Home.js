import perfil from '../assets/fotoInicio1.png'
import background from '../assets/background.png'
import styles from './Sections.module.css'
function Home() {
    return (
        <section id='home' className="px-3 px-md-5 bg-primary rounded-bottom-5 pt-3 overflow-hidden w-100 d-flex justify-content-between" style={{height: '75vh', marginTop: '97px'}}>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='h-100 w-100 d-flex flex-column justify-content-center text-center text-md-start'>
                        <h2 className='text-white fw-normal m-0 lh-1'>Olá, me chamo</h2>
                        <h1 className='fw-bold lh-1 text-secondary'>Bruno Dior!</h1>
                        <h6 className='fw-bold text-white' style={{letterSpacing: '10px'}}>DESENVOLVEDOR FULL-STACK</h6>
                        <a href='https://api.whatsapp.com/send?phone=5584988716812&text=Ol%C3%A1,%20Bruno%20Dior!' className='btn btn-outline-secondary p-2 w-100 fw-semibold rounded-5 fs-4 mt-3'>Entre em contato</a>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='w-100 h-100 position-relative d-flex justify-content-center align-items-end'>
                        <img src={background} alt='background' className={styles.imgLoop} style={{zIndex: 10}} />
                        <img src={perfil} alt='perfil' className='w-100' style={{zIndex: 10}}/>

                    </div>
                </div>
            </div>
            
            
        </section>
    )
}
export default Home