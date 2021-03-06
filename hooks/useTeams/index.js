import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, loadMore } from "@/state/slices/teamSlice";
import { toggle, reset } from "@/state/slices/teamCURDSlice";
import { useAlert } from "react-alert";
export const useTeamCURD = () => {
  const {
    data: { data: teams },
  } = useSelector((state) => state.teams);
  let { inProgress, type } = useSelector((state) => state.teamCURD);
  const alert = useAlert();
  const dispatch = useDispatch();
  let onToggle = (inProgress, type) => {
    dispatch(toggle({ inProgress, type }));
  };
  let createTeam = (team) => {
    // check if team.name includes in teams
    if (teams.find((t) => t.name === team.name)) {
      alert.error("Team name already exists");
    } else {
      setTimeout(() => {
        dispatch(toggle({ inProgress: false, type: "add" }));
        dispatch(reset());
        alert.success("Team Created Successfully !");
      }, 1000);
    }
  };
  let updateTeam = (team) => {
    // callback functions to do a webrequest
    setTimeout(() => {
      dispatch(toggle({ inProgress: false, type: "add" }));
      dispatch(reset());
      alert.info("Team Updated Successfully !");
    }, 1000);
  };
  let deleteTeam = (team) => {
    // callback functions to do a webrequest
    setTimeout(() => {
      dispatch(toggle({ inProgress: false, type: "add" }));
      dispatch(reset());
      alert.info("Team  Removed !");
    }, 1000);
  };
  return { createTeam, updateTeam, deleteTeam, inProgress, type, onToggle };
};

const useTeams = () => {
  const {
    status,
    data: { data },
  } = useSelector((state) => state.teams);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  let more = () => {
    dispatch(loadMore());
    dispatch(getTeams());
  };
  return {
    status,
    data: data,
    more,
  };
};

export default useTeams;
