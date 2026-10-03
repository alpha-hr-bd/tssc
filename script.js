// ==========================================
// EDITABLE DATA CONFIGURATION
// You can easily modify school information, notices, routines, and demo results below.
// ==========================================

// 1. NOTICES DATA ARRAY (Editable)
const noticesData = [
    {
        id: 1,
        category: "IMPORTANT",
        title: "Mid-Term Terminal Examination Schedule 2026",
        date: "October 02, 2026",
        description: "The upcoming mid-term terminal examinations for Classes 6 to 10 will commence from October 18, 2026. All students must collect their admit cards from the administrative office.",
        content: "Detailed routine has been published. Examination timing: 10:00 AM to 1:00 PM. Students are required to report to the examination hall 15 minutes prior to commencement with their valid Student ID card."
    },
    {
        id: 2,
        category: "ACADEMIC",
        title: "Annual Science Fair Registration Open",
        date: "September 28, 2026",
        description: "Students interested in participating in the TSSC Annual Science Fair 2026 can now register their project titles with their respective science teachers.",
        content: "Categories include Robotics, Physics Experiments, Environmental Science, and Software projects. Last date for abstract submission is October 12, 2026. Exciting trophies and certificates await winners."
    },
    {
        id: 3,
        category: "EXAM",
        title: "Class 9 & 10 Practical Assessment Guidelines",
        date: "September 24, 2026",
        description: "Practical class assessments for Physics, Chemistry, and ICT will take place during regular lab periods next week. Review your lab manuals accordingly.",
        content: "Students must wear proper lab coats and bring their signed observation notebooks. Attendance in practical sessions is mandatory for terminal grading."
    },
    {
        id: 4,
        category: "GENERAL",
        title: "Library Book Return and Renewal Notice",
        date: "September 20, 2026",
        description: "All students who borrowed books from the TSSC central library are requested to return or renew their books before the end of the current month.",
        content: "Failure to return borrowed books by the due date will result in a nominal overdue fine as per library regulations. Quiet reading hours are maintained daily from 2:00 PM to 4:00 PM."
    },
    {
        id: 5,
        category: "IMPORTANT",
        title: "Annual Sports Week 2026 Announcement",
        date: "September 15, 2026",
        description: "TSSC Annual Sports Week is scheduled for early November. House captains are requested to submit team rosters for football, cricket, and athletics.",
        content: "Practice sessions will be held after school hours on the main school playground. Sports uniforms are mandatory for all participants."
    },
    {
        id: 6,
        category: "ACADEMIC",
        title: "Parent-Teacher Meeting (PTM) Schedule",
        date: "September 10, 2026",
        description: "The monthly Parent-Teacher Meeting for discussing student progress will be held this coming Saturday from 9:00 AM to 1:00 PM.",
        content: "Parents are cordially invited to meet respective class teachers in assigned classrooms to review student performance and assessment sheets."
    }
];

