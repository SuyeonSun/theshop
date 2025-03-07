"use client";
import { Flex, Text } from "@theshop/ui";
import Link from "next/link";

export default function Navigation() {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        height: "70px",
        opacity: 1,
        alignContent: "center",
        padding: "0px 20px 0px 20px",
      }}
    >
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
