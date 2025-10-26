import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamCard = ({ name, role, bio, image }: TeamCardProps) => {
  return (
    <Card className="text-center hover:shadow-cultural transition-all duration-300 group overflow-hidden">
      <CardHeader className="pb-0">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors shadow-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm font-medium text-primary mb-3">{role}</p>
        <p className="text-sm text-muted-foreground line-clamp-3">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
