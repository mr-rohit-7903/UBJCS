import { useEffect, useState } from "react";
import TeamCard from "@/components/TeamCard";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface TeamData {
  executive: TeamMember[];
  cultural: TeamMember[];
  volunteers: TeamMember[];
}

const Team = () => {
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then((data) => {
        setTeamData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading team data:", error);
        setLoading(false);
      });
  }, []);

  const sections = [
    { key: "executive", title: "Executive Team", description: "Leading our organization with vision and dedication" },
    { key: "cultural", title: "Cultural Team", description: "Organizing performances and preserving traditions" },
    { key: "volunteers", title: "Volunteer Team", description: "Supporting our community initiatives" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet the dedicated individuals who make UBJCS thrive
          </p>
        </div>
      </section>

      {/* Team Sections */}
      <section className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Loading team members...</p>
          </div>
        ) : teamData ? (
          <div className="space-y-20">
            {sections.map((section, index) => (
              <div key={section.key} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-3 text-gradient">{section.title}</h2>
                  <p className="text-lg text-muted-foreground">{section.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {teamData[section.key as keyof TeamData]?.map((member, idx) => (
                    <TeamCard key={idx} {...member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No team information available.</p>
          </div>
        )}
      </section>

      {/* Join Team CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-cultural rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Interested in contributing to our cultural initiatives? We're always looking for
            passionate individuals to join our volunteer team!
          </p>
          <a
            href="mailto:info@ubjcs.org"
            className="inline-block px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:shadow-glow transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
