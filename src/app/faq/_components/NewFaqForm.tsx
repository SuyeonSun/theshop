"use client";

import { useFormStatus } from "react-dom";
import { addFaq } from "@/app/faq/_actions/add-faq";
import { Button, Flex, Input, Text } from "@theshop/ui";
import classNames from "classnames/bind";
import styles from "./newFaqForm.module.scss";
import { useState } from "react";

export default function NewFaqForm() {
  const cx = classNames.bind(styles);
  const { pending } = useFormStatus();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (formData: FormData) => {
    await addFaq(formData);
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className={cx({ "new-faq-form-container": true })}>
      <div className={cx({ "form-title": true })}>
        <Text size="body3" bold={true} color="adaptiveGrey900">
          새로운 FAQ를 입력하세요.
        </Text>
      </div>
      <form action={handleSubmit}>
        <Flex direction="column" gap="sm">
          <Input
            name="question"
            placeholder="질문을 입력하세요."
            variant="outline"
            outlineColor="adaptiveGrey300"
            backgroundColor="adaptiveBackground"
            full
            required
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            value={question}
          />
          <Input
            name="answer"
            placeholder="답변을 입력하세요."
            variant="outline"
            outlineColor="adaptiveGrey300"
            backgroundColor="adaptiveBackground"
            full
            required
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            value={answer}
          />
          <Button
            disabled={pending}
            outlineColor="adaptiveGrey900"
            backgroundColor="adaptiveGrey900"
            full
          >
            {pending ? "등록 중" : "등록"}
          </Button>
        </Flex>
      </form>
    </div>
  );
}
