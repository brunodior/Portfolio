import styles from './Sections.module.css'
function Hability() {

    const icons = [
        {
            icon: 'devicon-figma-plain',
            name: 'Figma'
        },
        {
            icon: 'devicon-react-original',
            name: 'React'
        },
        {
            icon: 'devicon-angularjs-plain',
            name: 'Angular'
        },
        {
            icon: 'devicon-ruby-plain',
            name: 'Ruby on Rails'
        },
        {
            icon: 'devicon-typescript-plain',
            name: 'Typescript'
        },
        {
            icon: 'devicon-javascript-plain',
            name: 'JavaScript'
        },
        {
            icon: 'devicon-cplusplus-plain',
            name: 'C++'
        },
        {
            icon: 'devicon-html5-plain',
            name: 'HTML5'
        },
        {
            icon: 'devicon-css3-plain',
            name: 'CSS3'
        },
        {
            icon: 'devicon-bootstrap-plain',
            name: 'Bootstrap'
        },
        {
            icon: 'devicon-sass-original',
            name: 'SASS'
        },
        {
            icon: 'devicon-mongodb-plain',
            name: 'MongoDB'
        },
        {
            icon: 'devicon-mysql-original',
            name: 'Mysql'
        },
      
        {
            icon: 'devicon-tailwindcss-original',
            name: 'Tailwind'
        },
        {
            icon: 'devicon-nodejs-plain-wordmark',
            name: 'Node js'
        },
        {
            icon: 'devicon-npm-original-wordmark',
            name: 'Pacotes NPM'
        }, 
        {
            icon: 'devicon-docker-plain',
            name: 'Docker'
        },
        {
            icon: 'devicon-git-plain',
            name: 'Git'
        },
        
    ]

    return (
        <section className="p-md-5 px-3 py-4  bg-primary" id='hability'>
            <div className="position-relative d-flex justify-content-center align-items-center">
                    <h3 className="m-0 fw-bold text-white  position-absolute border-3 border-bottom border-secondary unbounded">Habilidades</h3>

                    <h1 className="m-0 fw-bolder text-dark unbounded text-opacity-50">Habilidades</h1>
            </div>
            <div className="bg-dark rounded-5 p-md-4 p-3 mt-3">
                <div className="row g-3">
                    {icons.map((data) => (
                        <div className={`col-md-2 col-4 text-center text-secondary ${styles.hover}`}>
                            <i class={`fs-1  ${data.icon} `}></i>
                        <h6 className=' my-2'>{data.name}</h6>
                        </div>
                    ))}
                
                </div>
            </div>
           

        </section>
    )
}

export default Hability