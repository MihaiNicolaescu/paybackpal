function Check(){
    return(
        <div className="check">
            <p className="text-2xl text-center mb-4">SPLIT A BILL WITH [NAME]</p>
            <div className="flex w-full">
                <div className="check-text w-2/4 ml-8">
                    <p className="flex items-center align-middle h-full font-mono">💰Bill value</p>
                </div>
                <div className="check-text w-1/4 mr-8">
                    <input className="dark:placeholder-black dark:text-black  rounded-l-lg rounded-r-lg bg-orange-50 border-b-[2px] text-black-500 block flex-1 min-w-0 w-full text-sm p-1.5" type="number"/>
                </div>
            </div>
            <div className="flex w-full">
                <div className="check-text w-2/4 ml-8">
                    <p className="flex items-center align-middle h-full font-mono">🫵Your expense</p>
                </div>
                <div className="check-text w-1/4 mr-8">
                    <input className="dark:placeholder-black dark:text-black  rounded-l-lg rounded-r-lg bg-orange-50 border-b-[2px] text-black-500 block flex-1 min-w-0 w-full text-sm p-1.5" type="number"/>
                </div>
            </div>
            <div className="flex w-full">
                <div className="check-text w-2/4 ml-8">
                    <p className="flex items-center align-middle h-full font-mono">🫂[Friend] expense</p>
                </div>
                <div className="check-text w-1/4 mr-8">
                    <input disabled className="dark:placeholder-black dark:text-black  rounded-l-lg rounded-r-lg bg-orange-50 border-b-[2px] text-black-500 block flex-1 min-w-0 w-full text-sm p-1.5" type="number"/>
                </div>
            </div>
            <div className="flex w-full">
                <div className="check-text w-2/4 ml-8">
                    <p className="flex items-center align-middle h-full font-mono">💸Who is paying the bill?</p>
                </div>
                <div className="check-text w-1/4 mr-8">
                    <select className="dark:placeholder-black dark:text-black  rounded-l-lg rounded-r-lg bg-orange-50 border-b-[2px] text-black-500 block flex-1 min-w-0 w-full text-sm p-1.5">
                        <option>You</option>
                        <option>Friend</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Check;