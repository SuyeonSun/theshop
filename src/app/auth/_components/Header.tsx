import { Text } from "@theshop/ui";
import classNames from "classnames/bind";
import styles from "./header.module.scss";

interface HeaderProps {
  title: string;
}

const cx = classNames.bind(styles);

export default function Header({ title }: HeaderProps) {
  return (
    <div className={cx({ "header-container": true })}>
      <Text size="body1" bold={true} color="adaptiveGrey900">
        {title}
      </Text>
    </div>
  );
}
