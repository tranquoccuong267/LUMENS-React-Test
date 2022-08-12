import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BaseIcon } from "../BaseIcon";
import MessageIcon from "../images/message.svg";

const Wrapper = styled(Box)`
  background: #ffffff;
  height: 40px;
  justify-content: space-between;
  align-items: center;
`;

const StyleBox = styled(Box)`
  cursor: pointer;
`;
export default function Footer() {
  return (
    <Wrapper p={3} display="flex">
      <StyleBox>
        <BaseIcon.Menu width={40} height={40} style={{ color: "white" }} />
      </StyleBox>
      <StyleBox>
        <BaseIcon.Notification
          width={40}
          height={40}
          style={{ color: "white" }}
        />
      </StyleBox>
      <StyleBox>
        <img src={MessageIcon} alt="message"></img>
      </StyleBox>
      <StyleBox>
        <BaseIcon.User width={40} height={40} style={{ color: "white" }} />
      </StyleBox>
    </Wrapper>
  );
}
