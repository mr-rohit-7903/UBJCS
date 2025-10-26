import { Heart, Users, Star, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Preservation",
      description: "Preserving and promoting the rich cultural heritage of UP, Bihar, and Jharkhand",
    },
    {
      icon: Users,
      title: "Community Unity",
      description: "Building strong bonds among community members through shared traditions",
    },
    {
      icon: Star,
      title: "Traditional Excellence",
      description: "Maintaining high standards in cultural performances and celebrations",
    },
    {
      icon: Target,
      title: "Future Vision",
      description: "Passing on cultural values and traditions to future generations",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About UBJCS</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            UP Bihar Jharkhand Cultural Society
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The UP Bihar Jharkhand Cultural Society (UBJCS) is dedicated to preserving,
              promoting, and celebrating the rich cultural heritage of the communities from
              Uttar Pradesh, Bihar, and Jharkhand. We serve as a vibrant platform where
              tradition meets community, fostering unity and cultural awareness.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through our various programs, festivals, and events, we create opportunities
              for community members to connect with their roots, share their traditions,
              and pass on cultural values to the next generation.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a thriving community where cultural traditions are not just preserved
              but actively celebrated. Our goal is to create an inclusive space where people of
              all ages can experience the beauty of our cultural heritage through music, dance,
              festivals, and community gatherings. We strive to be a bridge between generations,
              ensuring that our rich cultural legacy continues to flourish for years to come.
            </p>
          </div>

          {/* Values Grid */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gradient text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border hover:shadow-cultural transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* History Section */}
          <div className="mt-16 p-8 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded by a group of passionate individuals who wanted to keep their cultural
              traditions alive, UBJCS has grown into a vibrant community organization. Over the
              years, we have organized numerous cultural events, festivals, and gatherings that
              have brought our community together. From Chhath Puja celebrations to cultural
              nights featuring traditional music and dance, we continue to create memorable
              experiences that strengthen our cultural bonds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
