import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Experience = {
  name: string;
  href: string;
  title: string;
  logo: string;
  start: string;
  end?: string;
  description?: string[];
}
export default function TimelineItem({ experience }: { experience: Experience }) {
  const { name, href, title, logo, start, end, description } =
    experience;
  return (
    <li className="relative ml-10 py-4">
      <Link
        href={href}
        target="_blank"
        className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-card border-2 border-primary/20 hover:border-primary/40 transition-colors duration-200 shadow-sm hover:shadow-md"
      >
        <Avatar className="size-12 border-2 border-background">
          <AvatarImage
            src={logo}
            alt={name}
            className="bg-background object-contain"
          />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {name[0]}
          </AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-1 flex-col justify-start gap-2">
        {start && (
          <time className="text-sm text-muted-foreground font-medium">
            <span className="text-accent">{start}</span>
            <span className="text-muted-foreground/60">{" - "}</span>
            <span className="text-accent">{end ? end : "Present"}</span>
          </time>
        )}
        <h2 className="text-lg font-semibold leading-none text-foreground hover:text-primary transition-colors duration-200">
          <Link href={href} target="_blank" className="hover:text-primary transition-colors duration-200">  
            {name}
          </Link>
        </h2>
        {title && (
          <p className="text-base text-muted-foreground font-medium">
            {title}
          </p>
        )}
        {description && (
          <ul className="ml-4 list-outside list-disc space-y-1">
            {description.map((desc: string, i: number) => (
              <li 
                key={i} 
                className="prose pr-8 text-base text-muted-foreground leading-relaxed marker:text-accent/60"
              >
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}