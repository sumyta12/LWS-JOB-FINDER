import { useDispatch } from "react-redux";
import {
  searchaction,
  statusaction,
} from "./../../features/FilterJob/FilterSlice";

export default function Search() {
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    dispatch(searchaction(e.target.value));
  };

  const handlerSeletec = (e) => {
    dispatch(statusaction(e.target.value));
  };

  return (
    <div className="flex gap-4">
      <div className="search-field group flex-1">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input
          type="text"
          placeholder="Search Job"
          className="search-input"
          id="lws-searchJob"
          alt="M"
          onChange={handlerChange}
        />
      </div>
      <select
        onChange={handlerSeletec}
        id="lws-sort"
        name="sort"
        autoComplete="sort"
        className="flex-1">
        <option>Default</option>
        <option>Salary (Low to High)</option>
        <option>Salary (High to Low)</option>
      </select>
    </div>
  );
}
