import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site";
import { LinkButton } from "./link-button";

/** Always-visible call and enquire shortcuts on phones and tablets. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgb(20_26_46/0.25)] backdrop-blur-lg lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <Button
          variant="outline"
          className="h-11 rounded-full text-sm font-semibold"
          render={<a href={company.phoneHref} />}
        >
          <Phone className="text-brand" /> Call us
        </Button>
        <LinkButton href="/contact-us">
          <MessageSquare /> Enquire
        </LinkButton>
      </div>
    </div>
  );
}
