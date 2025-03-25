import Navigation from "@/app/about/_components/Navigation";
import classNames from "classnames/bind";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cx({ "page-container": true })}>
      <Navigation />
      <div className={cx({ "content-container": true })}>{children}</div>
    </div>
  );
}
