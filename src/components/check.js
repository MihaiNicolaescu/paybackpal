import { useEffect, useState } from "react";

function Check({friendInfo, friends, setFriends, toggleKey, setToggleKey, setToggleCheck}){

    const [friendExpense, setFriendExpense] = useState(0);
    const [yourExpense, setYourExpense] = useState(0);
    const [bill, setBill] = useState(0);
    const [paying, setPaying] = useState(true);


    useEffect(() => {
        setFriendExpense(bill-yourExpense);
    }, [yourExpense, bill]);
    


    function addBill(){
        let newBalance;
        let newInfo = friendInfo;
        let newFriends = friends;
        debugger;
        if(paying === true){
            newBalance = (bill - yourExpense) * (-1);
        }else{
            newBalance = (bill - friendExpense) ;
        }
        
        newInfo.balance += newBalance;
        newFriends[toggleKey] = {...newFriends[toggleKey], ...newInfo};
        setFriends(newFriends);   
        setToggleCheck(false);
        setToggleKey(null);
    }

    return(
        <div className="chec bg-gray-100 h-full">
            <p className="text-2xl text-center mb-4">SPLIT A BILL WITH [NAME]</p>
            <div className="flex w-full mt-2">
                <div className="check-text w-2/4 ml-8">
                    <p className="flex items-center align-middle h-full font-mono">💰Bill value</p>
                </div>
                <div className="check-text w-1/4 mr-8">
                    <input
                        onChange={(event) => {setBill(event.target.value)}}
                        className="dark:placeholder-black dark:text-black  rounded-l-lg rounded-r-lg bg-orange-50 border-b-[2px] text-black-500 block flex-1 min-w-0 w-full text-sm p-1.5" type="number"/>
                </div>
            </div>
            <div className="flex w-full mt-2">
                <div className="check-text w-2/4 ml-8">
                    <p className="flex items-center align-middle h-full font-mono">🫵Your expense</p>
                </div>
                <div className="check-text w-1/4 mr-8">
                    <input 
                        onChange={(event) => {
                            setYourExpense(event.target.value);
                        }}
                        className="dark:placeholder-black dark:text-black  rounded-l-lg rounded-r-lg bg-orange-50 border-b-[2px] text-black-500 block flex-1 min-w-0 w-full text-sm p-1.5" type="number"/>
                </div>
            </div>
            <div className="flex w-full mt-2">
                <div className="check-text w-2/4 ml-8">
                    <p className="flex items-center align-middle h-full font-mono">🫂{friendInfo.name} expense</p>
                </div>
                <div className="check-text w-1/4 mr-8">
                    <input 
                        value={friendExpense}
                        disabled className="dark:placeholder-black dark:text-black  rounded-l-lg rounded-r-lg bg-orange-50 border-b-[2px] text-black-500 block flex-1 min-w-0 w-full text-sm p-1.5" type="number"/>
                </div>
            </div>
            <div className="flex w-full mt-2">
                <div className="check-text w-2/4 ml-8">
                    <p className="flex items-center align-middle h-full font-mono">💸Who is paying the bill?</p>
                </div>
                <div className="check-text w-1/4 mr-8">
                    <select
                        onChange={(event) => {
                            setPaying(event.target.value);
                        }} 
                        className="dark:placeholder-black dark:text-black  rounded-l-lg rounded-r-lg bg-orange-50 border-b-[2px] text-black-500 block flex-1 min-w-0 w-full text-sm p-1.5">
                        <option value="true">You</option>
                        <option value="false">{friendInfo.name}</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center">
                <button 
                    onClick={() => {
                        addBill();
                    }}
                    className="mt-5 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                   Split Bill</button>
            </div>
        </div>
    )
}

export default Check;