import React, { useState } from "react";


//agr koi optional props h toh ai ose ? ques mark kr k likho gi
interface istate {
    name: string,
    title: string
}


interface iprops {
    name: string,
    lastName: string,
    age?: number
}
//ye React FC k ander hum interface bataein gy k kis name se interface banaya h
const Customer: React.FC<iprops> = ({ name, lastName, age }) => {
    const [state, setState] = useState<istate>({
        name: "hania",
        title: "khan"
    })
    return (
        <>
            <div className="px-4 mb-4">
                <h1>Function Customer Components</h1>
                <h4> Name: {name} </h4>
                <h4>lastName: {lastName}</h4>
                <h4>Age: {age}</h4>
            </div>
            <div className="col-md-4 bg-dark text-light card p-3 m-5">
                <h4>Name: {state.name}</h4>
                <h4>Title: {state.title}</h4>

            </div>
        </>
    )
}

export default Customer;