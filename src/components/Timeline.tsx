import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "@/components/ui/card";

type Experience = {
  name: string;
  href: string;
  title: string;
  logo: string;
  start: string;
  end?: string;
  description?: string[];
}
export default function Timeline({ experience }: { experience: Experience[] }) {

  return (
    <Card className="p-0">
      <CardContent className="p-0">
        <ul className="ml-10 border-l ">
            {experience.map((exp: Experience, id: number) => (
                <TimelineItem key={id} experience={exp} />
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}