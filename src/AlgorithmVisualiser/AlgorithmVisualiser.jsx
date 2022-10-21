import React from "react";
import Node from "./Node/Node";

import "./AlgorithmVisualiser.css"

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 45;
const FINISH_NODE_COL = 10;

export default class AlgorithmVisualiser extends React.Component{
    constructor() {
        super();
        this.state = {
            grid: [],
        };
    }

    componentDidMount() {
        const grid = getInitalGrid();
        this.setState({grid});
    }

    render() {
        const {grid} = this.state;

        return(
            <div className="grid">
                {grid.map((row, rowIdx) => {
                    return (
                    <div key={rowIdx}>
                        {row.map((node, nodeIdx)=> {
                            const {row,col,isFinish,isStart} = node;
                            return (
                                <Node
                                key={nodeIdx}
                                col={col}
                                row={row}
                                isStart={isStart}
                                isFinish={isFinish}
                                ></Node>
                            );
                            })}
                    </div>
                    );
                })}
            </div>
        );
    };
};


//creates the default grid 
const getInitalGrid = () => {
    const grid = [];
    for(let row = 0; row < 50; row++){
        const currentRow = [];
        for(let col = 0; col < 20; col++){
            currentRow.push(createNode(col,row));
        }
        grid.push(currentRow);
    }
    return grid;
};

//creates notes with attributes
const createNode = (col,row) => {
    return{
        col,
        row,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: false,
    };
};


    
