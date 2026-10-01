/* ========================================
   CYBER STALKING CASE ANALYSIS
   Application Logic
   ======================================== */

// ---- Evidence Data ----
const evidenceData = [
    {
        id: "EV-001",
        type: "communication",
        title: "Fake Instagram Profile Activity",
        description: "Screenshots of fake account '@travel_wanderer_22' showing systematic engagement with victim's posts including likes, comments, and story views over a 3-day period.",
        date: "April 5, 2026",
        hash: "SHA-256: a3f7b2...c91d",
        format: "PNG Screenshots (12 files)"
    },
    {
        id: "EV-002",
        type: "communication",
        title: "Facebook Direct Messages",
        description: "Full message thread from fake account '@_anonymous_friend_' containing references to victim's daily schedule, workplace details, and recent personal activities.",
        date: "April 18, 2026",
        hash: "SHA-256: d82e1f...4a7b",
        format: "HTML Export + Screenshots"
    },
    {
        id: "EV-003",
        type: "network",
        title: "Anonymous Email Headers & Content",
        description: "Complete email archive from 'no.one.knows.you@protonmail.com' including full SMTP headers showing VPN exit nodes, routing information, and threatening message content.",
        date: "May 2–July 2026",
        hash: "SHA-256: f45c8d...e312",
        format: "EML Files (8 emails)"
    },
    {
        id: "EV-004",
        type: "network",
        title: "Google Security Alert Logs",
        description: "Google account security notifications showing unauthorized login attempts from IP 103.87.xx.xx with timestamps, geolocation data, and device information.",
        date: "May 20, 2026",
        hash: "SHA-256: 71ab3e...9f04",
        format: "PDF Export + JSON Logs"
    },
    {
        id: "EV-005",
        type: "device",
        title: "Mobile Forensic Report — Spyware",
        description: "Cellebrite UFED extraction report from victim's Samsung Galaxy A54 containing TrackMate Pro spyware binary, installation logs, configuration files, and exfiltration server details.",
        date: "June 8, 2026",
        hash: "SHA-256: 9c2d7b...1e8a",
        format: "Cellebrite Report + APK Binary"
    },
    {
        id: "EV-006",
        type: "media",
        title: "Morphed Images & EXIF Data",
        description: "Digitally manipulated images posted on anonymous forum with embedded EXIF metadata containing Adobe Photoshop serial key, edit timestamps, and original source file references.",
        date: "June 25, 2026",
        hash: "SHA-256: 2f8e4a...b7c3",
        format: "JPEG/PNG + EXIF Dump"
    },
    {
        id: "EV-007",
        type: "device",
        title: "GPS Logs Correlation Report",
        description: "Cross-referenced GPS coordinates from spyware data logs with physical surveillance incidents. Demonstrates real-time location tracking minutes before each physical encounter.",
        date: "July 10, 2026",
        hash: "SHA-256: 5d1f9c...a4e2",
        format: "CSV Logs + Map Visualization"
    },
    {
        id: "EV-008",
        type: "communication",
        title: "WhatsApp Threat Messages",
        description: "Forensic export of WhatsApp conversation from unregistered number (+91-98XXX-XXXXX) containing explicit death threats, references to victim's home address, and daily routine details.",
        date: "July 28, 2026",
        hash: "SHA-256: 8a3b6e...d1f5",
        format: "WhatsApp Crypt15 Decrypted"
    },
    {
        id: "EV-009",
        type: "communication",
        title: "FIR & Complaint Documentation",
        description: "Original FIR No. 472/2026 document registered at Cyber Crime Cell, Mumbai with detailed complaint narrative and supporting evidence list.",
        date: "August 12, 2026",
        hash: "SHA-256: c7e2d4...6b9f",
        format: "PDF Document"
    },
    {
        id: "EV-010",
        type: "network",
        title: "ISP Records — IP Attribution",
        description: "Subpoenaed ISP (Reliance Jio) records linking IP address 103.87.xx.xx to subscriber account at physical address in Andheri West, Mumbai matching suspect's residence.",
        date: "August 2026",
        hash: "SHA-256: 4f6a1d...c823",
        format: "Official ISP Response PDF"
    },
    {
        id: "EV-011",
        type: "device",
        title: "Suspect Laptop Forensic Image",
        description: "EnCase forensic image of suspect's Dell Inspiron 15. Analysis revealed browser history, fake account credentials in browser autofill, Photoshop editing history, and spyware admin panel access logs.",
        date: "August 2026",
        hash: "SHA-256: e91c3f...7d4a",
        format: "E01 Forensic Image (256GB)"
    },
    {
        id: "EV-012",
        type: "network",
        title: "VPN Payment Records",
        description: "PayPal transaction records showing ProtonVPN subscription payment from account linked to suspect's email address (ar***@gmail.com).",
        date: "March 2026",
        hash: "SHA-256: 3b7e5a...f129",
        format: "PDF Transaction Receipts"
    },
    {
        id: "EV-013",
        type: "device",
        title: "Suspect Mobile Forensic Report",
        description: "Cellebrite extraction from suspect's Samsung Galaxy S24. Contains WhatsApp DB matching threat messages, gallery with surveillance photos of victim, and TrackMate Pro admin app.",
        date: "August 2026",
        hash: "SHA-256: 6d4c8b...a235",
        format: "Cellebrite Report + DB Dumps"
    },
    {
        id: "EV-014",
        type: "media",
        title: "CCTV Footage — SIM Purchase",
        description: "Retail store CCTV footage showing suspect purchasing the prepaid SIM card used to register fake Instagram account. Timestamp and location corroborated with telecom records.",
        date: "April 3, 2026",
        hash: "SHA-256: 1a9f7c...e4d8",
        format: "MP4 Video (1080p)"
    }
];

