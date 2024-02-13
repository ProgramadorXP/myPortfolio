import { useState } from "react";
import Article from "./components/Article";
import TitleSection from "./components/TitleSection";

const Projects = () => {
    //PROYECTOS
    const myPortfolio = '/images/project-1.png';
    const validationForm = '/images/project-2.png';
    const pokemonSearch = '/images/pokemonSearch.png';
    //TECNOLOGIAS
    const html = '/icons/html.png';
    const css = '/icons/css.png';
    const js = '/icons/js.png';
    const sass = '/icons/sass.png';
    const bootstrap = '/icons/bootstrap.png';
    const tailwind = '/icons/tailwind.png';
    const react = '/icons/react.png';
    
    return ( 
        <section className="mt-20 p-5" id="projects">
            <TitleSection name="Projects"/>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {/*AQUI CARGO EL COMPONENTE DE ARICULOS DANDOLE UNA LISTA DE PROPS*/}
                <Article 
                image={myPortfolio} 
                name="My Portfolio" 
                date="12/28/2023" 
                description="This is my personal portfolio, which has been the first project I have created in which I perform some of my skills as a developer."
                linkGit="https://github.com/ProgramadorXP/my-porfolio-react"
                icons={[react, tailwind]}/>
                <Article 
                image={validationForm} 
                name="Form Validation" 
                date="12/08/2023" 
                description="This is a form with many validations, from the use of regular expressions to the use of states to provide a very intuitive experience to the user."
                linkGit="https://github.com/ProgramadorXP/validacion-formulario-react"
                icons={[react, tailwind]}/>
                <Article 
                image={pokemonSearch} 
                name="Pokemon Search" 
                date="02/10/2024" 
                description="This is a pokemon search app where we consume an API and show us the a pokemon searching."
                linkGit="https://github.com/ProgramadorXP/pokemonSearch"
                icons={[html, css, js]}/>
            </div>
        </section>
     );
}
 
export default Projects;