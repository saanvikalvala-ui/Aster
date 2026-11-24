"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Bookmark,
  BookOpen,
  Briefcase,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Compass,
  FileCheck2,
  Flame,
  GraduationCap,
  Heart,
  LayoutDashboard,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState, type FormEvent } from "react";

type View =
  | "landing"
  | "onboarding"
  | "signin"
  | "Dashboard"
  | "Roadmap"
  | "SAT Prep"
  | "ACT Prep"
  | "Colleges"
  | "Scholarships"
  | "Internships"
  | "Opportunities"
  | "Applications"
  | "Profile Analyzer"
  | "Future Simulator"
  | "AI Counselor"
  | "Settings";

const navigation: { name: Exclude<View, "landing" | "onboarding" | "signin">; icon: LucideIcon }[] = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Roadmap", icon: Compass },
  { name: "SAT Prep", icon: BookOpen },
  { name: "ACT Prep", icon: Activity },
  { name: "Colleges", icon: GraduationCap },
  { name: "Scholarships", icon: Award },
  { name: "Internships", icon: Briefcase },
  { name: "Opportunities", icon: Sparkles },
  { name: "Applications", icon: FileCheck2 },
  { name: "Profile Analyzer", icon: BarChart3 },
  { name: "Future Simulator", icon: TrendingUp },
  { name: "AI Counselor", icon: MessageCircle },
  { name: "Settings", icon: Settings },
];

const progressData = [
  { week: "Aug 12", score: 1120 },
  { week: "Aug 19", score: 1180 },
  { week: "Aug 26", score: 1160 },
  { week: "Sep 2", score: 1240 },
  { week: "Sep 9", score: 1280 },
  { week: "Sep 16", score: 1340 },
  { week: "Sep 23", score: 1390 },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`}>
      <span className="brand-mark"><Sparkles size={17} strokeWidth={2.2} /></span>
      <span>aster</span>
    </span>
  );
}

function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet" | "light";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}) {
  return (
    <button className={`button button-${variant} ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

function LandingPage({ onStart, onDemo, onSignIn }: { onStart: () => void; onDemo: () => void; onSignIn: () => void }) {
  return (
    <main className="landing">
      <header className="landing-nav">
        <a href="#" className="logo-link" aria-label="Aster home"><Logo light /></a>
        <nav className="landing-links">
          <a href="#platform">Platform</a>
          <a href="#stories">Stories</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="landing-actions">
          <button className="nav-signin" onClick={onSignIn}>Log in</button>
          <Button variant="light" onClick={onStart}>Get started <ArrowRight size={15} /></Button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <motion.div className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <span className="eyebrow-pulse" /> YOUR FUTURE, IN ORBIT
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Navigate<br />your <span>future.</span>
          </motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}>
            The all-in-one platform for SAT prep, college discovery, scholarships, internships, and everything in between.
          </motion.p>
          <motion.div className="hero-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            <Button variant="light" onClick={onStart}>Get started free <ArrowRight size={16} /></Button>
            <button className="demo-link" onClick={onDemo}><span className="play-icon">▶</span> Watch the demo</button>
          </motion.div>
          <div className="hero-proof">
            <div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>K</span></div>
            <div><div className="proof-stars">★★★★★</div><p>Helping students get ahead</p></div>
            <div className="proof-divider" />
            <div className="proof-number">4.9<span>/5</span></div>
          </div>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="orbit-glow" />
          <div className="preview-window">
            <div className="preview-sidebar">
              <div className="preview-logo"><span className="mini-brand-mark"><Sparkles size={12} /></span> aster</div>
              <div className="preview-active"><LayoutDashboard size={13} /> Overview</div>
              <div className="preview-nav-item"><Compass size={13} /> My roadmap</div>
              <div className="preview-nav-item"><GraduationCap size={13} /> Colleges</div>
              <div className="preview-nav-item"><Award size={13} /> Scholarships</div>
              <div className="preview-nav-item"><BookOpen size={13} /> Test prep</div>
              <div className="preview-profile"><span className="preview-avatar">JM</span><div>Jordan Miller<small>Class of 2027</small></div></div>
            </div>
            <div className="preview-content">
              <div className="preview-topline"><span>MONDAY, SEPTEMBER 23</span><div><span className="tiny-dot" /> On track</div></div>
              <h3>Good morning, Jordan <span>✦</span></h3>
              <p className="preview-sub">Here’s your path to the future you want.</p>
              <div className="preview-stats">
                <div><span>Profile strength</span><b>78<small>/100</small></b><div className="mini-progress"><i style={{ width: "78%" }} /></div><em>↑ 6 pts this month</em></div>
                <div><span>Roadmap progress</span><b>64<small>%</small></b><div className="mini-progress lavender"><i style={{ width: "64%" }} /></div><em>12 of 19 milestones</em></div>
              </div>
              <div className="preview-lower">
                <div className="preview-chart">
                  <div className="preview-card-heading">SAT score trend <span>View report →</span></div>
                  <svg viewBox="0 0 280 84" preserveAspectRatio="none" aria-label="SAT score trend rising chart">
                    <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#8167ff" stopOpacity=".23" /><stop offset="100%" stopColor="#8167ff" stopOpacity="0" /></linearGradient></defs>
                    <path d="M0 68 C22 60 28 56 48 59 S76 50 96 53 S122 36 144 41 S170 35 190 36 S214 20 236 27 S257 8 280 12 V84 H0Z" fill="url(#chartFill)" />
                    <path d="M0 68 C22 60 28 56 48 59 S76 50 96 53 S122 36 144 41 S170 35 190 36 S214 20 236 27 S257 8 280 12" fill="none" stroke="#8873ff" strokeWidth="2.4" />
                  </svg>
                  <div className="chart-labels"><span>Aug 12</span><span>Aug 26</span><span>Sep 9</span><span>Sep 23</span></div>
                </div>
                <div className="preview-task"><div className="preview-card-heading">Up next <span>•••</span></div><div className="mini-task"><i className="task-check"><Check size={10} /></i><span>Review essay outline<small>Writing · 25 min</small></span></div><div className="mini-task"><i className="task-dot" /><span>Stanford application<small>Due in 12 days</small></span></div></div>
              </div>
            </div>
          </div>
          <motion.div className="float-card float-achievement" animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
            <span className="float-icon gold"><Trophy size={17} /></span><span><b>New milestone</b><small>First 1,400 SAT practice</small></span><Sparkles className="float-sparkle" size={14} />
          </motion.div>
          <motion.div className="float-card float-match" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}>
            <span className="match-ring">92</span><span><b>Great fit, Jordan</b><small>UC Berkeley match</small></span>
          </motion.div>
        </motion.div>
      </section>

      <div className="trust-row"><span>MADE FOR WHAT’S NEXT</span><b>College<span>Board</span></b><b>common<span>app</span></b><b>NASA <small>−</small></b><b>Google</b><b>Code.org</b></div>

      <section className="platform-section" id="platform">
        <div className="section-intro">
          <span className="eyebrow dark-eyebrow">YOUR WHOLE JOURNEY, ONE PLACE</span>
          <h2>Big plans deserve<br />a better system.</h2>
          <p>Less tab switching. More moving forward. Aster connects the dots between where you are and where you want to go.</p>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-roadmap"><div className="feature-icon purple"><Compass size={19} /></div><span className="feature-kicker">01 — YOUR PLAN</span><h3>A roadmap that gets you.</h3><p>Your goals, translated into clear next steps. Updated as you grow.</p><div className="roadmap-graphic"><div><span className="roadmap-dot done"><Check size={9} /></span><span>Find your direction</span><small>Complete</small></div><div><span className="roadmap-dot active">✦</span><span>Build your profile</span><small>In progress</small></div><div><span className="roadmap-dot" /><span>Make your shortlist</span><small>Up next</small></div><div className="roadmap-line" /></div></article>
          <article className="feature-card feature-discovery"><div className="feature-icon blue"><Sparkles size={19} /></div><span className="feature-kicker">02 — THE RIGHT FIT</span><h3>Find doors you didn’t know existed.</h3><p>Scholarships, programs, and colleges picked for your story—not just your stats.</p><div className="discovery-pills"><span><Award size={13} /> $2.4k scholarship</span><span><Briefcase size={13} /> 92% match internship</span><span><GraduationCap size={13} /> 8 colleges discovered</span></div></article>
          <article className="feature-card feature-momentum"><div className="feature-icon green"><TrendingUp size={19} /></div><span className="feature-kicker">03 — STEADY MOMENTUM</span><h3>Small wins add up to a big future.</h3><p>See your progress, build good habits, and make every week count.</p><div className="momentum-chart"><div className="momentum-chart-label"><span>YOUR PROFILE STRENGTH</span><b>78 <small>/ 100</small></b></div><div className="bar-graph">{[28, 38, 34, 49, 45, 59, 52, 70, 65, 78, 70, 88, 82, 100].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div><div className="momentum-foot"><span>Aug 1</span><span>Today <b>↑ 24 points</b></span></div></div></article>
        </div>
      </section>

      <section className="quote-section" id="stories">
        <span className="quote-sparkle"><Sparkles size={19} /></span>
        <div className="quote-stars">★★★★★</div>
        <blockquote>“For the first time, I felt like I had a plan—not just a pile of things I was supposed to do.”</blockquote>
        <div className="quote-author"><span className="quote-avatar">A</span><span><b>Amara K.</b><small>Admitted to Northwestern · Class of 2025</small></span></div>
        <div className="quote-metrics"><div><b>12k<span>+</span></b><small>students finding their way</small></div><div><b>$4.8<span>M</span></b><small>in scholarships matched</small></div><div><b>87<span>%</span></b><small>feel more in control</small></div></div>
      </section>

      <section className="pricing-section" id="pricing">
        <span className="eyebrow dark-eyebrow">A LITTLE CLARITY GOES A LONG WAY</span>
        <h2>Your next chapter<br />starts here.</h2>
        <p>Everything you need to move forward, no matter where you’re starting from.</p>
        <div className="pricing-card"><div><span className="pricing-label">ASTER STARTER</span><h3>Free<span> forever</span></h3><p>A clear path, without the price tag.</p></div><ul><li><Check size={15} /> Personalized student dashboard</li><li><Check size={15} /> College and scholarship matches</li><li><Check size={15} /> Your own application roadmap</li><li><Check size={15} /> SAT & ACT progress tracking</li></ul><Button variant="primary" onClick={onStart}>Get started free <ArrowRight size={16} /></Button><small>No credit card. No pressure. Just potential.</small></div>
      </section>

      <footer className="landing-footer"><div><Logo light /><p>Your future has a north star.</p></div><span>© 2025 Aster. Made for what’s next.</span><div><a href="#platform">Platform</a><a href="#pricing">Pricing</a><button onClick={onSignIn}>Log in</button></div></footer>
    </main>
  );
}

