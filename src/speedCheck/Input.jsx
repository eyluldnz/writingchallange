import React, { useState,useEffect, useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallangeContextProvider';


export default function Input() {
    const data=useContext(ChallangeContext)

    const [inputData, setInputData] = useState('');
    const [isFinish, setIsFinish] = useState(false);
    const [keyCode, setKeyCode] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    useEffect(() => {
        if(endTime!==null){
            checkChallenge();
        }
        
    }, [endTime])

    const handlerChange = (event) => {
        if (startTime === null) {
            setStartTime(new Date().getTime())
        }
        setInputData(event.target.value)
    }
    const handlerCtrlEnter = (e) => {
        if (e.keyCode === 13) {
            if(endTime===null){
                setEndTime(new Date().getTime())
            }
         
            setKeyCode(e.keyCode);
            setIsFinish(true);
           
        }
    }

    const resetKeyCode = () => {
        if (keyCode !== null) {
            setKeyCode(null);
        }
    }

    const resetChallenge = () => {
        setInputData('');
        setIsFinish(false);
        setEndTime(null)
        setStartTime(null)
    }

    const checkChallenge = () => {
        
        let sent = data.challenges.find(item=>item.id===data.selectChallenge).text;
        let sentLenght = 0;
        let usSentences = sent.split(' ');
        let entry = inputData.split(' ');
        let sum = 0;

        usSentences.forEach((char, i) => {
            sentLenght += char.length;
            for (let j = 0; j < char.length; j++) {

                if (entry[i] && char[j] === entry[i][j]) {
                    sum++
                }
            }

        })
        let duration = endTime - startTime;
        let accuracy = sum * 100 / sentLenght;
        let wordsPerMinute=(entry.length*60)/(6*duration);

    }
    return (
        <div className="input-group mb-3">
            <input type="text"
                class="form-control"
                placeholder="Metni Giriniz"
                name="inputData"
                onChange={handlerChange}
                value={inputData}
                disabled={isFinish}
                onKeyDown={handlerCtrlEnter}
                onKeyUp={resetKeyCode}

            />
            <button className="btn btn-outline-secondary" type="button" id='reset' onClick={resetChallenge}>Temizle</button>
        </div>
    )
}
