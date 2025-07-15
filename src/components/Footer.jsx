import React from "react";
import { Div, Text } from "atomize";

const Footer = () => {
  return (
    <Div
      tag="footer"
      borderTop="1px solid"
      borderColor="gray800"
      p={{ y: "2rem" }}
      m={{ t: "4rem" }}
    >
      <Div d="flex" justify="center">
        <Text
          textSize="caption"
          textColor="blue200"
          opacity="0.5"
        >
          © 2025 Alicia Esquivel Morel. All Rights Reserved.
        </Text>
      </Div>
    </Div>
  );
};

export default Footer;