function StatCard({ icon: Icon, label, value, note, tone, trend }: { icon: LucideIcon; label: string; value: string; note: string; tone: string; trend?: string }) {
  return <div className="stat-card"><div className={`stat-icon ${tone}`}><Icon size={17} /></div><span className="stat-label">{label}</span><div className="stat-value">{value}</div><div className="stat-note">{trend && <span className="trend-up"><ArrowUpRight size={12} />{trend}</span>}{note}</div></div>;
}

function Dashboard({ setView }: { setView: (view: View) => void }) {
  return (
    <>
      <div className="dashboard-welcome"><div><div className="date-label">MONDAY, SEPTEMBER 23, 2025</div><h1>Good morning, Jordan <span>✦</span></h1><p>You’re making real progress. Let’s keep it going.</p></div><Button variant="secondary" onClick={() => setView("Roadmap")}><Compass size={15} /> View my roadmap <ArrowRight size={14} /></Button></div>
      <div className="stat-grid">
        <StatCard icon={Target} label="PROFILE STRENGTH" value="78" note="vs. last month" trend="+6 pts" tone="stat-purple" />
        <StatCard icon={Flame} label="STUDY STREAK" value="12 days" note="Personal best: 16 days" tone="stat-orange" />
        <StatCard icon={CheckCircle2} label="ROADMAP PROGRESS" value="64%" note="12 of 19 milestones" trend="+8%" tone="stat-green" />
        <StatCard icon={CalendarDays} label="NEXT DEADLINE" value="12 days" note="Stanford · Early action" tone="stat-blue" />
      </div>
      <div className="dashboard-grid">
        <section className="panel progress-panel"><div className="panel-heading"><div><h2>Your progress</h2><p>A little better every week.</p></div><button className="select-button">Last 7 weeks <ChevronDown size={13} /></button></div><div className="chart-legend"><span><i className="legend-dot purple-dot" /> SAT score</span><span className="chart-current">1390 <small>+270 pts</small></span></div><div className="main-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={progressData} margin={{ top: 8, right: 6, left: -22, bottom: 0 }}><defs><linearGradient id="satGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#7559e8" stopOpacity={0.16} /><stop offset="95%" stopColor="#7559e8" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#eef0f5" vertical={false} /><XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fill: "#98a0b2", fontSize: 10 }} tickMargin={11} /><YAxis domain={[1000, 1500]} ticks={[1000, 1200, 1400]} tickLine={false} axisLine={false} tick={{ fill: "#98a0b2", fontSize: 10 }} /><Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #ececf4", fontSize: 12 }} /><Area type="monotone" dataKey="score" stroke="#7559e8" strokeWidth={2.5} fill="url(#satGradient)" activeDot={{ r: 5, fill: "#7559e8", stroke: "white", strokeWidth: 3 }} /></AreaChart></ResponsiveContainer></div><button className="panel-link" onClick={() => setView("SAT Prep")}>View test prep progress <ArrowRight size={13} /></button></section>
        <section className="panel deadlines-panel"><div className="panel-heading"><div><h2>Coming up</h2><p>The next few things on your list.</p></div><button className="icon-button" aria-label="More deadlines"><MoreHorizontal size={18} /></button></div><div className="deadline-list"><div className="deadline-item"><div className="deadline-date urgent"><b>05</b><small>OCT</small></div><div className="deadline-info"><b>Stanford Early Action</b><span>College application · 12 days</span></div><span className="deadline-tag">High priority</span></div><div className="deadline-item"><div className="deadline-date"><b>11</b><small>OCT</small></div><div className="deadline-info"><b>Bright Futures Scholarship</b><span>Scholarship · $2,500 award</span></div><span className="deadline-tag tag-purple">In progress</span></div><div className="deadline-item"><div className="deadline-date"><b>19</b><small>OCT</small></div><div className="deadline-info"><b>Digital SAT practice test</b><span>Test prep · 1 hour</span></div><span className="deadline-tag tag-gray">Planned</span></div></div><button className="panel-link" onClick={() => setView("Applications")}>View all deadlines <ArrowRight size={13} /></button></section>
      </div>
      <div className="below-grid">
        <section className="panel goals-panel"><div className="panel-heading"><div><h2>Today’s focus</h2><p>Three small wins. You’ve got this.</p></div><span className="goal-count">1 of 3</span></div><div className="goal-list"><button className="goal-row done-goal"><span className="goal-checkbox"><Check size={12} /></span><span><b>Finish algebra practice set</b><small>SAT Math · 20 min</small></span><span className="goal-complete">Done</span></button><button className="goal-row"><span className="goal-checkbox" /><span><b>Outline personal statement</b><small>Applications · 30 min</small></span><span className="goal-arrow"><ArrowRight size={15} /></span></button><button className="goal-row"><span className="goal-checkbox" /><span><b>Review 3 new scholarships</b><small>Opportunity search · 10 min</small></span><span className="goal-arrow"><ArrowRight size={15} /></span></button></div><button className="add-goal"><Plus size={14} /> Add a goal</button></section>
        <section className="panel match-panel"><div className="panel-heading"><div><h2>Picked for you</h2><p>Good things, matched to your goals.</p></div><button className="icon-button" aria-label="See all matches" onClick={() => setView("Opportunities")}><ArrowRight size={16} /></button></div><button className="match-row" onClick={() => setView("Scholarships")}><span className="match-row-icon gold-bg"><Award size={16} /></span><span><b>Hispanic Heritage Youth Awards</b><small>Scholarship · $5,000 · 94% match</small></span><ChevronRight size={16} /></button><button className="match-row" onClick={() => setView("Internships")}><span className="match-row-icon blue-bg"><Briefcase size={16} /></span><span><b>Girls Who Code SIP</b><small>Summer program · Remote · 91% match</small></span><ChevronRight size={16} /></button><button className="match-row" onClick={() => setView("Colleges")}><span className="match-row-icon purple-bg"><GraduationCap size={16} /></span><span><b>UC Berkeley</b><small>College · 92% fit · Reach</small></span><ChevronRight size={16} /></button></section>
      </div>
    </>
  );
}

