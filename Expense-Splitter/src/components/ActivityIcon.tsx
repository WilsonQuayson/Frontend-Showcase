import type { Activity } from "../data";

type ActivityIconProps = Pick<Activity, "category" | "type">;

const expenseIconPath = "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z";
const settlementIconPath = "M7.5 15.75 3.75 12m0 0L7.5 8.25M3.75 12h16.5m-3.75-3.75L20.25 12m0 0-3.75 3.75M20.25 12H3.75";
const foodIconPath = "M6 3v7m-3-7v4a3 3 0 0 0 6 0V3m-3 7v11m9-18v18m0-18c2 2 3 4 3 7h-3";

const categoryIconPaths: Record<string, string> = {
  shopping: expenseIconPath,
  food: foodIconPath,
};

function ActivityIcon({ category, type }: ActivityIconProps) {
  const isEntertainment = category === "activity" || category === "entertainment";
  const fallbackIconPath = type === "expense" ? expenseIconPath : settlementIconPath;
  const iconPath = category ? categoryIconPaths[category] ?? fallbackIconPath : fallbackIconPath;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      className={`size-6 ${type === "expense" ? "text-green-400" : "text-blue-400"}`}
    >
      {isEntertainment ? (
        <>
          <rect x="3.5" y="2" width="17" height="20" rx="2.5" />
          <rect x="6.5" y="4.5" width="11" height="6" rx="0.75" />
          <path d="M4 12h16" />
          <rect x="8" y="13.5" width="8" height="5" rx="0.5" />
          <path d="M5.5 14.5v3m-1.5-1.5h3" />
          <circle cx="18" cy="14.5" r="0.5" />
          <circle cx="18" cy="17" r="0.5" />
        </>
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      )}
    </svg>
  );
}

export default ActivityIcon;