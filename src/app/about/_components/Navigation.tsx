"use client";
import { Flex, Text } from "@theshop/ui";
import Link from "next/link";
import classNames from "classnames/bind";
import style from "./navigation.module.scss";

const cx = classNames.bind(style);

export default function Navigation() {
  return (
    <div className={cx({ "navigation-container": true })}>
      <Flex direction="row" justify="between" align="center">
        <Text color="adaptiveBackground" size="body2">
          THE SHOP
        </Text>
        <Flex direction="row" align="center" gap="sm">
          <Link href="#">
            <Text color="adaptiveBackground" size="body3">
              BUSINESS
            </Text>
          </Link>
          <Link href="#">
            <Text color="adaptiveBackground" size="body3">
              NEWSROOM
            </Text>
          </Link>
          <Link href="#">
            <Text color="adaptiveBackground" size="body3">
              CAREER
            </Text>
          </Link>
        </Flex>
      </Flex>
    </div>
  );
}