function RoadmapPage() {
  const months = [
    { month: "SEPTEMBER", title: "Build your foundation", tasks: ["Complete your student profile", "Take your first SAT diagnostic", "Start your personal statement brainstorm"], state: "Complete", color: "green" },
    { month: "OCTOBER", title: "Show what makes you, you", tasks: ["Submit Stanford early action application", "Attend a local hackathon", "Request recommendation letters"], state: "In progress", color: "purple" },
    { month: "NOVEMBER", title: "Make your next move", tasks: ["Finalize your college shortlist", "Apply for 3 matched scholarships", "Take the November SAT"], state: "Up next", color: "gray" },
    { month: "DECEMBER — JANUARY", title: "Bring it all together", tasks: ["Submit regular decision applications", "Complete your financial aid profile", "Celebrate how far you’ve come"], state: "Coming soon", color: "gray" },
  ];
  return <><PageHeader eyebrow="YOUR PERSONAL GAME PLAN" title="The path is yours." subtitle="A plan built around your goals, one doable step at a time." action={<Button variant="secondary"><CalendarDays size={15} /> View calendar</Button>} /><div className="roadmap-banner"><span className="banner-icon"><Sparkles size={19} /></span><div><b>Made for your Computer Science future</b><p>Based on your profile, here’s your roadmap to becoming a competitive CS applicant.</p></div><span className="banner-score">78 <small>profile strength</small></span></div><div className="timeline">{months.map((month, i) => <div className="timeline-row" key={month.month}><div className="timeline-marker"><span className={`timeline-dot ${month.color}`}>{month.color === "green" ? <Check size={11} /> : i + 1}</span>{i !== months.length - 1 && <i />}</div><div className="timeline-card"><div className="timeline-card-head"><div><span className="date-label">{month.month}</span><h3>{month.title}</h3></div><span className={`status-pill status-${month.color}`}>{month.state}</span></div><div className="timeline-tasks">{month.tasks.map((task, j) => <div key={task}><span className={month.color === "green" || (month.color === "purple" && j === 0) ? "task-check-mini checked" : "task-check-mini"}>{(month.color === "green" || (month.color === "purple" && j === 0)) && <Check size={10} />}</span>{task}<ChevronRight size={14} /></div>)}</div></div></div>)}</div></>;
}

function PageHeader({ eyebrow, title, subtitle, action }: { eyebrow: string; title: string; subtitle: string; action?: React.ReactNode }) {
  return <div className="page-header"><div><div className="date-label">{eyebrow}</div><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>;
}

