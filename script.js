"use strict";

const navigation = [
  ["Dashboard", "▦"],
  ["Roadmap", "✧"],
  ["SAT Prep", "▤"],
  ["ACT Prep", "◷"],
  ["Colleges", "⌂"],
  ["Scholarships", "◇"],
  ["Internships", "▱"],
  ["Opportunities", "✦"],
  ["Applications", "▣"],
  ["Profile Analyzer", "▥"],
  ["Future Simulator", "↗"],
  ["AI Counselor", "☏"],
  ["Settings", "⚙"],
];

const state = {
  view: "landing",
  page: "Dashboard",
  onboardingStep: 1,
  profile: {
    grade: "11th grade",
    gpa: "",
    location: "",
    sat: "",
    act: "",
    major: "",
    colleges: "",
    careers: [],
    activities: [],
    volunteerHours: "",
    leadership: "",
    awards: "",
    notes: "",
  },
  chatMessages: [
    "Hey Jordan! I’ve been looking at your roadmap and I’m here to help you figure out whatever’s next. What’s on your mind?",
  ],
};

const icons = {
  Arrow: "→",
  Star: "✦",
  Check: "✓",
  Target: "◎",
  Flame: "♨",
  Calendar: "▦",
  Book: "▤",
  Award: "◇",
  Work: "▱",
  Heart: "♡",
  Graduation: "⌂",
  Spark: "✧",
  Chart: "▥",
};

