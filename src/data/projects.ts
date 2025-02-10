import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Tomato - Food Delivery Website",
    description:
      "A Modern food delivery platform offering seamless browsing, ordering, and payment solutions with modern technologies.",
    image: "tomato.png",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/dineshkottaKota/Food-Delivery-App/tree/main",
    live: "https://github.com/dineshkottaKota/Food-Delivery-App/tree/maih/",
    details: {
      "problem": "Complicated food ordering and payment processes.",
      "solution": "A streamlined platform for easy browsing, ordering, and secure payments.",
      "features": [
        "User authentication with JWT",
        "Stripe payment integration",
        "Real-time order tracking",
        "Mobile-responsive design",
        "Product and cart management",
        "Secure user data storage"
      ],
      "impact": "Improved user experience, enhanced security, and seamless payments, leading to increased customer satisfaction and restaurant sales."
    },
  },
  {
    title: "PersonaLearn - LMS Platform",
    description: "An AI-driven course recommendation platform for personalized learning",
    image: "personalearn.jpg",
    tech: ["HTML", "JavaScript", "Tailwind CSS", "MySQL", "Vectorization"],
    github: "https://github.com/dineshkottaKota/Personalized-Learning-Management-System",
    live: "https://github.com/dineshkottaKota/Food-Delivery-App/tree/main",
    details: {
        problem: "Learners struggle to find relevant courses tailored to their specific interests and goals",
        solution: "Built a platform that recommends courses from multiple sources based on user-entered interests and goals",
        features: [
            "AI-powered course recommendations",
            "Integration with multiple e-learning platforms",
            "User-friendly interface for inputting topics and goals",
            "Real-time personalized suggestions"
        ],
        impact: "Simplified the course selection process, helping learners achieve their goals efficiently"
    },
  },
  {
    title: "Potato Leaf Disease Classification",
    description: "A machine learning solution for classifying potato leaf diseases",
    image: "potato_leaf.jpg",
    tech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "CNN"],
    github: "https://github.com/dineshkottaKota/potato-disease-classification",
    live: "https://github.com/dineshkottaKota/Food-Delivery-App/tree/main",
    details: {
        problem: "Difficulty in identifying potato leaf diseases",
        solution: "Developed a CNN-based model for accurate classification with a user-friendly web interface",
        features: [
            "Classification of early blight, late blight, and healthy leaves",
            "User-friendly web interface built with JavaScript and Flask",
            "Real-time image upload and classification",
            "Interactive visualization of classification results"
        ],
        impact: "Helping farmers detect diseases early, improving crop health"
    },
  },
  {
    title: "AI Object Detector ",
    description: "An Object Detection Website using TensorFlow and Next.js",
    image: "object detection.jpg",
    tech: ["Next.js", "Tailwind CSS", "TensorFlow"],
    github: "https://github.com/dineshkottaKota/NextJs-AI-Object-Detection",
    live: "https://github.com/dineshkottaKota/Food-Delivery-App/tree/main",
    details: {
      problem: "Real-time object detection systems are often complex and challenging to deploy",
        solution: "Built an AI-powered real-time object detection platform with Next.js and TensorFlow",
        features: [
            "Real-time object detection with TensorFlow models",
            "Live video feed analysis",
            "User-friendly interface for uploading and monitoring data",
            "Scalable and deployment-ready architecture"
        ],
        impact: "Empowering developers and businesses with seamless real-time object detection capabilities",
    },
  },
];
