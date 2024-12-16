### **Roadmap for Learning Trees, Heaps, Tries, Graphs, and Their Applications**

---

### **1. Trees**

A **Tree** is a hierarchical data structure consisting of nodes, with a single root node and multiple child nodes. Each node can have zero or more child nodes.

#### **Key Concepts**

- **Root**: The topmost node in the tree.
- **Parent and Child**: A node connected to its children.
- **Leaf**: A node with no children.
- **Height**: The longest path from the root to a leaf.

#### **Practical Workouts**

1. Implement a binary tree and its basic operations:
   - Insert a node.
   - Search for a node.
   - Delete a node.
2. Write programs for tree traversals:
   - **Preorder Traversal**: Visit root, then left subtree, then right subtree.
   - **Inorder Traversal**: Visit left subtree, root, then right subtree.
   - **Postorder Traversal**: Visit left subtree, right subtree, then root.
3. Create a program to find the maximum depth of a tree.

#### **Real-World Applications**

- **File Systems**: Directory structures are organized as trees.
- **Expression Parsing**: Mathematical expressions are represented as trees.

---

### **2. Binary Search Tree (BST)**

A **Binary Search Tree** is a binary tree where each node satisfies the property:  
**Left subtree values < Root value < Right subtree values**.

#### **Key Concepts**

- BST allows efficient searching, insertion, and deletion in **O(log n)** (average case).

#### **Practical Workouts**

1. Implement a BST with the following methods:
   - Insert a node.
   - Check if a node exists (`contains` method).
   - Delete a node.
2. Write a program for three types of tree traversals (in-order, pre-order, post-order).
3. Solve specific problems:
   - Find the closest value to a given number in a BST.
   - Validate whether a given tree is a BST.

#### **Real-World Applications**

- **Databases**: BSTs help in indexing and maintaining sorted data.
- **Autocompletion Systems**: Used for quick search and suggestions.

---

### **3. Heap**

A **Heap** is a specialized tree-based structure that satisfies the **heap property**:

- **Max-Heap**: The parent node is greater than or equal to its children.
- **Min-Heap**: The parent node is less than or equal to its children.

#### **Key Concepts**

- A heap is often implemented as an array.
- It allows efficient retrieval of the maximum or minimum element in **O(1)** time.

#### **Practical Workouts**

1. Implement:
   - A **Min-Heap** and **Max-Heap** with build, insert, and remove operations.
2. Create a **Heap Sort** algorithm that uses a heap to sort data.

#### **Real-World Applications**

- **Priority Queues**: Scheduling tasks based on priority.
- **Graph Algorithms**: Dijkstra's algorithm uses heaps for shortest path calculations.

---

### **4. Trie**

A **Trie** (or prefix tree) is a tree-like data structure used for storing strings, where each node represents a character.

#### **Key Concepts**

- Efficiently supports operations like insert, search, and delete for strings.
- Useful for solving problems involving prefix matches.

#### **Practical Workouts**

1. Implement a Trie with:
   - Insert a word.
   - Search for a word.
   - Delete a word.
2. Solve string problems:
   - Count the number of words with a given prefix.
   - Auto-complete suggestions based on a prefix.

#### **Real-World Applications**

- **Search Engines**: Autocomplete and predictive text.
- **Dictionary Implementations**: Quick word lookups.

---

### **5. Graph**

A **Graph** is a collection of nodes (vertices) and edges connecting them. It can be **directed** or **undirected**, **weighted** or **unweighted**.

#### **Key Concepts**

- **Adjacency Matrix**: A 2D array representation of the graph.
- **Adjacency List**: A list where each node stores its adjacent nodes.

#### **Graph Traversals**

- **Breadth-First Search (BFS)**: Explore neighbors level by level.
- **Depth-First Search (DFS)**: Explore as far as possible along each branch before backtracking.

#### **Practical Workouts**

1. Implement a graph using:
   - Adjacency list.
   - Adjacency matrix.
2. Write BFS and DFS algorithms.
3. Solve problems:
   - Find the shortest path in an unweighted graph (using BFS).
   - Detect cycles in a graph (using DFS).

#### **Real-World Applications**

- **Social Networks**: Represent friendships or connections.
- **Navigation Systems**: Represent maps and find shortest paths.
- **Dependency Resolution**: Used in build systems and package managers.

---

### **6. Competitive Coding Challenges**

