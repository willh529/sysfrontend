import React from 'react';


class Cell extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            textMode: true,
            sourceText: ''
        };
    }
    
    handleSourceChange(e) {
        this.sourceText = e.target.value;
    }
    
    render(){
        return (
            <textarea value={this.state.sourceText} onChange={e => this.handleSourceChange(e)}>ssss</textarea>
        );
    }
}

export default Cell;