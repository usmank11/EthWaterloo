import React from "react";
import { Typography } from "antd";
import noun1 from "./nouns1.png";
import noun2 from "./nouns2.png";
import noun3 from "./nouns3.png";
import noun4 from "./nouns4.png";

const { Title, Text } = Typography;

// displays a page header

export default function Header({ link, title, subTitle, ...props }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "1.2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "start" }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {/* <img src={require("/Users/usmankhan/Desktop/scaffoldEth/scaffold-eth/packages/react-app/src/TrustReviews_Logo.png")} alt="TrustReviews"></img> */}
          <Title level={4} style={{ margin: "0 0.5rem 0 0" }}>
            {title}
          </Title>
        </a>
        <Text type="secondary" style={{ textAlign: "left" }}>
          {subTitle}
        </Text>
      </div>
      <img src={noun1} width="40" height="40"></img>
      <img src={noun2} width="40" height="40"></img>
      <img src={noun3} width="40" height="40"></img>
      <img src={noun4} width="40" height="40"></img>

      {props.children}
    </div>
  );
}

Header.defaultProps = {
  link: "https://github.com/scaffold-eth/scaffold-eth",
  title: "TrustReviews",
  subTitle: "Home reviews: by students, for students",
};
