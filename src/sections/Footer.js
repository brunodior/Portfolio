import logo from '../assets/logoBD.png'

function Footer(){
    return (
        <section className="px-3 px-md-5 py-4 bg-dark row d-flex justify-content-center">
            <div className='col-md-3 mb-4 mb-md-0'>
                <img src={logo} className='w-100' alt='logo'/>
                <div className='mt-3 d-flex justify-content-center'>
                    <a href="https://github.com/brunodior" className='btn btn-secondary rounded-5 p-2 mx-1'><i class="bi bi-github d-flex fs-4"></i></a>
                    <a href="https://www.instagram.com/brunodiorr" className='btn btn-secondary rounded-5 p-2 mx-1'><i class="bi bi-instagram d-flex fs-4"></i></a>
                    <a href="https://www.linkedin.com/in/bruno-dior-58796a246/" className='btn btn-secondary rounded-5 p-2 mx-1'><i class="bi bi-linkedin d-flex fs-4"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=5584988716812&text=Ol%C3%A1,%20Bruno%20Dior!" className='btn btn-secondary rounded-5 p-2 mx-1'><i class="bi bi-whatsapp d-flex fs-4"></i></a>

                </div>
            </div>
            <div className='col-md-1 d-flex justify-content-center'>
                <div className=' h-100 border-1 border-start border-white'>

                </div>
            </div>
            <div className='col-md-3'>
                <div className=''>
                    <div className='d-flex align-items-center'>
                        <i class="bi bi-geo-alt-fill text-secondary me-2"></i>
                        <h6 className='m-0 text-light fw-normal'>Natal, Rio Grande do Norte</h6>
                    </div>

                    <div className='d-flex align-items-center my-2'>
                        <i class="bi bi-envelope-fill text-secondary me-2"></i>
                        <h6 className='m-0 text-light fw-normal'>brunoaraujop9@gmail.com</h6>
                    </div>

                    <div className='d-flex align-items-center'>
                        <i class="bi bi-telephone-fill text-secondary me-2"></i>
                        <h6 className='m-0 text-light fw-normal'>84 9 8871-6812</h6>
                    </div>
                </div>
            </div>
            <div className='col-12 text-center'>
                <h6 style={{letterSpacing: '5px'}} className='text-light fw-normal mt-4'>Desenvolvido por <span className='text-secondary fw-bold'> Bruno Dior</span>  © 2024 </h6>
            </div>
        </section>
    )
}
export default Footer