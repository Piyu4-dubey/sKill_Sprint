function searchResources() {
    const searchInput = document.getElementById('searchInput');
    const resultContainer = document.getElementById('resultContainer');
    const technology = searchInput.value.trim();

    if (technology) {
        const resources = getResourcesForTechnology(technology);
        resultContainer.innerHTML = '';

        if (resources.length === 0) {
            resultContainer.innerHTML = `
                <div class="result-card">
                    <h3>No resources found</h3>
                    <p>We couldn't find any resources for "${technology}". Try searching for "JavaScript" or "Python".</p>
                </div>`;
            return;
        }

        resources.forEach(resource => {
            const resultCard = document.createElement('div');
            resultCard.classList.add('result-card');

            const cardHTML = `
                <h3>${resource.title}</h3>
                <ul>
                    <li><strong>YouTube Channels:</strong></li>
                    ${resource.youtubChannels.map(channel => `<li><a href="${channel.url}" target="_blank">${channel.name}</a></li>`).join('')}
                    <li><strong>Documentation:</strong></li>
                    ${resource.documentation.map(doc => `<li><a href="${doc.url}" target="_blank">${doc.name}</a></li>`).join('')}
                    <li><strong>Books:</strong></li>
                    ${resource.books.map(book => `<li><a href="${book.url}" target="_blank">${book.name}</a></li>`).join('')}
                    <li><strong>Test Series:</strong></li>
                    ${resource.testSeries.map(test => `<li><a href="${test.url}" target="_blank">${test.name}</a></li>`).join('')}
                    <li><strong>Certification:</strong></li>
                    ${resource.certificationSites.map(site => `<li><a href="${site.url}" target="_blank">${site.name}</a></li>`).join('')}
                </ul>
            `;

            resultCard.innerHTML = cardHTML;
            resultContainer.appendChild(resultCard);
        });
    } else {
        resultContainer.innerHTML = `
            <div class="result-card">
                <h3>Empty Search</h3>
                <p>Please enter a technology to search for resources.</p>
            </div>`;
    }
}

