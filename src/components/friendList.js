import { useState } from "react";
import Friend from "./friend";
import FriendAdd from "./friendAdd";

function FriendList({friends, addFriend}){
    const [toggleAddFriend, setToggleAddFriend] = useState(false);
    return(
        <div className="FriendList  bg-gray-100 w-[450px]">
            <p className="text-center text-2xl font-bold font-mono underlineb">Friend List</p>
            {friends.map((friend, index) => (
                <Friend key={index} info={friend} index={index}/>
            ))}
            {toggleAddFriend? <FriendAdd addFriend={addFriend} setToggleAddFriend={setToggleAddFriend} /> : ""}
            <div className="flex justify-center">
                <button onClick={() => {setToggleAddFriend(!toggleAddFriend)}} className="mt-5 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">
                    {toggleAddFriend? "Cancel" : "Add Friend"}</button>
            </div>
        </div>
    )
};

export default FriendList;