"use client";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  readingTime: number;
  tags: string[];
}

// This is a mock function that would be replaced with your actual data fetching logic
// You might fetch from a CMS, markdown files, or a database
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Wrap the array in Promise.resolve() to ensure proper async behavior
  return Promise.resolve([
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js: A Comprehensive Guide",
      date: "2023-06-15",
      excerpt:
        "Next.js has become one of the most popular React frameworks for building modern web applications. In this guide, we'll explore the key features and benefits of Next.js and how to get started with your first project.",
      content:
        "<p>Next.js has become one of the most popular React frameworks for building modern web applications. In this guide, we'll explore the key features and benefits of Next.js and how to get started with your first project.</p><h2>Why Next.js?</h2><p>Next.js provides a great developer experience with features like:</p><ul><li>Server-side rendering</li><li>Static site generation</li><li>API routes</li><li>File-based routing</li><li>Built-in CSS and Sass support</li></ul><p>These features make it an excellent choice for building performant, SEO-friendly web applications.</p><h2>Setting Up Your First Project</h2><p>To create a new Next.js project, run the following command:</p><pre><code>npx create-next-app my-next-app</code></pre><p>This will set up a new Next.js project with all the necessary dependencies and configuration.</p>",
      image: "/placeholder.svg?height=600&width=1200",
      readingTime: 5,
      tags: ["Next.js", "React", "Web Development"],
    },
    {
      slug: "mastering-typescript",
      title: "Mastering TypeScript: Tips and Tricks for Better Code",
      date: "2023-07-22",
      excerpt:
        "TypeScript has revolutionized how we write JavaScript by adding static types. Learn how to leverage TypeScript's powerful features to write more maintainable and error-free code.",
      content:
        "<p>TypeScript has revolutionized how we write JavaScript by adding static types. In this article, we'll explore some advanced TypeScript features and patterns that can help you write better code.</p><h2>Type Inference</h2><p>TypeScript's type inference is powerful and can save you from having to explicitly annotate every variable.</p><pre><code>// TypeScript infers that 'name' is a string\nconst name = 'John';\n\n// TypeScript infers that 'numbers' is number[]\nconst numbers = [1, 2, 3];</code></pre><h2>Union Types</h2><p>Union types allow a variable to be one of several types:</p><pre><code>type Result = string | number | null;</code></pre><p>This is particularly useful for function parameters and return values that can have different types.</p>",
      image: "/placeholder.svg?height=600&width=1200",
      readingTime: 8,
      tags: ["TypeScript", "JavaScript", "Programming"],
    },
    {
      slug: "react-performance-optimization",
      title: "React Performance Optimization Techniques",
      date: "2023-08-10",
      excerpt:
        "Is your React application running slow? Discover practical techniques to optimize your React components and improve overall application performance.",
      content:
        "<p>Performance optimization is crucial for providing a smooth user experience in React applications. In this article, we'll explore several techniques to improve your React app's performance.</p><h2>Memoization with React.memo</h2><p>React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders:</p><pre><code>const MyComponent = React.memo(function MyComponent(props) {\n  // Your component logic\n});</code></pre><h2>Using the useCallback Hook</h2><p>The useCallback hook can prevent unnecessary re-creation of function references:</p><pre><code>const memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);</code></pre><p>This is particularly useful when passing callbacks to optimized child components.</p>",
      image: "/placeholder.svg?height=600&width=1200",
      readingTime: 10,
      tags: ["React", "Performance", "JavaScript"],
    },
    {
      slug: "introduction-to-docker",
      title: "Introduction to Docker: Containerize Your Applications",
      date: "2023-09-05",
      excerpt:
        "Docker has transformed how we deploy and manage applications. Learn the basics of Docker and how to containerize your web applications for consistent deployment across environments.",
      content:
        '<p>Docker has transformed how we deploy and manage applications by enabling containerization. In this guide, we\'ll cover the basics of Docker and how to containerize your web applications.</p><h2>What is Docker?</h2><p>Docker is a platform that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files.</p><h2>Key Docker Concepts</h2><ul><li><strong>Images</strong>: Read-only templates used to create containers</li><li><strong>Containers</strong>: Runnable instances of images</li><li><strong>Dockerfile</strong>: Text document containing instructions to build a Docker image</li><li><strong>Docker Compose</strong>: Tool for defining and running multi-container Docker applications</li></ul><h2>Creating Your First Dockerfile</h2><pre><code>FROM node:14\n\nWORKDIR /app\n\nCOPY package*.json ./\n\nRUN npm install\n\nCOPY . .\n\nEXPOSE 3000\n\nCMD ["npm", "start"]</code></pre>',
      image: "/placeholder.svg?height=600&width=1200",
      readingTime: 7,
      tags: ["Docker", "DevOps", "Containers"],
    },
    {
      slug: "css-grid-layout",
      title: "Mastering CSS Grid Layout: From Basics to Advanced Techniques",
      date: "2023-10-12",
      excerpt:
        "CSS Grid Layout has revolutionized web design by providing a powerful two-dimensional layout system. Learn how to create complex layouts with minimal code using CSS Grid.",
      content:
        "<p>CSS Grid Layout has revolutionized web design by providing a powerful two-dimensional layout system. In this comprehensive guide, we'll explore CSS Grid from basics to advanced techniques.</p><h2>Getting Started with CSS Grid</h2><p>To create a grid container, you simply need to set the display property to grid:</p><pre><code>.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n}</code></pre><p>This creates a three-column grid with equal-width columns and 20px gaps between items.</p><h2>Placing Items on the Grid</h2><p>You can place items precisely on the grid using grid-column and grid-row properties:</p><pre><code>.item {\n  grid-column: 1 / 3; /* Start at line 1, end at line 3 */\n  grid-row: 2 / 4; /* Start at line 2, end at line 4 */\n}</code></pre><p>This places the item across columns 1-2 and rows 2-3.</p>",
      image: "/placeholder.svg?height=600&width=1200",
      readingTime: 6,
      tags: ["CSS", "Web Design", "Frontend"],
    },
    {
      slug: "graphql-vs-rest",
      title: "GraphQL vs REST: Choosing the Right API Architecture",
      date: "2023-11-08",
      excerpt:
        "API design is crucial for modern applications. Compare GraphQL and REST architectures to understand their strengths, weaknesses, and ideal use cases for your projects.",
      content:
        '<p>API design is crucial for modern applications. In this article, we\'ll compare GraphQL and REST architectures to help you choose the right approach for your projects.</p><h2>Understanding REST</h2><p>REST (Representational State Transfer) is an architectural style that uses standard HTTP methods:</p><ul><li><strong>GET</strong>: Retrieve resources</li><li><strong>POST</strong>: Create new resources</li><li><strong>PUT/PATCH</strong>: Update existing resources</li><li><strong>DELETE</strong>: Remove resources</li></ul><p>REST APIs typically have multiple endpoints for different resources and operations.</p><h2>Understanding GraphQL</h2><p>GraphQL is a query language for APIs that allows clients to request exactly the data they need:</p><pre><code>query {\n  user(id: "123") {\n    name\n    email\n    posts {\n      title\n      publishedDate\n    }\n  }\n}</code></pre><p>GraphQL APIs typically have a single endpoint that accepts queries specifying the exact data requirements.</p>',
      image: "/placeholder.svg?height=600&width=1200",
      readingTime: 9,
      tags: ["GraphQL", "REST", "API", "Backend"],
    },
  ]);
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
