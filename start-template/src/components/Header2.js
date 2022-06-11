import React from "react";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            user:{
                firstName: "Akshay",
                lastName:"Ojha"
            }
        }

        this.checkMyName = this.checkMyName.bind(this);
    }
    checkMyName = function() {
        // const user = {...this.state.user};
        //       user.lastName = "Siddiqui";
        // this.setState({user})

        this.setState({user:{
            firstName: "Parvej",
            lastName:"Siddiqui"
        }})
    }

    render() {
        return(
          <>
          <div className={`header-class`}>
            <h1>Header1 : {this.state.user.firstName} --- {this.state.user.lastName} </h1>
            <a onClick={this.checkMyName} style={{cursor:"pointer"}}>Click</a>
            </div>
            <div className="row"> </div>
          </>
        )
    }
}


export default Header;