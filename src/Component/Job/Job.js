import { useEffect } from "react";
import Jobs from "../Jobs/Jobs";
import { useDispatch, useSelector } from "react-redux";
import { fetchalljobaction } from "../../features/Job/JobSlice";

export default function Job() {
  const dispatch = useDispatch();
  const { isLoading, job, isError, error } = useSelector((state) => state.job);
  const { filterType, searchText, Status } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    dispatch(fetchalljobaction());
  }, [dispatch]);

  let content = null;

  if (isLoading) {
    content = <h1>Data is Comming...</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>Something {error} occured</h1>;
  }
  if (!isLoading && job?.length === 0) {
    content = <h1>no data found</h1>;
  }
  if (!isLoading && job?.length > 0) {
    //internship , remote , fulltime
    content = job
      ?.filter((item) => {
        if (filterType === "") {
          return true;
        } else if (filterType === "internship") {
          return item.type === "Internship";
        } else if (filterType === "remote") {
          return item.type === "Remote";
        } else if (filterType === "fulltime") {
          return item.type === "Full Time";
        }
        return false;
      })
      .filter((item) => {
        if (searchText === "") {
          return true;
        } else if (
          item.title.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return true;
        }
        return false;
      })
      .sort((a, b) => {
        if (Status === "Default") {
          return true;
        }
        if (Status === "Salary (High to Low)") {
          return b.salary - a.salary;
        } else if (Status === "Salary (Low to High)") {
          return a.salary - b.salary;
        }
        return false;
      })
      .map((job) => <Jobs key={job.id} job={job} />);
  }

  return <div className="jobs-list">{content}</div>;
}
