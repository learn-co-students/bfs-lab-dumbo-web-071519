// function bfs(rootNode, vertices, edges) {
//   FIFO: push to back, shift from front
//   const queue = [rootNode]
// }

function findAdjacent(nodeName, vertices, edges) {
  const adjacentNodes = []
  for (let edge of edges) {
    let otherVertex = null
    if (edge[0] === nodeName) {
      otherVertex = edge[1]
    } else if (edge[1] === nodeName) {
      otherVertex = edge[0]
    }
    for (let vertice of vertices) {
      if (vertice.name === otherVertex) {
        adjacentNodes.push(vertice)
      }
    }
  }
  return adjacentNodes
}

function markDistanceAndPredecessor(nodeName, adjacentNodes){
  for (let node of adjacentNodes) {
    node.distance = 1
    node.predecessor = nodeName
  }
  return adjacentNodes
}

// function addToQueue(){}
