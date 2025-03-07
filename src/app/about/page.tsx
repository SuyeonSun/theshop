import { Flex, Text } from "@theshop/ui";
import classNames from "classnames/bind";
import styles from "./page.module.scss";

const missions = [
  {
    id: "01",
    title: "파트너 브랜드의 성장을 돕고 성공을 나눕니다.",
    subtitle: "We create success with partners.",
    description1: "파트너 브랜드의 성공이 곧 더샵의 성공입니다.",
    description2:
      "더샵은 파트너 브랜드와 '성공'이라는 공동의 목적을 가지고 함께 성장합니다. 파트너 브랜드는 패션에 몰입하고 더샵은 비즈니스에 몰두하며, 전략적 파트너로서 하나의 목표를 이루기 위해 노력합니다.",
  },
  {
    id: "02",
    title: "누구나 자신만의 멋을 쉽게 찾을 수 있는 다양한 경험을 제공합니다.",
    subtitle: "We inspire people with fashion and style.",
    description1: "더샵을 통해 나만의 멋을 발견합니다.",
    description2:
      "더샵은 획일화된 멋이 아닌, 각자의 개성을 표현할 수 있는 다양한 패션 브랜드를 끊임없이 새롭게 발굴하고 제공합니다. 언제 어디서든 모두가 쉽고 편리하게 패션을 접하고 구매할 수 있는 다양한 기회를 제안합니다.",
  },
];

const cx = classNames.bind(styles);

export default function AboutPage() {
  return (
    <div>
      <div className={cx({ "page-title-container": true })}>
        <Text size="title4" color="adaptiveBackground" bold={true}>
          더샵의 미션
        </Text>
      </div>
      {missions.map((mission, index) => (
        <div
          key={mission.id}
          className={cx({ "mission-container": index !== missions.length - 1 })}
        >
          <Flex direction="row" justify="between" align="start" gap="xl">
            <Text size="title2" color="adaptiveBackground">
              {mission.id}
            </Text>

            <Flex direction="column" align="start" gap="md">
              <Text size="title4" color="adaptiveBackground">
                {mission.title}
              </Text>
              <Text size="body1" color="adaptiveGrey500">
                {mission.subtitle}
              </Text>
              <Text size="body1" color="adaptiveBackground">
                {mission.description1}
              </Text>
              <Text size="body2" color="adaptiveBackground">
                {mission.description2}
              </Text>
            </Flex>
          </Flex>
        </div>
      ))}
    </div>
  );
}
