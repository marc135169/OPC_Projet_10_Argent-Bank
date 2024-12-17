import HomeArticle from "../components/homeArticle.jsx";

export default function Home() {

    return (
        <>
            <main>
                <div className="hero bg-hero-pattern bg-cover bg-no-repeat h-[300px] relative bg-[0_50px] flex justify-center 
                md:h-[400px] md:bg-[0_33%]">
                    <section className="hero-content bg-white flex flex-col justify-start relative w-[250px] text-left top-8 p-6 mx-auto mt-4 mb-32 text-[1rem] leading-[1.2rem]
                    md:w-[364px] md:absolute md:right-[3%] md:top-[13%] md:m-8 md:text-[1.5rem] md:leading-[1.7rem]">
                        <h2 className="sr-only font-bold ">Promoted Content</h2>
                        <p className="subtitle font-bold">No fees.</p>
                        <p className="subtitle font-bold">No minimum deposit.</p>
                        <p className="subtitle font-bold">High interest rates.</p>
                        <p className="text mt-[14.4px] text-[0.9rem] md:text-[1.2rem]">Open a savings account with Argent
                            Bank today!</p>
                    </section>
                </div>
                <section className="features flex flex-col items-center justify-center
                md:flex-row">                    
                    <h2 className="sr-only">Features</h2>
                    <HomeArticle title="You are our
                            #1 priority" img="../../public/img/icon-chat.webp" description="Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes."/>
                    <HomeArticle title="More savings
                            means higher rates" img="../../public/img/icon-money.webp" description="The more you save with us, the higher your interest rate will be!"/>
                    <HomeArticle title="Security you
                            can trust" img="../../public/img/icon-security.webp" description="We use top of the line encryption to make sure your data and money
                            is always safe."/>
                </section>
            </main>
        </>
    )
}
 