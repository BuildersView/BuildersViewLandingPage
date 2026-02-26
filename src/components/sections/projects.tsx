"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import LogoLoop, { type LogoItem } from "@/components/reactbits/logo-loop";
import type { Project } from "@/lib/types";

interface ProjectClient extends Project {
  /** Simple Icons slug — used to fetch SVG from cdn.simpleicons.org */
  iconSlug: string;
  /** Brand color hex (without #) for the logo */
  brandColor: string;
}

const projects: ProjectClient[] = [
  {
    id: 1,
    name: "Google",
    logo: "Google",
    iconSlug: "google",
    brandColor: "4285F4",
    title: "דשבורד אנליטיקס פנימי",
    description:
      "דשבורד BI מותאם אישית לצוותי מוצר, עם ויזואליזציות בזמן אמת, KPIs אוטומטיים ואינטגרציה עם BigQuery.",
    category: "Enterprise",
    process: [
      "סדנת Discovery עם צוותי המוצר",
      "אפיון דשבורד ומקורות נתונים",
      "פיתוח ממשק React עם גרפים אינטראקטיביים",
      "אינטגרציה עם BigQuery ו-Looker",
      "השקה פנימית והדרכת צוותים",
    ],
    href: "#",
  },
  {
    id: 2,
    name: "YouTube",
    logo: "YouTube",
    iconSlug: "youtube",
    brandColor: "FF0000",
    title: "כלי ניהול תוכן ליוצרים",
    description:
      "פלטפורמת ניהול תוכן ליוצרי וידאו עם תזמון העלאות, ניתוח ביצועים ואוטומציות שיווק.",
    category: "Content",
    process: [
      "מחקר צרכי יוצרים וניתוח מתחרים",
      "עיצוב UX מותאם לזרימת עבודה",
      "פיתוח עם YouTube Data API",
      "מערכת תזמון ואוטומציות",
      "בטא עם יוצרים נבחרים והשקה",
    ],
    href: "#",
  },
  {
    id: 3,
    name: "Reddit",
    logo: "Reddit",
    iconSlug: "reddit",
    brandColor: "FF4500",
    title: "מערכת מודרציה חכמה",
    description:
      "כלי מודרציה מבוסס AI לקהילות גדולות, עם זיהוי אוטומטי של תוכן בעייתי ודשבורד ניהולי.",
    category: "AI / Community",
    process: [
      "אפיון כללי מודרציה ו-edge cases",
      "אימון מודל NLP לזיהוי תוכן",
      "פיתוח ממשק מודרטורים",
      "אינטגרציה עם Reddit API",
      "שיפור מתמיד לפי פידבק מודרטורים",
    ],
    href: "#",
  },
  {
    id: 4,
    name: "Spotify",
    logo: "Spotify",
    iconSlug: "spotify",
    brandColor: "1DB954",
    title: "אפליקציית פלייליסטים חברתית",
    description:
      "אפליקציה שמאפשרת ליצור פלייליסטים משותפים בזמן אמת, עם הצבעות והמלצות חכמות.",
    category: "Music / Social",
    process: [
      "מחקר משתמשים וסקרים",
      "עיצוב אינטראקציה חברתית",
      "פיתוח עם Spotify Web API",
      "מנוע המלצות מבוסס collaborative filtering",
      "השקה ב-App Store ו-Google Play",
    ],
    href: "#",
  },
  {
    id: 5,
    name: "Airbnb",
    logo: "Airbnb",
    iconSlug: "airbnb",
    brandColor: "FF5A5F",
    title: "פלטפורמת ניהול נכסים למארחים",
    description:
      "מערכת ניהול מלאה למארחים עם סנכרון לוחות שנה, תמחור דינמי ודוחות הכנסות.",
    category: "PropTech",
    process: [
      "מיפוי תהליכי ניהול מארחים",
      "עיצוב דשבורד ולוח שנה חכם",
      "פיתוח מנוע תמחור דינמי",
      "אינטגרציה עם Airbnb Calendar API",
      "השקה ותמיכה שוטפת",
    ],
    href: "#",
  },
  {
    id: 6,
    name: "Stripe",
    logo: "Stripe",
    iconSlug: "stripe",
    brandColor: "635BFF",
    title: "דשבורד תשלומים מתקדם",
    description:
      "ממשק ניהול תשלומים מותאם עם דוחות בזמן אמת, התראות חכמות וניהול מנויים.",
    category: "FinTech",
    process: [
      "ניתוח תהליכי תשלום קיימים",
      "אפיון דשבורד ודוחות",
      "פיתוח עם Stripe API ו-Webhooks",
      "מערכת התראות ומוניטורינג",
      "הטמעה, בדיקות אבטחה והשקה",
    ],
    href: "#",
  },
  {
    id: 7,
    name: "Netflix",
    logo: "Netflix",
    iconSlug: "netflix",
    brandColor: "E50914",
    title: "מנוע המלצות תוכן",
    description:
      "אלגוריתם המלצות מותאם אישית המשלב צפיות, דירוגים והתנהגות משתמשים לחוויית צפייה משופרת.",
    category: "AI / ML",
    process: [
      "ניתוח נתוני צפייה ודפוסי התנהגות",
      "בניית מודל ML להמלצות",
      "פיתוח A/B testing infrastructure",
      "אינטגרציה עם מערכת התוכן",
      "אופטימיזציה מתמשכת לפי מדדים",
    ],
    href: "#",
  },
  {
    id: 8,
    name: "Shopify",
    logo: "Shopify",
    iconSlug: "shopify",
    brandColor: "7AB55C",
    title: "אפליקציית ניהול מלאי חכמה",
    description:
      "אפליקציה לסוחרים שמנהלת מלאי במספר חנויות, עם תחזיות ביקוש והתראות מלאי נמוך.",
    category: "E-Commerce",
    process: [
      "מחקר שוק וצרכי סוחרים",
      "אפיון מערכת מלאי ותחזיות",
      "פיתוח Shopify App עם Polaris",
      "מנוע תחזיות מבוסס נתוני מכירות",
      "השקה ב-Shopify App Store",
    ],
    href: "#",
  },
  {
    id: 9,
    name: "GitHub",
    logo: "GitHub",
    iconSlug: "github",
    brandColor: "F0EDE8",
    title: "כלי Code Review אוטומטי",
    description:
      "GitHub App שמבצע ביקורת קוד אוטומטית, מזהה בעיות אבטחה ומציע שיפורים בזמן אמת.",
    category: "DevTools",
    process: [
      "אפיון חוקי ביקורת ובדיקות",
      "פיתוח GitHub App עם Probot",
      "אינטגרציה עם Static Analysis tools",
      "מנוע הצעות שיפור מבוסס AI",
      "השקה ב-GitHub Marketplace",
    ],
    href: "#",
  },
  {
    id: 10,
    name: "Notion",
    logo: "Notion",
    iconSlug: "notion",
    brandColor: "F0EDE8",
    title: "מערכת תיעוד אוטומטית",
    description:
      "כלי שמייצר תיעוד טכני אוטומטי מקוד, סנכרון עם Notion ועדכון שוטף בכל deploy.",
    category: "Productivity",
    process: [
      "ניתוח מבנה קוד ודוקומנטציה",
      "פיתוח parser לתיעוד אוטומטי",
      "אינטגרציה עם Notion API",
      "מערכת סנכרון בכל CI/CD run",
      "הטמעה בצוותי פיתוח",
    ],
    href: "#",
  },
  {
    id: 11,
    name: "Discord",
    logo: "Discord",
    iconSlug: "discord",
    brandColor: "5865F2",
    title: "פלטפורמת קהילה לקורסים",
    description:
      "בוט Discord לניהול קורסים אונליין עם מערכת תפקידים, שיעורי חי וגישה לתוכן בלעדי.",
    category: "EdTech",
    process: [
      "אפיון מבנה קהילה ותפקידים",
      "עיצוב Bot interactions",
      "פיתוח Discord Bot עם Discord.js",
      "מערכת גישה ותשלומים",
      "השקה וצמיחת קהילה",
    ],
    href: "#",
  },
];

