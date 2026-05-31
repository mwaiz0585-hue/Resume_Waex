// Toggle mobile / normal view
const viewModeBtn = document.getElementById("viewModeBtn");

viewModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("mobile-view");

  if (document.body.classList.contains("mobile-view")) {
    viewModeBtn.textContent = "View in Comfortable Mode";
} else {
    viewModeBtn.textContent = "View in Compact Mode";
}
});

// Featured Projects data
const projects = [
    {
        title: "Clinic AI Workflow",
        description: "A clinic workflow project focused on improving digital processes using AI-related concepts and structured system flow.",
        images: [
            "images/projects/clinic-ai-workflow/1.jpg"
        ],
        tech: ["AI", "Workflow", "Web System"],
        liveLink: "#",
        githubLink: "https://github.com/mwaiz0585-hue/clinic-ai-workflow"
    },
    {
        title: "IoT Flight System",
        description: "An IoT-based flight monitoring system project involving sensors, data collection, dashboard display, and system monitoring concepts.",
        images: [
            "images/projects/iot-flight-system/1.jpg",
            "images/projects/iot-flight-system/2.jpg",
            "images/projects/iot-flight-system/3.jpg",
            "images/projects/iot-flight-system/4.jpg",
            "images/projects/iot-flight-system/5.jpg",
            "images/projects/iot-flight-system/6.jpg"
        ],
        tech: ["IoT", "Sensors", "Dashboard", "System Monitoring"],
        liveLink: "#",
        githubLink: "https://github.com/mwaiz0585-hue/iot-flight-system"
    },
    {
        title: "Resume Portfolio Website",
        description: "A personal portfolio website built to showcase technical skills, projects, leadership involvement, activity media, and creative works.",
        images: [
            "images/projects/resume-waex/1.jpg",
            "images/projects/resume-waex/2.jpg",
            "images/projects/resume-waex/3.jpg",
            "images/projects/resume-waex/4.jpg",
            "images/projects/resume-waex/5.jpg",
            "images/projects/resume-waex/6.jpg",
            "images/projects/resume-waex/7.jpg",
            "images/projects/resume-waex/8.jpg",
            "images/projects/resume-waex/9.jpg"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Render"],
        liveLink: "#",
        githubLink: "https://github.com/mwaiz0585-hue/Resume_Waex"
    },
    {
        title: "UTP Stellar Finance Tracker",
        description: "A finance tracking system developed for UTP Stellar Astronomy Club using Google Sheets and Google Apps Script. It supports transaction recording, budgeting, financial monitoring, and treasurer documentation.",
        images: [
            "images/projects/stellar-finance/1.jpg",
            "images/projects/stellar-finance/2.jpg",
            "images/projects/stellar-finance/3.jpg",
            "images/projects/stellar-finance/4.jpg",
            "images/projects/stellar-finance/5.jpg",
            "images/projects/stellar-finance/6.jpg",
            "images/projects/stellar-finance/7.jpg",
            "images/projects/stellar-finance/8.jpg",
            "images/projects/stellar-finance/9.jpg",
            "images/projects/stellar-finance/10.jpg"
        ],
        tech: ["Google Apps Script", "Google Sheets", "Automation", "Finance Tracking"],
        liveLink: "https://script.google.com/macros/s/AKfycbwIvcYXHZ1srEPHXaoaNIoEAwpb_9OLhwKEQ1bHBlof6jjH-CpmDeC5z-LnzHDno3swVg/exec",
        githubLink: ""
    },
    {
        title: "UTP Stellar Website",
        description: "A website created for UTP Stellar Astronomy Club to showcase club information, recruitment, events, gallery, activities, and astronomy-related features.",
        images: [
            "images/projects/stellar-website/1.jpg",
            "images/projects/stellar-website/2.jpg",
            "images/projects/stellar-website/3.jpg",
            "images/projects/stellar-website/4.jpg",
            "images/projects/stellar-website/5.jpg",
            "images/projects/stellar-website/6.jpg",
            "images/projects/stellar-website/7.jpg",
            "images/projects/stellar-website/8.jpg",
            "images/projects/stellar-website/9.jpg",
            "images/projects/stellar-website/10.jpg",
            "images/projects/stellar-website/11.jpg",
            "images/projects/stellar-website/12.jpg",
            "images/projects/stellar-website/13.jpg",
            "images/projects/stellar-website/14.jpg",
            "images/projects/stellar-website/15.jpg",
            "images/projects/stellar-website/16.jpg",
            "images/projects/stellar-website/17.jpg"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Web Design"],
        liveLink: "#",
        githubLink: "https://github.com/mwaiz0585-hue/stellar-website"
    },
    {
        title: "WAEX Studio Tools",
        description: "A web-based tools platform that provides file utility features such as background remover, PDF tools, image-to-PDF conversion, and document-related services.",
        images: [
            "images/projects/waex-studio-tools/1.jpg",
            "images/projects/waex-studio-tools/2.jpg",
            "images/projects/waex-studio-tools/3.jpg",
            "images/projects/waex-studio-tools/4.jpg"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Flask"],
        liveLink: "#",
        githubLink: "https://github.com/mwaiz0585-hue/waex-studio-tools"
    }
];

// Generate project cards
const projectsContainer = document.getElementById("projectsContainer");

if (projectsContainer) {
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        const techTags = project.tech.map((item) => {
            return `<span>${item}</span>`;
        }).join("");

        const projectImages = project.images.map((image, index) => {
            const extraClass = index >= 3 ? "extra-project-image" : "";

            return `
                <img 
                    class="zoomable-image project-gallery-image ${extraClass}"
                    src="${image}" 
                    alt="${project.title} screenshot ${index + 1}"
                    onerror="this.style.display='none';"
                >
            `;
        }).join("");

        const liveLink = project.liveLink ? project.liveLink.trim() : "";
        const githubLink = project.githubLink ? project.githubLink.trim() : "";

        projectCard.innerHTML = `
            <div class="project-gallery">
                ${projectImages}
            </div>

            ${project.images.length > 3 ? `
                <button class="toggle-project-gallery">
                    View All Screenshots (${project.images.length})
                </button>
            ` : ""}

            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>

                <div class="tech-tags">
                    ${techTags}
                </div>

                <div class="project-links">
                    ${liveLink && liveLink !== "#" ? `<a href="${liveLink}" target="_blank" rel="noopener noreferrer">View Project</a>` : ""}
                    ${githubLink && githubLink !== "#" ? `<a href="${githubLink}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Toggle project screenshots
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("toggle-project-gallery")) {
        const projectCard = event.target.closest(".project-card");
        projectCard.classList.toggle("gallery-open");

        if (projectCard.classList.contains("gallery-open")) {
            event.target.textContent = "Hide Screenshots";
        } else {
            const imageCount = projectCard.querySelectorAll(".project-gallery-image").length;
            event.target.textContent = `View All Screenshots (${imageCount})`;
        }
    }
});

// Drone Gallery data
const droneWorks = [
    {
        title: "UTP Aerial View",
        description: "Aerial drone shot capturing the campus landscape and architecture of Universiti Teknologi PETRONAS.",
        type: "image",
        file: "images/drone/utp-aerial-1.jpg"
    },
    {
        title: "UTP Golden Hour",
        description: "Drone shot of UTP during golden hour with a calm and cinematic atmosphere.",
        type: "image",
        file: "images/drone/utp-sunset.jpg"
    },
    {
        title: "Campus Cinematic Clip",
        description: "Short drone video capturing beautiful scenes around the campus area.",
        type: "video",
        file: "images/drone/utp-video-1.mp4"
    }
];

// Generate drone gallery
const droneContainer = document.getElementById("droneContainer");

if (droneContainer) {
    droneWorks.forEach((item) => {
        const droneCard = document.createElement("div");
        droneCard.className = "drone-card";

        let mediaElement = "";

        if (item.type === "video") {
            mediaElement = `
                <video controls preload="metadata">
                    <source src="${item.file}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            mediaElement = `
                <img 
                    class="zoomable-image"
                    src="${item.file}" 
                    alt="${item.title}"
                    onerror="this.style.display='none';"
                >
            `;
        }

        droneCard.innerHTML = `
            ${mediaElement}

            <div class="drone-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;

        droneContainer.appendChild(droneCard);
    });
}

// Activities data
const activities = [
    {
        title: "Head of Department of Society Project UTP Harmoni",
        role: "Head of Department",
        year: "2025",
        description: "Led and coordinated society project activities, managed team tasks, and supported programme execution.",
        folder: "utp-harmoni",
        images: ["1.jpg", "2.jpg", "3.jpg"],
        videos: []
    },
    {
        title: "Assistant Head of Department of Academic Outreach UTP Stellar Astronomy Club",
        role: "Assistant Head of Department",
        year: "2025",
        description: "Assisted in planning outreach programmes, coordinating participants, and supporting academic-related activities.",
        folder: "stellar-academic-outreach-assistant",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Head of Department of Academic Outreach UTP Stellar Astronomy Club",
        role: "Head of Department",
        year: "2025",
        description: "Led academic outreach initiatives and coordinated astronomy-related educational activities.",
        folder: "stellar-academic-outreach-hod",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Treasurer I of UTP Stellar Astronomy Club",
        role: "Treasurer",
        year: "2025",
        description: "Managed financial records, budgeting, and cash flow documentation for club activities.",
        folder: "stellar-treasurer",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Committee Members of Community Development of Google Development Student Club (GDSC)",
        role: "Committee Member",
        year: "2025",
        description: "Supported community development activities and assisted in programme coordination.",
        folder: "gdsc-community-development",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Supervisor of Lead Out Loud 2.0 2025",
        role: "Supervisor",
        year: "2025",
        description: "Supervised programme flow, supported committee members, and helped ensure smooth event execution.",
        folder: "lead-out-loud",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },

    {
    title: "Supervisor for Stargazing Department",
    role: "Supervisor",
    year: "2025",
    description: "Supervised stargazing-related activities, supported telescope handling, guided participants during observation sessions, and helped ensure a smooth astronomy experience.",
    folder: "stargazing-supervisor",
    images: ["1.jpg", "2.jpg"],
    videos: []
},

    {
        title: "Secretary of Stars of Hope 2025",
        role: "Secretary",
        year: "2025",
        description: "Handled documentation, meeting records, and administrative support for the programme.",
        folder: "stars-of-hope",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        videos: []
    },
    {
        title: "Facilitators of Look Up! Astronomy Camp 2025",
        role: "Facilitator",
        year: "2025",
        description: "Facilitated astronomy camp activities and guided participants throughout the programme.",
        folder: "look-up-astronomy-camp",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        videos: []
    },
    {
        title: "Assistant Project Director II of EcoMarine Quest 2025",
        role: "Assistant Project Director II",
        year: "2025",
        description: "Assisted in planning, coordination, and execution of the environmental-themed programme.",
        folder: "ecomarine-quest",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        videos: ["video1.mp4"]
    },
    {
        title: "Assistant Project Director of Pathway to Mossy Heaven 2026",
        role: "Assistant Project Director",
        year: "2026",
        description: "Assisted in managing logistics, coordination, and programme execution for the hiking event.",
        folder: "pathway-to-mossy-heaven",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
        videos: []
    },
    {
        title: "Treasurer of Misi Kasih Ramadhan 2025",
        role: "Treasurer",
        year: "2025",
        description: "Managed budgeting, financial tracking, and payment documentation for the charity programme.",
        folder: "misi-kasih-ramadhan",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"],
        videos: []
    },
    {
        title: "Head of Department of Public Relation & Sponsorship of Together for Tomorrow (MPU4)",
        role: "Head of PR & Sponsorship",
        year: "2025",
        description: "Led sponsorship and public relations efforts, including communication with external parties.",
        folder: "together-for-tomorrow",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Head of Department of Logistics of Tide Turner 2025",
        role: "Head of Logistics",
        year: "2025",
        description: "Managed logistics planning, item preparation, and operational support for the programme.",
        folder: "tide-turner",
        images: ["1.jpg", "2.jpg", "3.jpg"],
        videos: []
    },
    {
        title: "Head of Department of Sponsorship of Brainiac Math 2025",
        role: "Head of Sponsorship",
        year: "2025",
        description: "Led sponsorship planning and communication to support the event’s funding and resources.",
        folder: "brainiac-math",
        images: ["1.jpg", "2.jpg", "3.jpg"],
        videos: []
    },
    {
        title: "Project Director of Little STEM Explorers 2025",
        role: "Project Director",
        year: "2025",
        description: "Directed and coordinated the overall programme planning, committee work, and event execution.",
        folder: "little-stem-explorers",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
        videos: []
    },
    {
        title: "Committee of Sponsorship of PETRONAS Raya Run 2025",
        role: "Sponsorship Committee",
        year: "2025",
        description: "Supported sponsorship-related tasks and assisted in securing event support.",
        folder: "petronas-raya-run",
        images: ["1.jpg", "2.jpg"],
        videos: ["video1.mp4", "video2.mp4"]
    },
    {
        title: "Committee of F&B of Down To Earth 2024",
        role: "F&B Committee",
        year: "2024",
        description: "Assisted with food and beverage planning, preparation, and distribution during the event.",
        folder: "down-to-earth",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
        videos: []
    },
    {
        title: "Committee of Media of Foundation Entrepreneurship Day (FEXES) 2025",
        role: "Media Committee",
        year: "2025",
        description: "Captured event moments, supported media coverage, and contributed to visual documentation.",
        folder: "fexes",
        images: ["1.jpg", "2.jpg", "3.jpg"],
        videos: []
    },
    {
        title: "Committee of Media of School Attack Programme 2025",
        role: "Media Committee",
        year: "2025",
        description: "Handled event media coverage and supported content documentation throughout the programme.",
        folder: "school-attack",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        videos: []
    },
    {
        title: "Committee of Logistics of Young Scientist Camp 6 (YSC6) 2025",
        role: "Logistics Committee",
        year: "2025",
        description: "Supported logistics preparation, item management, and programme operations.",
        folder: "ysc6",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
        videos: ["video1.mp4"]
    },
    {
        title: "Committee of Logistics of Whisper of the Peak 2025",
        role: "Logistics Committee",
        year: "2025",
        description: "Assisted in logistics coordination and operational support for the programme.",
        folder: "whisper-of-the-peak",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Committee of Media of Cosmic Voyage Astronomy Camp 2025",
        role: "Media Committee",
        year: "2025",
        description: "Supported photography, videography, and media documentation for the astronomy camp.",
        folder: "cosmic-voyage",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Volunteer for Free Market Seri Iskandar 4.0 2024",
        role: "Volunteer",
        year: "2024",
        description: "Volunteered in community service activities and assisted with programme operations.",
        folder: "free-market-seri-iskandar",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
        videos: []
    },
    {
        title: "Volunteer of Zoo Negara 2025",
        role: "Volunteer",
        year: "2025",
        description: "Participated in volunteer activities and supported on-site programme tasks.",
        folder: "zoo-negara",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        videos: []
    },
    {
        title: "Participant of Cosmic Strikes: InterStellar Throwdown 2025",
        role: "Participant",
        year: "2025",
        description: "Participated in the programme and engaged in team-based activities.",
        folder: "cosmic-strikes",
        images: ["1.jpg", "2.jpg", "3.jpg"],
        videos: []
    },
    {
        title: "Participant of Oh My Code! 2026",
        role: "Participant",
        year: "2026",
        description: "Participated in a coding-related programme focused on teamwork, creativity, and problem-solving.",
        folder: "oh-my-code",
        images: ["1.jpg", "2.jpg", "3.jpg"],
        videos: []
    }
];

// Generate activity cards
const container = document.getElementById("activitiesContainer");

activities.forEach((activity) => {
    const card = document.createElement("div");
    card.className = "activity-card";

   const imageItems = activity.images.map((image, index) => {
    const filePath = `images/activities/${activity.folder}/${image}`;

    return `
        <div class="media-item">
            <img 
                class="zoomable-image"
                src="${filePath}" 
                alt="${activity.title} media"
                onerror="this.parentElement.style.display='none';"
            >

            <a 
                class="download-media-btn" 
                href="${filePath}" 
                download="${activity.folder}-photo-${index + 1}.${image.split('.').pop()}"
            >
                Download Original Picture
            </a>
        </div>
    `;
}).join("");

   const videoItems = activity.videos.map((video, index) => {
    const filePath = `images/activities/${activity.folder}/${video}`;

    return `
        <div class="media-item">
            <video controls preload="metadata" class="activity-video">
                <source src="${filePath}" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <a 
                class="download-media-btn" 
                href="${filePath}" 
                download="${activity.folder}-video-${index + 1}.${video.split('.').pop()}"
            >
                Download Original Video
            </a>
        </div>
    `;
}).join("");

    card.innerHTML = `
        <div class="activity-header">
            <div>
                <h3>${activity.title}</h3>
                <p class="activity-meta">${activity.role} • ${activity.year}</p>
            </div>

            <button class="toggle-media">Show Media</button>
        </div>

        <p class="activity-description">${activity.description}</p>

        <div class="activity-media">
            <div class="media-grid">
                ${imageItems}
                ${videoItems}
            </div>

        </div>
    `;

    container.appendChild(card);
});

// Show / hide media button
document.querySelectorAll(".toggle-media").forEach((button) => {
    button.addEventListener("click", function () {
        const mediaSection = this.closest(".activity-card").querySelector(".activity-media");
        mediaSection.classList.toggle("show");

        if (mediaSection.classList.contains("show")) {
            this.textContent = "Hide Media";
        } else {
            this.textContent = "Show Media";
        }
    });
});

// Image zoom modal
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

function openImageModal(imageSrc) {
    modalImage.src = imageSrc;
    imageModal.classList.add("show");
}

function closeImageModal() {
    imageModal.classList.remove("show");
    modalImage.src = "";
}

document.addEventListener("click", function (event) {
    const clickedImage = event.target.closest(".zoomable-image");

    if (clickedImage) {
        openImageModal(clickedImage.src);
    }
});

closeModal.addEventListener("click", closeImageModal);

imageModal.addEventListener("click", function (event) {
    if (event.target === imageModal) {
        closeImageModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeImageModal();
    }
});

// Double click video to fullscreen
document.addEventListener("dblclick", function (event) {
    if (event.target.matches(".activity-video")) {
        if (event.target.requestFullscreen) {
            event.target.requestFullscreen();
        }
    }
});

// =========================
// MODERN PORTFOLIO ANIMATIONS
// =========================

// Scroll progress bar
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.appendChild(progressBar);

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});

