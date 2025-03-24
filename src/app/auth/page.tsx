"use client";

import Image from "next/image";
import { Button, Flex } from "@theshop/ui";
import classNames from "classnames/bind";
import styles from "./page.module.scss";

export default function AuthPage() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx({ "auth-page-container": true })}>
      <div>
        <Flex direction="row" justify="center" align="center">
          <Image src="/logo.svg" width={100} height={20} alt="Logo" />
        </Flex>
      </div>

      <Flex direction="column" justify="center" align="center" gap="sm">
        <div style={{ width: "400px" }}>
          <Button
            color="adaptiveBackground"
            backgroundColor="adaptiveGrey900"
            outlineColor="adaptiveGrey900"
            size="md"
            full={true}
            onClick={() => {
              console.log("버튼 클릭");
            }}
          >
            판매자 회원가입
          </Button>
        </div>
        <div style={{ width: "400px" }}>
          <Button
            color="adaptiveBackground"
            backgroundColor="adaptiveGrey900"
            outlineColor="adaptiveGrey900"
            size="md"
            full={true}
            onClick={() => {
              console.log("버튼 클릭");
            }}
          >
            구매자 회원가입
          </Button>
        </div>
        <div style={{ width: "400px" }}>
          <Button
            color="adaptiveBackground"
            backgroundColor="adaptiveGrey900"
            outlineColor="adaptiveGrey900"
            size="md"
            full={true}
            onClick={() => {
              console.log("버튼 클릭");
            }}
          >
            로그인
          </Button>
        </div>
      </Flex>
    </div>
  );
}
