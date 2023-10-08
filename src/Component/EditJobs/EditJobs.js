import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchalljobaction,
  updatejobaction,
} from "../../features/Job/JobSlice";

const specificJobwantoEdit = (joblist, jobId) =>
  joblist?.filter((item) => item.id === parseInt(jobId))[0];

export default function EditJobs() {
  const [load, setLoad] = useState(false);
  const { jobId } = useParams();
  const [formdata, setformdata] = useState({
    title: "",
    type: "",
    salary: "",
    deadline: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchalljobaction())
      .then((res) => {
        const obj = specificJobwantoEdit(res.payload, jobId);
        setformdata(obj);
      })
      .catch((error) => {
        console.log("edit the all job found error -", error);
      });
  }, [dispatch, jobId]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    dispatch(updatejobaction({ id: jobId, data: formdata }))
      .then((res) => {
        setformdata(res.payload);
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        console.log("edit new job found error -", error);
      });
  };

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handlerSubmit}>
            <div className="fieldContainer">
              <label
                htmlFor="lws-JobTitle"
                className="text-sm font-medium text-slate-300">
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
                value={formdata?.title}
                onChange={(e) => {
                  const { value } = e.target;
                  setformdata({ ...formdata, title: value });
                }}>
                <option value="" defaultValue hidden>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>
              <select
                id="lws-JobType"
                name="lwsJobType"
                required
                value={formdata ? formdata.type : ""}
                onChange={(e) => {
                  const { value } = e.target;
                  setformdata({ ...formdata, type: value });
                }}>
                <option value="" defaultValue hidden>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  value={formdata ? formdata.salary : ""}
                  onChange={(e) => {
                    setformdata((prev) => {
                      const { value } = e.target;
                      return { ...prev, salary: value };
                    });
                  }}
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                value={formdata ? formdata.deadline : ""}
                onChange={(e) => {
                  setformdata((prev) => {
                    const { value } = e.target;
                    return { ...prev, deadline: value };
                  });
                }}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit">
                {load ? "Editing" : "Edit"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
