"use client";

import type { Newsletter } from "@/types/newsletter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@/contexts/user-context";
import Image from "next/image";

interface NewsletterCardProps {
  newsletter: Newsletter;
}

export function NewsletterCard({ newsletter }: NewsletterCardProps) {
  const { user } = useUser();

  const hasAccess =
    !newsletter.subscriptions.length ||
    newsletter.subscriptions.some((sub) => user.subscriptions?.includes(sub));

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="w-full relative object-cover h-[50vw] sm:h-[200px]">
        <Image src={newsletter.image} alt={newsletter.title} fill />
      </div>
      <CardHeader className="flex-1">
        <CardTitle>{newsletter.title}</CardTitle>
        <CardDescription>{newsletter.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant={hasAccess ? "default" : "destructive"}
          className="w-full"
        >
          {hasAccess ? "S'inscrire" : "S'abonner"}
        </Button>
      </CardContent>
    </Card>
  );
}