// Add reveal animation to sections and cards
function applyRevealAnimation() {
    const revealItems = document.querySelectorAll(
        ".about, .technical-skills, .experience, .projects, .drone-gallery, .contact-section, .activity-card, .project-card, .drone-card"
    );

    revealItems.forEach((item) => {
        item.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach((item) => observer.observe(item));
}

// Run after cards are generated
setTimeout(applyRevealAnimation, 300);

// Active navbar link while scrolling
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    document.querySelectorAll("section[id]").forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active-link");
        }
    });
});

// Cursor glow effect for desktop
const cursorGlow = document.createElement("div");
cursorGlow.className = "cursor-glow";
document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", function (event) {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
    cursorGlow.style.opacity = "1";
});

document.addEventListener("mouseleave", function () {
    cursorGlow.style.opacity = "0";
});

// Card tilt effect
document.addEventListener("mousemove", function (event) {
    const cards = document.querySelectorAll(".activity-card, .project-card, .drone-card");

    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const distanceX = event.clientX - cardCenterX;
        const distanceY = event.clientY - cardCenterY;

        if (
            event.clientX > rect.left &&
            event.clientX < rect.right &&
            event.clientY > rect.top &&
            event.clientY < rect.bottom
        ) {
            const rotateX = -(distanceY / 25);
            const rotateY = distanceX / 25;

            card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
            card.style.transform = "";
        }
    });
});

// Typewriter effect for hero title
const heroTitle = document.querySelector(".hero-title");

if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = "";

    let index = 0;

    function typeHeroText() {
        if (index < originalText.length) {
            heroTitle.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeHeroText, 35);
        }
    }

    setTimeout(typeHeroText, 600);
}

// Toggle project screenshots
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("toggle-project-gallery")) {
        const projectCard = event.target.closest(".project-card");
        projectCard.classList.toggle("gallery-open");

        if (projectCard.classList.contains("gallery-open")) {
            event.target.textContent = "Hide Screenshots";
        } else {
            const imageCount = projectCard.querySelectorAll(".project-gallery-image").length;
            event.target.textContent = `View All Screenshots (${imageCount})`;
        }
    }
});

// Fix project screenshot toggle
document.addEventListener("click", function (event) {
    const button = event.target.closest(".toggle-project-gallery");

    if (!button) return;

    const projectCard = button.closest(".project-card");
    const totalImages = projectCard.querySelectorAll(".project-gallery-image").length;

    projectCard.classList.toggle("gallery-open");

    if (projectCard.classList.contains("gallery-open")) {
        button.textContent = "Hide Screenshots";
    } else {
        button.textContent = `View All Screenshots (${totalImages})`;
    }
});