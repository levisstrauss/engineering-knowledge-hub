export interface Author {
    id: string
    name: string
    avatar: string
    bio: string
    twitter?: string
    github?: string
}

export interface BlogPost {
    id: string
    title: string
    excerpt: string
    content: string
    author: Author
    publishedAt: string
    readTime: number
    tags: string[]
    category: string
    featured: boolean
    thumbnail: string
}

export const authors: Author[] = [
    {
        id: "sarah-chen",
        name: "Sarah Chen",
        avatar: "/professional-woman-engineer.png",
        bio: "Senior ML Engineer at TechCorp, specializing in computer vision and deep learning.",
        twitter: "@sarahchen_ml",
        github: "sarahchen",
    },
    {
        id: "alex-rodriguez",
        name: "Alex Rodriguez",
        avatar: "/professional-man-developer.png",
        bio: "Full-stack developer and DevOps enthusiast with 8+ years of experience.",
        twitter: "@alexdev",
        github: "alexrodriguez",
    },
    {
        id: "priya-patel",
        name: "Priya Patel",
        avatar: "/professional-woman-data-scientist.png",
        bio: "Data Scientist passionate about ethical AI and statistical modeling.",
        twitter: "@priya_data",
        github: "priyapatel",
    },
    {
        id: "marcus-johnson",
        name: "Marcus Johnson",
        avatar: "/professional-man-architect.jpg",
        bio: "Software Architect focused on distributed systems and cloud infrastructure.",
        twitter: "@marcus_arch",
        github: "marcusjohnson",
    },
]

