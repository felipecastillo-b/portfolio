import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: "/images/project-1.jpg",
        title: "Newsletter FullStack",
        tags: ["API", "MVC", "Development"],
        projectLink: "https://github.com/felipecastillo-b/",
    },
    {
        imgSrc: "/images/project-1.jpg",
        title: "Warehouse v2.0 FullStack",
        tags: ["API", "MVC", "Data Science"],
        projectLink: "https://github.com/felipecastillo-b/",
    },
    {
        imgSrc: "/images/project-1.jpg",
        title: "eCommerce for STYLEHUBCL",
        tags: ["eCommerce", "Development"],
        projectLink: "https://github.com/felipecastillo-b/",
    },
    {
        imgSrc: "/images/project-1.jpg",
        title: "Warehouse v1.0 FullStack",
        tags: ["API", "MVC", "Data Science"],
        projectLink: "https://github.com/felipecastillo-b/api-bodega",
    },
];

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8">
                    Mis Proyectos Destacados
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Work;