function TestPrepPage({ isAct }: { isAct: boolean }) {
  const test = isAct ? "ACT" : "SAT";
  return <><PageHeader eyebrow={`${test} PREP · YOUR PROGRESS`} title={`Your ${test} game plan.`} subtitle="Build confidence with a study plan that adapts to you." action={<Button variant="primary"><Zap size={15} /> Start practice</Button>} /><div className="stat-grid test-stats"><StatCard icon={Target} label="LATEST PRACTICE" value={isAct ? "29" : "1390"} note={`${isAct ? "ACT" : "SAT"} · Sep 16`} tone="stat-purple" /><StatCard icon={TrendingUp} label="SCORE CHANGE" value={isAct ? "+4 pts" : "+270"} note="Since your first test" trend="On track" tone="stat-green" /><StatCard icon={Flame} label="STUDY STREAK" value="12 days" note="Your best is 16" tone="stat-orange" /><StatCard icon={Clock3} label="TIME INVESTED" value="18.5 hrs" note="Across 34 sessions" tone="stat-blue" /></div><div className="dashboard-grid"><section className="panel progress-panel"><div className="panel-heading"><div><h2>Score over time</h2><p>Your practice is paying off.</p></div><button className="select-button">Last 7 weeks <ChevronDown size={13} /></button></div><div className="chart-legend"><span><i className="legend-dot purple-dot" /> Practice score</span><span className="chart-current">{isAct ? "29" : "1390"} <small>target {isAct ? "33" : "1500"}</small></span></div><div className="main-chart tall"><ResponsiveContainer width="100%" height="100%"><AreaChart data={progressData} margin={{ top: 8, right: 6, left: -22, bottom: 0 }}><defs><linearGradient id="testGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#7559e8" stopOpacity={0.16} /><stop offset="95%" stopColor="#7559e8" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#eef0f5" vertical={false} /><XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fill: "#98a0b2", fontSize: 10 }} tickMargin={11} /><YAxis domain={[1000, 1500]} ticks={[1000, 1200, 1400]} tickLine={false} axisLine={false} tick={{ fill: "#98a0b2", fontSize: 10 }} /><Tooltip /><Area type="monotone" dataKey="score" stroke="#7559e8" strokeWidth={2.5} fill="url(#testGradient)" /></AreaChart></ResponsiveContainer></div></section><section className="panel skill-panel"><div className="panel-heading"><div><h2>Skills to sharpen</h2><p>Your next best opportunities.</p></div></div><div className="skill-row"><div className="skill-info"><span>Reading & Writing</span><b>82%</b></div><div className="skill-track"><i style={{ width: "82%" }} /></div><small>Strong foundation — keep it up</small></div><div className="skill-row"><div className="skill-info"><span>Algebra & Functions</span><b>68%</b></div><div className="skill-track"><i className="skill-blue" style={{ width: "68%" }} /></div><small>Try 2 focused practice sets</small></div><div className="skill-row"><div className="skill-info"><span>Geometry & Trig</span><b>54%</b></div><div className="skill-track"><i className="skill-gold" style={{ width: "54%" }} /></div><small>We’ll help you build confidence here</small></div><Button variant="secondary" className="full-button"><Target size={14} /> See your personalized study plan</Button></section></div></>;
}

const colleges = [
  { name: "University of California, Berkeley", short: "UC", color: "cal", type: "REACH", score: 92, acceptance: "11%", tuition: "$14,760", major: "Top 3 for Computer Science", location: "Berkeley, California" },
  { name: "University of Washington", short: "W", color: "wash", type: "TARGET", score: 88, acceptance: "48%", tuition: "$12,973", major: "Top 10 for Computer Science", location: "Seattle, Washington" },
  { name: "University of Oregon", short: "O", color: "ore", type: "SAFETY", score: 96, acceptance: "86%", tuition: "$15,240", major: "Strong CS & entrepreneurship", location: "Eugene, Oregon" },
];

function CollegesPage() {
  return <><PageHeader eyebrow="YOUR COLLEGE SHORTLIST" title="Find your kind of place." subtitle="A thoughtful shortlist, matched to what matters to you." action={<Button variant="secondary"><Plus size={15} /> Add a college</Button>} /><div className="college-summary"><span><i className="school-dot reach-dot" /> 3 reach</span><span><i className="school-dot target-dot" /> 4 target</span><span><i className="school-dot safety-dot" /> 3 safety</span><button>View match insights <ArrowRight size={13} /></button></div><div className="college-grid">{colleges.map((college) => <article className="college-card" key={college.name}><div className="college-card-top"><span className={`college-monogram ${college.color}`}>{college.short}</span><button className="icon-button" aria-label={`Save ${college.name}`}><Bookmark size={16} /></button></div><div className="college-type-row"><span className={`college-type ${college.type.toLowerCase()}`}>{college.type}</span><span className="match-score"><Sparkles size={12} /> {college.score}% match</span></div><h3>{college.name}</h3><span className="college-location"><MapPin size={13} /> {college.location}</span><div className="college-facts"><span><b>{college.acceptance}</b><small>acceptance</small></span><span><b>{college.tuition}</b><small>tuition / yr</small></span></div><div className="college-program"><GraduationCap size={14} /> {college.major}</div><button className="college-details">Explore college <ArrowRight size={14} /></button></article>)}</div><div className="college-note"><Lightbulb size={17} /><span><b>Your list has a healthy balance.</b> Aster recommends 2–3 reach, 4–5 target, and 2–3 likely schools.</span><button>See my strategy <ArrowRight size={13} /></button></div></>;
}

const listingData = {
  Scholarships: [
    { icon: Award, title: "Hispanic Heritage Youth Awards", org: "Hispanic Heritage Foundation", detail: "$5,000 award · 2 days left", match: "94% match", tone: "gold-bg", tag: "Deadline soon" },
    { icon: Star, title: "Coca-Cola Scholars Program", org: "Coca-Cola Scholars Foundation", detail: "$20,000 award · 24 days left", match: "89% match", tone: "red-bg", tag: "Leadership" },
    { icon: GraduationCap, title: "Amazon Future Engineer", org: "Amazon Future Engineer", detail: "$40,000 award · 38 days left", match: "91% match", tone: "blue-bg", tag: "Computer Science" },
  ],
  Internships: [
    { icon: Briefcase, title: "Girls Who Code Summer Immersion", org: "Girls Who Code", detail: "Summer program · Remote", match: "91% match", tone: "purple-bg", tag: "Applications open" },
    { icon: Globe, title: "NASA High School Internship", org: "NASA OSTEM", detail: "Paid internship · Washington, DC", match: "87% match", tone: "blue-bg", tag: "STEM" },
    { icon: Code, title: "AI4ALL Summer Program", org: "AI4ALL", detail: "Summer program · 6 weeks", match: "95% match", tone: "green-bg", tag: "Computer Science" },
  ],
  Opportunities: [
    { icon: Trophy, title: "Congressional App Challenge", org: "U.S. House of Representatives", detail: "Competition · 41 days left", match: "93% match", tone: "gold-bg", tag: "Build something" },
    { icon: Users, title: "Technovation Girls Challenge", org: "Technovation", detail: "Global competition · Team-based", match: "88% match", tone: "green-bg", tag: "Leadership" },
    { icon: Heart, title: "Code for Good — Community Lab", org: "Code.org", detail: "Volunteer · Flexible hours", match: "90% match", tone: "red-bg", tag: "Service" },
  ],
};

