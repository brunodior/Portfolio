import perfil from '../assets/fotoInicio1.png'
import background from '../assets/background.png'
import styles from './Sections.module.css'
function Home() {
    return (
        <section className="px-5 bg-primary rounded-bottom-5 pt-3 d-flex justify-content-between overflow-hidden" style={{height: '80vh'}}>
            <div className='h-100 d-flex flex-column justify-content-center'>
                <h2 className='text-white fw-normal m-0 lh-1'>Olá, me chamo</h2>
                <h1 className='fw-bold lh-1 text-secondary'>Bruno Dior!</h1>
                <h6 className='fw-bold text-white' style={{letterSpacing: '10px'}}>DESENVOLVEDOR FULL-STACK</h6>
                <button className='btn btn-outline-secondary p-2 w-100 fw-semibold rounded-5'>Entre em contato</button>
            </div>
            <div className='position-relative d-flex justify-content-center'>
                <img src={background} alt='background' className={styles.imgLoop} style={{zIndex: 100}} />
                <img src={perfil} alt='perfil' className='h-100' style={{zIndex: 100}}/>

            </div>
        </section>
    )
}
export default Home