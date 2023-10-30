function Friend({info}) {

    function generateMessage(money){
        if (info.money === 0) {
            return `${info.name} and you are settled up.`;
          } else {
            return (info.money > 0)
              ? `You owe ${info.name} ${info.balance} LEI`
              : `${info.name} owes you ${info.balance * -1} LEI`;
          }
    }


    return (
        <div className="friend w-full h-[75px] flex">
            <div className="image w-1/4 w-[60px] ml-2 flex justify-center items-center h-full">
                <img className="rounded-full" src={"https://i.pravatar.cc/" + info.id} alt="Profile"/>
            </div>
            <div className="info w-3/4 m-2 ml-4">
                <p className="name text-lg font-bold font-mono">{info.name}</p>
                <p className={`balance text-sm font-bold mt-2 font-mono  ${(info.balance > 0) ? "text-green-500" : "text-red-500"}`}>{generateMessage(info.balance)}</p>
            </div>
            <div className="check-button w-1/4 flex justify-center items-center h-full ">
                <button className="text-white hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-500">
                    Check</button>
            </div>

        </div>
    )
};

export default Friend;