import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<div>로딩중</div>}>
        <Home1 />
      </Suspense>
      <Suspense fallback={<div>로딩중</div>}>
        <Home2 />
      </Suspense>
      <Suspense fallback={<div>로딩중</div>}>
        <Home3 />
      </Suspense>
    </div>
  );
}

async function Home1() {
  const response = await fetch("http://localhost:3000/api/status");
  const data = await response.json();

  console.log(data);

  return <div>status1: {data.status ? "성공" : "실패"}</div>;
}

async function Home2() {
  const response = await fetch("http://localhost:3000/api/status");
  const data = await response.json();

  console.log(data);

  return <div>status2: {data.status ? "성공" : "실패"}</div>;
}

async function Home3() {
  const response = await fetch("http://localhost:3000/api/status");
  const data = await response.json();

  console.log(data);

  return <div>status3: {data.status ? "성공" : "실패"}</div>;
}
