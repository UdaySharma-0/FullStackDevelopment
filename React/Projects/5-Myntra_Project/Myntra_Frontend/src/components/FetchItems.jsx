import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/items";
import { FetchStatusActions } from "../store/FetchStatusSlice";

//Headless Component
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(FetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemActions.addInitialItems(items[0]));
        dispatch(FetchStatusActions.markFetchDone());
        dispatch(FetchStatusActions.markFetchingFinished());
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};

export default FetchItems;
