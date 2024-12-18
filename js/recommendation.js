function showResources() {
    const resourcesContainer = document.getElementById("resources-container");
    if (resourcesContainer) {
        resourcesContainer.style.display = "block";
    } else {
        console.error("Element with id 'resources-container' not found.");
    }
}

// Generate Roadmaps
function generateRoadmap() {
    const skillInput = document.getElementById("skillInput").value.trim().toLowerCase();
    const roadmapResults = document.getElementById("roadmap-results");

    const roadmaps = {
        "web development": [
            { topic: "HTML/CSS Fundamentals", duration: "2 weeks", source: "FreeCodeCamp, W3Schools", description: "Basics of webpage structure and styling." },
            { topic: "JavaScript Basics", duration: "3 weeks", source: "MDN, JavaScript.info", description: "Learn to make interactive webpages." },
            { topic: "Frontend Frameworks", duration: "4 weeks", source: "ReactJS Official Docs, Angular.io", description: "Dive into React, Angular, or Vue.js." }
        ],
        "python": [
            { topic: "Python Basics", duration: "2 weeks", source: "Python.org, Real Python", description: "Learn Python syntax and data types." },
            { topic: "Data Structures", duration: "3 weeks", source: "GeeksforGeeks, Coursera", description: "Handle advanced data in Python." },
            { topic: "Web Development", duration: "4 weeks", source: "Django Docs, Flask Docs", description: "Create web apps using Django or Flask." }
        ],
        "java": [
            { topic: "Java Basics", duration: "3 weeks", source: "JavaTPoint, Codecademy", description: "Learn Java fundamentals including syntax, OOP, and control structures." },
            { topic: "Advanced Java", duration: "4 weeks", source: "Oracle Docs, Udemy", description: "Master advanced Java topics like multithreading, collections, and Java Streams." },
            { topic: "Spring Boot Framework", duration: "5 weeks", source: "Spring.io, Coursera", description: "Learn to build RESTful APIs and web applications with Spring Boot." }
        ],
        "machine learning": [
            { topic: "Python for ML", duration: "2 weeks", source: "Python.org, DataCamp", description: "Understand Python basics for ML development." },
            { topic: "Linear Algebra & Statistics", duration: "3 weeks", source: "Khan Academy, 3Blue1Brown", description: "Learn foundational mathematics for ML." },
            { topic: "Supervised Learning", duration: "4 weeks", source: "Coursera, Udacity", description: "Explore regression and classification techniques." },
            { topic: "Unsupervised Learning", duration: "3 weeks", source: "EdX, Kaggle Learn", description: "Understand clustering and dimensionality reduction." }
        ],
        "artificial intelligence": [
            { topic: "AI Fundamentals", duration: "2 weeks", source: "Coursera, EdX", description: "Learn the basic principles and history of AI." },
            { topic: "Neural Networks", duration: "4 weeks", source: "DeepLearning.ai, Fast.ai", description: "Understand the working of neural networks and deep learning." },
            { topic: "Reinforcement Learning", duration: "3 weeks", source: "OpenAI Gym, YouTube Tutorials", description: "Learn to train agents in dynamic environments." }
        ],
        "ui/ux designing": [
            { topic: "Design Principles", duration: "2 weeks", source: "Interaction Design Foundation, Canva Design School", description: "Learn the fundamentals of design and user psychology." },
            { topic: "Wireframing and Prototyping", duration: "3 weeks", source: "Figma, Adobe XD", description: "Create wireframes and interactive prototypes for testing." },
            { topic: "Usability Testing", duration: "2 weeks", source: "Nielsen Norman Group, Udemy", description: "Learn to test designs for user experience improvements." }
        ],
        "testing": [
            { topic: "Manual Testing Basics", duration: "2 weeks", source: "Guru99, Udemy", description: "Learn the core concepts of software testing." },
            { topic: "Automation Testing", duration: "3 weeks", source: "Selenium Docs, Test Automation University", description: "Automate test cases with Selenium or Cypress." },
            { topic: "Performance Testing", duration: "2 weeks", source: "JMeter, LoadRunner", description: "Evaluate the performance of applications under load." }
        ],
        "backend engineer": [
            { topic: "Backend Basics", duration: "2 weeks", source: "Udemy, Educative.io", description: "Learn server-side development fundamentals." },
            { topic: "REST APIs", duration: "3 weeks", source: "Postman, Swagger", description: "Understand and develop RESTful APIs." },
            { topic: "Authentication and Security", duration: "2 weeks", source: "OWASP, Auth0", description: "Secure backend systems with authentication and authorization techniques." }
        ],
        "database engineer": [
            { topic: "Database Fundamentals", duration: "2 weeks", source: "SQLZoo, MongoDB University", description: "Learn relational and NoSQL database basics." },
            { topic: "Database Design", duration: "3 weeks", source: "Khan Academy, Pluralsight", description: "Master schema design and normalization." },
            { topic: "Query Optimization", duration: "2 weeks", source: "MySQL Docs, PostgreSQL Docs", description: "Improve query performance using indexing and optimization techniques." }
        ],
        "cloud engineer": [
            { topic: "Cloud Basics", duration: "2 weeks", source: "AWS Fundamentals, Google Cloud Skills Boost", description: "Learn the fundamentals of cloud computing." },
            { topic: "AWS/GCP/Azure", duration: "4 weeks", source: "AWS Training, Coursera", description: "Dive deep into one of the major cloud platforms." },
            { topic: "DevOps Integration", duration: "3 weeks", source: "Terraform, Kubernetes Docs", description: "Learn to integrate DevOps practices into cloud projects." }
        ],
        "sap": [
            { topic: "SAP Overview", duration: "1 week", source: "SAP Official, OpenSAP", description: "Get an introduction to SAP systems and architecture." },
            { topic: "SAP ABAP Programming", duration: "3 weeks", source: "SAP Help Portal, TutorialsPoint", description: "Learn to program in the SAP ABAP language." },
            { topic: "SAP HANA Basics", duration: "4 weeks", source: "SAP HANA Academy, Coursera", description: "Understand the fundamentals of SAP HANA." }
        ],
        "project management": [
            { topic: "Project Management Basics", duration: "2 weeks", source: "PMI.org, Coursera", description: "Learn about project lifecycle and management methodologies." },
            { topic: "Agile & Scrum", duration: "3 weeks", source: "Scrum.org, Atlassian Agile Coach", description: "Master Agile and Scrum principles for project management." },
            { topic: "Project Tools", duration: "2 weeks", source: "Jira, Trello", description: "Learn to use project management tools effectively." }
        ],
    
    };

    if (roadmaps[skillInput]) {
        const roadmap = roadmaps[skillInput];

        // Build a table
        let tableHTML = `
            <h3>Roadmap for ${skillInput.toUpperCase()}</h3>
            <table border="1" style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #f2f2f2;">
                        <th style="padding: 8px; text-align: left;">Topic</th>
                        <th style="padding: 8px; text-align: left;">Duration</th>
                        <th style="padding: 8px; text-align: left;">Source</th>
                        <th style="padding: 8px; text-align: left;">Description</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Populate rows dynamically
        roadmap.forEach(item => {
            tableHTML += `
                <tr>
                    <td style="padding: 8px;">${item.topic}</td>
                    <td style="padding: 8px;">${item.duration}</td>
                    <td style="padding: 8px;">${item.source}</td>
                    <td style="padding: 8px;">${item.description}</td>
                </tr>
            `;
        });

        // Close the table
        tableHTML += `
                </tbody>
            </table>
        `;

        roadmapResults.innerHTML = tableHTML;
    } else {
        roadmapResults.innerHTML = `<p>No roadmap found for "${skillInput}". Try another skill!</p>`;
    }
}

// Attach event listeners when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Event listener for the "Generate" button
    const generateButton = document.getElementById("generateButton");
    if (generateButton) {
        generateButton.addEventListener("click", generateRoadmap);
    } else {
        console.error("Element with id 'generateButton' not found.");
    }

    // Event listener for the "Contact" button
    const contactButton = document.getElementById("contact");
    if (contactButton) {
        contactButton.addEventListener("click", () => {
            setTimeout(() => {
                window.location.href = "https://your-second-page.com"; // Replace with your actual URL
            }, 2000); // Adjust timeout if needed
        });
    } else {
        console.error("Element with id 'contact' not found.");
    }
});