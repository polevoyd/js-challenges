// helper simple priority queue N*logN with sorting
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({value, priority});
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority > b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(node) {
    if (!this.adjacencyList[node]) this.adjacencyList[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({node : node2, weight: weight});
    this.adjacencyList[node2].push({node : node1, weight});
  }

  Dijkstra(start, finish) {

    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    // build up initial state
    for (let node in this.adjacencyList) {
      if (node === start) {
        distances[node] = 0;
        nodes.enqueue(node, 0);
      } else {
        distances[node] = Infinity;
        nodes.enqueue(node, Infinity);
      }
      previous[node] = null;
    }
  }
}

let graph = new WeightedGraph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

graph.addEdge('A', 'B', 9);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'E', 7);
graph.addEdge('C', 'D', 9);
graph.addEdge('C', 'F', 5);
graph.addEdge('D', 'E', 7);
graph.addEdge('D', 'F', 9);
graph.addEdge('E', 'F', 5);

console.log(graph.adjacencyList);

graph.Dijkstra('A', 'E');