#### **Trees**

1. Find the lowest common ancestor of two nodes in a tree.
2. Count the number of leaf nodes in a binary tree.
3. Mirror a binary tree.

#### **Binary Search Trees**

1. Find the kth smallest/largest element in a BST.
2. Find the in-order successor of a node in a BST.
3. Convert a BST into a balanced BST.

#### **Heap**

1. Implement a median-finding algorithm using two heaps.
2. Sort an almost-sorted array using a min-heap.
3. Merge `k` sorted arrays using a heap.

#### **Trie**

1. Find all words in a dictionary that share a given prefix.
2. Implement a spell checker using a Trie.
3. Longest prefix match for a given string.

#### **Graphs**

1. Find connected components in an undirected graph.
2. Implement Dijkstra’s algorithm for shortest paths in a weighted graph.
3. Detect if a graph is bipartite.

---

### **7. Applications of All Structures**

1. **Tree Applications**:

   - Data compression (Huffman Encoding).
   - Network routing (spanning trees).

2. **Heap Applications**:

   - Job scheduling systems.
   - Real-time data stream analysis.

3. **Trie Applications**:

   - Predictive typing and search.
   - Longest common prefix calculation.

4. **Graph Applications**:
   - Social network analysis.
   - Web crawlers.

---

<!------------------------------------------------------------------------------------------------->

### **1. Trees: Concepts and Applications**

A **Tree** is a hierarchical data structure that organizes elements into a parent-child relationship. It is widely used in various real-life applications due to its structure and efficiency.

---

#### **Key Concepts**

1. **Node**:

   - Each element in a tree is called a node.
   - The topmost node is called the **root**.
   - Nodes can have child nodes.

2. **Edges**:

   - Edges connect nodes, representing relationships.

3. **Leaf**:

   - Nodes with no children are called **leaf nodes**.

4. **Height**:

   - The height of a tree is the length of the longest path from the root to a leaf.

5. **Subtree**:

   - Any node along with its descendants is considered a subtree.

6. **Binary Tree**:
   - A tree where each node has at most two children (left and right).

---

#### **Operations on Trees**

1. **Insertion**:

   - Add a new node to the tree at the appropriate position.

2. **Search**:

   - Locate a node with a specific value.

3. **Deletion**:

   - Remove a node while maintaining the tree structure.

4. **Traversals**:
   - Visiting nodes in a specific order.
   - **Preorder Traversal**: Root → Left → Right.
   - **Inorder Traversal**: Left → Root → Right.
   - **Postorder Traversal**: Left → Right → Root.

---

#### **Real-Life Example**

Imagine a family tree:

- The root is the oldest ancestor.
- Each child node represents the children of a parent.
- Leaf nodes are individuals with no descendants.

---

#### **Practical Workouts**

1. Implement a binary tree:

   - Define a node structure with left and right pointers.
   - Write methods for insertion, search, and deletion.

2. Create tree traversal algorithms:

   - Write separate functions for preorder, inorder, and postorder traversals.

3. Solve these problems:
   - Find the maximum depth of a tree.
   - Count the total number of nodes.
   - Print all leaf nodes.

---

#### **Applications of Trees**

1. **File Systems**:

   - Hierarchical organization of folders and files.

2. **Search Algorithms**:

   - Binary search trees are used for efficient searching and sorting.

3. **Expression Trees**:

   - Represent mathematical expressions.

4. **Networking**:
   - Spanning trees in routing and data transmission.

<!------------------------------------------------------------------------------------------------->

### **2. Binary Search Tree (BST)**

A **Binary Search Tree (BST)** is a special type of binary tree that maintains elements in a sorted order. It allows for efficient search, insertion, and deletion operations.

---

### **Key Properties of a BST**

1. **Node Structure**:
   - Each node contains:
     - A value (data).
     - A reference to the left child (left subtree).
     - A reference to the right child (right subtree).

2. **BST Property**:
   - For every node:
     - **Left Subtree**: All values are smaller than the node's value.
     - **Right Subtree**: All values are greater than the node's value.

3. **Recursive Definition**:
   - A BST is either empty or:
     - A node with:
       - A left subtree that is also a BST.
       - A right subtree that is also a BST.

---

### **Operations in a BST**

1. **Search**:
   - Compare the value to the current node:
     - If equal: Found the node.
     - If smaller: Move to the left subtree.
     - If larger: Move to the right subtree.
   - Time Complexity: **O(log n)** (balanced tree), **O(n)** (unbalanced tree).

