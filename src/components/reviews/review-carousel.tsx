"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PersonSilhouette } from "./review-card";
import type { Review } from "@/lib/types";

const reviews: Review[] = [
  { id: 1, quote: "BuildersView לקחו רעיון שהיה רק בראש שלי והפכו אותו למערכת שלמה. מקצועיות ברמה אחרת.", name: "יוסי כהן", role: "מייסד", company: "TechFlow", siteUrl: "#", image: "" },
  { id: 2, quote: "מה שהכי הפתיע אותי זה הליווי אחרי ההשקה. הם לא נעלמו — ממשיכים לתחזק, לשפר, ולהיות שם.", name: "נועה לוי", role: "סמנכ״לית מוצר", company: "EduSpark", siteUrl: "#", image: "" },
  { id: 3, quote: "עבדנו עם כמה חברות פיתוח לפני כן. BuildersView הם הראשונים שבאמת הבינו את הצורך העסקי ולא רק את הטכנולוגיה.", name: "דני אברהם", role: "CEO", company: "FinanceHub", siteUrl: "#", image: "" },
  { id: 4, quote: "התהליך היה שקוף מהרגע הראשון. ידענו בדיוק מה קורה, מתי, ולמה. ככה צריך לעבוד.", name: "מיכל שטרן", role: "מנהלת פרויקטים", company: "GreenTech", siteUrl: "#", image: "" },
  { id: 5, quote: "הצוות של BuildersView ממש נכנס לראש של המשתמש. כל מסך, כל כפתור — הכל מרגיש טבעי ומדויק.", name: "אורי גולן", role: "מנכ״ל", company: "UrbanApp", siteUrl: "#", image: "" },
  { id: 6, quote: "בשלושה חודשים הם בנו לנו מערכת שחברות אחרות אמרו שייקח שנה. ובלי פשרות על איכות.", name: "שירה ברק", role: "CTO", company: "DataSync", siteUrl: "#", image: "" },
  { id: 7, quote: "הם לא רק מפתחים — הם חושבים איתך על המוצר. שאלו שאלות שאפילו אנחנו לא חשבנו עליהן.", name: "איתי רוזן", role: "מייסד-שותף", company: "CloudBridge", siteUrl: "#", image: "" },
  { id: 8, quote: "מההתחלה הרגשנו שאנחנו בידיים טובות. תקשורת מעולה, עמידה בלוחות זמנים, ותוצאה שעלתה על הציפיות.", name: "רונית דוד", role: "מנהלת שיווק", company: "NextLevel", siteUrl: "#", image: "" },
  { id: 9, quote: "הגענו אליהם עם סקיצה על מפית והם החזירו מוצר מוכן לשוק. פשוט מדהים.", name: "עמית לב", role: "מייסד", company: "QuickShip", siteUrl: "#", image: "" },
  { id: 10, quote: "הם הצליחו לתרגם תהליך מורכב למשהו פשוט ואינטואיטיבי. המשתמשים שלנו מאושרים.", name: "טלי חן", role: "VP Product", company: "MediTrack", siteUrl: "#", image: "" },
  { id: 11, quote: "שיתוף הפעולה איתם הרגיש כמו הרחבה של הצוות שלנו. לא כמו ספק חיצוני.", name: "גיא שמעון", role: "COO", company: "LogiFlow", siteUrl: "#", image: "" },
  { id: 12, quote: "אחרי שלושה ספקים שונים, סוף סוף מצאנו מישהו שמבין מה זה לבנות מוצר ולא רק לכתוב קוד.", name: "ליאת מזרחי", role: "מייסדת", company: "StyleBox", siteUrl: "#", image: "" },
  { id: 13, quote: "כל עדכון שקיבלנו היה מעבר למה שציפינו. הם תמיד מוסיפים את הנגיעה הקטנה שעושה את ההבדל.", name: "אלון פרידמן", role: "מנכ״ל", company: "SmartBuild", siteUrl: "#", image: "" },
  { id: 14, quote: "הדבר הכי חשוב — הם עומדים מאחורי המילה שלהם. אם אמרו שיהיה מוכן, זה מוכן.", name: "דנה כץ", role: "סמנכ״לית תפעול", company: "FreshMarket", siteUrl: "#", image: "" },
  { id: 15, quote: "עבדתי עם הרבה מפתחים בקריירה שלי. BuildersView הם ברמה אחרת לגמרי.", name: "רועי אביב", role: "CTO", company: "PayLink", siteUrl: "#", image: "" },
  { id: 16, quote: "הם ידעו לשאול את השאלות הנכונות עוד לפני שהתחלנו. חסכו לנו חודשים של עבודה.", name: "שרון גל", role: "Product Manager", company: "EduVerse", siteUrl: "#", image: "" },
  { id: 17, quote: "קיבלנו מוצר שלא רק עובד — הוא יפה, מהיר, ואנשים אוהבים להשתמש בו.", name: "נתנאל כהן", role: "מייסד", company: "FitZone", siteUrl: "#", image: "" },
  { id: 18, quote: "הפתיעו אותנו עם פתרונות יצירתיים שלא חשבנו עליהם. ממש חשיבה מחוץ לקופסה.", name: "מאיה שפירא", role: "Head of Design", company: "PixelCraft", siteUrl: "#", image: "" },
  { id: 19, quote: "מהיום הראשון הרגשנו שהם מבינים את החזון שלנו. התוצאה הוכיחה את זה.", name: "יונתן בר", role: "CEO", company: "GreenPath", siteUrl: "#", image: "" },
  { id: 20, quote: "אמינות, מקצועיות, ותשומת לב לפרטים. שלושת הדברים שהכי חשובים לנו — וקיבלנו את כולם.", name: "הדס רותם", role: "מנהלת מוצר", company: "SafeHome", siteUrl: "#", image: "" },
  { id: 21, quote: "לא האמנתי שאפשר לבנות מערכת כזו בזמן כזה קצר. הם הוכיחו שאני טועה.", name: "עידן לוי", role: "מייסד-שותף", company: "BookNow", siteUrl: "#", image: "" },
  { id: 22, quote: "כל פגישה איתם הייתה פרודוקטיבית. בלי בזבוז זמן, בלי סיבובים — ישר לעניין.", name: "נוי אלקיים", role: "VP R&D", company: "CloudSync", siteUrl: "#", image: "" },
  { id: 23, quote: "הם בנו לנו אפליקציה שהמתחרים שלנו שואלים מי עשה. זה אומר הכל.", name: "תומר שגב", role: "מנכ״ל", company: "RideShare", siteUrl: "#", image: "" },
  { id: 24, quote: "השירות לא נגמר בהשקה. חודשיים אחרי הם עדיין זמינים, עדיין משפרים.", name: "אביגיל נחמני", role: "מנהלת פיתוח", company: "HealthBridge", siteUrl: "#", image: "" },
];