function Globe({ size = 17 }: { size?: number }) { return <Compass size={size} />; }
function Code({ size = 17 }: { size?: number }) { return <Zap size={size} />; }

function DiscoveryPage({ kind }: { kind: keyof typeof listingData }) {
  const items = listingData[kind];
  const title = kind === "Scholarships" ? "Scholarships with your name on them." : kind === "Internships" ? "Experience that opens doors." : "Your next big thing is out there.";
  const subtitle = kind === "Scholarships" ? "Funding that fits your goals, background, and hard work." : kind === "Internships" ? "Real-world experience built around the things you care about." : "Programs, competitions, and communities worth your time.";
  return <><PageHeader eyebrow={`DISCOVER · ${kind.toUpperCase()}`} title={title} subtitle={subtitle} action={<Button variant="secondary"><Bookmark size={14} /> Saved <span className="saved-count">3</span></Button>} /><div className="discovery-toolbar"><div className="search-field"><Search size={16} /><input placeholder={`Search ${kind.toLowerCase()}...`} /><kbd>⌘ K</kbd></div><button className="filter-button"><span className="filter-count">4</span> Filters <ChevronDown size={14} /></button><button className="sort-button">Best match <ChevronDown size={14} /></button></div><div className="discovery-feature"><div className="discovery-feature-icon"><Sparkles size={19} /></div><div><span className="date-label">YOUR PROFILE, OPENING DOORS</span><b>{kind === "Scholarships" ? "You could qualify for $18,500+ in scholarships." : kind === "Internships" ? "3 opportunities fit your CS + community interests." : "New opportunities, chosen for your next chapter."}</b><p>We found these using your interests, academic profile, and goals.</p></div><ArrowRight size={17} /></div><div className="listing-list">{items.map((item) => { const Icon = item.icon; return <article className="listing-card" key={item.title}><div className={`listing-icon ${item.tone}`}><Icon size={19} /></div><div className="listing-main"><div className="listing-tag-row"><span className="listing-org">{item.org}</span><span className="match-score"><Sparkles size={11} /> {item.match}</span></div><h3>{item.title}</h3><p>{item.detail}</p><div className="listing-bottom"><span className={`opportunity-tag ${item.tag === "Deadline soon" ? "deadline-opportunity" : ""}`}>{item.tag === "Deadline soon" && <Clock3 size={11} />}{item.tag}</span><span><ShieldCheck size={12} /> Verified opportunity</span></div></div><button className="bookmark-button" aria-label={`Save ${item.title}`}><Bookmark size={17} /></button><button className="listing-arrow" aria-label={`View ${item.title}`}><ArrowUpRight size={16} /></button></article>; })}</div></>;
}

function ApplicationsPage() {
  return <><PageHeader eyebrow="APPLICATION TRACKER" title="You’ve got this." subtitle="One place to keep every application moving forward." action={<Button variant="primary"><Plus size={15} /> Add application</Button>} /><div className="application-stats"><div><span>IN PROGRESS</span><b>4 <small>applications</small></b></div><div><span>COMPLETED</span><b>2 <small>applications</small></b></div><div><span>NEXT DEADLINE</span><b>12 <small>days · Stanford EA</small></b></div></div><div className="panel applications-panel"><div className="panel-heading"><div><h2>Your applications</h2><p>Keep an eye on the little details.</p></div><button className="select-button">All applications <ChevronDown size={13} /></button></div><div className="application-table"><div className="table-head"><span>COLLEGE</span><span>CHECKLIST</span><span>DEADLINE</span><span>STATUS</span></div>{[{name:"Stanford University",sub:"Early Action",monogram:"S",c:"stan",done:4,total:6,due:"Oct 5, 2025",status:"In progress"},{name:"UC Berkeley",sub:"Regular Decision",monogram:"UC",c:"cal",done:2,total:5,due:"Nov 30, 2025",status:"In progress"},{name:"University of Washington",sub:"Early Action",monogram:"W",c:"wash",done:3,total:5,due:"Nov 15, 2025",status:"In progress"},{name:"University of Oregon",sub:"Early Action",monogram:"O",c:"ore",done:5,total:5,due:"Nov 1, 2025",status:"Ready to submit"}].map((app) => <div className="table-row" key={app.name}><div className="table-college"><span className={`table-monogram ${app.c}`}>{app.monogram}</span><span><b>{app.name}</b><small>{app.sub}</small></span></div><div className="checklist-progress"><div className="checklist-track"><i style={{ width: `${app.done / app.total * 100}%` }} /></div><small>{app.done}/{app.total} complete</small></div><span className="table-deadline"><CalendarDays size={13} />{app.due}</span><span className={`application-status ${app.done === app.total ? "ready" : ""}`}><i />{app.status}</span><button className="icon-button"><ChevronRight size={15} /></button></div>)}</div></div><div className="application-tip"><Lightbulb size={16} /><span><b>Quick win:</b> Ask for recommendation letters at least 4 weeks before your earliest deadline.</span><button>View checklist <ArrowRight size={13} /></button></div></>;
}

