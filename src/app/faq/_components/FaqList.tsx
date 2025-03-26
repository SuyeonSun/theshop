import { getFaqs } from "@/app/faq/_lib/faq-data";
import FaqItem from "./FaqItem";
import { Faq } from "../_types/types";

export default async function FaqList() {
  const faqs = await getFaqs();
  return (
    <>
      <ul>
        {faqs.map((faq: Faq) => (
          <FaqItem key={faq.question} faq={faq} />
        ))}
      </ul>
    </>
  );
}