/** Split reviews into rows for the crowd grid */
const ROWS = [
  reviews.slice(0, 8),
  reviews.slice(8, 16),
  reviews.slice(16, 24),
];

const AUTO_CYCLE_MS = 4000;

export function ReviewCrowd() {
  const [activeId, setActiveId] = useState<number>(reviews[0].id);
  const isHovering = useRef(false);
  const autoCycleIndex = useRef(0);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovering.current) return;
      const review = reviews[autoCycleIndex.current % reviews.length];
      setActiveId(review.id);
      autoCycleIndex.current += 1;
    }, AUTO_CYCLE_MS);
    return () => clearInterval(interval);
  }, []);

  const handleActivate = useCallback((id: number) => {
    isHovering.current = true;
    setActiveId(id);
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      isHovering.current = false;
    }, 6000);
  }, []);

  const handleDeactivate = useCallback(() => {
    isHovering.current = false;
  }, []);

  const activeReview = reviews.find((r) => r.id === activeId) ?? null;

  return (
    <div className="relative">
      {/* Speech bubble area */}
      <div className="min-h-[160px] md:min-h-[180px] mb-10 flex items-end justify-center px-4">
        <AnimatePresence mode="wait">
          {activeReview && (
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative bg-bg-secondary border border-border/60 rounded-lg p-5 md:p-6 max-w-lg w-full"
            >
              <blockquote className="text-foreground text-sm md:text-base leading-relaxed mb-3">
                &ldquo;{activeReview.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-2">
                <p className="font-heading font-medium text-copper text-sm">
                  {activeReview.name}
                </p>
                <span className="text-text-secondary text-xs">
                  {activeReview.role}, {activeReview.company}
                </span>
              </div>

              {/* Triangle arrow pointing down */}
              <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-4 h-4 bg-bg-secondary border-b border-r border-border/60 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Crowd — multiple rows */}
      <div className="flex flex-col items-stretch gap-0 -mx-6 md:-mx-12 lg:-mx-20 overflow-hidden pt-8">
        {ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-end justify-around"
            style={{
              marginTop: rowIndex > 0 ? "-6px" : 0,
              paddingInlineStart: rowIndex % 2 === 1 ? "28px" : 0,
            }}
          >
            {row.map((review, colIndex) => (
              <PersonSilhouette
                key={review.id}
                review={review}
                isActive={activeId === review.id}
                onActivate={() => handleActivate(review.id)}
                onDeactivate={handleDeactivate}
                index={rowIndex * 8 + colIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
