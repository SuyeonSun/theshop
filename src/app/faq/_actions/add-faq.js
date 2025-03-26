"use server";

import { saveFaq } from "@/app/faq/_lib/faq-data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addFaq(newFormData) {
  const faq = {
    question: newFormData.get("question"),
    answer: newFormData.get("answer"),
  };
  await saveFaq(faq);
  revalidatePath("/faq");
  redirect("/faq");
}