const opportunities = {
  Scholarships: [
    ["◇", "Hispanic Heritage Youth Awards", "Hispanic Heritage Foundation", "$5,000 award · 2 days left", "94% match", "Deadline soon", "gold"],
    ["★", "Coca-Cola Scholars Program", "Coca-Cola Scholars Foundation", "$20,000 award · 24 days left", "89% match", "Leadership", "red"],
    ["⌂", "Amazon Future Engineer", "Amazon Future Engineer", "$40,000 award · 38 days left", "91% match", "Computer Science", "blue"],
  ],
  Internships: [
    ["▱", "Girls Who Code Summer Immersion", "Girls Who Code", "Summer program · Remote", "91% match", "Applications open", "purple"],
    ["✦", "NASA High School Internship", "NASA OSTEM", "Paid internship · Washington, DC", "87% match", "STEM", "blue"],
    ["⌘", "AI4ALL Summer Program", "AI4ALL", "Summer program · 6 weeks", "95% match", "Computer Science", "green"],
  ],
  Opportunities: [
    ["♜", "Congressional App Challenge", "U.S. House of Representatives", "Competition · 41 days left", "93% match", "Build something", "gold"],
    ["◎", "Technovation Girls Challenge", "Technovation", "Global competition · Team-based", "88% match", "Leadership", "green"],
    ["♡", "Code for Good — Community Lab", "Code.org", "Volunteer · Flexible hours", "90% match", "Service", "red"],
  ],
};

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function show(view) {
  state.view = view;
  document.querySelector("#landing-view").hidden = view !== "landing";
  document.querySelector("#onboarding-view").hidden = view !== "onboarding";
  document.querySelector("#signin-view").hidden = view !== "signin";
  document.querySelector("#workspace-view").hidden = view !== "workspace";
  if (view === "onboarding") renderOnboarding();
  if (view === "workspace") renderWorkspace();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderWorkspace() {
  const nav = document.querySelector("#sidebar-nav");
  nav.innerHTML = navigation.map(([name, glyph]) => `
    <button class="side-link ${state.page === name ? "active" : ""}" data-page="${escapeHTML(name)}">
      <span class="side-icon">${glyph}</span><span>${escapeHTML(name)}</span>
      ${name === "Applications" ? '<span class="side-count">4</span>' : ""}
      ${name === "AI Counselor" ? '<span class="side-star">✦</span>' : ""}
    </button>
  `).join("");
  document.querySelector("#current-page").textContent = state.page;
  document.querySelector("#page-content").innerHTML = pageContent(state.page);
}

function pageHeader(eyebrow, title, subtitle, action = "") {
  return `<div class="page-heading"><div><div class="date-label">${eyebrow}</div><h1>${title}</h1><p>${subtitle}</p></div>${action}</div>`;
}

function statCard(glyph, tone, label, value, note, trend = "") {
  return `<article class="stat-card"><span class="stat-icon ${tone}">${glyph}</span><span class="stat-label">${label}</span><div class="stat-value">${value}</div><div class="stat-note">${trend ? `<b class="trend-up">↗ ${trend}</b>` : ""}${note}</div></article>`;
}

function chartMarkup() {
  return `<div class="chart-box"><svg viewBox="0 0 520 170" preserveAspectRatio="none" role="img" aria-label="SAT score trend rising">
    <defs><linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#7559e8" stop-opacity=".16"></stop><stop offset="100%" stop-color="#7559e8" stop-opacity="0"></stop></linearGradient></defs>
    <path class="chart-grid" d="M35 28H515 M35 83H515 M35 138H515"></path>
    <path class="chart-area" d="M35 130 C70 118 85 105 115 111 S165 95 190 101 S230 75 260 82 S310 66 335 67 S380 42 415 52 S460 20 515 24 V145 H35Z"></path>
    <path class="chart-line" d="M35 130 C70 118 85 105 115 111 S165 95 190 101 S230 75 260 82 S310 66 335 67 S380 42 415 52 S460 20 515 24"></path>
    <text class="chart-axis" x="35" y="162">Aug 12</text><text class="chart-axis" x="190" y="162">Aug 26</text><text class="chart-axis" x="348" y="162">Sep 9</text><text class="chart-axis" x="480" y="162">Sep 23</text>
  </svg></div>`;
}

function dashboardPage() {
  return `<div class="welcome"><div><div class="date-label">TUESDAY, NOVEMBER 24, 2026</div><h1>Good morning, Jordan <span>✦</span></h1><p>You’re making real progress. Let’s keep it going.</p></div><button class="button button-secondary" data-page="Roadmap">✧ &nbsp; View my roadmap &nbsp; →</button></div>
    <div class="stats-grid">
      ${statCard("◎", "tone-purple", "PROFILE STRENGTH", "78", "vs. last month", "+6 pts")}
      ${statCard("♨", "tone-orange", "STUDY STREAK", "12 days", "Personal best: 16 days")}
      ${statCard("✓", "tone-green", "ROADMAP PROGRESS", "64%", "12 of 19 milestones", "+8%")}
      ${statCard("▦", "tone-blue", "NEXT DEADLINE", "12 days", "Stanford · Early action")}
    </div>
    <div class="content-grid">
      <section class="panel"><div class="panel-heading"><div><h2>Your progress</h2><p>A little better every week.</p></div><button class="select-button">Last 7 weeks⌄</button></div><div class="chart-legend"><span><i class="legend-dot"></i>SAT score</span><span class="chart-current">1390 <small>+270 pts</small></span></div>${chartMarkup()}<button class="panel-link" data-page="SAT Prep">View test prep progress &nbsp; →</button></section>
      <section class="panel"><div class="panel-heading"><div><h2>Coming up</h2><p>The next few things on your list.</p></div><button class="icon-button">•••</button></div><div class="deadline-list">
        <div class="deadline-item"><div class="deadline-date urgent"><b>06</b><small>DEC</small></div><div class="deadline-info"><b>Stanford Early Action</b><span>College application · 12 days</span></div><span class="deadline-tag">High priority</span></div>
        <div class="deadline-item"><div class="deadline-date"><b>12</b><small>DEC</small></div><div class="deadline-info"><b>Bright Futures Scholarship</b><span>Scholarship · $2,500 award</span></div><span class="deadline-tag tag-purple">In progress</span></div>
        <div class="deadline-item"><div class="deadline-date"><b>19</b><small>DEC</small></div><div class="deadline-info"><b>Digital SAT practice test</b><span>Test prep · 1 hour</span></div><span class="deadline-tag tag-gray">Planned</span></div>
      </div><button class="panel-link" data-page="Applications">View all deadlines &nbsp; →</button></section>
    </div>
    <div class="two-column">
      <section class="panel"><div class="panel-heading"><div><h2>Today’s focus</h2><p>Three small wins. You’ve got this.</p></div><span class="deadline-tag tag-purple">1 of 3</span></div><div class="goal-list">
        <button class="goal-row complete"><span class="goal-check">✓</span><span><b>Finish algebra practice set</b><small>SAT Math · 20 min</small></span><small>Done</small></button>
        <button class="goal-row"><span class="goal-check"></span><span><b>Outline personal statement</b><small>Applications · 30 min</small></span><span>→</span></button>
        <button class="goal-row"><span class="goal-check"></span><span><b>Review 3 new scholarships</b><small>Opportunity search · 10 min</small></span><span>→</span></button>
      </div><button class="add-goal">＋ Add a goal</button></section>
      <section class="panel"><div class="panel-heading"><div><h2>Picked for you</h2><p>Good things, matched to your goals.</p></div><button class="icon-button" data-page="Opportunities">→</button></div>
        <button class="match-row" data-page="Scholarships"><span class="match-icon gold">◇</span><span><b>Hispanic Heritage Youth Awards</b><small>Scholarship · $5,000 · 94% match</small></span><span>›</span></button>
        <button class="match-row" data-page="Internships"><span class="match-icon blue">▱</span><span><b>Girls Who Code SIP</b><small>Summer program · Remote · 91% match</small></span><span>›</span></button>
        <button class="match-row" data-page="Colleges"><span class="match-icon purple">⌂</span><span><b>UC Berkeley</b><small>College · 92% fit · Reach</small></span><span>›</span></button>
      </section>
    </div>`;
}

function roadmapPage() {
  const months = [
    ["OCTOBER", "Build your foundation", ["Complete your student profile", "Take your first SAT diagnostic", "Start your personal statement brainstorm"], "Complete", "done"],
    ["NOVEMBER", "Show what makes you, you", ["Submit Stanford early action application", "Attend a local hackathon", "Request recommendation letters"], "In progress", "active"],
    ["DECEMBER", "Make your next move", ["Finalize your college shortlist", "Apply for 3 matched scholarships", "Take the December SAT"], "Up next", "next"],
    ["JANUARY — FEBRUARY", "Bring it all together", ["Submit regular decision applications", "Complete your financial aid profile", "Celebrate how far you’ve come"], "Coming soon", "next"],
  ];
  return `${pageHeader("YOUR PERSONAL GAME PLAN", "The path is yours.", "A plan built around your goals, one doable step at a time.", '<button class="button button-secondary">▦ &nbsp; View calendar</button>')}
    <div class="banner"><span class="banner-icon">✦</span><div class="banner-copy"><b>Made for your Computer Science future</b><p>Based on your profile, here’s your roadmap to becoming a competitive CS applicant.</p></div><div class="banner-score">78<small>profile strength</small></div></div>
    <div class="timeline">${months.map(([month, title, tasks, status, tone], index) => `<div class="timeline-row"><div class="timeline-marker"><span class="timeline-dot ${tone}">${tone === "done" ? "✓" : index + 1}</span></div><article class="timeline-card"><div class="timeline-card-head"><div><span class="date-label">${month}</span><h3>${title}</h3></div><span class="status-pill status-${tone}">${status}</span></div>${tasks.map((task, taskIndex) => `<div class="timeline-task"><span>${tone === "done" || (tone === "active" && taskIndex === 0) ? "☑" : "☐"}</span>${task}<span>›</span></div>`).join("")}</article></div>`).join("")}</div>`;
}

function testPrepPage(test) {
  const isAct = test === "ACT Prep";
  const exam = isAct ? "ACT" : "SAT";
  return `${pageHeader(`${exam} PREP · YOUR PROGRESS`, `Your ${exam} game plan.`, "Build confidence with a study plan that adapts to you.", '<button class="button button-primary">✦ &nbsp; Start practice</button>')}
    <div class="stats-grid">${statCard("◎", "tone-purple", "LATEST PRACTICE", isAct ? "29" : "1390", `${exam} · Nov 16`)}${statCard("↗", "tone-green", "SCORE CHANGE", isAct ? "+4 pts" : "+270", "Since your first test", "On track")}${statCard("♨", "tone-orange", "STUDY STREAK", "12 days", "Your best is 16")}${statCard("◷", "tone-blue", "TIME INVESTED", "18.5 hrs", "Across 34 sessions")}</div>
    <div class="content-grid"><section class="panel"><div class="panel-heading"><div><h2>Score over time</h2><p>Your practice is paying off.</p></div><button class="select-button">Last 7 weeks⌄</button></div><div class="chart-legend"><span><i class="legend-dot"></i>Practice score</span><span class="chart-current">${isAct ? "29" : "1390"} <small>target ${isAct ? "33" : "1500"}</small></span></div>${chartMarkup()}</section><section class="panel"><div class="panel-heading"><div><h2>Skills to sharpen</h2><p>Your next best opportunities.</p></div></div>${[["Reading & Writing", 82, "Strong foundation — keep it up", ""], ["Algebra & Functions", 68, "Try 2 focused practice sets", "blue"], ["Geometry & Trig", 54, "Build confidence here", "gold"]].map(([label, percent, note, tone]) => `<div class="skill-row"><div class="skill-head"><span>${label}</span><b>${percent}%</b></div><div class="skill-track"><i class="${tone}" style="width:${percent}%"></i></div><small>${note}</small></div>`).join("")}<button class="button button-secondary full-width" style="margin-top:20px">◎ &nbsp; See your personalized study plan</button></section></div>`;
}

function collegesPage() {
  const schools = [
    ["UC", "cal", "REACH", "92%", "University of California, Berkeley", "Berkeley, California", "11%", "$14,760", "Top 3 for Computer Science"],
    ["W", "wash", "TARGET", "88%", "University of Washington", "Seattle, Washington", "48%", "$12,973", "Top 10 for Computer Science"],
    ["O", "ore", "SAFETY", "96%", "University of Oregon", "Eugene, Oregon", "86%", "$15,240", "Strong CS & entrepreneurship"],
  ];
  return `${pageHeader("YOUR COLLEGE SHORTLIST", "Find your kind of place.", "A thoughtful shortlist, matched to what matters to you.", '<button class="button button-secondary">＋ &nbsp; Add a college</button>')}
    <div class="college-summary"><span><i class="school-dot reach-dot"></i>3 reach</span><span><i class="school-dot target-dot"></i>4 target</span><span><i class="school-dot safety-dot"></i>3 safety</span><button>View match insights →</button></div>
    <div class="college-grid">${schools.map(([monogram, color, type, match, name, location, acceptance, tuition, program]) => `<article class="college-card"><div class="college-top"><span class="college-monogram ${color}">${monogram}</span><button class="icon-button save-button" aria-label="Save ${name}">♧</button></div><div class="college-type-row"><span class="college-type ${type.toLowerCase()}">${type}</span><span class="match-score">✦ ${match} match</span></div><h3>${name}</h3><span class="college-location">⌖ ${location}</span><div class="college-facts"><span><b>${acceptance}</b><small>acceptance</small></span><span><b>${tuition}</b><small>tuition / yr</small></span></div><div class="college-program">⌂ &nbsp; ${program}</div><button class="college-details">Explore college →</button></article>`).join("")}</div>
    <div class="banner" style="margin-top:12px"><span class="banner-icon">✧</span><div class="banner-copy"><b>Your list has a healthy balance.</b><p>Aster recommends 2–3 reach, 4–5 target, and 2–3 likely schools.</p></div><button class="inline-link">See my strategy →</button></div>`;
}

function discoveryPage(kind) {
  const titles = {
    Scholarships: ["DISCOVER · SCHOLARSHIPS", "Scholarships with your name on them.", "Funding that fits your goals, background, and hard work.", "You could qualify for $18,500+ in scholarships."],
    Internships: ["DISCOVER · INTERNSHIPS", "Experience that opens doors.", "Real-world experience built around the things you care about.", "3 opportunities fit your CS + community interests."],
    Opportunities: ["DISCOVER · OPPORTUNITIES", "Your next big thing is out there.", "Programs, competitions, and communities worth your time.", "New opportunities, chosen for your next chapter."],
  }[kind];
  return `${pageHeader(titles[0], titles[1], titles[2], '<button class="button button-secondary">♧ &nbsp; Saved <span class="side-count">3</span></button>')}
    <div class="discovery-toolbar"><div class="search-box">⌕ <input aria-label="Search opportunities" placeholder="Search ${kind.toLowerCase()}..."></div><button class="filter-button">☷ &nbsp; Filters</button><button class="filter-button">Best match ⌄</button></div>
    <div class="discovery-feature"><span>✦</span><div><small>YOUR PROFILE, OPENING DOORS</small><b>${titles[3]}</b><p>We found these using your interests, academic profile, and goals.</p></div>→</div>
    <div class="listing-list">${opportunities[kind].map(([glyph, title, org, detail, match, tag, tone]) => `<article class="listing-card"><span class="listing-icon ${tone}">${glyph}</span><div class="listing-main"><span class="listing-org">${org} <span class="match-score">✦ ${match}</span></span><h3>${title}</h3><p>${detail}</p><div class="listing-meta"><span class="listing-tag">${tag}</span><span>✓ Verified opportunity</span></div></div><button class="icon-button save-button" aria-label="Save ${title}">♧</button><button class="icon-button" aria-label="View ${title}">↗</button></article>`).join("")}</div>`;
}

function applicationsPage() {
  const apps = [
    ["S", "Stanford University", "Early Action", 4, 6, "Dec 6, 2026", "In progress"],
    ["UC", "UC Berkeley", "Regular Decision", 2, 5, "Jan 5, 2027", "In progress"],
    ["W", "University of Washington", "Early Action", 3, 5, "Jan 15, 2027", "In progress"],
    ["O", "University of Oregon", "Early Action", 5, 5, "Jan 5, 2027", "Ready to submit"],
  ];
  return `${pageHeader("APPLICATION TRACKER", "You’ve got this.", "One place to keep every application moving forward.", '<button class="button button-primary">＋ &nbsp; Add application</button>')}
    <div class="application-stats"><div><span>IN PROGRESS</span><b>4 <small>applications</small></b></div><div><span>COMPLETED</span><b>2 <small>applications</small></b></div><div><span>NEXT DEADLINE</span><b>12 <small>days · Stanford EA</small></b></div></div>
    <section class="panel"><div class="panel-heading"><div><h2>Your applications</h2><p>Keep an eye on the little details.</p></div><button class="select-button">All applications⌄</button></div>
      <div class="app-table"><div class="table-head"><span>COLLEGE</span><span>CHECKLIST</span><span>DEADLINE</span><span>STATUS</span><span></span></div>${apps.map(([monogram, name, type, done, total, due, status]) => `<div class="table-row"><div class="table-college"><span class="table-monogram">${monogram}</span><span><b>${name}</b><small>${type}</small></span></div><div class="check-progress"><div class="check-track"><i style="width:${done / total * 100}%"></i></div><small>${done}/${total} complete</small></div><span class="table-deadline">▦ ${due}</span><span class="app-status ${done === total ? "ready" : ""}">${status}</span><button class="icon-button">›</button></div>`).join("")}</div>
    </section><div class="banner" style="margin-top:12px"><span class="banner-icon">✧</span><div class="banner-copy"><b>Quick win:</b><p>Ask for recommendation letters at least 4 weeks before your earliest deadline.</p></div><button class="inline-link">View checklist →</button></div>`;
}

function profileAnalyzerPage() {
  const scores = [["Academics", 84, "Strong GPA and a clear upward trend.", ""], ["Leadership", 68, "One more sustained role could set you apart.", "blue"], ["Extracurriculars", 76, "Your interests show focus and curiosity.", "green"], ["Service", 59, "A consistent volunteer commitment can help.", "gold"]];
  return `${pageHeader("YOUR PROFILE REPORT", "The full picture looks good.", "A thoughtful snapshot of where you shine—and where to grow next.", '<button class="button button-secondary" data-page="Future Simulator">↗ &nbsp; Try the future simulator</button>')}
    <div class="report-layout"><section class="panel score-panel"><div class="panel-heading"><div><h2>Overall competitiveness</h2><p>A holistic view—not just a number.</p></div></div><div class="score-ring"><div><small>PROFILE</small><b>78</b><em>out of 100</em></div></div><div class="score-delta">↗ +6 points since your last check-in</div><div class="score-footnote">♧ &nbsp; A guide to your growth—not a verdict on your future.</div></section>
    <section class="panel"><div class="panel-heading"><div><h2>Your strengths, at a glance</h2><p>Every part of your story matters.</p></div></div>${scores.map(([name, score, note, tone]) => `<div class="score-row"><div class="score-row-head"><span>${name}</span><b>${score}<small>/100</small></b></div><div class="score-bar ${tone}"><i style="width:${score}%"></i></div><p>${note}</p></div>`).join("")}</section></div>
    <section class="panel recommendations"><div class="panel-heading"><div><h2>Your next best moves</h2><p>Small, practical ways to strengthen an already compelling profile.</p></div><span class="deadline-tag tag-purple">✦ PERSONALIZED</span></div><div class="recommendation-list"><article class="recommendation"><b>01 &nbsp; Grow your impact in one place</b><p>Take your coding club project from idea to something your community can use.</p></article><article class="recommendation"><b>02 &nbsp; Build a service habit that feels like you</b><p>Try 2 hours a month teaching beginner coding at your local library.</p></article><article class="recommendation"><b>03 &nbsp; Show your academic momentum</b><p>Keep a weekly SAT rhythm and review missed questions.</p></article></div></section>`;
}

function futureSimulatorPage() {
  return `${pageHeader("EXPLORE THE WHAT-IFS", "Your future, with possibilities.", "Try a few what-ifs. Small steps can change how your story comes together.")}
    <div class="simulator-layout"><section class="panel"><div class="panel-heading"><div><h2>Imagine your next chapter</h2><p>Adjust a few things you’re working toward.</p></div><span class="feature-icon purple">✦</span></div>
      <label class="sim-control"><span><b>Raise your SAT score</b><small>Current score: 1,250</small></span><strong id="sat-value">1,250</strong><input id="sat-slider" type="range" min="1250" max="1550" step="10" value="1250" aria-label="Projected SAT score"><span class="range-labels"><small>1,250</small><small>1,550</small></span></label>
      <label class="sim-control"><span><b>Complete volunteer hours</b><small>Time you’d like to give back</small></span><strong id="hours-value">0 hrs</strong><input id="hours-slider" type="range" min="0" max="200" step="10" value="0" aria-label="Projected volunteer hours"><span class="range-labels"><small>0 hours</small><small>200 hours</small></span></label>
      <label class="lead-toggle"><span>◎</span><span><b>Step into a leadership role</b><small>For example, club president or team lead</small></span><input id="leadership-toggle" type="checkbox" aria-label="Step into a leadership role"></label>
      <p class="privacy-note">✧ &nbsp; Directional estimates to explore—not admissions guarantees.</p>
    </section><section class="panel"><div class="panel-heading"><div><h2>Your projected profile</h2><p>Here’s how those goals could add up.</p></div><span class="deadline-tag tag-purple">EXPLORING</span></div>
      <div class="projection-score"><div><small>PROFILE STRENGTH</small><b id="projection-score">78 <small>/ 100</small></b></div><span class="projection-delta" id="projection-delta">↗ +0 pts</span></div><div class="projection-bar"><i id="projection-bar" style="width:78%"></i></div><div class="projection-compare"><span>Today <b>78</b></span><span>With your goals <b id="projection-label">78</b></span></div>
      <div class="projection-insight"><b id="projection-message">A few goals can add up to a compelling story.</b><p>Pairing academic growth with meaningful leadership and service can make a compelling story.</p></div><div class="projection-tags" id="projection-tags">Choose a goal to see your projection</div><button class="button button-primary full-width" style="margin-top:18px" data-action="save-goals">＋ &nbsp; Add these goals to my roadmap</button>
    </section></div>`;
}

function counselorPage() {
  return `${pageHeader("YOUR AI COUNSELOR", "A good place to think out loud.", "A thoughtful guide, whenever you need one.")}
    <div class="chat-layout"><aside class="counselor-card"><div class="counselor-avatar">✦</div><h3>Meet your Aster guide</h3><p>Here to help you make sense of the journey—not make it for you.</p><div class="suggestions"><strong>GOOD THINGS TO ASK ABOUT</strong><button data-suggestion="How can I build my college list?">⌂ &nbsp; Building my college list</button><button data-suggestion="What scholarships fit my profile?">◇ &nbsp; Finding scholarships</button><button data-suggestion="How should I study for the SAT?">▤ &nbsp; My SAT study plan</button><button data-suggestion="What should I do next?">✧ &nbsp; What should I do next?</button></div></aside>
    <section class="chat-panel"><div class="chat-head"><span class="online-dot"></span><span><b>Aster guide</b><small>Here for your next step</small></span></div><div class="chat-messages" id="chat-messages">${state.chatMessages.map((message, index) => chatBubble(message, index % 2 === 1 ? "user" : "assistant")).join("")}</div><form class="chat-form" id="chat-form"><input id="chat-input" placeholder="Ask anything about your next step..." aria-label="Message Aster"><button type="submit" aria-label="Send message">➤</button></form><div class="chat-disclaimer">Aster is a helpful guide, not a replacement for a school counselor.</div></section></div>`;
}

function chatBubble(message, role) {
  return `<div class="chat-message ${role}"><div><div class="chat-bubble">${escapeHTML(message)}</div><div class="chat-time">${role === "user" ? "You" : "Aster guide"} · just now</div></div></div>`;
}

function settingsPage() {
  const student = state.profile;
  return `${pageHeader("YOUR ACCOUNT", "A little about you.", "Your profile helps Aster make better recommendations.", '<button class="button button-primary" data-action="save-settings">✓ &nbsp; Save changes</button>')}
    <div class="settings-layout"><nav class="settings-menu"><button class="selected">♙ &nbsp; Student profile</button><button>♧ &nbsp; Account &amp; security</button><button>✦ &nbsp; Preferences</button></nav>
    <section class="panel settings-panel"><div class="settings-person"><span>JM</span><span><b>Jordan Miller</b><small>Class of 2027 · Profile 78% complete</small></span><button class="inline-link">Change photo</button></div><div class="settings-fields"><label>Grade level<input value="${escapeHTML(student.grade || "11th grade")}" readonly></label><label>Intended major<input value="${escapeHTML(student.major || "Computer Science")}" readonly></label><label>GPA<input value="${escapeHTML(student.gpa || "3.7")}" readonly></label><label>Location<input value="${escapeHTML(student.location || "Portland, Oregon")}" readonly></label></div><div class="settings-person"><span><b>Your interests</b><small>These help us find opportunities that feel right.</small></span></div><div class="choice-chips"><span class="choice-chip selected">Computer Science</span><span class="choice-chip selected">Entrepreneurship</span><span class="choice-chip selected">Community service</span></div></section></div>`;
}

function pageContent(page) {
  switch (page) {
    case "Dashboard": return dashboardPage();
    case "Roadmap": return roadmapPage();
    case "SAT Prep":
    case "ACT Prep": return testPrepPage(page);
    case "Colleges": return collegesPage();
    case "Scholarships":
    case "Internships":
    case "Opportunities": return discoveryPage(page);
    case "Applications": return applicationsPage();
    case "Profile Analyzer": return profileAnalyzerPage();
    case "Future Simulator": return futureSimulatorPage();
    case "AI Counselor": return counselorPage();
    case "Settings": return settingsPage();
    default: return `<section class="panel empty-state"><span class="flow-icon">✦</span><h2>Nothing here just yet.</h2><p>Your next opportunity is on the way.</p></section>`;
  }
}

function renderOnboarding() {
  const step = state.onboardingStep;
  const gradeOptions = ["9th grade", "10th grade", "11th grade", "12th grade"]
    .map((grade) => `<option value="${grade}"${state.profile.grade === grade ? " selected" : ""}>${grade}</option>`)
    .join("");
  const locations = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
    "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Other",
  ];
  const locationOptions = locations
    .map((location) => `<option value="${escapeHTML(location)}"${state.profile.location === location ? " selected" : ""}>${escapeHTML(location)}</option>`)
    .join("");
  const majors = [
    "Computer Science",
    "Engineering",
    "Business",
    "Health & Medicine",
    "Arts & Humanities",
    "Still exploring",
  ];
  const majorOptions = majors
    .map((major) => `<option value="${escapeHTML(major)}"${state.profile.major === major ? " selected" : ""}>${escapeHTML(major)}</option>`)
    .join("");
  const steps = [
    {
      title: "First, where are you right now?",
      description: "We’ll meet you where you are. There’s no wrong place to start.",
      fields: `<label>What grade are you in?<select name="grade">${gradeOptions}</select></label>
        <div class="field-row"><label>Current GPA<input name="gpa" placeholder="e.g. 3.7" value="${escapeHTML(state.profile.gpa)}"></label><label>Your state<select name="location"><option value=""${locations.includes(state.profile.location) ? "" : " selected"}>Select state</option>${locationOptions}</select></label></div>
        <div class="field-row"><label>SAT score<input name="sat" type="number" min="400" max="1600" placeholder="Not taken yet" value="${escapeHTML(state.profile.sat)}"></label><label>ACT score<input name="act" type="number" min="1" max="36" placeholder="Not taken yet" value="${escapeHTML(state.profile.act)}"></label></div>`,
    },
    {
      title: "What are you curious about?",
      description: "Dream a little. We’ll help you find the right paths.",
      fields: `<label>What are you interested in studying?<select name="major"><option value=""${majors.includes(state.profile.major) ? "" : " selected"}>Choose an area</option>${majorOptions}</select></label>
        <label>What kind of future excites you?<div class="choice-chips">${["Building technology", "Helping people", "Creating things", "Leading a team", "Still exploring"].map((item) => choiceButton(item, state.profile.careers)).join("")}</div></label>
        <label>Any colleges on your mind?<input name="colleges" placeholder="Search schools or keep exploring" value="${escapeHTML(state.profile.colleges)}"></label>`,
    },
    {
      title: "What makes you, you?",
      description: "The best plans start with the things you already love.",
      fields: `<label>What do you love doing outside class?<div class="choice-chips">${["Coding", "Sports", "Volunteering", "Music", "Student clubs", "Research", "Art & design", "Something else"].map((item) => choiceButton(item, state.profile.activities)).join("")}</div></label>
        <div class="field-row"><label>Volunteer hours<input name="volunteerHours" type="number" min="0" placeholder="e.g. 40" value="${escapeHTML(state.profile.volunteerHours)}"></label><label>Leadership roles<input name="leadership" placeholder="Club president..." value="${escapeHTML(state.profile.leadership)}"></label></div>
        <label>Awards or recognition<input name="awards" placeholder="Competitions, honors, or awards" value="${escapeHTML(state.profile.awards)}"></label>
        <label>Anything else we should know?<textarea name="notes" placeholder="Tell us about an activity or goal you’re proud of...">${escapeHTML(state.profile.notes)}</textarea></label>`,
    },
  ];
  const current = steps[step - 1];
  document.querySelector("#step-count").innerHTML = `0${step} <small>/ 03</small>`;
  document.querySelector("#step-progress").style.width = `${step / 3 * 100}%`;
  document.querySelector("#onboarding-title").textContent = current.title;
  document.querySelector("#onboarding-description").textContent = current.description;
  document.querySelector("#onboarding-fields").innerHTML = `<div class="field-stack">${current.fields}</div>`;
  document.querySelector("#onboarding-back").hidden = step === 1;
  document.querySelector("#onboarding-next").innerHTML = step === 3 ? "Build my Aster <span>→</span>" : "Continue <span>→</span>";
}

