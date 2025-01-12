import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        content: 'Se entregó una Landing Page impecable y responsivo con un código limpio y una excelente experiencia de usuario.',
        name: 'Elizabeth Rojas',
        imgSrc: '/images/people-1.jpg',
        company: 'Landing Page'
    },
    {
        content: '¡Excelente trabajo! Tiempos de carga rápidos, diseño intuitivo e integración impecable. Muy recomendable.',
        name: 'Cristobal Padilla',
        imgSrc: '/images/people-2.jpg',
        company: 'Stylehubcl'
    },
    {
        content: 'Se entregó una Landing Page deacuerdo al tiempo estimado, ademas de atractiva para los usuarios finales.',
        name: 'Jonathan Aguilera',
        imgSrc: '/images/people-3.jpg',
        company: 'Landing Page'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Lorem ipsum',
        imgSrc: '/images/people-4.jpg',
        company: 'Lorem ipsum'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Lorem ipsum',
        imgSrc: '/images/people-5.jpg',
        company: 'Lorem ipsum'
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et dolore magna aliqua.',
        name: 'Lorem ipsum',
        imgSrc: '/images/people-6.jpg',
        company: 'Lorem ipsum'
    }
];

const Review = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(reviews.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalPages]);

    const getPaginatedReviews = () => {
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;
        return reviews.slice(start, end);
    };

    return (
        <section id="reviews" className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-8 text-center reveal-up">Testimonios de los Clientes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {getPaginatedReviews().map(({ content, name, imgSrc, company }, key) => (
                        <ReviewCard 
                            key={key}
                            content={content}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                        />
                    ))}
                </div>
                {/* Paginacion */}
                <div className="flex justify-center mt-8">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 mx-1 rounded-full ${
                                currentPage === index
                                    ? "bg-purple-600"
                                    : "bg-zinc-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Review