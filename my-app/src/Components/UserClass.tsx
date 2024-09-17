import React, { Component } from "react";

interface istate {
    name: string,
    title: string
}

interface iprops {
    userid: number,
    userName: string
}

export default class UserClass extends Component<iprops, istate> {
    constructor(props: iprops) {
        super(props)
        this.state = {
            name: "aiman",
            title: "Khan"
        }
    }

    render() {
        const { userid, userName } = this.props
        const { name, title } = this.state

        return (
            <>
                <div className="px-4 mb-4 ">
                    <h1>Welcome to Class Components</h1>
                    <h4>UserID: {userid}</h4>
                    <h4>UserName: {userName}</h4>
                </div>


                {/* ye State k liye h  */}
                <div className="col-md-4 p-4 m-5 card bg-dark text-light">
                    <h4>Name: {name} </h4>
                    <h4>Title: {title} </h4>
                </div>

            </>

        )
    }
}