import Nav from "./components/Nav";
import ActivityIcon from "./components/ActivityIcon.tsx";
import { activities, currentGroup, type Activity } from "./data";

const avatarColors = ["bg-rose-500", "bg-amber-500", "bg-emerald-500", "bg-sky-500"];

const countActivitiesByType = (type: Activity["type"]) =>
  activities.filter((activity) => activity.type === type).length;

function Home() {
  return (
    <section className="flex h-screen w-screen overflow-hidden bg-[#0c0f16]">
      <Nav />
      <section className="h-screen min-h-0 min-w-0 flex-1 overflow-y-auto p-8 text-white">
        <div className="flex justify-between">
          <div>
            <h1 className="text-6xl font-medium">{currentGroup.name}</h1>
            <p className="text-white/60 mt-4">{currentGroup.description}</p>
          </div>
          <div className="flex items-start gap-2">
            <button className="bg-[#10141d] border border-white/30 py-2 px-4 rounded-lg hover:cursor-pointer">Settle Up</button>
            <button className="bg-blue-400 border border-blue-500 py-2 px-4 rounded-lg hover:cursor-pointer">Add expense</button>
            <button className="inline-flex items-center justify-center bg-[#10141d] border border-white/30 py-2 px-4 rounded-lg hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-4 text-white/80 flex items-center gap-8">
          <p><span className="text-white font-medium">${currentGroup.totalSpent}</span> total spent</p>
          <p>{currentGroup.expenseCount} expenses</p>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {currentGroup.members.map((member, index) => (
                <div
                  key={member.id}
                  role="img"
                  aria-label={member.name}
                  title={member.name}
                  className={`relative grid size-9 flex-none place-items-center rounded-full text-xs font-semibold text-white ring-2 ring-[#0c0f16] ${avatarColors[index % avatarColors.length]}`}
                >
                  {member.initials}
                </div>
              ))}
            </div>
            <span>{currentGroup.members.length} members</span>
          </div>
        </div>
        <hr className="mt-8 border border-white/40"/>
        <section className="grid grid-cols-3 mt-8 gap-x-8">
          <div className="col-span-2 text-white/60">
            <div className="flex justify-between">
              <div>
                <h2>Activity</h2>
              </div>
              <div>
                <p>{countActivitiesByType("expense")} expenses • {countActivitiesByType("settlement")} settlements</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border-2 border-white/30 bg-[#10141d] px-4">
              {activities.map((activity) => (
                <article
                  key={activity.id}
                  className={`-mx-4 flex items-center justify-between gap-4 border-b border-white/20 px-4 py-4 last:border-b-0 ${activity.type === "settlement" ? "rounded-lg bg-emerald-500/10" : ""}`}
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="rounded bg-[#141a24] p-2">
                      <ActivityIcon category={activity.category} type={activity.type} />
                    </div>
                    <div className="min-w-0">
                      <h2 className="truncate font-medium text-white text-xl">{activity.title}</h2>
                      <p className="flex items-center gap-2">
                        {activity.type === "settlement" ? (
                          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-300">
                            Settlement
                          </span>
                        ) : (
                          <span>{activity.paidBy}</span>
                        )}
                        <span>• {activity.date}</span>
                      </p>
                    </div>
                  </div>
                  <h2 className={`shrink-0 font-medium ${activity.type === "settlement" ? "text-emerald-300" : "text-white"}`}>
                    {new Intl.NumberFormat("en-US", { style: "currency", currency: activity.currency }).format(activity.amount)}
                  </h2>
                </article>
              ))}
            </div>
          </div>
          <section className="col-span-1">
            <section className="rounded-2xl border-2 border-emerald-500/50 bg-[#10141d] p-8">
              <div className="flex gap-4">
                <div className="bg-emerald-500/10 size-12 flex justify-center items-center rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 text-emerald-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                  </svg>
                </div>
                <div className="font-medium text-white/80">
                  <p>You are owed</p>
                  <p className="text-4xl text-emerald-500">$216.47</p>
                  <p>others owe you accross this group</p>
                </div>
              </div>
              <hr className="mt-8 border border-white/20" />
              <div className="mt-6 flex justify-around">
                <div>
                  <p className="text-white/50">You paid</p>
                  <p className="text-xl">$1,123.04</p>
                </div>
                <div>
                  <p className="text-white/50">Your share</p>
                  <p className="text-xl">$756.58</p>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Home;
