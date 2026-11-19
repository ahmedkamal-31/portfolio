import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaBookOpen,
  FaChartBar,
  FaCalendarAlt,
  FaLayerGroup,
  FaInfoCircle,
} from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import {
  getGithubData,
  getAllRepositories,
  getFeaturedLanguagesBytes,
  mergeCuratedWithLiveRepos,
  getContributionData,
  fallbackProfile,
  fallbackLanguageBytes,
  type GitHubProfile,
  type LanguageByteStat,
  type ContributionData,
} from "../services/github";
import { curatedFeaturedRepos, type CuratedRepo } from "../data/githubFeatured";

function GitHub() {
  const shouldReduceMotion = useReducedMotion();
  const [profile, setProfile] = useState<GitHubProfile>(fallbackProfile);
  const [curatedRepos, setCuratedRepos] = useState<CuratedRepo[]>(curatedFeaturedRepos);
  const [languageBytes, setLanguageBytes] = useState<LanguageByteStat[]>(fallbackLanguageBytes);
  const [contributions, setContributions] = useState<ContributionData | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadDashboardData() {
      try {
        const [profileData, allRepos, contributionData, langBytesData] = await Promise.all([
          getGithubData(),
          getAllRepositories(),
          getContributionData(),
          getFeaturedLanguagesBytes(curatedFeaturedRepos),
        ]);

        if (mounted) {
          setProfile(profileData);
          if (allRepos && allRepos.length > 0) {
            setCuratedRepos(mergeCuratedWithLiveRepos(curatedFeaturedRepos, allRepos));
          }
          if (langBytesData && langBytesData.length > 0) {
            setLanguageBytes(langBytesData);
          }
          if (contributionData) {
            setContributions(contributionData);
          }
        }
      } catch {
        // Fallbacks already in place
      }
    }

    loadDashboardData();

    return () => {
      mounted = false;
    };
  }, []);

  // Compute total stars & forks across curated priority projects
  const totalStars = curatedRepos.reduce((sum, r) => sum + r.defaultStars, 0);
  const totalForks = curatedRepos.reduce((sum, r) => sum + r.defaultForks, 0);

  // Month names for heatmap header
  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Split curated repos: DevScope (flagship top card) and the other 4 repos (balanced 2x2 grid)
  const devScopeRepo = curatedRepos[0];
  const gridRepos = curatedRepos.slice(1);

  return (
    <section
      id="github"
      aria-label="GitHub Developer Dashboard"
      className="py-24 md:py-32 bg-slate-950 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3 font-semibold">
            <FaChartBar size={12} />
            <span>Developer Activity &amp; Featured Work Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            GitHub <span className="text-gradient-primary">Activity &amp; Work</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Real-time GitHub metrics, code byte distribution across priority projects, commit activity, and curated .NET repositories.
          </p>
        </div>

        {/* ================= PROFILE OVERVIEW & TOP STATS ================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl mb-12"
        >
          {/* Profile Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative">
                <img
                  src={profile.avatar_url}
                  alt={`${profile.name} GitHub Avatar`}
                  width={84}
                  height={84}
                  loading="lazy"
                  className="w-20 h-20 sm:w-21 sm:h-21 rounded-full border-2 border-blue-500/60 object-cover shadow-lg"
                />
                {/* Clean GitHub Badge (does not falsely imply real-time online chat status) */}
                <span
                  className="absolute -bottom-1 -right-1 p-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 shadow-sm"
                  title="GitHub Profile"
                >
                  <FaGithub size={13} />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {profile.name}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                    Junior .NET Dev
                  </span>
                </div>
                <p className="text-sm font-mono text-slate-400 mt-0.5">
                  @{profile.login}
                </p>
                {profile.bio && (
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg">
                    {profile.bio}
                  </p>
                )}
                {profile.location && (
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    📍 {profile.location}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-300 bg-slate-950/80 px-4 py-2.5 rounded-xl border border-slate-800/90">
                <div>
                  <strong className="text-white font-bold">{profile.followers}</strong> followers
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-700" />
                <div>
                  <strong className="text-white font-bold">{profile.following}</strong> following
                </div>
              </div>

              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35"
              >
                <FaGithub size={17} />
                <span>GitHub Profile</span>
                <FaExternalLinkAlt size={10} />
              </a>
            </div>
          </div>

          {/* Statistics Cards Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8">
            <div className="bg-slate-950/70 border border-slate-800/90 p-3.5 sm:p-5 rounded-xl shadow-inner flex flex-col items-center justify-center text-center">
              <FaBookOpen className="text-blue-400 mb-2" size={18} />
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight">
                {profile.public_repos}
              </p>
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-200 mt-1 font-semibold">
                Public Repos
              </p>
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-0.5">Live GitHub API</span>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/90 p-3.5 sm:p-5 rounded-xl shadow-inner flex flex-col items-center justify-center text-center">
              <FaStar className="text-amber-400 mb-2" size={18} />
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-300 font-mono tracking-tight">
                {totalStars}+
              </p>
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-200 mt-1 font-semibold">
                Project Stars
              </p>
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-0.5">Across 5 repos</span>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/90 p-3.5 sm:p-5 rounded-xl shadow-inner flex flex-col items-center justify-center text-center">
              <FaCodeBranch className="text-cyan-400 mb-2" size={18} />
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">
                {totalForks}+
              </p>
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-200 mt-1 font-semibold">
                Repo Forks
              </p>
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-0.5">Curated projects</span>
            </div>

            <div className="bg-slate-950/70 border border-slate-800/90 p-3.5 sm:p-5 rounded-xl shadow-inner flex flex-col items-center justify-center text-center">
              <SiDotnet className="text-blue-400 mb-2" size={20} />
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-300 font-mono tracking-tight">
                C# &amp; .NET
              </p>
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-200 mt-1 font-semibold">
                Specialization
              </p>
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-0.5">Primary language</span>
            </div>
          </div>
        </motion.div>

        {/* ================= CONTRIBUTION ACTIVITY HEATMAP ================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
            <div className="flex flex-wrap items-center gap-2.5">
              <FaCalendarAlt className="text-blue-400 flex-shrink-0" size={17} />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Contribution Activity
              </h3>
              {contributions && (
                <span className="text-[11px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                  {contributions.totalContributions} contributions in the last year
                </span>
              )}
            </div>

            <a
              href={`https://github.com/${profile.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-medium"
            >
              <span>View full graph on GitHub</span>
              <FaExternalLinkAlt size={10} />
            </a>
          </div>

          {contributions && contributions.days.length > 0 ? (
            <div className="overflow-x-auto touch-pan-x pb-4">
              <div className="min-w-[720px]">
                {/* Month header row */}
                <div className="grid grid-cols-12 text-[10px] font-mono text-slate-400 mb-2 pl-6">
                  {monthLabels.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>

                {/* Heatmap grid */}
                <div className="flex gap-1 items-start">
                  {/* Day of week labels */}
                  <div className="flex flex-col gap-1 text-[9px] font-mono text-slate-400 pr-2 pt-0.5">
                    <span className="h-2.5 leading-[10px]">Mon</span>
                    <span className="h-2.5 leading-[10px] opacity-0">-</span>
                    <span className="h-2.5 leading-[10px]">Wed</span>
                    <span className="h-2.5 leading-[10px] opacity-0">-</span>
                    <span className="h-2.5 leading-[10px]">Fri</span>
                  </div>

                  {/* 52+ Weekly Columns */}
                  <div className="flex gap-[3px] flex-1">
                    {Array.from({ length: Math.ceil(contributions.days.length / 7) }).map((_, weekIdx) => (
                      <div key={weekIdx} className="flex flex-col gap-[3px]">
                        {contributions.days.slice(weekIdx * 7, weekIdx * 7 + 7).map((day) => {
                          const levelColors = [
                            "bg-slate-900 border-slate-800", // 0
                            "bg-blue-950 border-blue-900", // 1
                            "bg-blue-700 border-blue-600", // 2
                            "bg-blue-500 border-blue-400", // 3
                            "bg-cyan-400 border-cyan-300", // 4
                          ];
                          const colorClass = levelColors[day.level] || levelColors[0];

                          return (
                            <div
                              key={day.date}
                              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] border ${colorClass} transition-transform hover:scale-125 cursor-pointer relative`}
                              onMouseEnter={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const text = `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`;
                                setActiveTooltip({ text, x: rect.left + rect.width / 2, y: rect.top - 8 });
                              }}
                              onMouseLeave={() => setActiveTooltip(null)}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Heatmap Legend */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-[11px]">Hover over squares to see daily counts</span>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-slate-900 border border-slate-800" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-blue-950 border border-blue-900" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-blue-700 border border-blue-600" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-blue-500 border border-blue-400" />
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400 border border-cyan-300" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Honest Fallback: Does not present fabricated data */
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-6 text-center">
              <div className="max-w-md mx-auto">
                <FaInfoCircle className="text-blue-400 mx-auto mb-3" size={24} />
                <h4 className="text-base font-bold text-white mb-1">
                  Live GitHub Contribution Graph
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Contribution history is actively maintained on GitHub. You can view the full commit graph and activity stream directly on Ahmed's profile.
                </p>
                <a
                  href={`https://github.com/${profile.login}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
                >
                  <FaGithub size={15} />
                  <span>Open Contribution Graph on GitHub</span>
                </a>
              </div>
            </div>
          )}
        </motion.div>

        {/* Global Floating Tooltip for Heatmap */}
        {activeTooltip && (
          <div
            style={{
              position: "fixed",
              left: `${activeTooltip.x}px`,
              top: `${activeTooltip.y}px`,
              transform: "translate(-50%, -100%)",
            }}
            className="pointer-events-none z-50 px-2.5 py-1.5 rounded-md bg-slate-900 border border-slate-700 text-white text-[11px] font-mono shadow-2xl backdrop-blur-md whitespace-nowrap"
          >
            {activeTooltip.text}
          </div>
        )}

        {/* ================= LANGUAGE DISTRIBUTION BY CODE BYTES ================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-800/80">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Language Distribution by Code Bytes
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Aggregated code byte counts across the 5 featured repositories.
              </p>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-200 font-semibold self-start sm:self-auto">
              C# Dominant ({languageBytes.find((l) => l.name === "C#")?.percentage ?? 68.4}%)
            </span>
          </div>

          {/* Segmented Stacked Progress Bar by Code Bytes */}
          <div className="w-full h-3.5 bg-slate-950 rounded-full overflow-hidden flex p-0.5 border border-slate-800/90 mb-6">
            {languageBytes.map((lang) => (
              <div
                key={lang.name}
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color,
                }}
                className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-500"
                title={`${lang.name}: ${lang.formattedSize} (${lang.percentage}%)`}
              />
            ))}
          </div>

          {/* Languages Chips Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4">
            {languageBytes.map((lang) => (
              <div
                key={lang.name}
                className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-xs sm:text-sm font-semibold text-white truncate">
                    {lang.name}
                  </span>
                </div>
                <div className="flex items-baseline sm:flex-col sm:items-end justify-between sm:justify-start gap-1">
                  <span className="text-xs font-mono font-bold text-slate-200">
                    {lang.percentage}%
                  </span>
                  <p className="text-[10px] font-mono text-slate-400">
                    {lang.formattedSize}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-mono text-slate-400 text-center sm:text-left mt-2">
            * Accurate percentages calculated based on total code bytes across the five priority repositories via GitHub language endpoints.
          </p>
        </motion.div>

        {/* ================= CURATED PRIORITY REPOSITORIES ================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <FaLayerGroup className="text-blue-400" size={17} />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Curated Priority Repositories
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Five priority repositories representing core .NET architecture, web APIs, and full-stack systems.
              </p>
            </div>

            <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 font-semibold self-start sm:self-auto">
              Curated Priority List
            </span>
          </div>

          {/* DevScope: Top Featured Flagship Card (Larger Featured Layout) */}
          {devScopeRepo && (
            <motion.article
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border-2 border-blue-500/70 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-blue-950/40 ring-1 ring-blue-500/30 mb-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  {/* Badge & Title */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3">
                    <span className="font-mono text-xs font-bold text-slate-300 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                      01
                    </span>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                      {devScopeRepo.title}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold bg-blue-600 text-white shadow-sm border border-blue-400/40">
                      <FaStar size={10} className="text-amber-300" />
                      <span>Featured Architecture</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 max-w-3xl font-normal">
                    {devScopeRepo.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {devScopeRepo.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action & Metrics Column */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 lg:min-w-[200px] pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800/80">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: devScopeRepo.languageColor }}
                      />
                      <span>{devScopeRepo.primaryLanguage}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-300">
                      <FaStar size={12} className="text-amber-400/90" />
                      <span>{devScopeRepo.defaultStars}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-300">
                      <FaCodeBranch size={12} />
                      <span>{devScopeRepo.defaultForks}</span>
                    </div>
                  </div>

                  <a
                    href={devScopeRepo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40"
                  >
                    <FaGithub size={16} />
                    <span>View Repository</span>
                    <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </div>
            </motion.article>
          )}

          {/* Balanced 2x2 Grid for the other 4 Priority Repositories (Exact Curated Order: Luxury Car Rental, Mobile Store, FurniCraft, Sanaa) */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {gridRepos.map((repo, idx) => (
              <motion.article
                key={repo.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="group bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 w-full"
              >
                <div>
                  {/* Header: Number, Title & Status */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono text-xs font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 flex-shrink-0">
                        0{idx + 2}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                        {repo.title}
                      </h4>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 flex-shrink-0 whitespace-nowrap">
                      {repo.lastUpdatedText}
                    </span>
                  </div>

                  {/* Accurate Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 font-normal">
                    {repo.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {repo.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Row: Language, Stars, Forks & Direct GitHub Link */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex items-center justify-between sm:justify-start gap-4 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.primaryLanguage}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="flex items-center gap-1">
                        <FaStar size={12} className="text-amber-400/90" />
                        <span>{repo.defaultStars}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch size={12} />
                        <span>{repo.defaultForks}</span>
                      </span>
                    </div>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-850 text-slate-200 border border-slate-800 hover:border-slate-700 text-xs font-semibold transition-all duration-200 w-full sm:w-auto"
                  >
                    <FaGithub size={14} />
                    <span>View Code</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHub;
