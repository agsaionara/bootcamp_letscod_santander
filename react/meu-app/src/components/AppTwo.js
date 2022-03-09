import React from 'react';

class AppTwo extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="box">
                <div id="title">
                    {this.props.title}
                </div>
                <div id="text">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AppTwo;
