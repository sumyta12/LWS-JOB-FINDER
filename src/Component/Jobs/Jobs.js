import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { removejobaction } from "../../features/Job/JobSlice";

export default function Jobs({ job }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, title, type, salary, deadline } = job || {};

  const colorBox =
    type === "Fulltime"
      ? "#FF8A00"
      : type === "Internship"
      ? "#FF5757"
      : type === "Remote"
      ? "#56E5C4"
      : "";

  const handlerClick = (type, id) => {
    //if want to edit redirect edit page
    if(type === "edit"){
      navigate(`/jobs/${id}`)
    }
    //delete the jobs
    if(type === "delete"){
      dispatch(removejobaction(id))
    }
  };

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <i
              className={`fa-solid fa-stop !text-[${colorBox}] text-lg mr-1.5`}></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="lws-edit btn btn-primary"
            onClick={() => handlerClick("edit", id)}>
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="lws-delete btn btn-danger "
            onClick={() => handlerClick("delete", id)}>
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}
