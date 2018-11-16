
// undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name){
    this.adjacencyList[name] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

//

let graph = new Graph();
graph.addVertex('first!');

graph.adjacencyList;