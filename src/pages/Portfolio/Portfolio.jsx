import PageHeader from "../../components/PageHeader/PageHeader";
import { FaSignal } from "react-icons/fa";
import MERNImageOne from "/portfolio_pic/MERN/s10.png"
import MERNImageTwo from "/portfolio_pic/MERN/s11.png"
import MERNImageThree from "/portfolio_pic/MERN/s12.png"
import BasicImageOne from "/portfolio_pic/Basic/s1.png"
import BasicImageTwo from "/portfolio_pic/Basic/s2.png"
import BasicImageThree from "/portfolio_pic/Basic/s3.png"
import BasicImageFour from "/portfolio_pic/Basic/s4.png"
import BasicImageFive from "/portfolio_pic/Basic/s5.png"
import BasicImageSix from "/portfolio_pic/Basic/s6.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";

const portfolioData = [
    {
        id: 3,
        name: 'Chef Hut',
        image: MERNImageOne,
        description: 'Recipe website with user auth and routing',
        client: 'https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-joychandradas',
        server: 'https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-joychandradas',
        liveSite: 'https://chef-hat-a10.web.app'
    },
    {
        id: 3,
        name: 'Puzzle Playground',
        image: MERNImageTwo,
        description: 'Toy marketplace with user auth and CRUD',
        client: 'https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-joychandradas',
        server: 'https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-joychandradas',
        liveSite: 'https://puzzle-playground.web.app'
    },
    {
        id: 3,
        name: 'Rhythmax',
        image: MERNImageThree,
        description: 'Course marketplace with dashboards',
        client: 'https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-joychandradas',
        server: 'https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-joychandradas',
        liveSite: 'https://rhythmax-80178.web.app'
    },
    {
        id: 2,
        name: 'Mindset',
        image: BasicImageOne,
        description: 'My First Website Using HTML5 and CSS3',
        client: 'https://github.com/joychandradas/my-first-assignment',
        liveSite: 'https://joychandradas.github.io/my-first-assignment'
    },
    {
        id: 2,
        name: 'G3 Architects',
        image: BasicImageTwo,
        description: 'Responsive Web Layout Using HTML5 and CSS3',
        client: 'https://github.com/joychandradas/g3-architects',
        liveSite: 'https://joychandradas.github.io/g3-architects'
    },
    {
        id: 2,
        name: 'Legal Solution',
        image: BasicImageThree,
        description: 'CSS Frameworks Using Bootstrap',
        client: 'https://github.com/Programming-Hero-Web-Course4/b7-legal-house-joychandradas',
        liveSite: 'https://legal-solution1.netlify.app'
    },
    {
        id: 2,
        name: 'Geometry Genius',
        image: BasicImageFour,
        description: 'Integrate Vanilla JavaScript',
        client: 'https://github.com/programming-hero-web-course2/b7a5-geometry-genius-assignment-joychandradas',
        liveSite: 'https://gorgeous-begonia-3b0cee.netlify.app'
    },
    {
        id: 2,
        name: 'AI Universe Hub',
        image: BasicImageFive,
        description: 'Using JavaScript and API',
        client: 'https://github.com/programming-hero-web-course2/b7a6-ai-universe-assignment-joychandradas',
        liveSite: 'https://ai-universe-hub-411c57.netlify.app'
    },
    {
        id: 2,
        name: 'Network-Hub',
        image: BasicImageSix,
        description: 'Using Basic React and React Router',
        client: 'https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-joychandradas',
        liveSite: 'https://venerable-croissant-69a151.netlify.app'
    },
]

const categorysData = [
    {
        filterId: 1,
        label: "ALL"
    },
    {
        filterId: 2,
        label: "BASIC"
    },
    {
        filterId: 3,
        label: "MERN"
    }
]

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);

    const handleFilteredValue = currentId => {
        setFilteredValue(currentId);
    }


    const filteredItem = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue)


    return (
        <div>
            <PageHeader headerText="Portfolio" icon={<FaSignal size={40} />} />

            <Animate
                play
                duration={1}
                start={{ transform: "translateX(-500px)" }}
                end={{ transform: "translateX(0px)" }}
            >
                <ul className="flex items-center gap-x-10 mx-16 md:mx-24 mt-8 md:mt-6 text-white border border-dotted rounded-full border-green-300 w-56 px-4 py-2">
                    {
                        categorysData.map((category) => (
                            <li onClick={() => handleFilteredValue(category.filterId)} className={category.filterId === filteredValue ? 'active cursor-not-allowed' : 'cursor-pointer'} key={category.filterId}>
                                {category.label}
                            </li>
                        ))
                    }
                </ul>
            </Animate>

            <Animate
                play
                duration={1}
                start={{ transform: "translateY(500px)" }}
                end={{ transform: "translateX(0px)" }}
            >
                <div className="grid md:grid-cols-3 md:gap-10 mt-8 p-8 md:p-4 md:mx-20">
                    {
                        filteredItem.length !== 0 ? <>
                            {
                                filteredItem.map(item => (
                                    <div key={item.name.trim()} className="card bg-slate-900 h-[50vh] mb-8 md:h-[70vh] shadow-2xl">
                                        <figure><img src={item.image} alt={item.name} /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item.name}</h2>
                                            <p>{item.description}</p>
                                            <div className="flex justify-between mt-2 items-center gap-6">
                                                <Link to={item.client} className="font-thin text-[#8103e1]">#Client</Link>
                                                {
                                                    portfolioData.server !== item.server ? <Link to={item.server} className="font-thin text-[#C62A88]">#Server</Link> : ''
                                                }
                                                <Link to={item.liveSite} className="font-thin text-[#03C4A1]">Live Preview</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </> : <p className="mx-8">No Items Found</p>
                    }
                </div>
            </Animate>
        </div>
    );
};
export default Portfolio;