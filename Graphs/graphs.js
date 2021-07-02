class graph{
    constructor(){
        this.adjacencylist = {}
    }

    /*
    ADDING A VERTEX
-Write a method called addVertex, which accepts a name of a vertex
-It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

*/
    addVertex(vertex){   
        if (!this.adjacencylist[vertex]) this.adjacencylist[vertex] = []
        
    }

    /* 
    ADDING AN EDGE
-This function should accept two vertices, we can call them vertex1 and vertex2
-The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
-The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
-Don't worry about handling errors/invalid vertices
    */
    addEdge(arg1, arg2) {
        this.adjacencylist[arg1].push(arg2)
        this.adjacencylist[arg2].push(arg1)
    }

    /* 
    REMOVING AN EDGE
-This function should accept two vertices, we'll call them vertex1 and vertex2
-The function should reassign the key of vertex1 to be an array that does not contain vertex2
-The function should reassign the key of vertex2 to be an array that does not contain vertex1
-Don't worry about handling errors/invalid vertices
    */

    removeEdge(arg1, arg2){
        this.adjacencylist[arg1] = this.adjacencylist[arg1].filter(v => v !== arg2)

        this.adjacencylist[arg2] = this.adjacencylist[arg2].filter(v => v !== arg1)
    }

    /* 
    REMOVING A VERTEX REMOVING A VERTEX YOUR TURN
-The function should accept a vertex to remove
-The function should loop as long as there are any other vertices in the adjacency list for that vertex
-Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
-delete the key in the adjacency list for that vertex
    */
   removeVertex(vertex){
       while (this.adjacencylist[vertex].length){ //the reason for this is to get the length and 
        //keep removing the last element from the array until the array length is Zero 
           const adjacentVertex = this.adjacencylist[vertex].pop() //gets the popped item
           this.removeEdge(vertex, adjacentVertex)
       }

       delete this.adjacencylist[vertex]

   }
}

let g = new graph()
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")
g.addEdge("Tokyo", "Dallas")
g.addEdge("Dallas", "Aspen")
g.removeVertex("Aspen")

console.log(g.adjacencylist)

