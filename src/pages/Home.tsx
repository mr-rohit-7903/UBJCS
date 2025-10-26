import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import heroImage from "@/assets/hero-image.jpg";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  time?: string;
  location?: string;
}

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        // Show only first 3 upcoming events
        setEvents(data.slice(0, 3));
      })
      .catch((error) => console.error("Error loading events:", error));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cultural celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to UBJCS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow">
            Promoting Culture and Unity
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
            UP Bihar Jharkhand Cultural Society celebrates and preserves the rich
            cultural heritage of our communities through traditional events, performances,
            and community gatherings.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/events">
              <Button size="lg" className="shadow-glow">
                View Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="secondary" className="shadow-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating our cultural heritage through traditional festivals
            and community gatherings
          </p>
        </div>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading events...</p>
          </div>
        )}

        <div className="text-center">
          <Link to="/events">
            <Button variant="outline" size="lg">
              View All Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-cultural text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Become a part of UBJCS and help us preserve and promote the rich cultural
            traditions of UP, Bihar, and Jharkhand
          </p>
          <Link to="/about">
            <Button size="lg" variant="secondary" className="shadow-lg">
              Get Involved
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
