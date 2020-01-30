function findAdjacent(node, vertices, edges){
  let edgesWithTargetNode = edges.filter(edge=>edge.includes(node))
  let adjecentNodes = edgesWithTargetNode.map(edge=>{
    let indexOfTargetNode=edge.indexOf(node)
    let adjecentNode = indexOfTargetNode==1 ? edge[0] : edge[1]
    return vertices.filter(vertice=>vertice.name==adjecentNode)[0]
  })
  let undiscoveredAdjecentNodes = adjecentNodes.filter(node=>node.distance==null)
  return undiscoveredAdjecentNodes
}

function  markDistanceAndPredecessor(predecessorNode, adjacentNodes){
  adjacentNodes.forEach(node=>{
    node.predecessor=predecessorNode
    node.distance=1
  })
}

function bfs(startingNode, vertices, edges){
  startingNode.distance = 0
  let discovered = [startingNode]
  let discoverOrder = [startingNode]
  while(discovered.length != 0){
    let currentNode = discovered.shift()
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
    discoverOrder = discoverOrder.concat(adjacentNodes);
    markDistanceAndPredecessor(currentNode, adjacentNodes)
    discovered = discovered.concat(adjacentNodes)
  }
  return discoverOrder
}