// 2. CLASS ROUTINE DATA (Editable)
const routineData = {
    "6": [
        { period: "1st Period", time: "08:00 AM - 08:45 AM", subject: "Bangla 1st Paper", teacher: "Ms. Farhana Akter", room: "Room 301" },
        { period: "2nd Period", time: "08:45 AM - 09:30 AM", subject: "English Grammar", teacher: "Mr. Tanvir Ahmed", room: "Room 301" },
        { period: "Break", time: "09:30 AM - 09:50 AM", subject: "Recess / Tiffin", teacher: "-", room: "School Cafeteria" },
        { period: "3rd Period", time: "09:50 AM - 10:35 AM", subject: "Mathematics", teacher: "Mr. Rafiqul Islam", room: "Room 301" },
        { period: "4th Period", time: "10:35 AM - 11:20 AM", subject: "General Science", teacher: "Ms. Nasrin Sultana", room: "Science Lab 1" },
        { period: "5th Period", time: "11:20 AM - 12:05 PM", subject: "ICT & Computer", teacher: "Mr. Anisur Rahman", room: "Computer Lab" }
    ],
    "7": [
        { period: "1st Period", time: "08:00 AM - 08:45 AM", subject: "English Literature", teacher: "Mr. Tanvir Ahmed", room: "Room 302" },
        { period: "2nd Period", time: "08:45 AM - 09:30 AM", subject: "Mathematics", teacher: "Mr. Rafiqul Islam", room: "Room 302" },
        { period: "Break", time: "09:30 AM - 09:50 AM", subject: "Recess / Tiffin", teacher: "-", room: "School Cafeteria" },
        { period: "3rd Period", time: "09:50 AM - 10:35 AM", subject: "Bangla 2nd Paper", teacher: "Ms. Farhana Akter", room: "Room 302" },
        { period: "4th Period", time: "10:35 AM - 11:20 AM", subject: "Bangladesh & Global Studies", teacher: "Dr. Kamal Hossain", room: "Room 302" },
        { period: "5th Period", time: "11:20 AM - 12:05 PM", subject: "Religion & Moral Ed.", teacher: "Maulana Abdullah", room: "Room 302" }
    ],
    "8": [
        { period: "1st Period", time: "08:00 AM - 08:45 AM", subject: "General Science", teacher: "Ms. Nasrin Sultana", room: "Room 401" },
        { period: "2nd Period", time: "08:45 AM - 09:30 AM", subject: "Mathematics (Algebra)", teacher: "Mr. Rafiqul Islam", room: "Room 401" },
        { period: "Break", time: "09:30 AM - 09:50 AM", subject: "Recess / Tiffin", teacher: "-", room: "School Cafeteria" },
        { period: "3rd Period", time: "09:50 AM - 10:35 AM", subject: "English Advanced", teacher: "Mr. Tanvir Ahmed", room: "Room 401" },
        { period: "4th Period", time: "10:35 AM - 11:20 AM", subject: "ICT (Practical)", teacher: "Mr. Anisur Rahman", room: "Computer Lab" },
        { period: "5th Period", time: "11:20 AM - 12:05 PM", subject: "Bangla Literature", teacher: "Ms. Farhana Akter", room: "Room 401" }
    ],
    "9": [
        { period: "1st Period", time: "08:00 AM - 08:45 AM", subject: "Physics", teacher: "Dr. Aminul Haque", room: "Physics Lab" },
        { period: "2nd Period", time: "08:45 AM - 09:30 AM", subject: "Higher Mathematics", teacher: "Mr. Rafiqul Islam", room: "Room 405" },
        { period: "Break", time: "09:30 AM - 09:50 AM", subject: "Recess / Tiffin", teacher: "-", room: "School Cafeteria" },
        { period: "3rd Period", time: "09:50 AM - 10:35 AM", subject: "Chemistry", teacher: "Dr. Shahana Parveen", room: "Chemistry Lab" },
        { period: "4th Period", time: "10:35 AM - 11:20 AM", subject: "English 1st Paper", teacher: "Mr. Tanvir Ahmed", room: "Room 405" },
        { period: "5th Period", time: "11:20 AM - 12:05 PM", subject: "Biology", teacher: "Ms. Nasrin Sultana", room: "Biology Lab" }
    ],
    "10": [
        { period: "1st Period", time: "08:00 AM - 08:45 AM", subject: "Chemistry (Organic)", teacher: "Dr. Shahana Parveen", room: "Chemistry Lab" },
        { period: "2nd Period", time: "08:45 AM - 09:30 AM", subject: "Physics (Mechanics)", teacher: "Dr. Aminul Haque", room: "Physics Lab" },
        { period: "Break", time: "09:30 AM - 09:50 AM", subject: "Recess / Tiffin", teacher: "-", room: "School Cafeteria" },
        { period: "3rd Period", time: "09:50 AM - 10:35 AM", subject: "Mathematics (Trigonometry)", teacher: "Mr. Rafiqul Islam", room: "Room 501" },
        { period: "4th Period", time: "10:35 AM - 11:20 AM", subject: "ICT (HTML & JS)", teacher: "Mr. Anisur Rahman", room: "Computer Lab" },
        { period: "5th Period", time: "11:20 AM - 12:05 PM", subject: "English & Composition", teacher: "Mr. Tanvir Ahmed", room: "Room 501" }
    ]
};