function ProfileAnalyzerPage({ setView }: { setView: (view: View) => void }) {
  const scores = [
    { name: "Academics", score: 84, note: "Strong GPA and a clear upward trend.", color: "profile-academics" },
    { name: "Leadership", score: 68, note: "One more sustained role could set you apart.", color: "profile-leadership" },
    { name: "Extracurriculars", score: 76, note: "Your interests show focus and curiosity.", color: "profile-extras" },
    { name: "Service", score: 59, note: "A consistent volunteer commitment can help.", color: "profile-service" },
  ];
  return <><PageHeader eyebrow="YOUR PROFILE REPORT" title="The full picture looks good." subtitle="A thoughtful snapshot of where you shine—and where to grow next." action={<Button variant="secondary" onClick={() => setView("Future Simulator")}><TrendingUp size={14} /> Try the future simulator</Button>} /><div className="analyzer-layout"><section className="panel profile-score-panel"><div className="panel-heading"><div><h2>Overall competitiveness</h2><p>A holistic view—not just a number.</p></div><button className="icon-button" aria-label="Profile score details"><Lightbulb size={16} /></button></div><div className="score-orbit"><div className="score-orbit-inner"><span>PROFILE</span><b>78</b><small>out of 100</small></div></div><div className="score-trend"><span><ArrowUpRight size={14} /> +6 points</span> since your last check-in</div><div className="analyzer-footnote"><ShieldCheck size={14} /> Your score is a guide to your growth—not a verdict on your future.</div></section><section className="panel profile-breakdown"><div className="panel-heading"><div><h2>Your strengths, at a glance</h2><p>Every part of your story matters.</p></div></div><div className="profile-score-list">{scores.map((item) => <div className="profile-score-row" key={item.name}><div className="profile-score-heading"><span>{item.name}</span><b>{item.score}<small>/100</small></b></div><div className="profile-score-track"><i className={item.color} style={{ width: `${item.score}%` }} /></div><p>{item.note}</p></div>)}</div></section></div><section className="panel recommendations-panel"><div className="panel-heading"><div><h2>Your next best moves</h2><p>Small, practical ways to make an already strong profile even stronger.</p></div><span className="recommendation-badge"><Sparkles size={12} /> PERSONALIZED</span></div><div className="recommendation-grid"><article><span className="recommendation-number">01</span><div><b>Grow your impact in one place</b><p>Take your coding club project from idea to something your community can use.</p></div><button onClick={() => setView("Roadmap")} aria-label="View roadmap recommendation"><ArrowRight size={15} /></button></article><article><span className="recommendation-number">02</span><div><b>Build a service habit that feels like you</b><p>Try 2 hours a month teaching beginner coding at your local library.</p></div><button onClick={() => setView("Opportunities")} aria-label="Explore service opportunities"><ArrowRight size={15} /></button></article><article><span className="recommendation-number">03</span><div><b>Show your academic momentum</b><p>Your SAT practice is trending up. Keep a weekly rhythm and review missed questions.</p></div><button onClick={() => setView("SAT Prep")} aria-label="View SAT prep recommendation"><ArrowRight size={15} /></button></article></div></section></>;
}

function FutureSimulatorPage() {
  const [sat, setSat] = useState(1250);
  const [volunteerHours, setVolunteerHours] = useState(0);
  const [leadership, setLeadership] = useState(false);
  const projected = Math.min(100, 78 + Math.round((sat - 1250) / 30) + Math.round(volunteerHours / 30) + (leadership ? 6 : 0));
  const competitiveness = Math.min(96, 68 + Math.round((sat - 1250) / 50) + Math.round(volunteerHours / 40) + (leadership ? 3 : 0));
  return <><PageHeader eyebrow="EXPLORE THE WHAT-IFS" title="Your future, with possibilities." subtitle="Try a few what-ifs. Small steps can change how your story comes together." /><div className="simulator-layout"><section className="panel simulator-controls"><div className="panel-heading"><div><h2>Imagine your next chapter</h2><p>Adjust a few things you’re working toward.</p></div><span className="simulator-spark"><Sparkles size={15} /></span></div><label className="simulator-control"><span><b>Raise your SAT score</b><small>Current score: 1,250</small></span><strong>{sat.toLocaleString()}</strong><input type="range" min="1250" max="1550" step="10" value={sat} onChange={(event) => setSat(Number(event.target.value))} aria-label="Projected SAT score" /><span className="range-labels"><small>1,250</small><small>1,550</small></span></label><label className="simulator-control"><span><b>Complete volunteer hours</b><small>Time you’d like to give back</small></span><strong>{volunteerHours} hrs</strong><input type="range" min="0" max="200" step="10" value={volunteerHours} onChange={(event) => setVolunteerHours(Number(event.target.value))} aria-label="Projected volunteer hours" /><span className="range-labels"><small>0 hours</small><small>200 hours</small></span></label><label className="leadership-toggle"><span className="leadership-icon"><Users size={15} /></span><span><b>Step into a leadership role</b><small>For example, club president or team lead</small></span><input type="checkbox" checked={leadership} onChange={(event) => setLeadership(event.target.checked)} /><i /></label><div className="simulator-note"><Lightbulb size={14} /> These are directional estimates to help you explore—not admissions guarantees.</div></section><section className="panel projection-panel"><div className="panel-heading"><div><h2>Your projected profile</h2><p>Here’s how those goals could add up.</p></div><span className="projection-label">EXPLORING</span></div><div className="projection-score"><div><span>PROFILE STRENGTH</span><div><b>{projected}</b><small>/ 100</small></div></div><div className="projection-change"><ArrowUpRight size={15} /> +{projected - 78} pts</div></div><div className="projection-track"><i style={{ width: `${projected}%` }} /></div><div className="projection-compare"><span>Today <b>78</b></span><span>With your goals <b>{projected}</b></span></div><div className="projection-insight"><span className="insight-icon"><TrendingUp size={16} /></span><div><b>Your competitiveness could reach {competitiveness}%</b><p>Pairing academic growth with meaningful leadership and service can make a compelling story.</p></div></div><div className="projection-tags">{sat > 1250 && <span><Check size={11} /> SAT +{sat - 1250} points</span>}{volunteerHours > 0 && <span><Check size={11} /> {volunteerHours} service hours</span>}{leadership && <span><Check size={11} /> Leadership experience</span>}{sat === 1250 && volunteerHours === 0 && !leadership && <span>Choose a goal to see your projection</span>}</div><Button variant="primary" className="full-button"><Plus size={14} /> Add these goals to my roadmap</Button></section></div></>;
}

