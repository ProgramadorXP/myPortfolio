import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";



const Article = ({image, name, description, date, linkGit, icons}) => {

    return ( 
        <article className="border-2 border-amber-600 max-w-xs min-h-full m-auto rounded-xl p-2 flex flex-col gap-2">
            <div className="flex justify-center w-full">
                <img className="block w-full max-h-44 rounded-xl object-cover" src={image} alt="Projecto Spotify" />
            </div>
            <div>
                <h3 className="text-center text-amber-600 text-lg">{name}</h3>
            </div>
            <div className="flex justify-center items-center gap-4 flex-wrap">
                {icons.map((icon, key) =>
                    <span key={key}><img className="h-10 w-10 cursor-pointer transition-all duration-200 hover:scale-110" src={icon} alt="" /></span>
                 )}                
            </div>
            <div className=" line-clamp-4 max-h-[100px] max-w-full flex-1">
                <p className="text-zinc-900 dark:text-white h-1/2">{description}</p>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-amber-600 text-md">{date}</p>
                </div>
                <div>
                    <a href={linkGit} target='_blank'><FontAwesomeIcon className="text-zinc-900 dark:text-white text-lg cursor-pointer transition-all duration-200 hover:text-amber-600 hover:scale-125 dark:hover:text-amber-600 mr-2" icon={faGithub}/></a>
                </div>
            </div>
        </article>
     );
}
 
export default Article;