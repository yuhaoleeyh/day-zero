import React, { useState } from 'react'
import "./RegularForm.css"
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import { withRouter } from "react-router-dom";
import Spacer from './Spacer';
import { useHistory } from "react-router-dom";

const options = [
    [
        {
            key:0,
            id:1,
            item:"Big Ticket Items"
        }, {
            key:1,
            id:2,
            item:"Spouse"
        }, {
            key:2,
            id:3,
            item:"Children"
        }, {
            key:3,
            id:4,
            item:"Illness/Disability"
        }, {
            key:4,
            id:5,
            item:"Employment"
        }, {
            key:5,
            id:6,
            item:"Caregiving"
        }
    ], [
        {
            key:6,
            id:0,
            item:"Buying a Home"
        }, {
            key:7,
            id:1,
            item:"Buying a Car"
        }, {
            key:8,
            id:2,
            item:"Major Renovation"
        }
    ], [
        {
            key:9,
            id:0,
            item:"Getting Married"
        }, {
            key:10,
            id:1,
            item:"Getting Divorced"
        }, {
            key:11,
            id:2,
            item:"Death of a Spouse"
        }
    ], [
        {
            key:12,
            id:0,
            item:"Birth/Adoption of a Child"
        }, {
            key:13,
            id:1,
            item:"Child Going to School"
        }, {
            key:14,
            id:2,
            item:"Child Beginning Work"
        }
    ], [
        {
            key:15,
            id:0,
            item:"Major Disability"
        }, {
            key:16,
            id:1,
            item:"Long-term Illness"
        }
    ], [
        {
            key:17,
            id:0,
            item:"Income Increase"
        }, {
            key:18,
            id:1,
            item:"Retrenchment"
        }, {
            key:19,
            id:2,
            item:"Retirement"
        }, {
            key:20,
            id:3,
            item:"Income Decrease"
        }
    ], [
        {
            key:21,
            id:0,
            item:"Aged Parents"
        }, {
            key:22,
            id:1,
            item:"Chronically Ill Parents"
        }, {
            key:23,
            id:2,
            item:"Receiving"
        }
    ]
]

const questions = [
    "What's on your mind now?", 
    "Which category is this under?"
]

function RegularForm(props) {
    const [isFirstQ, setIsFirstQ] = useState(true)
    const [firstIndex, setFirstIndex] = useState(0)
    const [chosen, setChosen] = useState("0")

    const firstSubmitHandler = () => {
        setIsFirstQ(false)
        setFirstIndex(chosen)
        setChosen("-1")
    }

    let history = useHistory();

    const lastSubmitHandler = () => {
        const op = {
            id: options[firstIndex][chosen].key,
            item: options[firstIndex][chosen].item
        }

        history.push({
            pathname: '/recommendation',
            state: { op: op}
        });
    }

    
    
    return (
        <div className="regularform">
            <div className="regularform-bluecard stack-top">
                <h2>{isFirstQ ? questions[0] : questions[1]}</h2>
            </div>
            <div className="regularform-whitecard">
                <Spacer space="35"/>
                <RadioGroup value={chosen} onChange={(e) => setChosen(e.target.value)}>
                    {options[firstIndex].map(option => (
                        <FormControlLabel value={option.id.toString()} control={<Radio color='primary'/>} label={option.item}/>
                    ))}
                </RadioGroup>
                {isFirstQ && (
                    <button onClick={firstSubmitHandler}>Submit</button>
                )}
                {!isFirstQ && (
                    <button onClick={lastSubmitHandler}>Submit</button>
                )}
                <Spacer space="5"/>
            </div>
        </div>
    )
}

export default withRouter(RegularForm)