2. **Insertion**:
   - Similar to search:
     - If the value is smaller, go to the left subtree.
     - If larger, go to the right subtree.
     - Insert the value when you reach an empty position.
   - Time Complexity: **O(log n)** (balanced tree).

3. **Deletion**:
   - Three cases:
     1. **Leaf Node**: Simply remove the node.
     2. **Node with One Child**: Replace the node with its child.
     3. **Node with Two Children**: Replace the node with the smallest value from its right subtree (inorder successor) or the largest value from its left subtree (inorder predecessor).
   - Time Complexity: **O(log n)** (balanced tree).

4. **Traversal**:
   - **Inorder Traversal**:
     - Left → Node → Right (produces sorted order).
   - **Preorder Traversal**:
     - Node → Left → Right.
   - **Postorder Traversal**:
     - Left → Right → Node.

---

### **Practical Workouts**

1. **Create a BST**:
   - Implement insertion, search, and deletion functions.
   - Verify its structure by printing in **inorder traversal**.

2. **Closest Value**:
   - Write a program to find the value in the BST that is closest to a given number.

3. **Validate a BST**:
   - Determine if a given binary tree satisfies the BST property.

4. **Depth and Height**:
   - Write a function to calculate the height or depth of a BST.

---

### **Real-World Applications of BST**

1. **Database Indexing**:
   - Efficiently store and retrieve data using sorted keys.

2. **Auto-Suggest Systems**:
   - Quickly search for suggestions based on prefixes.

3. **Dynamic Sets**:
   - Store and manage dynamic data efficiently.

4. **File Searching**:
   - Use BSTs for organizing filenames for quick retrieval.

---

### **Example Problem: Validate a BST**

#### **Problem Statement**:
Given a binary tree, check if it satisfies the properties of a BST.

#### **Approach**:
1. Perform an **inorder traversal** of the tree.
2. Verify if the traversal produces a strictly increasing sequence.

---

<!------------------------------------------------------------------------------------------------->

### **3. Heap**

A **Heap** is a specialized tree-based data structure that satisfies the **heap property**, making it highly efficient for priority-based operations. It is primarily used to implement **priority queues** and in algorithms like **Heap Sort**.

---

### **Key Properties of a Heap**

1. **Heap Property**:
   - **Max-Heap**: The value of each node is greater than or equal to its children.
   - **Min-Heap**: The value of each node is less than or equal to its children.

2. **Complete Binary Tree**:
   - A heap is always a complete binary tree, meaning all levels are fully filled except possibly the last, which is filled from left to right.

3. **Storage**:
   - A heap is often implemented using an array:
     - **Parent at index `i`**:
       - Left child: `2i + 1`
       - Right child: `2i + 2`
     - **Child at index `i`**:
       - Parent: `(i - 1) // 2`

---

### **Operations in a Heap**

1. **Build a Heap**:
   - Convert an unsorted array into a heap by repeatedly "heapifying" the tree.

2. **Insert**:
   - Add the new value at the end of the array.
   - Restore the heap property by **"bubbling up"** (compare with the parent and swap if necessary).

3. **Remove (Extract)**:
   - Remove the root (max in a max-heap or min in a min-heap).
   - Replace it with the last element in the array.
   - Restore the heap property by **"heapifying down"** (compare with children and swap if necessary).

4. **Peek**:
   - Retrieve the root element (max or min) without removing it.

5. **Heap Sort**:
   - Build a max-heap.
   - Repeatedly extract the maximum element (root) and move it to the sorted portion of the array.

---

### **Practical Workouts**

1. **Build a Heap**:
   - Implement the logic to build a heap from an array.
   - Test with different types of data (numbers, strings).

2. **Insert Operation**:
   - Write a function to insert a new value into a min-heap or max-heap.

3. **Remove Operation**:
   - Implement a function to extract the root of the heap and restore the heap property.

4. **Heap Sort**:
   - Sort an array using heap sort and verify the result.

5. **Kth Largest/Smallest Element**:
   - Use a heap to find the Kth largest or smallest element in an array.

---

### **Example Problem**

#### **Find the Median of a Stream of Numbers**
**Problem**: Maintain a running median as numbers are added to a dataset.  
**Solution**: Use two heaps:
- A max-heap for the left half of the dataset.
- A min-heap for the right half.

