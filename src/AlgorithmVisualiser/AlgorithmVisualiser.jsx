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
                const currentNode = {
                    col,
                    row,
                    isStart: row === 45 && col === 10,
                    isFinish: row === 30 && col === 5,
                };
                currentRow.push(currentNode);
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
                    return <div key={rowIdx}>
                        {row.map((node, nodeIdx)=> {
                            const {isStart, isFinish} = node;
                            return (
                                <Node
                                key={nodeIdx}
                                isStart={isStart}
                                isFinish={isFinish}
                                ></Node>
                            )

                            })}
                    </div>
                })}
            </div>
        );
    }
}