export const blogPosts: BlogPost[] = [
    {
        id: "transformer-architecture-deep-dive",
        title: "Understanding Transformer Architecture: A Deep Dive into Attention Mechanisms",
        excerpt:
            "Explore the revolutionary transformer architecture that powers modern AI models like GPT and BERT. Learn how attention mechanisms work and why they're so effective.",
        content: "Full article content would go here...",
        author: authors[0],
        publishedAt: "2024-01-15",
        readTime: 12,
        tags: ["AI", "Machine Learning", "Transformers", "Deep Learning"],
        category: "AI/ML",
        featured: true,
        thumbnail: "/neural-network-visualization.png",
    },
    {
        id: "microservices-patterns-2024",
        title: "Microservices Design Patterns: Best Practices for 2024",
        excerpt:
            "Discover the latest microservices patterns and anti-patterns. Learn how to build scalable, maintainable distributed systems.",
        content: "Full article content would go here...",
        author: authors[3],
        publishedAt: "2024-01-12",
        readTime: 8,
        tags: ["Microservices", "Architecture", "Distributed Systems", "DevOps"],
        category: "Software Engineering",
        featured: true,
        thumbnail: "/microservices-architecture.png",
    },
    {
        id: "data-pipeline-optimization",
        title: "Optimizing Data Pipelines for Real-Time Analytics",
        excerpt:
            "Learn how to build efficient data pipelines that can handle millions of events per second while maintaining data quality and reliability.",
        content: "Full article content would go here...",
        author: authors[2],
        publishedAt: "2024-01-10",
        readTime: 10,
        tags: ["Data Engineering", "Analytics", "Pipeline", "Real-time"],
        category: "Data Science",
        featured: true,
        thumbnail: "/data-pipeline-flow-chart.jpg",
    },
    {
        id: "react-server-components-guide",
        title: "React Server Components: The Future of Web Development",
        excerpt:
            "Dive into React Server Components and learn how they're changing the way we build web applications with better performance and user experience.",
        content: "Full article content would go here...",
        author: authors[1],
        publishedAt: "2024-01-08",
        readTime: 15,
        tags: ["React", "Server Components", "Web Development", "Performance"],
        category: "Web Development",
        featured: false,
        thumbnail: "/react-components-diagram.jpg",
    },
    {
        id: "llm-fine-tuning-techniques",
        title: "Advanced Fine-Tuning Techniques for Large Language Models",
        excerpt:
            "Master the art of fine-tuning LLMs for specific tasks. Explore LoRA, QLoRA, and other parameter-efficient methods.",
        content: "Full article content would go here...",
        author: authors[0],
        publishedAt: "2024-01-05",
        readTime: 18,
        tags: ["LLM", "Fine-tuning", "AI", "Natural Language Processing"],
        category: "AI/ML",
        featured: false,
        thumbnail: "/language-model-training.jpg",
    },
    {
        id: "kubernetes-security-best-practices",
        title: "Kubernetes Security: Best Practices and Common Pitfalls",
        excerpt:
            "Secure your Kubernetes clusters with these essential security practices. Learn about RBAC, network policies, and container security.",
        content: "Full article content would go here...",
        author: authors[3],
        publishedAt: "2024-01-03",
        readTime: 14,
        tags: ["Kubernetes", "Security", "DevOps", "Container Security"],
        category: "Software Engineering",
        featured: false,
        thumbnail: "/kubernetes-security-shield.jpg",
    },
    {
        id: "statistical-modeling-python",
        title: "Statistical Modeling in Python: From Linear Regression to Advanced Techniques",
        excerpt:
            "Comprehensive guide to statistical modeling using Python. Cover linear regression, logistic regression, and advanced statistical methods.",
        content: "Full article content would go here...",
        author: authors[2],
        publishedAt: "2024-01-01",
        readTime: 16,
        tags: ["Statistics", "Python", "Modeling", "Data Analysis"],
        category: "Data Science",
        featured: false,
        thumbnail: "/statistical-charts-graphs.jpg",
    },
    {
        id: "web-performance-optimization-2024",
        title: "Web Performance Optimization: Core Web Vitals and Beyond",
        excerpt:
            "Master web performance optimization techniques. Learn about Core Web Vitals, lazy loading, and modern performance monitoring.",
        content: "Full article content would go here...",
        author: authors[1],
        publishedAt: "2023-12-28",
        readTime: 11,
        tags: ["Performance", "Web Development", "Core Web Vitals", "Optimization"],
        category: "Web Development",
        featured: false,
        thumbnail: "/web-performance-metrics.jpg",
    },
    {
        id: "computer-vision-applications",
        title: "Computer Vision in Production: Real-World Applications and Challenges",
        excerpt:
            "Explore how computer vision is being used in production environments. Learn about deployment challenges and optimization techniques.",
        content: "Full article content would go here...",
        author: authors[0],
        publishedAt: "2023-12-25",
        readTime: 13,
        tags: ["Computer Vision", "Production", "AI", "Image Processing"],
        category: "AI/ML",
        featured: false,
        thumbnail: "/computer-vision-camera.jpg",
    },
    {
        id: "database-sharding-strategies",
        title: "Database Sharding Strategies for High-Scale Applications",
        excerpt:
            "Learn different database sharding strategies and when to use them. Understand the trade-offs and implementation challenges.",
        content: "Full article content would go here...",
        author: authors[3],
        publishedAt: "2023-12-22",
        readTime: 12,
        tags: ["Database", "Sharding", "Scalability", "Architecture"],
        category: "Software Engineering",
        featured: false,
        thumbnail: "/database-sharding-diagram.png",
    },
    {
        id: "time-series-forecasting",
        title: "Time Series Forecasting with Modern Machine Learning Techniques",
        excerpt:
            "Advanced time series forecasting using LSTM, Prophet, and transformer models. Compare traditional and modern approaches.",
        content: "Full article content would go here...",
        author: authors[2],
        publishedAt: "2023-12-20",
        readTime: 14,
        tags: ["Time Series", "Forecasting", "LSTM", "Prophet"],
        category: "Data Science",
        featured: false,
        thumbnail: "/time-series-chart.jpg",
    },
    {
        id: "progressive-web-apps-2024",
        title: "Progressive Web Apps: Building Native-Like Experiences",
        excerpt:
            "Create PWAs that feel like native apps. Learn about service workers, offline functionality, and app-like features.",
        content: "Full article content would go here...",
        author: authors[1],
        publishedAt: "2023-12-18",
        readTime: 9,
        tags: ["PWA", "Service Workers", "Web Development", "Mobile"],
        category: "Web Development",
        featured: false,
        thumbnail: "/progressive-web-app-mobile.png",
    },
    {
        id: "reinforcement-learning-applications",
        title: "Reinforcement Learning in Real-World Applications",
        excerpt: "Explore practical applications of reinforcement learning in gaming, robotics, and autonomous systems.",
        content: "Full article content would go here...",
        author: authors[0],
        publishedAt: "2023-12-15",
        readTime: 17,
        tags: ["Reinforcement Learning", "AI", "Robotics", "Gaming"],
        category: "AI/ML",
        featured: false,
        thumbnail: "/reinforcement-learning-robot.jpg",
    },
    {
        id: "cloud-native-architecture",
        title: "Cloud-Native Architecture: Principles and Patterns",
        excerpt:
            "Design cloud-native applications that are resilient, scalable, and maintainable. Learn key principles and architectural patterns.",
        content: "Full article content would go here...",
        author: authors[3],
        publishedAt: "2023-12-12",
        readTime: 13,
        tags: ["Cloud Native", "Architecture", "Kubernetes", "Microservices"],
        category: "Software Engineering",
        featured: false,
        thumbnail: "/cloud-native-architecture.png",
    },
    {
        id: "data-visualization-best-practices",
        title: "Data Visualization Best Practices: Telling Stories with Data",
        excerpt:
            "Create compelling data visualizations that communicate insights effectively. Learn design principles and common mistakes to avoid.",
        content: "Full article content would go here...",
        author: authors[2],
        publishedAt: "2023-12-10",
        readTime: 10,
        tags: ["Data Visualization", "Design", "Analytics", "Storytelling"],
        category: "Data Science",
        featured: false,
        thumbnail: "/data-visualization-dashboard.png",
    },
]

export const categories = [
    { name: "AI/ML", count: blogPosts.filter((post) => post.category === "AI/ML").length },
    { name: "Data Science", count: blogPosts.filter((post) => post.category === "Data Science").length },
    { name: "Software Engineering", count: blogPosts.filter((post) => post.category === "Software Engineering").length },
    { name: "Web Development", count: blogPosts.filter((post) => post.category === "Web Development").length },
]

export const featuredPosts = blogPosts.filter((post) => post.featured)
export const latestPosts = blogPosts.slice(0, 6)
