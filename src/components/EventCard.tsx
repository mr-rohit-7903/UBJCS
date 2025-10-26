import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  time?: string;
  location?: string;
}

const EventCard = ({ title, date, description, image, time, location }: EventCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="overflow-hidden hover:shadow-cultural transition-all duration-300 group">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary shadow-lg">Upcoming</Badge>
        </div>
      </div>
      
      <CardHeader>
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{formattedDate}</span>
          </div>
          
          {time && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{time}</span>
            </div>
          )}
          
          {location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <button className="text-primary font-medium text-sm hover:underline">
          Learn More →
        </button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
