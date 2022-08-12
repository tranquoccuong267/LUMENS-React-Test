import { Box, Container } from "@mui/system";
import { BaseIcon } from "./BaseIcon";
import CoinBalanceCard from "./components/CoinBalanceCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardList from "./components/ServiceList";
import coin1 from "./images/coin1.png";
import coin2 from "./images/coin2.png";
import coin3 from "./images/coin3.png";

const MockupDatas = [
  {
    title: "Petrol",
    list: [
      {
        img: coin1,
        name: "15 Coins",
        des: "50% discount for every $100 top-up on your Shell Petrol Card",
      },
      {
        img: coin1,
        name: (
          <>
            <BaseIcon.ItemIcon
              style={{ width: 15, height: 15, marginRight: 5 }}
            />
            1,000 Coins
          </>
        ),
        des: "70% discount top-up on your Shell Petrol Card",
        action: "Insufficient coins",
      },
      {
        img: coin1,
        name: "15 Coins",
        des: "50% discount for every $100 top-up on your Shell Petrol Card",
      },
    ],
  },
  {
    title: "Rental Rebate",
    list: [
      {
        img: coin2,
        name: "20 Coins",
        des: "Get $20 Rental rebate",
      },
      {
        img: coin2,
        name: "15 Coins",
        des: "Get $500 Rental rebate",
      },
      {
        img: coin2,
        name: "15 Coins",
        des: "5Get $20 Rental rebate",
      },
    ],
  },
  {
    title: "Food and Beverage",
    list: [
      {
        img: coin3,
        name: "25 Coins",
        des: "NTUC Fairprice $50 Voucher",
      },
      {
        img: coin3,
        name: "5 Coins",
        des: "Free Cold Stone Sundae at any flavour!",
      },
      {
        img: coin3,
        name: "15 Coins",
        des: "NTUC Fairprice $50 Voucher",
      },
    ],
  },
];

function App() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <CoinBalanceCard />
      <Container style={{ marginTop: 280, overflow: "hidden" }}>
        {MockupDatas.map((service) => {
          return <CardList cardList={service?.list} title={service?.title} />;
        })}
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
