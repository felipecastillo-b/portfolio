import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: "/images/figma.svg",
        label: "Figma",
        desc: "Design tool",
    },
    {
        imgSrc: "/images/css3.svg",
        label: "CSS",
        desc: "User Interface",
    },
    {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Interaction",
    },
    {
        imgSrc: "/images/python.svg",
        label: "Python with Pandas",
        desc: "Data Science",
    },
    {
        imgSrc: "/images/nodejs.svg",
        label: "NodeJS",
        desc: "Web Server",
    },
    {
        imgSrc: "/images/expressjs.svg",
        label: "ExpressJS",
        desc: "Node Framework",
    },
    {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "Database no Relational",
    },
    {
        imgSrc: "/images/postgresql.svg",
        label: "PostgreSQL",
        desc: "Database Relational",
    },
    {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Framework",
    },
    {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "User Interface",
    },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Tecnologías que utilizo
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Descubra las potentes herramientas y tecnologías que uso para crear sitios web y aplicaciones excepcionales y de alto rendimiento.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) => (
                            <SkillCard 
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Skill;