function choiceButton(label, selectedItems) {
  const selected = selectedItems.includes(label);
  const escapedLabel = escapeHTML(label);
  return `<button type="button" class="choice-chip ${selected ? "selected" : ""}" data-choice="${escapedLabel}">${escapedLabel}</button>`;
}

function saveOnboardingFields() {
  const form = document.querySelector("#onboarding-form");
  const values = new FormData(form);
  for (const [key, value] of values.entries()) {
    if (Array.isArray(state.profile[key])) continue;
    state.profile[key] = String(value).trim();
  }
  if (state.onboardingStep === 1 && !state.profile.grade) state.profile.grade = "11th grade";
}

function updateProjection() {
  const sat = Number(document.querySelector("#sat-slider")?.value || 1250);
  const hours = Number(document.querySelector("#hours-slider")?.value || 0);
  const leadership = Boolean(document.querySelector("#leadership-toggle")?.checked);
  const score = Math.min(100, 78 + Math.round((sat - 1250) / 30) + Math.round(hours / 30) + (leadership ? 6 : 0));
  const competitiveness = Math.min(96, 68 + Math.round((sat - 1250) / 50) + Math.round(hours / 40) + (leadership ? 3 : 0));
  document.querySelector("#sat-value").textContent = sat.toLocaleString();
  document.querySelector("#hours-value").textContent = `${hours} hrs`;
  document.querySelector("#projection-score").innerHTML = `${score} <small>/ 100</small>`;
  document.querySelector("#projection-label").textContent = score;
  document.querySelector("#projection-delta").textContent = `↗ +${score - 78} pts`;
  document.querySelector("#projection-bar").style.width = `${score}%`;
  document.querySelector("#projection-message").textContent = `Your competitiveness could reach ${competitiveness}%`;
  const tags = [];
  if (sat > 1250) tags.push(`✓ SAT +${sat - 1250} points`);
  if (hours > 0) tags.push(`✓ ${hours} service hours`);
  if (leadership) tags.push("✓ Leadership experience");
  document.querySelector("#projection-tags").textContent = tags.length ? tags.join("  ·  ") : "Choose a goal to see your projection";
}

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const choice = target.closest("[data-choice]");
  if (choice) {
    const list = state.onboardingStep === 2 ? state.profile.careers : state.profile.activities;
    const value = choice.dataset.choice;
    const index = list.indexOf(value);
    if (index >= 0) list.splice(index, 1);
    else list.push(value);
    choice.classList.toggle("selected");
    return;
  }

  const pageButton = target.closest("[data-page]");
  if (pageButton && state.view === "workspace") {
    state.page = pageButton.dataset.page;
    renderWorkspace();
    closeMenu();
    return;
  }

  const actionButton = target.closest("[data-action]");
  if (!actionButton) return;
  switch (actionButton.dataset.action) {
    case "home": show("landing"); break;
    case "start": state.onboardingStep = 1; show("onboarding"); break;
    case "signin": show("signin"); break;
    case "demo": state.page = "Dashboard"; show("workspace"); break;
    case "theme":
      document.querySelector("#workspace-view").classList.toggle("dark");
      actionButton.textContent = document.querySelector("#workspace-view").classList.contains("dark") ? "☾" : "☼";
      break;
    case "open-menu":
      document.querySelector(".app-sidebar").classList.add("open");
      document.querySelector(".mobile-backdrop").classList.add("visible");
      break;
    case "close-menu": closeMenu(); break;
    case "save-goals":
      actionButton.textContent = "✓  Goals added to your roadmap";
      actionButton.disabled = true;
      break;
    case "save-settings":
      actionButton.textContent = "✓  Saved";
      window.setTimeout(() => { actionButton.textContent = "✓  Save changes"; }, 1200);
      break;
  }
});

