import { Text } from "@theshop/ui";

export default function Header({ title }) {
  return (
    <div
      style={{
        padding: "10px 0px 10px 25px",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Text size="body1" bold={true} color="adaptiveGrey900">
        {title}
      </Text>
    </div>
  );
}