const AUTO_CYCLE_MS = 3500;
const ICON_CDN = "https://cdn.simpleicons.org";

export function ProjectsSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const isHovering = useRef(false);
  const autoCycleIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovering.current) return;
      const project = projects[autoCycleIndex.current % projects.length];
      setActiveId(project.id);
      autoCycleIndex.current += 1;
    }, AUTO_CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  const handleItemHover = useCallback((projectIndex: number) => {
    isHovering.current = true;
    const project = projects[projectIndex];
    if (project) setActiveId(project.id);
  }, []);

  const handleItemLeave = useCallback(() => {
    isHovering.current = false;
  }, []);

  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  const logos: LogoItem[] = projects.map((p) => ({
    node: <span />,
    title: p.name,
  }));

  const renderItem = useCallback(
    (_item: LogoItem, key: string) => {
      const itemIndex = parseInt(key.split("-")[1], 10);
      const project = projects[itemIndex];
      if (!project) return null;
      const isActive = activeId === project.id;

      return (
        <div
          onMouseEnter={() => handleItemHover(itemIndex)}
          onMouseLeave={handleItemLeave}
          className={`
            inline-flex items-center gap-3 px-5 py-3 rounded-lg border cursor-pointer transition-all duration-300 select-none
            ${
              isActive
                ? "border-primary/50 bg-primary/10"
                : "border-transparent hover:border-border/40 hover:bg-bg-secondary/50"
            }
          `}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${ICON_CDN}/${project.iconSlug}/${project.brandColor}`}
            alt={project.name}
            width={20}
            height={20}
            className="w-5 h-5 transition-opacity duration-300"
            loading="lazy"
          />
          <span
            className={`font-heading font-bold text-lg tracking-tight transition-colors duration-300 whitespace-nowrap ${
              isActive ? "text-primary" : "text-text-secondary/70"
            }`}
          >
            {project.logo}
          </span>
        </div>
      );
    },
    [activeId, handleItemHover, handleItemLeave]
  );

  return (
    <SectionWrapper id="projects">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4 text-center">
          פרויקטים שבנינו
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12 text-lg">
          כל פרויקט מתחיל מרעיון ומסתיים במוצר עובד. העבירו את העכבר על לוגו
          כדי לראות פרטים.
        </p>
      </ScrollReveal>

      {/* Logo carousel */}
      <ScrollReveal>
        <div className="-mx-6 md:-mx-12 lg:-mx-20">
          <LogoLoop
            logos={logos}
            speed={50}
            direction="left"
            logoHeight={44}
            gap={16}
            hoverSpeed={15}
            scaleOnHover={false}
            fadeOut
            fadeOutColor="#0F1419"
            renderItem={renderItem}
          />
        </div>
      </ScrollReveal>

      {/* Detail panel */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="border border-border/60 rounded-lg bg-bg-secondary/80 backdrop-blur-sm p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Project info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${ICON_CDN}/${activeProject.iconSlug}/${activeProject.brandColor}`}
                      alt={activeProject.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <Badge
                      variant="secondary"
                      className="bg-copper-subtle text-copper border-0 text-xs"
                    >
                      {activeProject.category}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
                    {activeProject.description}
                  </p>
                  <a
                    href={activeProject.href}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-copper-hover transition-colors duration-200"
                  >
                    <span>לפרויקט</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </div>

                {/* Process steps */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
                    התהליך שלנו
                  </h4>
                  <ol className="space-y-3">
                    {activeProject.process.map((step, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.07,
                          duration: 0.25,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-text-secondary leading-relaxed">
                          {step}
                        </span>
                      </motion.li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
