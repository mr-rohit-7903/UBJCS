import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  time?: string;
  location?: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort events by date (newest first)
        const sortedEvents = data.sort(
          (a: Event, b: Event) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setEvents(sortedEvents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading events:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-cultural text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Celebrate culture, tradition, and community at our upcoming events
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Loading events...</p>
          </div>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No events available at the moment.</p>
            <p className="text-sm text-muted-foreground mt-2">Please check back later!</p>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-primary rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest events and cultural programs. Join us in celebrating
            our rich heritage!
          </p>
          <a
            href="mailto:info@ubjcs.org"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-glow transition-all"
          >
            Contact Us for More Info
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;