---

### **Applications of Heaps**

1. **Priority Queues**:
   - Scheduling tasks by priority.
   - Operating system process management.

2. **Graph Algorithms**:
   - Dijkstra's shortest path algorithm uses heaps for efficient edge selection.

3. **Data Stream Analysis**:
   - Finding the median or top K elements in a live data stream.

4. **Event Management**:
   - Simulating events in chronological order (priority queues).

---

<!------------------------------------------------------------------------------------------------->

### **4. Trie**

A **Trie** (pronounced as "try") is a tree-like data structure used to store and search strings efficiently. It is particularly useful for tasks involving prefix-based queries and dictionary-like operations.

---

### **Key Properties of a Trie**

1. **Node Structure**:
   - Each node represents a single character.
   - Nodes have pointers (links) to child nodes.

2. **Root Node**:
   - The root node represents an empty string or the start of the structure.

3. **Path Representation**:
   - A path from the root to a node represents a string.

4. **End Marker**:
   - Special markers (often a boolean flag) indicate the end of a valid word.

---

### **Operations in a Trie**

1. **Insert**:
   - Add a word character by character, creating new nodes when necessary.

2. **Search**:
   - Traverse the Trie for a given word or prefix.
   - Return `true` if the word exists, `false` otherwise.

3. **Starts With**:
   - Check if any word in the Trie starts with a given prefix.

4. **Delete**:
   - Remove a word from the Trie by clearing its nodes (if they are no longer part of other words).

---

### **Implementation Example**

#### **Insert "apple" and "app"**
1. Start at the root node.
2. For each character:
   - Check if a child node for that character exists.
   - If not, create a new node.
3. Mark the end of the word.

#### **Search "app"**
1. Traverse nodes corresponding to the characters `a`, `p`, `p`.
2. If all characters match and the end marker exists, return `true`.

#### **Delete "apple"**
1. Traverse the word.
2. Remove nodes if they are no longer part of any other word.

---

### **Real-Life Example**

Imagine an auto-suggestion feature:
- A user types "appl."
- The Trie quickly retrieves all words starting with "appl," like "apple," "application," and "appliance."

---

### **Practical Workouts**

1. **Basic Operations**:
   - Implement insert, search, and startsWith functions in a Trie.

2. **Count Words with Prefix**:
   - Write a function to count how many words start with a given prefix.

3. **Autocomplete System**:
   - Design a program that suggests words based on user input.

4. **Word Deletion**:
   - Implement a delete operation and test edge cases.

5. **Longest Word in Dictionary**:
   - Find the longest word in a Trie that can be constructed one letter at a time.

---

### **Applications of Trie**

1. **Search Engines**:
   - Auto-completion and search suggestions.

2. **Spell Checkers**:
   - Match misspelled words with dictionary words.

3. **IP Routing**:
   - Store and match IP prefixes in routing tables.

4. **Word Games**:
   - Check word validity in games like Scrabble.

---

<!------------------------------------------------------------------------------------------------->

### **5. Graph**

A **Graph** is a powerful data structure used to model relationships between elements. It is a collection of **vertices** (nodes) connected by **edges** (links), representing a variety of real-world problems like networks, social connections, and routes.

---

### **Key Terminologies**

1. **Vertex (Node)**:
   - Represents a single entity (e.g., a city, person, or webpage).
   
2. **Edge (Link)**:
   - Connects two vertices, representing a relationship or path.
   - Can be **directed** (one-way) or **undirected** (two-way).

3. **Weight**:
   - A value assigned to an edge, often representing cost, distance, or time.

4. **Degree**:
   - **In-degree**: Number of edges directed toward a vertex.
   - **Out-degree**: Number of edges leaving a vertex.

5. **Adjacency**:
   - Two vertices are adjacent if they are connected directly by an edge.

---

### **Types of Graphs**

1. **Directed Graph (Digraph)**:
   - Edges have directions (e.g., one-way streets).
   
2. **Undirected Graph**:
   - Edges are bidirectional (e.g., mutual friendships).

3. **Weighted Graph**:
   - Edges have weights (e.g., distances between cities).

4. **Unweighted Graph**:
   - All edges are treated equally.

5. **Cyclic and Acyclic Graphs**:
   - **Cyclic**: Contains cycles (a path where you can return to the starting vertex).
   - **Acyclic**: No cycles (e.g., trees are acyclic).

