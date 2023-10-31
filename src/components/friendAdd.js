import { useState } from "react";

function FriendAdd({addFriend, setToggleAddFriend}){

    const [name, setName] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);
    
    function handleAdd() {
        if(name === ""){
            setIsEmpty(true);
            alert("Please insert a name for the friend before add it!");
        }else{
            addFriend(name);
            setName("");
            setToggleAddFriend(false);
        }
    }

    return (
        <div className="friendAdd">
            <div className="flex w-full justify-center h-[34px]">
                <div className="flex w-2/4">
                    <span className="inline-flex items-center px-2 text-sm bg-orange-200 border border-r-0 border-orange-300 rounded-l-md dark:bg-orange-200 dark:text-orange-200">
                        <svg className="w-4 h-4 text-orange-500 dark:text-orange-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>
                    </span>
                    <input type="text" id="website-admin" 
                        className={`dark:placeholder-black dark:text-black rounded-none rounded-r-lg bg-orange-50 border text-black-500 block flex-1 min-w-0 w-full text-sm p-2.5 ${isEmpty? "border-red-500 dark:bg-red-500" :"border-orange-300 dark:bg-orange-200"}`}
                        onChange={(event) => {setName(event.target.value)}}
                        placeholder="Friend Name"/>
                </div>
                <div className="flex w-1/4 justify-center items-center h-full">
                    <button type="button" onClick={() => {handleAdd()}}
                    className="text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-full text-center dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-500">Add</button>
                </div>
            </div>
        </div>
    )
};
 
export default FriendAdd;