import { useDispatch, useSelector } from "react-redux";
import { getPlayers, loadMore } from "@/state/slices/playerSlice";
import { useEffect } from "react";
const usePlayers = () => {
  const {
    status,
    data: { data },
  } = useSelector((state) => state.players);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);
  let more = () => {
    dispatch(loadMore());
    dispatch(getPlayers());
  };
  return {
    status,
    data: data,
    more,
  };
};

export default usePlayers;
