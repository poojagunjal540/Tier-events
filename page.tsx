// src/app/page.tsx
import { getEvents } from "@/lib/actions";
import EventCard from "@/components/EventCard";

export default async function HomePage() {
  const groupedEvents = await getEvents();

  return (
    <main className="p-6 space-y-10">
      {Object.entries(groupedEvents).map(([tier, events]) => (
        <section key={tier}>
          <h2 className="text-2xl font-bold capitalize mb-4">{tier} Tier</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                imageUrl={event.imageUrl}
                date={event.date}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
