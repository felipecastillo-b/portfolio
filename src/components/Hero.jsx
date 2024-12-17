//imports

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div className="">
                    <div className="">
                        <figure className="">
                            <img src="/images/avatar-1.webp" width={40} height={40} alt="Felipe Castillo retrato" className="img-cover" />
                        </figure>
                        <div className="">
                            <span className="">
                                <span className=""></span>
                            </span>
                            Disponible para Trabajar
                        </div>
                    </div>
                    <h2 className="">
                    Creación de soluciones modernas y escalables para el futuro
                    </h2>
                    <div className="">
                        ButtonPrimary

                        ButtonOutline
                    </div>
                </div>

                <div className="">
                    <figure className="">
                        <img src="/images/hero-banner.png" width={656} height={800} alt="Felipe Castillo Banner" className="w-full" />
                    </figure>
                </div>
                
            </div>
        </section>
    )
}

export default Hero