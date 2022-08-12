import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  border: 1px solid #f1f1f5;
  box-shadow: 0px 12px 18px rgba(23, 23, 37, 0.04);
  border-radius: 4px;
  width: 200px;
  cursor: pointer;
  transition: all 0.25s linear;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8);
  }
`;

export default function ServiceCard({ card }) {
  return (
    <StyledCard sx={{ marginRight: 5 }}>
      <CardMedia
        component="img"
        height="100"
        image={card?.img}
        alt={card?.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontSize={16}
          fontWeight={600}
          color="#0062FF"
        >
          {card?.name}
        </Typography>
        <Typography variant="body2" color="#92929D">
          {card?.des}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          fontSize={16}
          style={{ textTransform: "capitalize" }}
        >
          {card?.action}
        </Button>
      </CardActions>
    </StyledCard>
  );
}
