import Header from "@/components/header";
import Footer from "@/components/footer";
import Grid from "@/layouts/grid";
import TeamCard from "@/components/teamCard";
import useTeams, { useTeamCURD } from "@/hooks/useTeams";
import TeamModal from "@/components/modal";
const Teams = () => {
  const { data, more, status } = useTeams();
  const { onToggle, inProgress, createTeam, updateTeam, deleteTeam } =
    useTeamCURD();

  return (
    <div>
      <Header />
      {inProgress && (
        <TeamModal
          create={createTeam}
          update={updateTeam}
          delete={deleteTeam}
        />
      )}

      <Grid loadMore={more} status={status} title={"Teams"} onToggle={onToggle}>
        {data?.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default Teams;