function AIPage() {
  const [messages, setMessages] = useState([{ role: "assistant", text: "Hey Jordan! I’ve been looking at your roadmap and I’m here to help you figure out whatever’s next. What’s on your mind?" }]);
  const [input, setInput] = useState("");
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim()) return;
    setMessages((current) => [...current, { role: "user", text: input.trim() }, { role: "assistant", text: "That’s a great question. Based on your Computer Science goals and the progress you’ve made so far, I’d focus on one small next step this week. Want me to add it to your roadmap?" }]);
    setInput("");
  }
  return <><PageHeader eyebrow="YOUR AI COUNSELOR" title="A good place to think out loud." subtitle="A thoughtful guide, whenever you need one." /><div className="counselor-layout"><aside className="counselor-aside"><div className="counselor-avatar"><Sparkles size={21} /></div><h3>Meet your Aster guide</h3><p>Here to help you make sense of the journey—not make it for you.</p><div className="counselor-help"><span>GOOD THINGS TO ASK ABOUT</span><div><GraduationCap size={14} /> Building my college list</div><div><Award size={14} /> Finding scholarships</div><div><BookOpen size={14} /> My SAT study plan</div><div><Compass size={14} /> What should I do next?</div></div><div className="counselor-privacy"><ShieldCheck size={14} /> Your conversations are private.</div></aside><section className="panel chat-panel"><div className="chat-heading"><span className="chat-online" /><span><b>Aster guide</b><small>Here for your next step</small></span><button className="icon-button"><MoreHorizontal size={18} /></button></div><div className="chat-messages">{messages.map((message, index) => <div className={`chat-message ${message.role}`} key={index}><span className="chat-message-avatar">{message.role === "assistant" ? <Sparkles size={13} /> : "JM"}</span><div><p>{message.text}</p><small>{index === 0 ? "Just now" : message.role === "user" ? "You · just now" : "Aster guide · just now"}</small></div></div>)}{messages.length === 1 && <div className="prompt-suggestions"><span>Try asking</span><button onClick={() => setInput("How can I make my college list stronger?")}>How can I make my college list stronger?</button><button onClick={() => setInput("What scholarships fit my profile?")}>What scholarships fit my profile?</button><button onClick={() => setInput("How should I prepare for the SAT?")}>How should I prepare for the SAT?</button></div>}</div><form className="chat-compose" onSubmit={sendMessage}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask anything about your next step..." /><button type="submit" aria-label="Send message" disabled={!input.trim()}><Send size={16} /></button></form><div className="chat-disclaimer">Aster is a helpful guide, not a replacement for a school counselor.</div></section></div></>;
}

function SettingsPage() {
  return <><PageHeader eyebrow="YOUR ACCOUNT" title="A little about you." subtitle="Your profile helps Aster make better recommendations." action={<Button variant="primary"><Check size={15} /> Save changes</Button>} /><div className="settings-layout"><aside className="settings-menu"><button className="settings-menu-active"><Users size={15} /> Student profile</button><button><LockKeyhole size={15} /> Account & security</button><button><Sparkles size={15} /> Preferences</button></aside><section className="panel settings-panel"><div className="settings-section-head"><div className="settings-avatar">JM</div><div><b>Jordan Miller</b><span>Class of 2027 · Profile 78% complete</span></div><button className="quiet-link">Change photo</button></div><div className="settings-fields"><label>First name<input defaultValue="Jordan" /></label><label>Last name<input defaultValue="Miller" /></label><label>Email address<input defaultValue="jordan.miller@email.com" /></label><label>Grade level<select defaultValue="11th grade"><option>9th grade</option><option>10th grade</option><option>11th grade</option><option>12th grade</option></select></label><label>Intended major<input defaultValue="Computer Science" /></label><label>Location<input defaultValue="Portland, Oregon" /></label></div><div className="settings-divider" /><div className="settings-section-head compact"><div><b>Your interests</b><span>These help us find opportunities that feel right.</span></div><button className="quiet-link">Edit interests</button></div><div className="interest-chips"><span>Computer Science <X size={12} /></span><span>Entrepreneurship <X size={12} /></span><span>Community service <X size={12} /></span><button><Plus size={13} /> Add interest</button></div></section></div></>;
}

function Onboarding({ onComplete, onBack, onSignIn }: { onComplete: () => void; onBack: () => void; onSignIn: () => void }) {
  const [step, setStep] = useState(1);
  const [grade, setGrade] = useState("11th grade");
  return (
    <main className="onboarding-page">
      <header className="onboarding-nav">
        <button onClick={onBack} className="back-link"><ArrowLeft size={16} /> Back</button>
        <Logo />
        <span>Already have an account? <button onClick={onSignIn}>Log in</button></span>
      </header>
      <div className="onboarding-wrap">
        <div className="onboarding-progress">
          <span>LET’S GET TO KNOW YOU</span>
          <b>0{step}<small> / 03</small></b>
          <div><i style={{ width: `${step / 3 * 100}%` }} /></div>
        </div>
        <AnimatePresence mode="wait">
          <motion.section className="onboarding-card" key={step} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} transition={{ duration: 0.2 }}>
            <span className="onboarding-icon">{step === 1 ? <GraduationCap size={21} /> : step === 2 ? <Compass size={21} /> : <Sparkles size={21} />}</span>
            <h1>{step === 1 ? "First, where are you right now?" : step === 2 ? "What are you curious about?" : "What makes you, you?"}</h1>
            <p>{step === 1 ? "We’ll meet you where you are. There’s no wrong place to start." : step === 2 ? "Dream a little. We’ll help you find the right paths." : "The best plans start with the things you already love."}</p>
            {step === 1 ? (
              <div className="onboarding-fields">
                <label>What grade are you in?<select value={grade} onChange={(event) => setGrade(event.target.value)}><option>9th grade</option><option>10th grade</option><option>11th grade</option><option>12th grade</option></select></label>
                <div className="onboarding-field-row">
                  <label>Current GPA <input placeholder="e.g. 3.7" /></label>
                  <label>Your state <select defaultValue=""><option value="" disabled>Select state</option><option>California</option><option>Oregon</option><option>Washington</option><option>Other</option></select></label>
                </div>
                <div className="onboarding-field-row">
                  <label>SAT score <input placeholder="Not taken yet" /></label>
                  <label>ACT score <input placeholder="Not taken yet" /></label>
                </div>
              </div>
            ) : step === 2 ? (
              <div className="onboarding-fields">
                <label>What are you interested in studying?<select defaultValue=""><option value="" disabled>Choose an area</option><option>Computer Science</option><option>Engineering</option><option>Business</option><option>Health & Medicine</option><option>Arts & Humanities</option><option>Still exploring</option></select></label>
                <label>What kind of future excites you?<div className="choice-chips">{["Building technology", "Helping people", "Creating things", "Leading a team", "Still exploring"].map((item) => <button type="button" className="choice-chip" key={item} onClick={(event) => event.currentTarget.classList.toggle("chosen")}>{item}</button>)}</div></label>
                <label>Any colleges on your mind?<input placeholder="Search schools or keep exploring" /></label>
              </div>
            ) : (
              <div className="onboarding-fields">
                <label>What do you love doing outside class?<div className="choice-chips">{["Coding", "Sports", "Volunteering", "Music", "Student clubs", "Research", "Art & design", "Something else"].map((item) => <button type="button" className="choice-chip" key={item} onClick={(event) => event.currentTarget.classList.toggle("chosen")}>{item}</button>)}</div></label>
                <div className="onboarding-field-row">
                  <label>Volunteer hours <input type="number" min="0" placeholder="e.g. 40" /></label>
                  <label>Leadership roles <input placeholder="Club president..." /></label>
                </div>
                <label>Awards or recognition <input placeholder="Competitions, honors, or awards" /></label>
                <label>Anything else we should know? <textarea placeholder="Tell us about an activity or goal you’re proud of..." rows={3} /></label>
              </div>
            )}
            <div className="onboarding-actions">
              {step > 1 && <Button variant="secondary" onClick={() => setStep(step - 1)}>Back</Button>}
              <Button variant="primary" onClick={() => step === 3 ? onComplete() : setStep(step + 1)}>{step === 3 ? "Build my Aster" : "Continue"} <ArrowRight size={15} /></Button>
            </div>
            <div className="onboarding-assurance"><ShieldCheck size={13} /> Your information stays yours. We never sell student data.</div>
          </motion.section>
        </AnimatePresence>
      </div>
      <div className="onboarding-stars"><span>✦</span><span>✧</span><span>✦</span><span>✧</span><span>✦</span></div>
    </main>
  );
}

