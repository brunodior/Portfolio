function Contact() {
    return (
        <section className="p-md-5 px-3 py-4  bg-primary" id='contact'>
            <div className="position-relative d-flex justify-content-center align-items-center">
                    <h3 className="m-0 fw-bold text-white  position-absolute border-3 border-bottom border-secondary unbounded">Contatos</h3>
                    <h1 className="m-0 fw-bolder text-dark unbounded text-opacity-50">Contatos</h1>
            </div>
            <div className="bg-secondary rounded-5 p-md-4 p-3 mt-3">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center">
                            <i class="bi bi-envelope-fill text-primary me-2 fs-1"></i>
                            <h6 className="text-primary fw-semibold montserrat">ENVIE UM E-MAIL</h6>
                            <h4 className='m-0 text-light fw-normal montserrat fw-bold'>brunoaraujop9@gmail.com</h4>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center mt-3 mt-md-0">
                            <i class="bi bi-telephone-fill text-primary me-2 fs-1"></i>
                            <h6 className="text-primary fw-semibold montserrat">ME MANDE UMA MENSAGEM</h6>
                            <h4 className='m-0 text-light fw-normal montserrat fw-bold'>84 9 8871-6812</h4>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Contact