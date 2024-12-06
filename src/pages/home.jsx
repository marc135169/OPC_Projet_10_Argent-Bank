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
                    <div className="feature-item flex flex-1 flex-col items-center justify-center p-[2.5rem] ">
                        <img src="../../public/img/icon-chat.png" alt="Chat Icon"
                             className="feature-icon w-[152px] border-[10px] border-[#00bc77] rounded-full p-4"/>
                        <h3 className="feature-item-title font-bold text-[1.25rem] mt-5 mb-2 leading-[1.7rem]">You are our
                            #1 priority </h3>
                        <p className="leading-[1.2rem] h-16">
                            Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes.
                        </p>
                    </div>
                    <div className="feature-item flex flex-1 flex-col items-center justify-center p-[2.5rem] ">
                        <img
                            src="../../public/img/icon-money.png"
                            alt="Chat Icon"
                            className="feature-icon w-[152px] border-[10px] border-[#00bc77] rounded-full p-4"
                        />
                        <h3 className="feature-item-title font-bold text-[1.25rem] mt-5 mb-2 leading-[1.7rem]">More savings
                            means higher rates</h3>
                        <p className="leading-[1.2rem] h-16">
                            The more you save with us, the higher your interest rate will be!
                        </p>
                    </div>
                    <div className="feature-item flex flex-1 flex-col items-center justify-center p-[2.5rem]">
                        <img
                            src="../../public/img/icon-security.png"
                            alt="Chat Icon"
                            className="feature-icon w-[152px] border-[10px] border-[#00bc77] rounded-full p-4"
                        />
                        <h3 className="feature-item-title font-bold text-[1.25rem] mt-5 mb-2 leading-[1.7rem]">Security you
                            can trust</h3>
                        <p className="leading-[1.2rem] h-16">
                            We use top of the line encryption to make sure your data and money
                            is always safe.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
 