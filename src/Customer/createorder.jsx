import React from "react";

class Createorder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status : '',
        };
    }
    render(){
        return(
            <div>
                <h1>Order</h1>
            </div>
        )
    }
}
export default Createorder;