// ---- Render Evidence Cards ----
function renderEvidence(filter = "all") {
    const grid = document.getElementById("evidence-grid");
    grid.innerHTML = "";

    const filtered = filter === "all"
        ? evidenceData
        : evidenceData.filter(e => e.type === filter);

    filtered.forEach((ev, index) => {
        const card = document.createElement("div");
        card.className = "evidence-card";
        card.style.animationDelay = `${index * 0.08}s`;
        card.setAttribute("data-type", ev.type);

        card.innerHTML = `
            <div class="evidence-card-header">
                <span class="evidence-id">${ev.id}</span>
                <span class="evidence-type-badge evidence-type-${ev.type}">${ev.type}</span>
            </div>
            <h4>${ev.title}</h4>
            <p>${ev.description}</p>
            <div class="evidence-meta">
                <div class="evidence-meta-item">
                    <span class="evidence-meta-label">Date</span>
                    <span class="evidence-meta-value">${ev.date}</span>
                </div>
                <div class="evidence-meta-item">
                    <span class="evidence-meta-label">Hash</span>
                    <span class="evidence-meta-value">${ev.hash}</span>
                </div>
                <div class="evidence-meta-item">
                    <span class="evidence-meta-label">Format</span>
                    <span class="evidence-meta-value">${ev.format}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ---- Evidence Filter Buttons ----
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderEvidence(btn.dataset.filter);
    });
});

// ---- Stat Counter Animation ----
function animateCounters() {
    document.querySelectorAll(".stat-number[data-target]").forEach(el => {
        const target = parseInt(el.dataset.target);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

// ---- Threat Bar Animation ----
function animateThreatBars() {
    document.querySelectorAll(".threat-fill").forEach(bar => {
        bar.classList.add("animated");
    });
}

// ---- Navigation Active State ----
function updateNav() {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 200;
        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.dataset.section === current) {
            link.classList.add("active");
        }
    });

    // Nav scroll state
    const nav = document.getElementById("main-nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

// ---- Smooth Scroll ----
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.section);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ---- Network Canvas Visualization ----
function initNetworkCanvas() {
    const canvas = document.getElementById("network-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth * window.devicePixelRatio;
        canvas.height = container.clientHeight * window.devicePixelRatio;
        canvas.style.width = container.clientWidth + "px";
        canvas.style.height = container.clientHeight + "px";
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.clientWidth;
    const h = () => canvas.clientHeight;

    // Nodes
    const nodes = [
        { id: "suspect", label: "Suspect", x: 0.5, y: 0.5, r: 28, color: "#f43f5e", type: "primary" },
        { id: "fake_ig", label: "Fake Instagram", x: 0.2, y: 0.2, r: 18, color: "#a855f7", type: "account" },
        { id: "fake_fb", label: "Fake Facebook", x: 0.15, y: 0.55, r: 18, color: "#6366f1", type: "account" },
        { id: "protonmail", label: "Protonmail", x: 0.25, y: 0.8, r: 18, color: "#22d3ee", type: "service" },
        { id: "vpn", label: "ProtonVPN", x: 0.4, y: 0.15, r: 16, color: "#10b981", type: "service" },
        { id: "spyware", label: "TrackMate Pro", x: 0.75, y: 0.2, r: 20, color: "#f59e0b", type: "tool" },
        { id: "c2_server", label: "C2 Server", x: 0.88, y: 0.35, r: 16, color: "#dc2626", type: "infrastructure" },
        { id: "whatsapp", label: "WhatsApp", x: 0.78, y: 0.75, r: 18, color: "#10b981", type: "communication" },
        { id: "forum", label: "Anon Forum", x: 0.35, y: 0.7, r: 16, color: "#ec4899", type: "platform" },
        { id: "victim", label: "Victim", x: 0.55, y: 0.82, r: 24, color: "#22d3ee", type: "primary" },
        { id: "btc", label: "Bitcoin", x: 0.65, y: 0.4, r: 14, color: "#f59e0b", type: "payment" },
        { id: "sim", label: "Prepaid SIM", x: 0.12, y: 0.38, r: 14, color: "#94a3b8", type: "physical" },
        { id: "laptop", label: "Dell Laptop", x: 0.6, y: 0.15, r: 16, color: "#6366f1", type: "device" },
    ];

    const edges = [
        { from: "suspect", to: "fake_ig" },
        { from: "suspect", to: "fake_fb" },
        { from: "suspect", to: "protonmail" },
        { from: "suspect", to: "vpn" },
        { from: "suspect", to: "spyware" },
        { from: "suspect", to: "whatsapp" },
        { from: "suspect", to: "btc" },
        { from: "suspect", to: "laptop" },
        { from: "suspect", to: "sim" },
        { from: "spyware", to: "c2_server" },
        { from: "spyware", to: "victim" },
        { from: "fake_ig", to: "victim" },
        { from: "fake_fb", to: "victim" },
        { from: "protonmail", to: "victim" },
        { from: "whatsapp", to: "victim" },
        { from: "forum", to: "victim" },
        { from: "vpn", to: "protonmail" },
        { from: "btc", to: "spyware" },
        { from: "sim", to: "fake_ig" },
        { from: "laptop", to: "forum" },
        { from: "suspect", to: "forum" },
    ];

    let animTime = 0;

    function getNode(id) {
        return nodes.find(n => n.id === id);
    }

    function draw() {
        animTime += 0.005;
        ctx.clearRect(0, 0, w(), h());

        // Draw edges
        edges.forEach(edge => {
            const from = getNode(edge.from);
            const to = getNode(edge.to);
            const x1 = from.x * w();
            const y1 = from.y * h();
            const x2 = to.x * w();
            const y2 = to.y * h();

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = "rgba(99, 102, 241, 0.12)";
            ctx.lineWidth = 1;
            ctx.stroke();

            // Animated dot along edge
            const t = (Math.sin(animTime * 2 + from.x * 10 + to.y * 5) + 1) / 2;
            const dotX = x1 + (x2 - x1) * t;
            const dotY = y1 + (y2 - y1) * t;
            ctx.beginPath();
            ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(99, 102, 241, 0.3)";
            ctx.fill();
        });

        // Draw nodes
        nodes.forEach(node => {
            const x = node.x * w();
            const y = node.y * h();
            const wobbleX = Math.sin(animTime + node.x * 5) * 3;
            const wobbleY = Math.cos(animTime + node.y * 5) * 3;
            const nx = x + wobbleX;
            const ny = y + wobbleY;

            // Glow
            const glow = ctx.createRadialGradient(nx, ny, 0, nx, ny, node.r * 2.5);
            glow.addColorStop(0, node.color + "30");
            glow.addColorStop(1, "transparent");
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(nx, ny, node.r * 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Circle
            ctx.beginPath();
            ctx.arc(nx, ny, node.r, 0, Math.PI * 2);
            ctx.fillStyle = node.color + "20";
            ctx.fill();
            ctx.strokeStyle = node.color + "80";
            ctx.lineWidth = 2;
            ctx.stroke();

            // Label
            ctx.fillStyle = "#e2e8f0";
            ctx.font = `${node.type === 'primary' ? '600' : '500'} ${node.type === 'primary' ? '11' : '9'}px Inter, sans-serif`;
            ctx.textAlign = "center";
            ctx.fillText(node.label, nx, ny + node.r + 16);
        });

        requestAnimationFrame(draw);
    }

    draw();
}

// ---- Intersection Observer for Animations ----
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === "hero") {
                    animateCounters();
                }
                if (entry.target.id === "analysis") {
                    setTimeout(animateThreatBars, 300);
                }
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".section, #hero").forEach(section => {
        observer.observe(section);
    });
}

// ---- Download Report as Text ----
function downloadReport() {
    const reportText = `
================================================================================
                    DIGITAL FORENSICS INVESTIGATION REPORT
                          CASE NO: CF-2026-0472
================================================================================

Classification: CONFIDENTIAL
Date: September 15, 2026
Jurisdiction: Cyber Crime Cell, Mumbai
Lead Investigator: Inspector Rajesh Mehra

--------------------------------------------------------------------------------
1. EXECUTIVE SUMMARY
--------------------------------------------------------------------------------

This report presents the findings of a comprehensive digital forensic 
investigation into cyber stalking activities reported by the complainant 
(Ms. Priya Sharma) against the primary suspect (Mr. Arjun Kapoor). The 
investigation was conducted by the Cyber Crime Cell, Mumbai, under FIR 
No. 472/2026.

Over the course of the investigation:
- 14 items of digital evidence were collected
- 23 distinct digital traces were identified  
- 9 incidents were documented spanning April-August 2026

The evidence strongly supports the complainant's allegations and provides 
a high-confidence identification of the suspect.

--------------------------------------------------------------------------------
2. CASE INFORMATION
--------------------------------------------------------------------------------

Case Number:        CF-2026-0472
Date Filed:         August 12, 2026
FIR Number:         472/2026
Jurisdiction:       Cyber Crime Cell, Mumbai
Applicable Laws:    IT Act 2000, Section 354D IPC

Victim:             Ms. Priya Sharma (Name Changed), Age 28
                    Software Engineer, Mumbai, Maharashtra

Suspect:            Mr. Arjun Kapoor (Name Changed), Age 31
                    Former Colleague, Known to Victim

--------------------------------------------------------------------------------
3. INCIDENT TIMELINE
--------------------------------------------------------------------------------

April 5, 2026 [LOW]
    - Fake Instagram account "@travel_wanderer_22" created
    - Systematic engagement with victim's posts over 3 days

April 18, 2026 [LOW]
    - Second fake account "@_anonymous_friend_" on Facebook
    - Direct messages referencing victim's daily schedule

May 2, 2026 [MEDIUM]
    - Anonymous email harassment from Protonmail account
    - Threatening language and unauthorized photographs

May 20, 2026 [MEDIUM]
    - Multiple unauthorized login attempts on victim's Gmail/LinkedIn
    - Source IP: 103.87.xx.xx (Reliance Jio, Mumbai)

June 8, 2026 [HIGH]
    - Commercial spyware "TrackMate Pro" discovered on victim's device
    - GPS, calls, SMS, and keystrokes being exfiltrated

June 25, 2026 [HIGH]
    - Morphed images of victim posted on anonymous forum
    - EXIF metadata traced to suspect's Adobe Photoshop license

July 10, 2026 [HIGH]
    - Physical following confirmed via GPS log correlation
    - Real-time location accessed minutes before encounters

July 28, 2026 [CRITICAL]
    - Death threats received via WhatsApp
    - Messages reference victim's home address and routine

August 12, 2026 [CRITICAL]
    - FIR filed at Cyber Crime Cell, Mumbai
    - Formal investigation initiated

--------------------------------------------------------------------------------
4. DIGITAL TRACES IDENTIFIED
--------------------------------------------------------------------------------

IP & NETWORK TRACES:
  DT-001: Source IP 103.87.xx.xx linked to suspect's residence
  DT-002: VPN payment traced to suspect's PayPal account
  DT-003: C2 server registration traced to suspect's email
  DT-004: Device MAC address at victim's workplace Wi-Fi

DEVICE & BROWSER FINGERPRINTS:
  DT-005: Unique Canvas fingerprint matching across platforms
  DT-006: Consistent User-Agent string matching seized laptop
  DT-007: IMEI from WhatsApp matched suspect's Samsung Galaxy S24
  DT-008: Photoshop license key in EXIF linked to suspect

ACCOUNT & IDENTITY TRACES:
  DT-009: Email recovery phone matching suspect's secondary SIM
  DT-010: Instagram registration SIM purchased by suspect (CCTV)
  DT-011: Password reuse pattern consistent with suspect
  DT-012: Cryptocurrency payment traced via blockchain analysis

BEHAVIORAL & METADATA TRACES:
  DT-013: Activity timing pattern matches suspect's usage
  DT-014: Stylometric analysis: 94.2% writing similarity
  DT-015: Photo EXIF geolocation matching victim's locations
  DT-016: Incriminating search history on seized laptop

--------------------------------------------------------------------------------
5. APPLICABLE LEGAL SECTIONS
--------------------------------------------------------------------------------

  Section 354D IPC - Stalking
  Section 66E IT Act - Violation of Privacy  
  Section 67 IT Act - Publishing Obscene Material
  Section 506 IPC - Criminal Intimidation
  Section 43 IT Act - Unauthorized Access
  Section 66 IT Act - Computer Related Offences

--------------------------------------------------------------------------------
6. FORENSIC TOOLS USED
--------------------------------------------------------------------------------

  - Cellebrite UFED (Mobile forensic extraction)
  - EnCase Forensic (Disk imaging & analysis)
  - Wireshark (Network traffic analysis)
  - Autopsy 4.x (Digital forensics platform)
  - Maltego (OSINT & link analysis)
  - Chainalysis Reactor (Cryptocurrency tracing)
  - FTK Imager (Forensic disk imaging)
  - Writeprints (Stylometric analysis)

--------------------------------------------------------------------------------
7. THREAT ASSESSMENT
--------------------------------------------------------------------------------

  Physical Harm Risk:                 85% [CRITICAL]
  Digital Intrusion Level:            92% [HIGH]
  Escalation Probability:             78% [HIGH]
  Evidence Strength:                  95% [STRONG]
  Suspect Identification Confidence:  91% [STRONG]

--------------------------------------------------------------------------------
8. CONCLUSIONS
--------------------------------------------------------------------------------

Digital evidence conclusively establishes a sustained cyber stalking 
campaign by the suspect against the victim over approximately 4 months. 
The evidence meets the evidentiary threshold for prosecution under all 
cited sections of the IPC and IT Act.

RECOMMENDED ACTIONS:
  1. Immediate arrest of suspect under non-bailable provisions
  2. Protective order for victim under Section 18 of PWDV Act
  3. Seizure of suspect's remaining digital devices
  4. Takedown requests for fake social media accounts
  5. Referral to Victim Support Services
  6. Charge sheet filing with all 14 evidence items (Sec 65B compliant)

--------------------------------------------------------------------------------
9. CHAIN OF CUSTODY
--------------------------------------------------------------------------------

All digital evidence was collected, preserved, and analyzed following 
standard forensic protocols. Chain of custody documentation maintained 
for all 14 evidence items. Forensic images verified with SHA-256 hashes. 
Evidence handling complies with Indian Evidence Act (Section 65B).

================================================================================

Signed:

________________________                    ________________________
Inspector Rajesh Mehra                       Dr. Ananya Desai
Lead Investigating Officer                   Digital Forensics Expert
Cyber Crime Cell, Mumbai                     Certified Computer Examiner
Date: September 15, 2026                     Date: September 15, 2026

================================================================================
              THIS DOCUMENT IS CONFIDENTIAL - FOR OFFICIAL USE ONLY
================================================================================
`;

    const blob = new Blob([reportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CyberStalking_Investigation_Report_CF-2026-0472.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ---- Initialize ----
window.addEventListener("scroll", updateNav);

document.addEventListener("DOMContentLoaded", () => {
    renderEvidence();
    initNetworkCanvas();
    setupIntersectionObserver();
    updateNav();
    animateCounters();
});