// 3. STUDENT DEMO RESULTS DATABASE (Editable)
const studentResultsDatabase = {
    "101": { name: "Sadia Islam", id: "101", class: "Class 10", section: "A", bangla: 85, english: 88, math: 92, science: 90, ict: 95, total: 450, gpa: "5.00" },
    "102": { name: "Tanvir Hossain", id: "102", class: "Class 10", section: "A", bangla: 78, english: 82, math: 85, science: 80, ict: 88, total: 413, gpa: "4.75" },
    "103": { name: "Nusrat Jahan", id: "103", class: "Class 9", section: "B", bangla: 90, english: 92, math: 95, science: 94, ict: 98, total: 469, gpa: "5.00" },
    "104": { name: "TSSC Scholar", id: "104", class: "Class 10", section: "A", bangla: 88, english: 90, math: 94, science: 92, ict: 96, total: 460, gpa: "5.00" },
    "201": { name: "Rakibul Hasan", id: "201", class: "Class 8", section: "C", bangla: 74, english: 76, math: 80, science: 78, ict: 85, total: 393, gpa: "4.50" },
    "305": { name: "Lamia Tabassum", id: "305", class: "Class 7", section: "B", bangla: 82, english: 85, math: 88, science: 86, ict: 90, total: 431, gpa: "4.88" }
};

// 4. UPCOMING EVENTS DATA (Editable)
const eventsData = [
    { day: "18", month: "Oct", name: "Mid-Term Examinations 2026", desc: "Terminal exams for all classes begin across all campuses.", location: "Main Examination Hall" },
    { day: "25", month: "Oct", name: "Annual Science Fair", desc: "Exhibition of student science projects and robotic models.", location: "School Auditorium" },
    { day: "05", month: "Nov", name: "Annual Sports Meet", desc: "Athletics, football finals, and prize distribution ceremony.", location: "School Playground" },
    { day: "15", month: "Nov", name: "Cultural Program & Fest", desc: "Musical performances, drama, and recitation by students.", location: "Audorium Stage" },
    { day: "02", month: "Dec", name: "School Picnic 2026", desc: "One-day excursion for students and faculty members.", location: "Resort & Botanical Garden" },
    { day: "20", month: "Dec", name: "Winter Term Closing", desc: "Final report card distribution and winter vacation starts.", location: "Classrooms" }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Hide Loading Screen
    setTimeout(() => {
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
            loadingScreen.classList.add("fade-out");
        }
    }, 600);

    // 2. Initialize Components
    initNavbar();
    initHeroCounters();
    renderNotices("all");
    setupNoticeFilters();
    renderRoutine("6");
    setupRoutineTabs();
    setupResultChecker();
    renderEvents();
    initScrollReveal();
    setCopyrightYear();
});

function initNavbar() {
    const header = document.getElementById("header");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    // Scroll Navbar blur effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile menu toggle
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener("click", () => {
            hamburgerBtn.classList.toggle("active");
            mobileMenu.classList.toggle("open");
        });

        // Close mobile menu on click link
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburgerBtn.classList.remove("active");
                mobileMenu.classList.remove("open");
            });
        });
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

function initHeroCounters() {
    const statNums = document.querySelectorAll(".stat-num[data-target]");
    statNums.forEach(num => {
        const target = +num.getAttribute("data-target");
        let count = 0;
        const increment = target / 40;
        const updateCount = () => {
            count += increment;
            if (count < target) {
                num.innerText = Math.ceil(count);
                setTimeout(updateCount, 30);
            } else {
                num.innerText = target;
            }
        };
        updateCount();
    });
}

