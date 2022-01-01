import React,{createContext,useState} from 'react';

export const ChallangeContext=createContext();

export default function ChallangeContextProvider({children}) {

    const [challenges,setChallenges]=useState(
        [
            {id:1,text:"Bu bir deneme yazıdır"}
        ]
    )
    const [selectChallenge,setSelectChallenge]=useState(1);

    const value={
        challenges,selectChallenge
    }
    return (
       <ChallangeContext.Provider value={value}>{children}</ChallangeContext.Provider>
    )
}
