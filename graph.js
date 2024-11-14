class Graph {
    constructor() {
        this.adjList = new Map()
    }

    addVertex(vertex) {
        if(!this.adjList.has(vertex)) {
            this.adjList.set(vertex, [])
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2)
        this.adjList.get(vertex2).push(vertex1)
    }

    printGraph() {
        for(let [vertex, neighbors] of this.adjList) {
            console.log(vertex + " -> " + neighbors.join(", "))
        }
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")

console.log("Graph:")
graph.printGraph()