function closeMenu() {
  document.querySelector(".app-sidebar").classList.remove("open");
  document.querySelector(".mobile-backdrop").classList.remove("visible");
}

document.querySelector("#onboarding-back").addEventListener("click", () => {
  saveOnboardingFields();
  state.onboardingStep = Math.max(1, state.onboardingStep - 1);
  renderOnboarding();
});

document.querySelector("#onboarding-form").addEventListener("submit", (event) => {
  event.preventDefault();
  saveOnboardingFields();
  if (state.onboardingStep < 3) {
    state.onboardingStep += 1;
    renderOnboarding();
    return;
  }
  show("workspace");
});

document.addEventListener("input", (event) => {
  if (event.target.matches("#sat-slider, #hours-slider, #leadership-toggle")) updateProjection();
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "chat-form") return;
  event.preventDefault();
  const input = document.querySelector("#chat-input");
  const message = input.value.trim();
  if (!message) return;
  state.chatMessages.push(message);
  state.chatMessages.push("That’s a great question. Based on your goals and the progress you’ve made so far, I’d focus on one small next step this week. Want me to add it to your roadmap?");
  renderWorkspace();
  document.querySelector("#chat-messages").scrollTop = document.querySelector("#chat-messages").scrollHeight;
});

document.addEventListener("click", (event) => {
  const suggestion = event.target.closest("[data-suggestion]");
  if (suggestion) {
    const input = document.querySelector("#chat-input");
    input.value = suggestion.dataset.suggestion;
    input.focus();
  }
  const saveButton = event.target.closest(".save-button");
  if (saveButton) {
    saveButton.classList.toggle("saved");
    saveButton.textContent = saveButton.classList.contains("saved") ? "♥" : "♧";
  }
});

document.querySelectorAll(".marketing-links a, .marketing-footer a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    if (state.view !== "landing") show("landing");
  });
});
