import Header from "@/components/header";
import Footer from "@/components/footer";
import Grid from "@/layouts/grid";
import PlayerCard from "@/components/playerCard";
import usePlayers from "@/hooks/usePlayers";
const Home = () => {
  const { status, data, more } = usePlayers();

  return (
    <div>
      <Header />
      <Grid loadMore={more} status={status} title={"Players"}>
        {data?.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
