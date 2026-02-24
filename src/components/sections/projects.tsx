import { SectionWrapper } from "@/components/layout/section-wrapper";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: 1,
    title: "מערכת ניהול לקוחות לחברת ביטוח",
    description:
      "פלטפורמה מלאה לניהול פוליסות, תביעות ולקוחות. כוללת דשבורד אנליטיקס, ממשק סוכנים, ואינטגרציה עם מערכות קיימות.",
    category: "SaaS",
    href: "#",
  },
  {
    id: 2,
    title: "אפליקציית הזמנות למסעדות",
    description:
      "אפליקציית הזמנות עם ניהול תפריט דינמי, מערכת תשלומים, ומעקב משלוחים בזמן אמת.",
    category: "אפליקציה",
    href: "#",
  },
  {
    id: 3,
    title: "פורטל לימודים אונליין",
    description:
      "פלטפורמת e-learning עם שיעורים מוקלטים, מבחנים אינטראקטיביים, ומערכת מעקב התקדמות לסטודנטים ומרצים.",
    category: "EdTech",
    href: "#",
  },
  {
    id: 4,
    title: "מערכת CRM לסטארטאפ פינטק",
    description:
      "CRM מותאם אישית עם אוטומציות שיווק, ניתוח לידים מבוסס AI, ודשבורדים ניהוליים מתקדמים.",
    category: "פינטק",
    href: "#",
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4 text-center">
          פרויקטים שבנינו
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16 text-lg">
          כל פרויקט מתחיל מרעיון ומסתיים במוצר עובד. הנה כמה דוגמאות.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
