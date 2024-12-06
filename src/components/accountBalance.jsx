import PropTypes from "prop-types";
export default function AccountBalance({multi, money, balance}) {

    return (
        <>
            <article className="account-balance flex flex-col w-[80%] justify-between items-center bg-white p-6
                                sm:flex-row">
                <div className="">
                    <p>Argent Bank Checking (x{multi})</p>
                    <p className="text-4xl font-bold">${money}</p>
                    <p>{balance} Balance</p>
                </div>
                <button className="bg-[#00bc77] text-white h-12 px-5 border-r-2 border-b-[2.5px] border-black">
                    View Transactions
                </button>
            </article>
        </>
    )
}
AccountBalance.propTypes = {
    multi: PropTypes.number.isRequired,  
    money: PropTypes.number.isRequired,
    balance: PropTypes.string.isRequired,
};