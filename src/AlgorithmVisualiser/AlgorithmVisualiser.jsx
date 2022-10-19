import React from "react";
import Node from "./Node/Node";

import "./AlgorithmVisualiser.css"

export default class AlgorithmVisualiser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount() {
        const nodes = [];
        for(let row = 0; row < 50; row++){
            const currentRow = [];
            for(let col = 0; col < 15; col++){
                currentRow.push([]);
            }
            nodes.push(currentRow);
        }
        this.setState({nodes});
    }

    render() {
        const {nodes} = this.state;

        return(
            <div className="grid">
                {nodes.map((row, rowIdx) => {
                    return <div>
                        {row.map((node, nodeIdx)=> <Node></Node>)}
                    </div>
                })}
            </div>
        );
    }
}
