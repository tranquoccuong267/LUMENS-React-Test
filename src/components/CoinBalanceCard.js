import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Box,
  Button,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import cardBackGround from "../images/card-background.png";

const Wrapper = styled(Box)`
  background: #ffffff;
  height: 440px;
  position: absolute;
  border-radius: 8px;
  transform: translate(0, -250px);
  width: -webkit-fill-available;
`;

const LinkButton = styled(Box)`
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  color: #FFFFF;
  width: 296px;
  height: 60px;
  background: #171725;
  border-radius: 4px;
  font-size: 18px;
  padding: 10px 50px;
  text-transform: capitalize;
`;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function CoinBalanceCard() {
  return (
    <Container style={{ position: "relative" }}>
      <Wrapper
        p={4}
        mr={2}
        style={{
          backgroundImage: `url(${cardBackGround})`,
          boxShadow: "0px 12px 18px rgba(23, 23, 37, 0.04)",
        }}
      >
        <Typography color="#B5B5BE" fontSize={14} mb={3} fontWeight={600}>
          Available Coin balance
        </Typography>
        <Typography color="#171725" fontSize={48} mb={3}>
          340
        </Typography>
        <BorderLinearProgress variant="determinate" value={70} />
        <Typography color="#92929D" fontSize={16} mb={3} mt={9}>
          You have paid rental fee for $1,200. Pay more $800 to achieve Gold
          Tier.
        </Typography>
        <LinkButton mb={3} display="flex">
          <Typography color="#0062FF" fontSize={16} mr={1}>
            View tier benefits
          </Typography>
          <ArrowForwardIosIcon fontSize="small" style={{ color: "#0062FF" }} />
        </LinkButton>
        <Box textAlign="center">
          <StyledButton variant="contained">My Coupons</StyledButton>
        </Box>
        <Box textAlign="center" fontSize={14} color="#B5B5BE" mt={3}>
          Updated : 02/11/2021
        </Box>
      </Wrapper>
    </Container>
  );
}
