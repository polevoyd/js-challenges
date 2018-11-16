
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

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }
}

//

let graph = new Graph();
graph.addVertex('Krasnodar');
graph.addVertex('Moscow');
graph.addVertex('Rostov');
graph.addEdge('Krasnodar', 'Rostov');
graph.removeEdge('Krasnodar', 'Rostov');
console.log(graph);


