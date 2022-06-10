import React from "react";

class Header extends React.Component {
    constructor() {
        super();
    }
    checkMyName = function() {
        console.log("callled")
    }

    render() {
        return(
          <>
          <div className={`header-class`}>
                    <h1>Header1</h1>
                    <a onClick={this.checkMyName}>Click</a>
            </div>
            <div className="row"> </div>
          </>
        )
    }
}


export default Header;