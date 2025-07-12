import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "@/components/ui/card";

export default function Timeline({ experience }: { experience: any }) {

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <ul className="ml-10 border-l ">
            {experience.map((exp: any, id: any) => (
                <TimelineItem key={id} experience={exp} />
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}