function SignIn({ onBack, onCreate }: { onBack: () => void; onCreate: () => void }) {
  return <main className="signin-page"><header className="onboarding-nav"><button onClick={onBack} className="back-link"><ArrowLeft size={16} /> Back to Aster</button><Logo /><span>New to Aster? <button onClick={onCreate}>Create account</button></span></header><section className="signin-card"><span className="onboarding-icon"><Sparkles size={21} /></span><h1>Welcome back.</h1><p>Your next chapter is right where you left it.</p><button className="google-button"><span className="google-g">G</span> Continue with Google</button><div className="form-separator"><span>or with email</span></div><label>Email address<div className="input-with-icon"><Mail size={15} /><input type="email" placeholder="you@example.com" /></div></label><label>Password<div className="input-with-icon"><LockKeyhole size={15} /><input type="password" placeholder="Enter your password" /></div></label><button className="forgot-link">Forgot password?</button><Button variant="primary" className="full-button">Sign in <ArrowRight size={15} /></Button><div className="signin-secure"><ShieldCheck size={13} /> Secure sign-in. Your data stays yours.</div></section></main>;
}

function AppShell({ view, setView, onHome }: { view: Exclude<View, "landing" | "onboarding" | "signin">; setView: (view: View) => void; onHome: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  function selectView(next: View) { setView(next); setMobileOpen(false); }
  const renderPage = () => {
    if (view === "Dashboard") return <Dashboard setView={setView} />;
    if (view === "Roadmap") return <RoadmapPage />;
    if (view === "SAT Prep" || view === "ACT Prep") return <TestPrepPage isAct={view === "ACT Prep"} />;
    if (view === "Colleges") return <CollegesPage />;
    if (view === "Scholarships" || view === "Internships" || view === "Opportunities") return <DiscoveryPage kind={view} />;
    if (view === "Applications") return <ApplicationsPage />;
    if (view === "Profile Analyzer") return <ProfileAnalyzerPage setView={setView} />;
    if (view === "Future Simulator") return <FutureSimulatorPage />;
    if (view === "AI Counselor") return <AIPage />;
    return <SettingsPage />;
  };
  return <div className={`app-shell ${darkMode ? "dark-mode" : ""}`}>
    {mobileOpen && <button className="mobile-backdrop" onClick={() => setMobileOpen(false)} aria-label="Close menu" />}
    <aside className={`app-sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
      <button className="sidebar-brand" onClick={onHome}><Logo /></button>
      <button className="workspace-switch"><span className="workspace-avatar">J</span><span><b>Jordan’s space</b><small>Student workspace</small></span><ChevronDown size={14} /></button>
      <div className="sidebar-label">YOUR SPACE</div>
      <nav className="sidebar-nav">{navigation.map(({ name, icon: Icon }) => <button className={`sidebar-link ${view === name ? "sidebar-link-active" : ""} ${name === "AI Counselor" ? "ai-nav-link" : ""}`} key={name} onClick={() => selectView(name)}><Icon size={16} strokeWidth={1.8} /><span>{name}</span>{name === "Applications" && <span className="nav-badge">4</span>}{name === "AI Counselor" && <span className="nav-spark">✦</span>}</button>)}</nav>
      <div className="sidebar-bottom"><button className="sidebar-help"><span className="help-icon"><MessageCircle size={15} /></span><span><b>Need a hand?</b><small>We’re here for you</small></span><ArrowUpRight size={14} /></button><button className="user-profile"><span className="user-avatar">JM</span><span><b>Jordan Miller</b><small>Class of 2027</small></span><MoreHorizontal size={17} /></button></div>
    </aside>
    <main className="app-main"><header className="app-topbar"><div className="topbar-left"><button className="mobile-menu-button" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={19} /></button><div className="breadcrumbs"><span>My workspace</span><ChevronRight size={13} /><b>{view}</b></div></div><div className="topbar-actions"><div className="topbar-search"><Search size={15} /><span>Search anything...</span><kbd>⌘ K</kbd></div><button className="topbar-icon" aria-label="Help"><span>?</span></button><button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode"><span>{darkMode ? "☾" : "☼"}</span></button><button className="topbar-avatar">JM</button></div></header><div className="app-content"><AnimatePresence mode="wait"><motion.div key={view} className="view-transition" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}>{renderPage()}</motion.div></AnimatePresence><footer className="app-footer"><span>One step at a time. You’re doing great.</span><span>Made for what’s next <span className="footer-spark">✦</span></span></footer></div></main>
  </div>;
}

export default function AsterApp() {
  const [view, setView] = useState<View>("landing");
  const [returnView, setReturnView] = useState<View>("landing");
  const goToSignIn = () => { setReturnView(view === "Dashboard" ? "Dashboard" : "landing"); setView("signin"); };
  if (view === "landing") return <LandingPage onStart={() => setView("onboarding")} onDemo={() => setView("Dashboard")} onSignIn={goToSignIn} />;
  if (view === "onboarding") return <Onboarding onComplete={() => setView("Dashboard")} onBack={() => setView("landing")} onSignIn={() => setView("signin")} />;
  if (view === "signin") return <SignIn onBack={() => setView(returnView)} onCreate={() => setView("onboarding")} />;
  return <AppShell view={view} setView={setView} onHome={() => setView("landing")} />;
}