---

### **Graph Representations**

1. **Adjacency Matrix**:
   - A 2D array where `matrix[i][j]` is `1` (or weight) if there's an edge between vertices `i` and `j`, otherwise `0`.
   - Space Complexity: **O(V²)** (good for dense graphs).

2. **Adjacency List**:
   - A list where each vertex points to its adjacent vertices.
   - Space Complexity: **O(V + E)** (good for sparse graphs).

3. **Edge List**:
   - A list of all edges as pairs of vertices, optionally including weights.

---

### **Operations in Graphs**

1. **Traversal**:
   - **Breadth-First Search (BFS)**:
     - Explores all neighbors level by level.
     - Uses a **queue** for exploration.
   - **Depth-First Search (DFS)**:
     - Explores as deep as possible along a branch before backtracking.
     - Uses a **stack** or recursion.

2. **Shortest Path**:
   - Algorithms like **Dijkstra's** or **Bellman-Ford** find the shortest path between two nodes.

3. **Minimum Spanning Tree (MST)**:
   - Algorithms like **Prim's** or **Kruskal's** find a tree that connects all vertices with the minimum edge weight.

4. **Cycle Detection**:
   - Identify cycles in directed or undirected graphs using DFS or Union-Find.

5. **Topological Sorting**:
   - Linear ordering of vertices in a directed acyclic graph (DAG).

---

### **Real-Life Examples**

1. **Social Networks**:
   - Vertices: People.
   - Edges: Friendships or follows.

2. **Maps and Navigation**:
   - Vertices: Locations.
   - Edges: Roads with distances as weights.

3. **Webpage Links**:
   - Vertices: Webpages.
   - Edges: Hyperlinks between pages.

4. **Network Routing**:
   - Vertices: Computers.
   - Edges: Communication links.

---

### **Practical Workouts**

1. **Graph Creation**:
   - Write a program to represent a graph using adjacency list and adjacency matrix.

2. **BFS and DFS**:
   - Implement BFS and DFS to traverse a graph.

3. **Connected Components**:
   - Find all connected components in an undirected graph.

4. **Shortest Path**:
   - Implement Dijkstra's algorithm to find the shortest path in a weighted graph.

5. **Cycle Detection**:
   - Write a program to detect cycles in directed and undirected graphs.

6. **Graph Traversals**:
   - Perform BFS/DFS for finding the path between two vertices.

7. **Topological Sort**:
   - Implement topological sort for a directed acyclic graph.

8. **Minimum Spanning Tree**:
   - Implement Kruskal's or Prim's algorithm to find the MST.

9. **Bipartite Graph Check**:
   - Determine if a graph is bipartite using BFS or DFS.

10. **Graph Coloring**:
    - Implement a program to color vertices of a graph using the minimum number of colors.

---

### **Applications of Graphs**

1. **Pathfinding**:
   - Used in GPS and navigation systems to find the shortest or fastest routes.

2. **Recommendation Systems**:
   - Suggest connections or products based on graph-based relationships.

3. **Dependency Resolution**:
   - Task scheduling in project management or build systems.

4. **Search Engines**:
   - PageRank algorithm represents webpages as a graph.

---

<!------------------------------------------------------------------------------------------------->

### **7. Applications of All Structures**

This section provides a summary of how each data structure (from arrays to graphs) is applied in real-world scenarios. Understanding their applications helps in selecting the right structure for solving a given problem efficiently.

---

### **1. Arrays**
#### **Applications**:
1. **Data Storage**:
   - Storing a fixed set of elements like a list of students, products, or temperatures.
2. **Matrix Representation**:
   - Used in 2D arrays for image processing, spreadsheets, or game grids.
3. **Searching & Sorting**:
   - Linear search, binary search, and sorting algorithms.
4. **Temporary Buffers**:
   - Used in CPU caches and buffering data streams.

---

### **2. Strings**
#### **Applications**:
1. **Text Processing**:
   - Spell checkers, text editors, and syntax analyzers.
2. **Pattern Matching**:
   - Searching for substrings or patterns (e.g., regex search, plagiarism detection).
3. **Encryption**:
   - Encoding strings for security, like hashing passwords.
4. **Data Serialization**:
   - Formatting data for transmission (e.g., JSON or XML).

---