function getResourcesForTechnology(technology) {
    const resources = [
        {
            title: 'JavaScript',
            youtubChannels: [
                { name: 'Traversy Media', url: 'https://www.youtube.com/user/TechGuyWeb' },
                { name: 'The Net Ninja', url: 'https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg' },
                { name: 'Academind', url: 'https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w' }
            ],
            documentation: [
                { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { name: 'W3Schools', url: 'https://www.w3schools.com/js/' }
            ],
            books: [
                { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/' },
                { name: 'You Don\'t Know JS', url: 'https://github.com/getify/You-Dont-Know-JS' }
            ],
            testSeries: [
                { name: 'Udemy JavaScript Coding Challenges', url: 'https://www.udemy.com/course/javascript-coding-challenges/' },
                { name: 'Exercism JavaScript Exercises', url: 'https://exercism.io/tracks/javascript' }
            ],
            certificationSites: [
                { name: 'Cisco JavaScript Certification', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/javascript.html' },
                { name: 'Oracle JavaScript Certification', url: 'https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_233' }
            ]
        },
        {
            title: 'Python',
            youtubChannels: [
                { name: 'Corey Schafer', url: 'https://www.youtube.com/user/schafer5' },
                { name: 'Sentdex', url: 'https://www.youtube.com/user/sentdex' },
                { name: 'Python Programmer', url: 'https://www.youtube.com/user/pythonprogrammer' }
            ],
            documentation: [
                { name: 'Python Official Documentation', url: 'https://docs.python.org/3/' },
                { name: 'Real Python', url: 'https://realpython.com/' }
            ],
            books: [
                { name: 'Automate the Boring Stuff with Python', url: 'https://automatetheboringstuff.com/' },
                { name: 'Python Crash Course', url: 'https://www.amazon.com/Python-Crash-Course-Hands-Project-Based/dp/1593276036' }
            ],
            testSeries: [
                { name: 'Udemy Python Practice Problems', url: 'https://www.udemy.com/course/python-practice-problems/' },
                { name: 'HackerRank Python Challenges', url: 'https://www.hackerrank.com/domains/python' }
            ],
            certificationSites: [
                { name: 'Oracle Python Certification', url: 'https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_233' },
                { name: 'Cisco Python Certification', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/python.html' }
            ],
                    title: 'Python',
                    youtubChannels: [
                        { name: 'Corey Schafer', url: 'https://www.youtube.com/user/schafer5' },
                        { name: 'Sentdex', url: 'https://www.youtube.com/user/sentdex' },
                        { name: 'Python Programmer', url: 'https://www.youtube.com/user/pythonprogrammer' }
                    ],
                    documentation: [
                        { name: 'Python Official Documentation', url: 'https://docs.python.org/3/' },
                        { name: 'Real Python', url: 'https://realpython.com/' }
                    ],
                    books: [
                        { name: 'Automate the Boring Stuff with Python', url: 'https://automatetheboringstuff.com/' },
                        { name: 'Python Crash Course', url: 'https://www.amazon.com/Python-Crash-Course-Hands-Project-Based/dp/1593276036' }
                    ],
                    testSeries: [
                        { name: 'Udemy Python Practice Problems', url: 'https://www.udemy.com/course/python-practice-problems/' },
                        { name: 'HackerRank Python Challenges', url: 'https://www.hackerrank.com/domains/python' }
                    ],
                    certificationSites: [
                        { name: 'Oracle Python Certification', url: 'https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_233' },
                        { name: 'Cisco Python Certification', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/python.html' }
                    ]
                },
            
                // JavaScript
                {
                    title: 'JavaScript',
                    youtubChannels: [
                        { name: 'Traversy Media', url: 'https://www.youtube.com/user/TechGuyWeb' },
                        { name: 'The Net Ninja', url: 'https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg' },
                        { name: 'Academind', url: 'https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w' }
                    ],
                    documentation: [
                        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                        { name: 'W3Schools', url: 'https://www.w3schools.com/js/' }
                    ],
                    books: [
                        { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/' },
                        { name: 'You Don\'t Know JS', url: 'https://github.com/getify/You-Dont-Know-JS' }
                    ],
                    testSeries: [
                        { name: 'Udemy JavaScript Coding Challenges', url: 'https://www.udemy.com/course/javascript-coding-challenges/' },
                        { name: 'Exercism JavaScript Exercises', url: 'https://exercism.io/tracks/javascript' }
                    ],
                    certificationSites: [
                        { name: 'Cisco JavaScript Certification', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/javascript.html' },
                        { name: 'Oracle JavaScript Certification', url: 'https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_233' }
                    ]
                },
            
                // Databases
                {
                    title: 'MySQL',
                    youtubChannels: [
                        { name: 'The Net Ninja (SQL Tutorials)', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX' },
                        { name: 'Programming with Mosh', url: 'https://www.youtube.com/user/programmingwithmosh' }
                    ],
                    documentation: [
                        { name: 'MySQL Official Docs', url: 'https://dev.mysql.com/doc/' },
                        { name: 'W3Schools SQL Tutorials', url: 'https://www.w3schools.com/sql/' }
                    ],
                    books: [
                        { name: 'Learning MySQL', url: 'https://www.oreilly.com/library/view/learning-mysql/9780596515867/' },
                        { name: 'SQL in 10 Minutes', url: 'https://www.amazon.com/SQL-Minutes-Sams-Teach-Yourself/dp/0672336073' }
                    ],
                    testSeries: [
                        { name: 'HackerRank SQL Challenges', url: 'https://www.hackerrank.com/domains/sql' },
                        { name: 'LeetCode SQL Questions', url: 'https://leetcode.com/problemset/database/' }
                    ],
                    certificationSites: [
                        { name: 'Oracle MySQL Certification', url: 'https://education.oracle.com/mysql-certification' }
                    ]
                },
            
                // Frameworks
                {
                    title: 'React.js',
                    youtubChannels: [
                        { name: 'Codevolution', url: 'https://www.youtube.com/c/Codevolution' },
                        { name: 'Traversy Media', url: 'https://www.youtube.com/user/TechGuyWeb' },
                        { name: 'Academind', url: 'https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w' }
                    ],
                    documentation: [
                        { name: 'React Official Docs', url: 'https://reactjs.org/docs/getting-started.html' },
                        { name: 'FreeCodeCamp React Guide', url: 'https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/' }
                    ],
                    books: [
                        { name: 'React Up & Running', url: 'https://www.oreilly.com/library/view/react-up/9781492051718/' },
                        { name: 'Fullstack React', url: 'https://www.fullstackreact.com/' }
                    ],
                    testSeries: [
                        { name: 'Codecademy React Quiz', url: 'https://www.codecademy.com/learn/react-101' },
                        { name: 'LeetCode React Exercises', url: 'https://leetcode.com/explore/learn/card/front-end/' }
                    ],
                    certificationSites: [
                        { name: 'Coursera React Specialization', url: 'https://www.coursera.org/specializations/full-stack-react' }
                    ]
                },
            
                // Machine Learning
                {
                    title: 'Machine Learning',
                    youtubChannels: [
                        { name: 'StatQuest with Josh Starmer', url: 'https://www.youtube.com/user/joshstarmer' },
                        { name: 'Siraj Raval', url: 'https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A' },
                        { name: 'Krish Naik', url: 'https://www.youtube.com/c/KrishNaik' }
                    ],
                    documentation: [
                        { name: 'Scikit-learn Documentation', url: 'https://scikit-learn.org/stable/documentation.html' },
                        { name: 'TensorFlow Documentation', url: 'https://www.tensorflow.org/learn' }
                    ],
                    books: [
                        { name: 'Hands-On Machine Learning', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/' },
                        { name: 'Deep Learning with Python', url: 'https://www.manning.com/books/deep-learning-with-python' }
                    ],
                    testSeries: [
                        { name: 'Kaggle Competitions', url: 'https://www.kaggle.com/competitions' },
                        { name: 'HackerRank AI Challenges', url: 'https://www.hackerrank.com/domains/ai' }
                    ],
                    certificationSites: [
                        { name: 'Google ML Certification', url: 'https://ai.google/education/' }
                    ]
                },
            
                // UI/UX Design
                {
                    title: 'UI/UX Design',
                    youtubChannels: [
                        { name: 'The Futur', url: 'https://www.youtube.com/user/TheSkoolRocks' },
                        { name: 'Flux Academy', url: 'https://www.youtube.com/c/FluxWithRanSegall' },
                        { name: 'Envato Tuts+', url: 'https://www.youtube.com/user/TutsPremium' }
                    ],
                    documentation: [
                        { name: 'UX Design Principles', url: 'https://www.interaction-design.org/literature/topics/ux-design' },
                        { name: 'Material Design Guidelines', url: 'https://material.io/design/' }
                    ],
                    books: [
                        { name: 'Don’t Make Me Think', url: 'https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515' },
                        { name: 'The Design of Everyday Things', url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654' }
                    ],
                    testSeries: [
                        { name: 'UXPin Challenge', url: 'https://www.uxpin.com/ux-design-test' }
                    ],
                    certificationSites: [
                        { name: 'Google UX Design Certificate', url: 'https://grow.google/certificates/ux-design/' }
                    ]
                }
            ];
            
   

    return resources.filter(resource => resource.title.toLowerCase().includes(technology.toLowerCase()));
}
