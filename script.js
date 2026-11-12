        // GLOBAL STATE
        let currentUserRole = null; // 'user' | 'admin' | null

        // ENTER KEY NAVIGATION HANDLER
        function handleEnterKey(event, nextId) {
            if (event.key === "Enter") {
                event.preventDefault();
                const target = document.getElementById(nextId);
                if (target) {
                    if (target.tagName === "BUTTON") {
                        target.click();
                    } else {
                        target.focus();
                    }
                }
            }
        }

        // CAREER KNOWLEDGE BASE
        const careerData = {
            "Software Development": {
                options: "Software Engineer, Full Stack Developer, Systems Architect",
                path: "B.Tech/BCA → Programming Mastery → Tech Internships → IT Enterprise Placement",
                skills: "Java, Python, C++, System Design, Problem Solving",
                demand: "High market growth with 22% annual hiring expansion across global tech sectors.",
                salary: "₹6.5 LPA (Entry Level) to ₹32+ LPA (Senior Tech Lead)",
                versatility: "Applicable across Fintech, E-Commerce, Healthcare, and Cloud Infrastructure.",
                globalReach: "Extremely high remote work flexibility and international sponsorship potential."
            },
            "Web Development": {
                options: "Frontend Developer, Backend Engineer, Web Architect",
                path: "HTML/CSS/JS Mastery → React/Node Frameworks → Portfolio Projects → Web Studio Placement",
                skills: "HTML5, CSS3, JavaScript, React, Node.js, REST APIs",
                demand: "Sustained demand driven by business digital transformations worldwide.",
                salary: "₹5.0 LPA (Junior) to ₹24 LPA (Senior Fullstack Architect)",
                versatility: "Essential skill for startups, agencies, and Fortune 500 tech teams.",
                globalReach: "Ideal for freelancing, agency contracting, and global remote opportunities."
            },
            "App Development": {
                options: "Android Developer, iOS Engineer, Cross-Platform Architect",
                path: "Kotlin/Swift/Flutter → Mobile UX Principles → App Store Publishing → Mobile Firm",
                skills: "Flutter, Kotlin, Swift, Mobile UI/UX, Firebase",
                demand: "Driven by booming smart-device ecosystems and mobile-first consumer apps.",
                salary: "₹5.5 LPA to ₹28 LPA for specialized mobile platform engineers.",
                versatility: "Direct transition into Product Design, Mobile Security, and IoT Interfaces.",
                globalReach: "High global demand for published app developers."
            },
            "Artificial Intelligence": {
                options: "AI Engineer, Machine Learning Specialist, Computer Vision Engineer",
                path: "Math & Python → Deep Learning Frameworks → AI Model Training → AI Research Labs",
                skills: "Python, TensorFlow, PyTorch, Machine Learning, Data Analytics",
                demand: "Exponential growth with AI integration across modern business tools.",
                salary: "₹9.0 LPA (Freshers) to ₹45+ LPA (AI/ML Specialists)",
                versatility: "Transformative across Healthcare diagnostics, Automotive, and Finance.",
                globalReach: "Top-tier global demand in international tech hubs."
            },
            "Cyber Security": {
                options: "Security Analyst, Penetration Tester, Ethical Hacker",
                path: "Network Basics → Security Tools & Linux → Ethical Hacking Certs → Defense Ops Center",
                skills: "Linux Administration, Networking, Penetration Testing, Cryptography",
                demand: "Critical corporate priority with global shortage of certified cyber defenders.",
                salary: "₹7.0 LPA to ₹35 LPA depending on certifications and clearance.",
                versatility: "High mobility between defense contractors, banks, and enterprise security.",
                globalReach: "Global demand in security operations centers worldwide."
            },
            "Data Science": {
                options: "Data Analyst, Data Scientist, Business Intelligence Developer",
                path: "Statistics & SQL → Python Data Pipeline → Predictive Modeling → Corporate Analytics",
                skills: "Python, SQL, Power BI, Statistics, Predictive Modeling",
                demand: "Massive industry demand for data-driven decision making.",
                salary: "₹6.0 LPA to ₹30+ LPA for senior data science professionals.",
                versatility: "Relevant across retail, banking, marketing, and logistics.",
                globalReach: "Remote analytical consultation and global team integration."
            },
            "Cloud Computing": {
                options: "Cloud Engineer, DevOps Specialist, Solutions Architect",
                path: "Linux & Networking → AWS/Azure Foundations → CI/CD Automation → Cloud Operations",
                skills: "AWS, Azure, Docker, Kubernetes, Terraform, Linux",
                demand: "Cloud migration across enterprise IT drives massive hiring.",
                salary: "₹7.5 LPA to ₹36 LPA for multi-cloud architects.",
                versatility: "Integrates seamlessly with software development and cyber security.",
                globalReach: "Universal cloud standards enable seamless international employment."
            },
            "Networking": {
                options: "Network Engineer, Infrastructure Specialist, System Administrator",
                path: "Networking Fundamentals → CCNA Certification → Network Architecture → IT Operations",
                skills: "Cisco Routing & Switching, Firewalls, Network Protocols, DNS/DHCP",
                demand: "Essential infrastructure support across telecom and enterprise datacenters.",
                salary: "₹4.5 LPA to ₹18 LPA for senior network architects.",
                versatility: "Solid foundation for Cyber Security and Cloud DevOps specialization.",
                globalReach: "Standardized global protocols allow international infrastructure roles."
            },
            "Digital Marketing": {
                options: "SEO Specialist, Growth Marketer, Digital Strategy Manager",
                path: "Marketing Fundamentals → SEO/SEM Campaigns → Analytics Strategy → Digital Agency",
                skills: "SEO, Google Analytics, Social Media Ads, Content Strategy",
                demand: "Rapidly replacing traditional marketing across commercial sectors.",
                salary: "₹4.0 LPA to ₹20 LPA for senior growth marketing leads.",
                versatility: "Easily pivots to E-Commerce management and Content Strategy.",
                globalReach: "Excellent remote freelancing and agency client management."
            },
            "Graphic Designing": {
                options: "Graphic Artist, Visual Designer, Brand Identity Specialist",
                path: "Design Principles → Creative Suite Tools → Portfolio Building → Creative Studio",
                skills: "Adobe Photoshop, Illustrator, Visual Communication, Typography",
                demand: "Constant demand for media production, branding, and digital marketing.",
                salary: "₹3.5 LPA to ₹16 LPA for creative art directors.",
                versatility: "Natural pathway into UI Design and Brand Strategy.",
                globalReach: "Worldwide freelance work via creative digital platforms."
            },
            "UI/UX Designing": {
                options: "UX Researcher, Product Designer, Interaction Designer",
                path: "UX Research → Wireframing & Prototyping → Design Systems → Tech Product Team",
                skills: "Figma, User Research, Wireframing, Interaction Design",
                demand: "Top priority for digital software companies building user-centric products.",
                salary: "₹6.0 LPA to ₹28 LPA for lead product designers.",
                versatility: "High synergy with Product Management and Frontend Engineering.",
                globalReach: "High global remote job placement rate."
            },
            "Content Writing": {
                options: "Technical Writer, Content Strategist, Copywriter",
                path: "Writing Mastery → Domain Specialization → Portfolio Creation → Media/Tech Firm",
                skills: "Copywriting, Technical Documentation, SEO Writing, Editing",
                demand: "Essential for SaaS technical documentation, marketing, and media.",
                salary: "₹3.5 LPA to ₹15 LPA for specialized technical writers.",
                versatility: "Flexibility to move into Corporate Communications and Marketing.",
                globalReach: "High remote availability and global publication work."
            },
            "Testing & QA": {
                options: "QA Automation Engineer, SDET, Software Test Lead",
                path: "Manual Testing Principles → Automation Frameworks (Selenium) → QA Placement",
                skills: "Selenium, Java/Python Automation, Test Planning, API Testing",
                demand: "Critical role ensuring software reliability prior to enterprise deployment.",
                salary: "₹4.5 LPA to ₹22 LPA for SDET automation leads.",
                versatility: "Smooth transition into Software Engineering and DevOps.",
                globalReach: "Standardized QA methodologies accepted globally."
            },
            "Finance & Accounting": {
                options: "Financial Analyst, Corporate Accountant, Tax Consultant",
                path: "Commerce Degree → Accounting ERP Tools → CPA/CFA Certs → Corporate Finance",
                skills: "Financial Modeling, Advanced Excel, Tally ERP, Financial Analysis",
                demand: "Constant demand across banking, corporate audit, and advisory firms.",
                salary: "₹5.0 LPA to ₹25 LPA for certified financial analysts.",
                versatility: "Applicable to all commercial enterprises regardless of industry.",
                globalReach: "International accounting standards (IFRS) allow global mobility."
            },
            "Human Resources": {
                options: "HR Partner, Talent Acquisition Specialist, People Operations Lead",
                path: "MBA HR → Talent Acquisition → People Operations → Corporate HR",
                skills: "Talent Acquisition, Strategic HR, Employee Relations, Communication",
                demand: "Essential for organizational scaling, retention, and corporate culture.",
                salary: "₹4.5 LPA to ₹22 LPA for HR directors.",
                versatility: "High transferability across corporate sectors.",
                globalReach: "Global talent acquisition and remote workforce management."
            },
            "Entrepreneurship": {
                options: "Startup Founder, Business Consultant, Product Owner",
                path: "Market Research → Product MVP Development → Pitching & Funding → Scale",
                skills: "Business Strategy, Leadership, Financial Planning, Product Execution",
                demand: "High societal impact through innovation and economic employment creation.",
                salary: "Variable revenue potential driven by market venture success.",
                versatility: "Mastery of all business domains from operations to marketing.",
                globalReach: "Unrestricted global business expansion capabilities."
            },
            "Banking Jobs": {
                options: "Bank Probationary Officer (PO), Commercial Clerk, RBI Officer",
                path: "Degree → Banking Exam Prep (IBPS/SBI) → Interview → Nationalized Bank",
                skills: "Quantitative Aptitude, Logical Reasoning, General Awareness",
                demand: "Stable public job security with regular national recruitment drives.",
                salary: "₹6.5 LPA to ₹16 LPA plus government allowances.",
                versatility: "Transferable to commercial financial institutions.",
                globalReach: "National financial sector employment."
            },
            "UPSC Civil Services": {
                options: "IAS (Administrative), IPS (Police), IFS (Foreign Service)",
                path: "Graduation → UPSC Prelims & Mains Mastery → Interview → Civil Services",
                skills: "Governance, General Studies, Policy Formulation, Leadership",
                demand: "Highest prestige and administrative impact in public governance.",
                salary: "₹8.0 LPA to ₹25 LPA with government residence and amenities.",
                versatility: "Extensive administrative authority across state and central departments.",
                globalReach: "Diplomatic posting opportunities in IFS."
            },
            "SSC Jobs": {
                options: "SSC CGL Inspector, Assistant Section Officer, Tax Assistant",
                path: "Graduation → SSC Exam Prep → Tier Selection → Government Ministry",
                skills: "Quantitative Aptitude, Reasoning, General Awareness",
                demand: "High public sector job stability with structured promotional growth.",
                salary: "₹5.5 LPA to ₹14 LPA plus government benefits.",
                versatility: "Departmental mobility within central ministries.",
                globalReach: "Central government career posting."
            },
            "Railway Jobs": {
                options: "RRB Station Master, Junior Engineer (JE), Traffic Inspector",
                path: "Degree/Diploma → RRB Examination → Medical Fitness → Indian Railways",
                skills: "Technical Knowledge, General Aptitude, Operations Management",
                demand: "Massive public employer with regular technical recruitment.",
                salary: "₹5.0 LPA to ₹14 LPA plus railway travel privileges.",
                versatility: "Transport infrastructure and logistics operations.",
                globalReach: "National public rail network."
            },
            "Police Department": {
                options: "Sub-Inspector (SI), Cyber Cell Officer, Deputy Superintendent",
                path: "Physical Fitness → State Police Exam → Academy Training → Police Force",
                skills: "Law Enforcement, Physical Endurance, Cyber Crime Investigation",
                demand: "Essential public security and law enforcement personnel.",
                salary: "₹5.0 LPA to ₹15 LPA plus administrative perks.",
                versatility: "Specialization in Cyber Crime, Intelligence, and Security.",
                globalReach: "State and national law enforcement agency."
            },
            "Defence Services": {
                options: "Army Officer, Navy Sub-Lieutenant, Air Force Flying Officer",
                path: "NDA / CDS Examination → SSB Interview → Military Officers Academy",
                skills: "Strategic Leadership, Physical Fitness, Tactical Operations",
                demand: "Noble national defense commission with elite military training.",
                salary: "₹8.5 LPA to ₹24 LPA plus defense privileges.",
                versatility: "High prestige with executive defense leadership skills.",
                globalReach: "International military exercises and diplomatic attaches."
            },
            "Teaching Jobs": {
                options: "School Teacher (TGT/PGT), University Assistant Professor",
                path: "Degree → B.Ed / NET Qualification → Eligibility Exam → Educational Institute",
                skills: "Pedagogy, Subject Mastery, Communication, Educational Tech",
                demand: "Constant demand across public schools, colleges, and universities.",
                salary: "₹4.5 LPA to ₹16 LPA depending on NET/PhD credentials.",
                versatility: "Opportunity to branch into Curriculum Design and Educational Tech.",
                globalReach: "International schools and overseas academic institutions."
            },
            "Government Engineering": {
                options: "Assistant Engineer (AE), Public Works Engineer, PSU Officer",
                path: "Engineering Degree → GATE / State PSC Exam → Selection → Govt Works Dept",
                skills: "Core Engineering, Technical Execution, Project Governance",
                demand: "Key technical leadership in public infrastructure and utilities.",
                salary: "₹7.0 LPA to ₹18 LPA plus civil amenities.",
                versatility: "Infrastructure project management.",
                globalReach: "National public works and infrastructure."
            }
        };

        // AUTH TAB SWITCHING & FORM REFRESH
        function switchAuthTab(tab) {
            const errorBox = document.getElementById("authError");
            errorBox.style.display = "none";
            
            // Clear inputs on switch
            document.getElementById("username").value = "";
            document.getElementById("regno").value = "";
            document.getElementById("adminUser").value = "";
            document.getElementById("adminPass").value = "";

            if (tab === 'user') {
                document.getElementById("tabUserLogin").classList.add("active");
                document.getElementById("tabAdminLogin").classList.remove("active", "admin-tab");
                document.getElementById("userLoginForm").style.display = "block";
                document.getElementById("adminLoginForm").style.display = "none";
                document.getElementById("username").focus();
            } else {
                document.getElementById("tabAdminLogin").classList.add("active", "admin-tab");
                document.getElementById("tabUserLogin").classList.remove("active");
                document.getElementById("adminLoginForm").style.display = "block";
                document.getElementById("userLoginForm").style.display = "none";
                document.getElementById("adminUser").focus();
            }
        }

        // USER LOGIN HANDLER
        function handleUserLogin() {
            const nameInput = document.getElementById("username");
            const regnoInput = document.getElementById("regno");
            const errorBox = document.getElementById("authError");
            const errorText = document.getElementById("authErrorText");

            const username = nameInput.value.trim();
            const regno = regnoInput.value.trim();

            errorBox.style.display = "none";

            const namePattern = /^[A-Za-z ]{3,30}$/;
            if (!namePattern.test(username)) {
                errorText.innerText = "Candidate Name must contain only alphabets and be between 3 to 30 characters in length.";
                errorBox.style.display = "flex";
                nameInput.focus();
                return;
            }

            const regPattern = /^[a-zA-Z0-9]{10}$/;
            if (!regPattern.test(regno)) {
                errorText.innerText = "invalid student id";
                errorBox.style.display = "flex";
                regnoInput.focus();
                return;
            }

            currentUserRole = "user";
            localStorage.setItem("username", username);
            localStorage.setItem("regno", regno);
            localStorage.setItem("userRole", "user");

            updateNavbarSession();

            hideAllPages();
            document.getElementById("formPage").style.display = "block";
            document.getElementById("stepProgress").style.display = "flex";

            document.getElementById("stepIndicator1").classList.remove("active");
            document.getElementById("stepIndicator1").classList.add("completed");
            document.getElementById("stepIndicator2").classList.add("active");

            showInterestOptions();
        }

        // ADMIN LOGIN HANDLER (DIRECT TO ADMIN CONTROL PANEL)
        function handleAdminLogin() {
            const adminUser = document.getElementById("adminUser").value.trim();
            const adminPass = document.getElementById("adminPass").value.trim();
            const errorBox = document.getElementById("authError");
            const errorText = document.getElementById("authErrorText");

            errorBox.style.display = "none";

            if (adminUser === "admin" && adminPass === "admin123") {
                currentUserRole = "admin";
                localStorage.setItem("userRole", "admin");

                updateNavbarSession();
                showAdminDashboardPage();
            } else {
                errorText.innerText = "Invalid Administrator credentials. Please verify your username and password.";
                errorBox.style.display = "flex";
            }
        }

        function showAdminDashboardPage() {
            hideAllPages();
            document.getElementById("adminDashboardPage").style.display = "block";
            document.getElementById("stepProgress").style.display = "none"; // Hide candidate step bar
        }

        function updateNavbarSession() {
            const badge = document.getElementById("sessionBadge");
            const logoutBtn = document.getElementById("logoutBtn");
            const adminDashNavBtn = document.getElementById("adminDashNavBtn");
            const userUpdatesNavBtn = document.getElementById("userUpdatesNavBtn");

            if (currentUserRole === "user") {
                badge.innerHTML = `<span class="role-badge user"><i class="fa-solid fa-user"></i> ${localStorage.getItem("username")}</span>`;
                logoutBtn.style.display = "inline-flex";
                if (adminDashNavBtn) adminDashNavBtn.style.display = "none";
                if (userUpdatesNavBtn) userUpdatesNavBtn.style.display = "inline-flex";
            } else if (currentUserRole === "admin") {
                badge.innerHTML = `<span class="role-badge admin"><i class="fa-solid fa-shield-halved"></i> Admin Officer</span>`;
                logoutBtn.style.display = "inline-flex";
                if (adminDashNavBtn) adminDashNavBtn.style.display = "inline-flex";
                if (userUpdatesNavBtn) userUpdatesNavBtn.style.display = "none";
            } else {
                badge.innerHTML = "";
                logoutBtn.style.display = "none";
                if (adminDashNavBtn) adminDashNavBtn.style.display = "none";
                if (userUpdatesNavBtn) userUpdatesNavBtn.style.display = "none";
            }
        }

        function logout() {
            currentUserRole = null;
            localStorage.removeItem("userRole");
            document.getElementById("username").value = "";
            document.getElementById("regno").value = "";
            document.getElementById("adminUser").value = "";
            document.getElementById("adminPass").value = "";
            updateNavbarSession();
            navigateToHome();
        }

        function navigateToHome() {
            hideAllPages();
            if (currentUserRole === "admin") {
                showAdminDashboardPage();
            } else if (currentUserRole === "user") {
                document.getElementById("formPage").style.display = "block";
                document.getElementById("stepProgress").style.display = "flex";
            } else {
                document.getElementById("authPage").style.display = "block";
                document.getElementById("stepProgress").style.display = "none";
            }
        }

        function hideAllPages() {
            document.getElementById("authPage").style.display = "none";
            document.getElementById("formPage").style.display = "none";
            document.getElementById("resultPage").style.display = "none";
            document.getElementById("aboutPage").style.display = "none";
            document.getElementById("jobFeedPage").style.display = "none";
            document.getElementById("adminDashboardPage").style.display = "none";
            document.getElementById("updatesPage").style.display = "none";
        }

        function showAboutPage() {
            hideAllPages();
            document.getElementById("aboutPage").style.display = "block";
        }

        function showJobFeedPage() {
            hideAllPages();
            renderJobArticles();
            document.getElementById("jobFeedPage").style.display = "block";
        }

        function showInterestOptions() {
            const jobtype = document.querySelector('input[name="jobtype"]:checked').value;
            const dropdown = document.getElementById("careerInterest");
            dropdown.innerHTML = `<option value="">-- Select Career Track Focus --</option>`;

            let jobList = [];
            if (jobtype === "Government Job") {
                jobList = [
                    "UPSC Civil Services",
                    "SSC Jobs",
                    "Banking Jobs",
                    "Railway Jobs",
                    "Police Department",
                    "Defence Services",
                    "Teaching Jobs",
                    "Government Engineering"
                ];
            } else {
                jobList = [
                    "Software Development",
                    "Web Development",
                    "App Development",
                    "Artificial Intelligence",
                    "Cyber Security",
                    "Data Science",
                    "Cloud Computing",
                    "Networking",
                    "UI/UX Designing",
                    "Digital Marketing",
                    "Graphic Designing",
                    "Content Writing",
                    "Testing & QA",
                    "Finance & Accounting",
                    "Human Resources",
                    "Entrepreneurship"
                ];
            }

            jobList.forEach(job => {
                const option = document.createElement("option");
                option.value = job;
                option.text = job;
                dropdown.appendChild(option);
            });
        }

        // ASSESSMENT FORM SUBMISSION & ROADMAP RENDER
        function findCareer() {
            const jobtype = document.querySelector('input[name="jobtype"]:checked').value;
            const selectedInterest = document.getElementById("careerInterest").value;
            const subject = document.getElementById("subject").value;
            const worktype = document.querySelector('input[name="worktype"]:checked').value;
            const income = document.getElementById("income").value.trim();

            const errorBox = document.getElementById("formError");
            const errorText = document.getElementById("formErrorText");
            errorBox.style.display = "none";

            if (selectedInterest === "") {
                errorText.innerText = "Please select a Career Track Focus from the dropdown.";
                errorBox.style.display = "flex";
                document.getElementById("careerInterest").focus();
                return;
            }

            if (subject === "") {
                errorText.innerText = "Please select your Specialization Subject from the dropdown.";
                errorBox.style.display = "flex";
                document.getElementById("subject").focus();
                return;
            }

            if (income === "" || Number(income) <= 0 || income.length > 6) {
                errorText.innerText = "Please enter a valid target monthly income in ₹ (limit of 6 digits).";
                errorBox.style.display = "flex";
                document.getElementById("income").focus();
                return;
            }

            const fullname = localStorage.getItem("username") || "Candidate";
            const regno = localStorage.getItem("regno") || "1234567890";

            const result = careerData[selectedInterest] || {
                options: selectedInterest,
                path: "Foundational Study → Practical Internships → Industry Placement",
                skills: "Domain Knowledge, Critical Thinking, Communication",
                demand: "Steady industry hiring demand across modern work sectors.",
                salary: "Competitive market salary scaling with expertise.",
                versatility: "High career adaptability.",
                globalReach: "Universal skill applicability."
            };

            const formattedIncome = new Intl.NumberFormat('en-IN', {
                style: 'currency', currency: 'INR', maximumFractionDigits: 0
            }).format(income);

            // Store Record
            const userData = {
                fullname, regno, jobtype, selectedInterest, subject, worktype, income: formattedIncome, date: new Date().toLocaleDateString()
            };
            let users = JSON.parse(localStorage.getItem("careerUsers")) || [];
            users.push(userData);
            localStorage.setItem("careerUsers", JSON.stringify(users));

            // ESSENTIAL SKILLS WITH GAPS AND COMMAS
            const skillPillsHtml = result.skills.split(",").map(s => `<span class="skill-pill">${s.trim()}</span>`).join(`<span style="color: #fde047; font-weight: 800; font-size: 16px; margin: 0 6px;">,</span> `);

            // HIGH CONTRAST ROADMAP HEADINGS & CONTENT WITH LIGHT YELLOW COLORS
            document.getElementById("resultBox").innerHTML = `
                <div class="result-header" style="background: linear-gradient(135deg, rgba(250, 204, 21, 0.15) 0%, rgba(99, 102, 241, 0.12) 100%); border-color: rgba(250, 204, 21, 0.3);">
                    <div class="result-badge-icon" style="background: linear-gradient(135deg, #f59e0b, #d97706);"><i class="fa-solid fa-graduation-cap"></i></div>
                    <div class="result-title">
                        <h3 style="font-size: 23px; font-weight: 800; color: #fef08a;">Candidate: ${fullname} &nbsp;|&nbsp; Regd No: ${regno}</h3>
                        <p style="color: var(--accent-cyan); font-size: 15px; font-weight: 600; margin-top: 6px;">
                            <i class="fa-solid fa-book-open"></i> Interested Subject: <span style="color: white; font-weight: 700;">${subject}</span> &nbsp;|&nbsp; Targeted Track: <span style="color: white; font-weight: 700;">${selectedInterest}</span>
                        </p>
                    </div>
                </div>

                <div class="details-grid">
                    <div class="detail-card">
                        <div class="label"><i class="fa-solid fa-user"></i> Candidate Name</div>
                        <div class="value" style="color: #ffffff;">${fullname}</div>
                    </div>
                    <div class="detail-card">
                        <div class="label"><i class="fa-solid fa-id-card"></i> Regd Number</div>
                        <div class="value" style="color: #ffffff;">${regno}</div>
                    </div>
                    <div class="detail-card">
                        <div class="label"><i class="fa-solid fa-building"></i> Job Sector</div>
                        <div class="value" style="color: #c7d2fe;">${jobtype}</div>
                    </div>
                    <div class="detail-card">
                        <div class="label"><i class="fa-solid fa-graduation-cap"></i> Interested Subject</div>
                        <div class="value" style="color: #fef08a; font-size: 19px; font-weight: 800;">${subject}</div>
                    </div>
                    <div class="detail-card">
                        <div class="label"><i class="fa-solid fa-business-time"></i> Engagement Type</div>
                        <div class="value" style="color: #e2e8f0;">${worktype}</div>
                    </div>
                    <div class="detail-card">
                        <div class="label"><i class="fa-solid fa-indian-rupee-sign"></i> Target Monthly Income</div>
                        <div class="value" style="color: var(--accent-emerald); font-size: 19px; font-weight: 800;">${formattedIncome} / mo</div>
                    </div>
                </div>

                <div class="info-section">
                    <div class="roadmap-heading"><i class="fa-solid fa-briefcase"></i> TARGET ROLES & DESIGNATIONS</div>
                    <div class="roadmap-content" style="font-size: 16px; font-weight: 600; color: #ffffff;">${result.options}</div>
                </div>

                <div class="info-section">
                    <div class="roadmap-heading"><i class="fa-solid fa-route"></i> CAREER PATHWAY PROGRESSION</div>
                    <div class="roadmap-content" style="font-size: 16px; color: var(--accent-cyan); font-weight: 700;">${result.path}</div>
                </div>

                <div class="info-section">
                    <div class="roadmap-heading"><i class="fa-solid fa-chart-line"></i> WHY THIS CAREER PATH IS USEFUL</div>
                    <div class="usefulness-grid">
                        <div class="usefulness-card">
                            <h5 style="color: #fef08a; font-size: 16px;"><i class="fa-solid fa-fire"></i> Market Demand & Hiring Outlook</h5>
                            <p>${result.demand}</p>
                        </div>
                        <div class="usefulness-card">
                            <h5 style="color: #fef08a; font-size: 16px;"><i class="fa-solid fa-sack-dollar"></i> Earning Potential & Salary Scale</h5>
                            <p>${result.salary}</p>
                        </div>
                        <div class="usefulness-card">
                            <h5 style="color: #fef08a; font-size: 16px;"><i class="fa-solid fa-arrows-split-up-and-left"></i> Skill Versatility</h5>
                            <p>${result.versatility}</p>
                        </div>
                        <div class="usefulness-card">
                            <h5 style="color: #fef08a; font-size: 16px;"><i class="fa-solid fa-earth-americas"></i> Global & Remote Reach</h5>
                            <p>${result.globalReach}</p>
                        </div>
                    </div>
                </div>

                <div class="info-section">
                    <div class="roadmap-heading"><i class="fa-solid fa-lightbulb"></i> ESSENTIAL SKILLS REQUIRED</div>
                    <div class="skill-tags" style="margin-top: 14px; align-items: center;">${skillPillsHtml}</div>
                </div>
            `;

            hideAllPages();
            document.getElementById("resultPage").style.display = "block";

            // Update Progress Steps
            document.getElementById("stepIndicator2").classList.remove("active");
            document.getElementById("stepIndicator2").classList.add("completed");
            document.getElementById("stepIndicator3").classList.add("active");
        }

        function goBackToForm() {
            hideAllPages();
            document.getElementById("formPage").style.display = "block";
            document.getElementById("stepProgress").style.display = "flex";
        }

        // EXCEL EXPORT FUNCTION (ADMIN ONLY)
        function downloadExcel() {
            if (currentUserRole !== "admin") {
                alert("Access Denied: Excel exports are restricted to Administrator accounts only.");
                return;
            }

            let users = JSON.parse(localStorage.getItem("careerUsers")) || [];
            if (users.length === 0) {
                alert("No assessment records available to export.");
                return;
            }

            const exportData = users.map((user, idx) => ({
                "S.No": idx + 1,
                "Candidate Name": user.fullname,
                "Regd Number": user.regno,
                "Job Sector": user.jobtype,
                "Career Track": user.selectedInterest,
                "Specialization": user.subject,
                "Work Preference": user.worktype,
                "Target Income": user.income,
                "Assessment Date": user.date || new Date().toLocaleDateString()
            }));

            const worksheet = XLSX.utils.json_to_sheet(exportData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Candidate Career Records");
            XLSX.writeFile(workbook, "Talent_Navigator_Admin_Report.xlsx");
        }

        let currentJobFilter = 'all';

        function filterJobs(sector) {
            currentJobFilter = sector;
            
            document.getElementById("filterAllBtn").classList.remove("active");
            document.getElementById("filterGovtBtn").classList.remove("active");
            document.getElementById("filterPvtBtn").classList.remove("active");

            if (sector === 'all') document.getElementById("filterAllBtn").classList.add("active");
            else if (sector === 'Government Job') document.getElementById("filterGovtBtn").classList.add("active");
            else if (sector === 'Private Job') document.getElementById("filterPvtBtn").classList.add("active");

            renderJobArticles();
        }

        // JOB ARTICLE POSTING & FEED (WITH OFFICIAL DIRECT CORPORATE COMPANY CAREER PORTALS)
        function renderJobArticles() {
            const container = document.getElementById("articleGridContainer");
            let articles = JSON.parse(localStorage.getItem("jobArticles")) || [
                {
                    sector: "Government Job",
                    title: "UPSC Civil Services Examination 2026",
                    company: "Union Public Service Commission",
                    salary: "Govt Level 10 Pay (₹56,100 - ₹1,77,500/mo) + Accommodation",
                    link: "https://upsc.gov.in",
                    desc: "Official civil services preliminary notification for IAS, IPS, and IFS cadres. Online applications open for nationwide candidates.",
                    date: "Aug 17, 2026"
                },
                {
                    sector: "Private Job",
                    title: "Senior Full Stack Cloud Engineer",
                    company: "Google",
                    salary: "₹18,00,000 - ₹28,00,000 LPA + Equity",
                    link: "https://careers.google.com",
                    desc: "Official Google recruitment drive for Cloud Software Engineers skilled in React, Node.js, Distributed Systems, and GCP Infrastructure.",
                    date: "Aug 16, 2026"
                },
                {
                    sector: "Government Job",
                    title: "ISRO Scientist / Engineer Recruitment",
                    company: "Indian Space Research Organisation",
                    salary: "Govt Level 10 Pay Scale (₹67,700/mo + DA)",
                    link: "https://www.isro.gov.in/Careers.html",
                    desc: "Recruitment drive for Electronics, Computer Science, and Mechanical engineers for satellite technology divisions.",
                    date: "Aug 15, 2026"
                },
                {
                    sector: "Private Job",
                    title: "AI & Machine Learning Research Lead",
                    company: "Microsoft Corporation",
                    salary: "₹22,00,000 - ₹38,00,000 LPA + Perks",
                    link: "https://careers.microsoft.com",
                    desc: "Official Microsoft Careers opening for AI researchers specializing in Large Language Models, PyTorch, and Azure AI infrastructure.",
                    date: "Aug 14, 2026"
                },
                {
                    sector: "Government Job",
                    title: "SBI Probationary Officers (PO) Recruitment",
                    company: "State Bank of India",
                    salary: "₹65,000/mo + Lease Housing Allowance",
                    link: "https://sbi.co.in/web/careers",
                    desc: "Pan-India PO officer recruitment drive. Open to graduates across all specializations with competitive benefits.",
                    date: "Aug 12, 2026"
                },
                {
                    sector: "Private Job",
                    title: "Cyber Security Operations Specialist",
                    company: "IBM Security",
                    salary: "₹12,00,000 - ₹19,00,000 LPA",
                    link: "https://www.ibm.com/careers",
                    desc: "Official IBM Careers vacancy for SOC analysts certified in CEH / CompTIA Security+ for enterprise network threat intelligence.",
                    date: "Aug 10, 2026"
                },
                {
                    sector: "Government Job",
                    title: "SSC CGL Officer Recruitment Drive",
                    company: "Staff Selection Commission",
                    salary: "Central Level 7 Pay Scale + Perks",
                    link: "https://ssc.gov.in",
                    desc: "Recruitment notification for Assistant Section Officers, Central Excise Inspectors, and Tax Officers across Union Ministries.",
                    date: "Aug 08, 2026"
                },
                {
                    sector: "Private Job",
                    title: "UI/UX Senior Product Designer",
                    company: "Adobe Systems",
                    salary: "₹14,00,000 - ₹22,00,000 LPA",
                    link: "https://www.adobe.com/careers.html",
                    desc: "Official Adobe Careers position for lead UI/UX product designers proficient in Figma, Design Systems, and Design Systems Strategy.",
                    date: "Aug 06, 2026"
                },
                {
                    sector: "Private Job",
                    title: "Software Development Engineer II (AWS)",
                    company: "Amazon Web Services (AWS)",
                    salary: "₹20,00,000 - ₹34,00,000 LPA",
                    link: "https://www.amazon.jobs",
                    desc: "Official Amazon Jobs portal recruitment for SDE-II engineers to build high-availability cloud services and serverless systems.",
                    date: "Aug 04, 2026"
                }
            ];

            container.innerHTML = "";

            const filteredList = currentJobFilter === 'all' 
                ? articles 
                : articles.filter(a => a.sector === currentJobFilter);

            if (filteredList.length === 0) {
                container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No job postings available for this sector filter.</div>`;
                return;
            }

            filteredList.forEach(art => {
                const isGovt = art.sector === "Government Job";
                const badgeStyle = isGovt 
                    ? "background: rgba(245, 158, 11, 0.18); color: #fef08a; border: 1px solid rgba(245, 158, 11, 0.4);"
                    : "background: rgba(99, 102, 241, 0.18); color: #c7d2fe; border: 1px solid rgba(99, 102, 241, 0.4);";
                const badgeIcon = isGovt ? "🏛️ Government Job" : "💼 Private Corporate Job";

                const card = document.createElement("div");
                card.className = "article-card";
                card.style.borderLeft = isGovt ? "4px solid var(--accent-amber)" : "4px solid var(--primary)";
                card.innerHTML = `
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; ${badgeStyle}">
                                ${badgeIcon}
                            </span>
                            <span style="font-size: 11px; color: var(--text-muted);"><i class="fa-solid fa-calendar-days"></i> ${art.date}</span>
                        </div>
                        <h4 style="font-size: 18px; font-weight: 700; color: white; margin-bottom: 6px;">${art.title}</h4>
                        <div class="article-meta" style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 10px;">
                            <i class="fa-solid fa-building"></i> ${art.company} &nbsp;|&nbsp; <i class="fa-solid fa-money-bill-wave"></i> ${art.salary}
                        </div>
                        <p style="font-size: 13px; color: #cbd5e1; line-height: 1.5;">${art.desc}</p>
                    </div>
                    <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 12px;">
                        <a href="${art.link}" target="_blank" class="btn-primary" style="padding: 7px 16px; font-size: 12px; width: auto; text-decoration: none; background: ${isGovt ? 'var(--admin-gradient)' : 'var(--primary-gradient)'};">View & Apply <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function openPostArticleModal() {
            if (currentUserRole !== "admin") {
                alert("Access Denied: Only Admin Officers can post job announcements.");
                return;
            }
            document.getElementById("postArticleModal").style.display = "flex";
        }

        function closePostArticleModal() {
            document.getElementById("postArticleModal").style.display = "none";
        }

        function saveJobArticle() {
            const sector = document.getElementById("artSector").value;
            const title = document.getElementById("artTitle").value.trim();
            const company = document.getElementById("artCompany").value.trim();
            const salary = document.getElementById("artSalary").value.trim();
            const link = document.getElementById("artLink").value.trim() || "#";
            const desc = document.getElementById("artDesc").value.trim();

            if (!title || !company || !desc) {
                alert("Please fill in Title, Company, and Description fields.");
                return;
            }

            let articles = JSON.parse(localStorage.getItem("jobArticles")) || [];
            articles.unshift({
                sector, title, company, salary: salary || "As per sector standards", link, desc, date: new Date().toLocaleDateString()
            });
            localStorage.setItem("jobArticles", JSON.stringify(articles));

            closePostArticleModal();
            renderJobArticles();
        }

        // USER JOB NOTIFICATION TO ADMIN
        function openNotifyAdminModal() {
            document.getElementById("notifyAdminModal").style.display = "flex";
        }

        function closeNotifyAdminModal() {
            document.getElementById("notifyAdminModal").style.display = "none";
        }

        function submitJobTipToAdmin() {
            const title = document.getElementById("tipTitle").value.trim();
            const link = document.getElementById("tipLink").value.trim();
            const message = document.getElementById("tipMessage").value.trim();

            if (!title || !message) {
                alert("Please provide a Job Title and Message for the Admin.");
                return;
            }

            let tips = JSON.parse(localStorage.getItem("adminJobTips")) || [];
            tips.push({
                user: localStorage.getItem("username") || "Candidate",
                title, link, message, date: new Date().toLocaleDateString()
            });
            localStorage.setItem("adminJobTips", JSON.stringify(tips));

            alert("Job tip successfully submitted to Admin Inbox!");
            closeNotifyAdminModal();
        }

        function sendMailToAdmin() {
            const title = document.getElementById("tipTitle").value.trim();
            const link = document.getElementById("tipLink").value.trim();
            const message = document.getElementById("tipMessage").value.trim();

            const subject = encodeURIComponent(`Job Notification Tip: ${title}`);
            const body = encodeURIComponent(`Admin Team,\n\nI would like to notify you about a job opening:\n\nJob Title: ${title}\nLink: ${link}\n\nDetails:\n${message}\n\nSubmitted via Talent Navigator Platform.`);
            window.location.href = `mailto:admin@talentnavigator.com?subject=${subject}&body=${body}`;
        }

        // ADMIN MODALS
        function openHistoryModal() {
            if (currentUserRole !== "admin") return;
            let users = JSON.parse(localStorage.getItem("careerUsers")) || [];
            const tbody = document.getElementById("historyTableBody");
            tbody.innerHTML = "";

            if (users.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">No candidate records saved.</td></tr>`;
            } else {
                users.forEach(u => {
                    const tr = document.createElement("tr");
                    tr.innerHTML = `
                        <td style="font-weight: 600; color: white;">${u.fullname}</td>
                        <td>${u.regno}</td>
                        <td>${u.jobtype}</td>
                        <td style="color: var(--accent-cyan);">${u.selectedInterest}</td>
                        <td>${u.subject}</td>
                        <td style="color: var(--accent-emerald); font-weight: 600;">${u.income}</td>
                    `;
                    tbody.appendChild(tr);
                });
            }
            document.getElementById("historyModal").style.display = "flex";
        }

        function closeHistoryModal() {
            document.getElementById("historyModal").style.display = "none";
        }

        function openAdminInboxModal() {
            if (currentUserRole !== "admin") return;
            let tips = JSON.parse(localStorage.getItem("adminJobTips")) || [];
            const container = document.getElementById("inboxBody");
            container.innerHTML = "";

            if (tips.length === 0) {
                container.innerHTML = `<p style="text-align: center; color: var(--text-muted);">No job tips received from users yet.</p>`;
            } else {
                tips.forEach(t => {
                    const div = document.createElement("div");
                    div.style.cssText = "background: rgba(15,23,42,0.6); border: 1px solid var(--border-color); padding: 15px; border-radius: 8px; margin-bottom: 12px;";
                    div.innerHTML = `
                        <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--accent-cyan); margin-bottom: 5px;">
                            <span><strong>From:</strong> ${t.user}</span>
                            <span>${t.date}</span>
                        </div>
                        <h4 style="color: white; margin-bottom: 5px;">${t.title}</h4>
                        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">${t.message}</p>
                        ${t.link ? `<a href="${t.link}" target="_blank" style="color: var(--primary); font-size: 12px;">Link: ${t.link}</a>` : ''}
                    `;
                    container.appendChild(div);
                });
            }
            document.getElementById("adminInboxModal").style.display = "flex";
        }

        function closeAdminInboxModal() {
            document.getElementById("adminInboxModal").style.display = "none";
        }

        function submitHelpRequest() {
            const name = document.getElementById("helpName").value.trim();
            const email = document.getElementById("helpEmail").value.trim();
            const details = document.getElementById("helpDetails").value.trim();

            if (!name || !email || !details) {
                alert("Please fill in your Name, Email Address, and Correction / Query details.");
                return;
            }

            // Proper Email Validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                document.getElementById("helpEmail").focus();
                return;
            }

            let requests = JSON.parse(localStorage.getItem("adminHelpRequests")) || [];
            requests.push({
                name, email, details, date: new Date().toLocaleDateString()
            });
            localStorage.setItem("adminHelpRequests", JSON.stringify(requests));

            alert("Correction request successfully sent to Admin Dashboard!");
            document.getElementById("helpName").value = "";
            document.getElementById("helpEmail").value = "";
            document.getElementById("helpDetails").value = "";
        }

        function openAdminHelpModal() {
            if (currentUserRole !== "admin") return;
            let requests = JSON.parse(localStorage.getItem("adminHelpRequests")) || [];
            const container = document.getElementById("helpInboxBody");
            container.innerHTML = "";

            if (requests.length === 0) {
                container.innerHTML = `<p style="text-align: center; color: var(--text-muted);">No candidate help or correction requests received yet.</p>`;
            } else {
                requests.forEach(r => {
                    const div = document.createElement("div");
                    div.style.cssText = "background: rgba(15,23,42,0.65); border: 1px solid var(--border-color); border-left: 3.5px solid var(--accent-emerald); padding: 15px; border-radius: 8px; margin-bottom: 12px;";
                    div.innerHTML = `
                        <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--accent-emerald); margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
                            <span><i class="fa-solid fa-user"></i> <strong>Candidate:</strong> ${r.name} &nbsp;|&nbsp; <i class="fa-solid fa-envelope"></i> ${r.email || 'N/A'}</span>
                            <span><i class="fa-solid fa-clock"></i> ${r.date}</span>
                        </div>
                        <p style="font-size: 13.5px; color: white; line-height: 1.5; margin: 0;">${r.details}</p>
                    `;
                    container.appendChild(div);
                });
            }
            document.getElementById("adminHelpModal").style.display = "flex";
        }

        function closeAdminHelpModal() {
            document.getElementById("adminHelpModal").style.display = "none";
        }

        // USER BULLETINS & DASHBOARD UPDATES
        function showUpdatesPage() {
            hideAllPages();
            renderDashboardUpdates();
            document.getElementById("updatesPage").style.display = "block";
        }

        function renderDashboardUpdates() {
            const container = document.getElementById("updatesGridContainer");
            let updates = JSON.parse(localStorage.getItem("dashboardUpdates")) || [
                {
                    title: "Welcome to Talent Navigator!",
                    content: "We have launched the Career Intelligence Portal. Complete your assessment to view personalized roadmaps.",
                    date: "8/18/2026"
                },
                {
                    title: "New Job Postings Alert",
                    content: "New public and corporate sector jobs have been updated in the Job Feed page. Check them out!",
                    date: "8/17/2026"
                }
            ];

            container.innerHTML = "";

            if (updates.length === 0) {
                container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No updates available at the moment.</div>`;
                return;
            }

            updates.forEach(upd => {
                const card = document.createElement("div");
                card.className = "article-card";
                card.style.borderLeft = "4px solid var(--accent-cyan)";
                card.style.background = "rgba(15, 23, 42, 0.65)";
                card.innerHTML = `
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; background: rgba(6, 182, 212, 0.18); color: var(--accent-cyan); border: 1px solid rgba(6, 182, 212, 0.4);">
                                <i class="fa-solid fa-bullhorn"></i> Announcement
                            </span>
                            <span style="font-size: 11px; color: var(--text-muted);"><i class="fa-solid fa-calendar-days"></i> ${upd.date}</span>
                        </div>
                        <h4 style="font-size: 18px; font-weight: 700; color: white; margin-bottom: 8px;">${upd.title}</h4>
                        <p style="font-size: 13.5px; color: #cbd5e1; line-height: 1.5; margin: 0;">${upd.content}</p>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function openPublishUpdatesModal() {
            if (currentUserRole !== "admin") {
                alert("Access Denied: Only Admin Officers can publish dashboard updates.");
                return;
            }
            document.getElementById("publishUpdatesModal").style.display = "flex";
        }

        function closePublishUpdatesModal() {
            document.getElementById("publishUpdatesModal").style.display = "none";
        }

        function saveDashboardUpdate() {
            const title = document.getElementById("updateTitle").value.trim();
            const content = document.getElementById("updateContent").value.trim();

            if (!title || !content) {
                alert("Please fill in both the Title and Content fields.");
                return;
            }

            let updates = JSON.parse(localStorage.getItem("dashboardUpdates")) || [
                {
                    title: "Welcome to Talent Navigator!",
                    content: "We have launched the Career Intelligence Portal. Complete your assessment to view personalized roadmaps.",
                    date: "8/18/2026"
                },
                {
                    title: "New Job Postings Alert",
                    content: "New public and corporate sector jobs have been updated in the Job Feed page. Check them out!",
                    date: "8/17/2026"
                }
            ];

            updates.unshift({
                title, content, date: new Date().toLocaleDateString()
            });
            localStorage.setItem("dashboardUpdates", JSON.stringify(updates));

            document.getElementById("updateTitle").value = "";
            document.getElementById("updateContent").value = "";

            closePublishUpdatesModal();
            alert("Update broadcasted successfully to all candidates!");
        }
