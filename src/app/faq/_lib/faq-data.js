import { connectDB } from "./db";

export async function getFaqs() {
  const db = await connectDB();
  const [rows] = await db.execute(
    "SELECT id, question, answer FROM faqs ORDER BY id DESC"
  );
  return rows;
}

export async function saveFaq(faq) {
  const db = await connectDB();
  const sql = "INSERT INTO faqs (question, answer) VALUES (?, ?)";
  const values = [faq.question, faq.answer];
  await db.execute(sql, values);
}
