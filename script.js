// Toggle mobile / normal view
const viewModeBtn = document.getElementById("viewModeBtn");

viewModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("mobile-view");

    if (document.body.classList.contains("mobile-view")) {
        viewModeBtn.textContent = "View in Normal Mode";
    } else {
        viewModeBtn.textContent = "View in Mobile Mode";
    }
});

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
        title: "Secretary of Stars of Hope 2025",
        role: "Secretary",
        year: "2025",
        description: "Handled documentation, meeting records, and administrative support for the programme.",
        folder: "stars-of-hope",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Facilitators of Look Up! Astronomy Camp 2025",
        role: "Facilitator",
        year: "2025",
        description: "Facilitated astronomy camp activities and guided participants throughout the programme.",
        folder: "look-up-astronomy-camp",
        images: ["1.jpg", "2.jpg"],
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
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Treasurer of Misi Kasih Ramadhan 2025",
        role: "Treasurer",
        year: "2025",
        description: "Managed budgeting, financial tracking, and payment documentation for the charity programme.",
        folder: "misi-kasih-ramadhan",
        images: ["1.jpg", "2.jpg"],
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
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Head of Department of Sponsorship of Brainiac Math 2025",
        role: "Head of Sponsorship",
        year: "2025",
        description: "Led sponsorship planning and communication to support the event’s funding and resources.",
        folder: "brainiac-math",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Project Director of Little STEM Explorers 2025",
        role: "Project Director",
        year: "2025",
        description: "Directed and coordinated the overall programme planning, committee work, and event execution.",
        folder: "little-stem-explorers",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Committee of Sponsorship of PETRONAS Raya Run 2025",
        role: "Sponsorship Committee",
        year: "2025",
        description: "Supported sponsorship-related tasks and assisted in securing event support.",
        folder: "petronas-raya-run",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Committee of F&B of Down To Earth 2024",
        role: "F&B Committee",
        year: "2024",
        description: "Assisted with food and beverage planning, preparation, and distribution during the event.",
        folder: "down-to-earth",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Committee of Media of Foundation Entrepreneurship Day (FEXES) 2025",
        role: "Media Committee",
        year: "2025",
        description: "Captured event moments, supported media coverage, and contributed to visual documentation.",
        folder: "fexes",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Committee of Media of School Attack Programme 2025",
        role: "Media Committee",
        year: "2025",
        description: "Handled event media coverage and supported content documentation throughout the programme.",
        folder: "school-attack",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Committee of Logistics of Young Scientist Camp 6 (YSC6) 2025",
        role: "Logistics Committee",
        year: "2025",
        description: "Supported logistics preparation, item management, and programme operations.",
        folder: "ysc6",
        images: ["1.jpg", "2.jpg"],
        videos: []
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
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Volunteer of Zoo Negara 2025",
        role: "Volunteer",
        year: "2025",
        description: "Participated in volunteer activities and supported on-site programme tasks.",
        folder: "zoo-negara",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Participant of Cosmic Strikes: InterStellar Throwdown 2025",
        role: "Participant",
        year: "2025",
        description: "Participated in the programme and engaged in team-based activities.",
        folder: "cosmic-strikes",
        images: ["1.jpg", "2.jpg"],
        videos: []
    },
    {
        title: "Participant of Oh My Code! 2026",
        role: "Participant",
        year: "2026",
        description: "Participated in a coding-related programme focused on teamwork, creativity, and problem-solving.",
        folder: "oh-my-code",
        images: ["1.jpg", "2.jpg"],
        videos: []
    }
];

// Generate activity cards
const container = document.getElementById("activitiesContainer");

activities.forEach((activity) => {
    const card = document.createElement("div");
    card.className = "activity-card";

    const imageItems = activity.images.map((image) => {
        return `
            <img 
                src="images/activities/${activity.folder}/${image}" 
                alt="${activity.title} media"
                onerror="this.style.display='none';"
            >
        `;
    }).join("");

    const videoItems = activity.videos.map((video) => {
    return `
        <video controls preload="metadata" class="activity-video">
            <source src="images/activities/${activity.folder}/${video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
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

            <p class="no-media">
                Add your media files inside: 
                <strong>images/activities/${activity.folder}/</strong>
            </p>
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
const closeModal = document.querySelector(".close-modal");

document.addEventListener("click", function (event) {
    if (event.target.matches(".media-grid img")) {
        modalImage.src = event.target.src;
        imageModal.classList.add("show");
    }
});

closeModal.addEventListener("click", function () {
    imageModal.classList.remove("show");
    modalImage.src = "";
});

imageModal.addEventListener("click", function (event) {
    if (event.target === imageModal) {
        imageModal.classList.remove("show");
        modalImage.src = "";
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        imageModal.classList.remove("show");
        modalImage.src = "";
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