function renderNotices(filter) {
    const noticesGrid = document.getElementById("notices-grid");
    if (!noticesGrid) return;

    noticesGrid.innerHTML = "";

    const filteredNotices = filter === "all" 
        ? noticesData 
        : noticesData.filter(notice => notice.category === filter);

    filteredNotices.forEach(notice => {
        let badgeClass = "cat-general";
        if (notice.category === "IMPORTANT") badgeClass = "cat-important";
        else if (notice.category === "ACADEMIC") badgeClass = "cat-academic";
        else if (notice.category === "EXAM") badgeClass = "cat-exam";

        const card = document.createElement("div");
        card.className = "notice-card reveal-up";
        card.innerHTML = `
            <div>
                <div class="notice-card-top">
                    <span class="notice-cat ${badgeClass}">${notice.category}</span>
                    <span class="notice-date"><i class="fa-regular fa-calendar"></i> ${notice.date}</span>
                </div>
                <h3>${notice.title}</h3>
                <p>${notice.description}</p>
            </div>
            <button class="notice-btn" onclick="openNoticeModal(${notice.id})">Read More <i class="fa-solid fa-arrow-right"></i></button>
        `;
        noticesGrid.appendChild(card);
    });

    // Re-trigger scroll reveal for newly added elements
    initScrollReveal();
}

function setupNoticeFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            renderNotices(filter);
        });
    });
}

// Open Notice Detail Modal
function openNoticeModal(noticeId) {
    const notice = noticesData.find(n => n.id === noticeId);
    if (!notice) return;

    const modal = document.getElementById("notice-modal");
    const titleEl = document.getElementById("modal-notice-title");
    const dateEl = document.getElementById("modal-notice-date");
    const bodyEl = document.getElementById("modal-notice-body");

    titleEl.innerText = notice.title;
    dateEl.innerText = notice.date;
    bodyEl.innerHTML = `
        <div style="margin-bottom: 15px;">
            <span class="notice-cat cat-${notice.category.toLowerCase()}" style="display:inline-block; margin-bottom:10px;">${notice.category}</span>
            <p style="font-size: 1.05rem; font-weight: 500; color: var(--dark); margin-bottom: 15px;">${notice.description}</p>
            <hr style="border:0; border-top: 1px solid var(--border-color); margin-bottom: 15px;">
            <p style="color: var(--text-main); line-height: 1.7;">${notice.content}</p>
        </div>
    `;

    modal.classList.add("open");

    const closeBtn = document.getElementById("notice-modal-close-btn");
    const okBtn = document.getElementById("notice-modal-ok-btn");

    const closeModal = () => modal.classList.remove("open");
    closeBtn.onclick = closeModal;
    okBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

function renderRoutine(className) {
    const tbody = document.getElementById("routine-table-body");
    const routineTitle = document.getElementById("routine-title");
    if (!tbody || !routineTitle) return;

    routineTitle.innerText = `Routine for Class ${className}`;
    tbody.innerHTML = "";

    const schedule = routineData[className] || [];
    schedule.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.period}</strong></td>
            <td><i class="fa-regular fa-clock text-sky"></i> ${item.time}</td>
            <td><strong>${item.subject}</strong></td>
            <td>${item.teacher}</td>
            <td><span class="badge-class">${item.room}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function setupRoutineTabs() {
    const tabs = document.querySelectorAll(".class-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const className = tab.getAttribute("data-class");
            renderRoutine(className);
            showToast(`Loaded routine for Class ${className}`);
        });
    });
}

