"use client";

import classNames from "classnames/bind";
import styles from "./faqItem.module.scss";
import { Text } from "@theshop/ui";
import { useState } from "react";
import { Faq } from "../_types/types";

export default function FaqItem({ faq }: { faq: Faq }) {
  const cx = classNames.bind(styles);

  const [open, setOpen] = useState(false);

  const handleButton = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <div onClick={handleButton} className={cx({ "faq-question": true })}>
          <Text size="body2" bold={false} color="adaptiveGrey900">
            {faq.question}
          </Text>
        </div>
        {open && (
          <div style={{ padding: "15px" }}>
            <Text size="body2" bold={false} color="adaptiveGrey800">
              {faq.answer}
            </Text>
          </div>
        )}
      </div>
    </>
  );
}
