let appliedJobs = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('applyForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = e.target.username.value;
        const email = e.target.email.value;
        const job = e.target.job.value;
        const experience = e.target.experience.value;

        if (!name || !email || !job || !experience) {
            alert('Please fill out all fields correctly!');
            return;
        }

        const application = { name, email, job, experience };
        appliedJobs.push(application);
        alert(`Application submitted successfully for ${job}, ${name}!`);
        updateDashboard();
        e.target.reset();
    });
});

function showDetails(jobId) {
    const jobDetails = {
        job1: {
            title: 'Software Engineer',
            description: 'Develop and maintain web applications.',
            salary: '$70,000/year'
        },
        job2: {
            title: 'Data Analyst',
            description: 'Analyze large datasets to uncover insights.',
            salary: '$65,000/year'
        },
        job3: {
            title: 'UI/UX Designer',
            description: 'Design user interfaces and improve user experience.',
            salary: '$80,000/year'
        }
    };

    const job = jobDetails[jobId];
    if (job) {
        alert(`${job.title}\n${job.description}\nSalary: ${job.salary}`);
    } else {
        alert('Job details not found.');
    }
}

function updateDashboard() {
    const dashboard = document.getElementById('appliedJobs');
    dashboard.innerHTML = '';
    appliedJobs.forEach((app, index) => {
        dashboard.innerHTML += `
            <div class="job-card">
                <h3>${app.job}</h3>
                <p>Name: ${app.name}</p>
                <p>Email: ${app.email}</p>
                <p>Experience: ${app.experience}</p>
                <button onclick="deleteApplication(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteApplication(index) {
    appliedJobs.splice(index, 1);
    updateDashboard();
    alert('Application deleted successfully.');
}
function applyForJob(jobTitle) {
    window.location.href = `apply.html?job=${encodeURIComponent(jobTitle)}`;
}

    function checkUserLogin() {
        let user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
            document.getElementById('loginSignup').innerHTML = `
                <p>Welcome, ${user.name} | <a href="#" onclick="logout()">Logout</a></p>
            `;
        }
    }

    function logout() {
        localStorage.removeItem('loggedInUser');
        window.location.href = "index.html";
    }

    checkUserLogin();
    
    document.addEventListener('DOMContentLoaded', function() {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        
        if (loggedInUser) {
            document.getElementById('logoutLink').style.display = 'inline'; // Show logout
        } else {
            document.getElementById('loginLink').style.display = 'inline'; // Show login
        }
    });

    function logout() {
        localStorage.removeItem('loggedInUser');
        alert('Logged out successfully!');
        window.location.href = 'login.html'; // Redirect to login page after logout
    }

