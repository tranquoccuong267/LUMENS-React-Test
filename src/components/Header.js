import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)`
  background: #171725;
  height: 428px;
`;

const BackButton = styled(IconButton)`
  background: #ffffff;
  border-radius: 50%;
  &:hover {
    color: #fffff;
    background: gray;
  }
`;

export default function Header() {
  return (
    <Wrapper p={3}>
      <BackButton aria-label="back" size="large">
        <ArrowBackIosNewIcon fontSize="small" style={{ color: "#171725" }} />
      </BackButton>
      <Typography variant="h3" color="white" lineHeight={2}>
        Silver Tier
      </Typography>
      <Typography color="#B5B5BE" lineHeight={1.5}>
        In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
        exclusive rewards.
      </Typography>
    </Wrapper>
  );
}
