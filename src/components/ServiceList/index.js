import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ServiceCard from "./ServiceCard";

const Wrapper = styled(Box)``;

export default function CardList({ cardList, title }) {
  return (
    <Wrapper>
      <Typography color="#171725" fontSize={18} mb={3} fontWeight={700}>
        {title}
      </Typography>
      <Box display="inline-flex" mb={3}>
        {cardList.map((card) => {
          return <ServiceCard card={card} />;
        })}
      </Box>
    </Wrapper>
  );
}
