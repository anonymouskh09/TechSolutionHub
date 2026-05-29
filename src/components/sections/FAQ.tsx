import { faqs } from "@/lib/data/faqs";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <SectionWrapper className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-dark md:text-4xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