### **3. Linked Lists**
#### **Applications**:
1. **Dynamic Memory Allocation**:
   - Used in applications where elements need to grow or shrink dynamically.
2. **Undo Mechanisms**:
   - Found in text editors or software with reversible operations.
3. **Implementing Queues/Stacks**:
   - Efficient insertion/deletion without shifting elements.
4. **Hash Chaining**:
   - Resolving hash collisions in hash tables.

---

### **4. Doubly Linked Lists**
#### **Applications**:
1. **Navigation Systems**:
   - Forward and backward navigation (e.g., browsers, multimedia playlists).
2. **Memory Management**:
   - Used by operating systems for tracking memory blocks.
3. **Deque Implementations**:
   - Efficient double-ended queues in scheduling and simulation.

---

### **5. Stacks**
#### **Applications**:
1. **Expression Evaluation**:
   - Used in compilers for converting and evaluating expressions.
2. **Undo/Redo Functionality**:
   - Found in editors and applications for step-back functionality.
3. **Function Calls**:
   - The runtime stack is used for managing recursive function calls.
4. **Depth-First Search (DFS)**:
   - Stacks are essential for exploring graphs in DFS.

---

### **6. Queues**
#### **Applications**:
1. **Task Scheduling**:
   - Operating systems use queues for managing processes and threads.
2. **Data Stream Processing**:
   - Messaging systems like Kafka or RabbitMQ.
3. **Breadth-First Search (BFS)**:
   - Queues help in traversing graphs level by level.
4. **Customer Service Systems**:
   - Call centers use queues for serving customers in order.

---

### **7. Hash Tables**
#### **Applications**:
1. **Fast Lookups**:
   - Used in caching, symbol tables in compilers, and databases.
2. **Password Verification**:
   - Hashing passwords for secure storage.
3. **Spell Checkers**:
   - Fast dictionary lookups for word validation.
4. **Load Balancing**:
   - Hashing server addresses for distributed systems.

---

### **8. Trees**
#### **Applications**:
1. **Hierarchical Data**:
   - File systems, organization charts, and XML/JSON parsing.
2. **Search Operations**:
   - Binary Search Trees for efficient searching and retrieval.
3. **Routing Algorithms**:
   - Decision trees in AI and network routing.
4. **Event Handling**:
   - Tree structures in GUIs for event propagation.

---

### **9. Binary Search Trees (BST)**
#### **Applications**:
1. **Databases**:
   - Efficient searching and range queries in databases.
2. **Set Operations**:
   - Implementing ordered sets and multisets.
3. **Symbol Tables**:
   - Key-value pair storage in compilers and interpreters.
4. **Autocompletion**:
   - Finding the closest match for input in search engines.

---

### **10. Heaps**
#### **Applications**:
1. **Priority Queues**:
   - Used in operating systems for job scheduling.
2. **Shortest Path Algorithms**:
   - Dijkstra’s algorithm for graphs.
3. **Heap Sort**:
   - Efficient sorting in-place using heaps.
4. **Memory Management**:
   - Dynamic memory allocation in programming languages.

---

### **11. Tries**
#### **Applications**:
1. **Autocomplete Systems**:
   - Suggesting words based on prefixes.
2. **Dictionary Implementation**:
   - Fast word search and insertion.
3. **IP Routing**:
   - Optimized for matching IP address prefixes.
4. **Word Games**:
   - Validating words in games like Scrabble.

---

### **12. Graphs**
#### **Applications**:
1. **Social Networks**:
   - Representing friendships, followers, or connections.
2. **Routing & Navigation**:
   - GPS systems and delivery routes.
3. **Dependency Resolution**:
   - Package installations and task scheduling.
4. **Search Engines**:
   - Web crawling and PageRank algorithm.

---

### **How to Choose the Right Data Structure**
1. **Frequency of Operations**:
   - If searching is the primary operation, use **hash tables** or **binary search trees**.
   - If insertion/deletion is frequent, consider **linked lists** or **doubly linked lists**.

2. **Order Preservation**:
   - If order matters, use **arrays**, **linked lists**, or **queues**.

3. **Dynamic Size**:
   - If the data size changes dynamically, use **linked lists** or **heaps**.

4. **Hierarchical Data**:
   - Use **trees** or **tries** for hierarchical relationships.

5. **Network Representation**:
   - Use **graphs** for interconnected relationships like social networks or road systems.

---

<!------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------->
