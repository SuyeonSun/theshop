"use client";

import Header from "../_components/Header";
import { Input, Button } from "@theshop/ui";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (data) => {
    // 로그인 처리 로직 추가
    console.log(data);
  };

  return (
    <>
      <Header title="로그인" />
      <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px" }}>
        <Input
          {...register("id", { required: "아이디를 입력해주세요." })}
          placeholder="아이디"
          variant="outline"
          outlineColor="adaptiveGrey300"
          backgroundColor="adaptiveBackground"
          full
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ marginBottom: "10px" }}
        />

        <Input
          {...register("password", { required: "비밀번호를 입력해주세요." })}
          type="password"
          placeholder="비밀번호"
          variant="outline"
          outlineColor="adaptiveGrey300"
          backgroundColor="adaptiveBackground"
          full
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "10px" }}
        />

        <Button
          type="submit"
          outlineColor="adaptiveGrey900"
          backgroundColor="adaptiveGrey900"
          full
        >
          로그인
        </Button>
      </form>
    </>
  );
}
