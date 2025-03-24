import Link from "next/link";

export default function BlogHomePage() {
  return (
    <div>
      <h1>Blog 홈 페이지</h1>
      <ul>
        <li>
          <Link href="/blog/list">Blog List 페이지</Link>
        </li>
        <li>
          <Link href="/blog/new">Blog New 페이지</Link>
        </li>
      </ul>
    </div>
  );
}
