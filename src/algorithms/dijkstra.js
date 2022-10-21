


//performs dijkstras algorithm
// returns every node in the order they are visited
// with each node pointing to its previous
// back to the start node
export function dijkstra(grid, startNode, finishNode){
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);

    while(!!unvisitedNodes.length) {
        sortNodesByDistance(unvisitedNodes)
        const closestNode = unvisitedNodes.shift();

        //wall functions
        /*

        */

        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if(closestNode === finishNode) return visitedNodesInOrder;
        updateVisitedNeighbors()
    }
}

const sortNodesByDistance = (unvisitedNodes) => {
    unvisitedNodes.sort((nodeA,nodeB) => nodeA.distance - nodeB.distance);
}

const updateVisitedNeighbors = (node, grid) =>{
    const neighbors = [];
    const {col, row} = node;
    if(row > 0){
        neighbors.push(grid[row - 1][col]);
    }
    if(row < grid.length -1){
        neighbors.push(grid[row+1][col]);
    }
    if(col > 0 ){ 
        neighbors.push(grid[row][col-1]);
    }
    if(col < grid.length -1) {
        neighbors.push(grid[row][col+1]);
    } 
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

const getAllNodes = (grid) => {
    const nodes = [];
    for(const row of grid){
        for(const node of row){
            nodes.push(node);
        }
    }
    return nodes;
}