function setupResultChecker() {
    const checkBtn = document.getElementById("check-result-btn");
    const input = document.getElementById("student-id-input");
    const modal = document.getElementById("result-modal");
    const modalClose = document.getElementById("modal-close-btn");
    const modalOk = document.getElementById("modal-ok-btn");

    if (!checkBtn || !input) return;

    const handleCheck = () => {
        const val = input.value.trim();
        if (!val) {
            showToast("Please enter your Student ID.");
            input.focus();
            return;
        }

        const student = studentResultsDatabase[val];
        if (!student) {
            // Generate a realistic demo result for any unrecognized ID so the demo never dead-ends
            const dummyResult = {
                name: `Student ID #${val}`,
                id: val,
                class: "Class 10",
                section: "A",
                bangla: 82,
                english: 86,
                math: 89,
                science: 88,
                ict: 92,
                total: 437,
                gpa: "4.85"
            };
            displayResultModal(dummyResult);
        } else {
            displayResultModal(student);
        }
    };

    checkBtn.addEventListener("click", handleCheck);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleCheck();
    });

    const closeModal = () => {
        modal.classList.remove("open");
    };

    if (modalClose) modalClose.onclick = closeModal;
    if (modalOk) modalOk.onclick = closeModal;
    if (modal) {
        modal.onclick = (e) => {
            if (e.target === modal) closeModal();
        };
    }
}

function displayResultModal(student) {
    const modal = document.getElementById("result-modal");
    const content = document.getElementById("modal-result-content");
    if (!modal || !content) return;

    content.innerHTML = `
        <div class="result-details-grid">
            <div class="result-detail-item">
                <small>Student Name</small>
                <strong>${student.name}</strong>
            </div>
            <div class="result-detail-item">
                <small>Student ID</small>
                <strong>#${student.id}</strong>
            </div>
            <div class="result-detail-item">
                <small>Class & Section</small>
                <strong>${student.class} (${student.section})</strong>
            </div>
            <div class="result-detail-item">
                <small>Academic Session</small>
                <strong>2026 Terminal</strong>
            </div>
        </div>

        <table class="marksheet-table">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Full Marks</th>
                    <th>Obtained</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Bangla</td><td>100</td><td>${student.bangla}</td><td>${getGrade(student.bangla)}</td></tr>
                <tr><td>English</td><td>100</td><td>${student.english}</td><td>${getGrade(student.english)}</td></tr>
                <tr><td>Mathematics</td><td>100</td><td>${student.math}</td><td>${getGrade(student.math)}</td></tr>
                <tr><td>General Science</td><td>100</td><td>${student.science}</td><td>${getGrade(student.science)}</td></tr>
                <tr><td>ICT & Computer</td><td>100</td><td>${student.ict}</td><td>${getGrade(student.ict)}</td></tr>
            </tbody>
        </table>

        <div class="result-summary-box">
            <div>
                <small style="color: rgba(255,255,255,0.8);">Total Marks: ${student.total}/500</small>
                <h4>Final GPA: ${student.gpa}</h4>
            </div>
            <div style="text-align: right;">
                <span class="status-badge" style="background: rgba(255,255,255,0.2); color: white;"><i class="fa-solid fa-circle-check"></i> Passed</span>
            </div>
        </div>
    `;

    modal.classList.add("open");
    showToast(`Result successfully loaded for ${student.name}`);
}

function getGrade(marks) {
    if (marks >= 80) return "A+ (5.00)";
    if (marks >= 70) return "A (4.00)";
    if (marks >= 60) return "A- (3.50)";
    if (marks >= 50) return "B (3.00)";
    if (marks >= 40) return "C (2.00)";
    return "F (0.00)";
}

function renderEvents() {
    const eventsGrid = document.getElementById("events-grid");
    if (!eventsGrid) return;

    eventsGrid.innerHTML = "";
    eventsData.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card reveal-up";
        card.innerHTML = `
            <div class="event-date-box">
                <span class="day">${event.day}</span>
                <span class="mon">${event.month}</span>
            </div>
            <div class="event-info">
                <h3>${event.name}</h3>
                <p>${event.desc}</p>
                <div class="event-meta">
                    <i class="fa-solid fa-location-dot"></i> ${event.location}
                </div>
            </div>
        `;
        eventsGrid.appendChild(card);
    });
}

function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-info"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("fade-out");
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    reveals.forEach(reveal => observer.observe(reveal));
}

function setCopyrightYear() {
    const copyrightText = document.getElementById("copyright-text");
    if (copyrightText) {
        const year = new Date().getFullYear();
        copyrightText.innerHTML = `&copy; ${year} TSSC Student Portal. All rights reserved.`;
    }
}
