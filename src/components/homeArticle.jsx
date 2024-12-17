import PropTypes from "prop-types";

export default function HomeArticle({title, img, description}) {
    return (        
            <article className="feature-item flex flex-1 flex-col items-center justify-center p-[2.5rem]">                
                <div className="feature-item flex flex-1 flex-col items-center justify-center p-[2.5rem] ">
                    <img src={img} alt="Chat Icon"
                         className="feature-icon w-[152px] border-[10px] border-[#00bc77] rounded-full p-4"/>
                    <h3 className="feature-item-title font-bold text-[1.25rem] mt-5 mb-2 leading-[1.7rem]">{title}</h3>
                    <p className="leading-[1.2rem] h-16">
                        {description}
                    </p>
                </div>
            </article>        
    )
}
HomeArticle.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
}