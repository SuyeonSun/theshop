import { Text } from "@theshop/ui";
import FaqList from "./_components/FaqList";
import classNames from "classnames/bind";
import styles from "./page.module.scss";
import NewFaqForm from "./_components/NewFaqForm";

export default function FaqPage() {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx({ "faq-page-container": true })}>
        <div className={cx({ "faq-page-title": true })}>
          <Text size="body1" bold={true} color="adaptiveGrey900">
            FAQ
          </Text>
        </div>
        <FaqList />
        <NewFaqForm />
      </div>
    </>
  );
}
