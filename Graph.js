
// undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name){
    this.adjacencyList[name] = [];
  }
}

//

let graph = new Graph();
graph.addVertex('first!');

graph.adjacencyList;