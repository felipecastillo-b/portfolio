import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    content: "review.review_1",
    name: "Elizabeth Rojas",
    imgSrc: "/images/people-1.jpg",
    company: "Landing Page",
  },
  {
    content: "review.review_2",
    name: "Cristobal Padilla",
    imgSrc: "/images/people-2.jpg",
    company: "Stylehubcl",
  },
  {
    content: "review.review_3",
    name: "Jonathan Aguilera",
    imgSrc: "/images/people-3.jpg",
    company: "Landing Page",
  },
  {
    content: "review.review_1",
    name: "Elizabeth Rojas",
    imgSrc: "/images/people-1.jpg",
    company: "Landing Page",
  },
  {
    content: "review.review_2",
    name: "Cristobal Padilla",
    imgSrc: "/images/people-2.jpg",
    company: "Stylehubcl",
  },
  {
    content: "review.review_3",
    name: "Jonathan Aguilera",
    imgSrc: "/images/people-3.jpg",
    company: "Landing Page",
  },
];

const Review = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const { t } = useTranslation();

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
        <h2 className="headline-2 mb-8 text-center reveal-up">
          {t("review.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {getPaginatedReviews().map(
            ({ content, name, imgSrc, company }, key) => (
              <ReviewCard
                key={key}
                content={t(content)}
                name={name}
                imgSrc={imgSrc}
                company={company}
              />
            ),
          )}
        </div>
        {/* Paginacion */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentPage === index ? "bg-purple-600" : "bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
