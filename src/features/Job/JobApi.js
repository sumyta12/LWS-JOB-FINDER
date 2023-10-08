export const GetAllJobsResponse = async () => {
  const jobsResponse = await fetch(`http://localhost:9000/jobs`);

  return jobsResponse;
};

export const AddJobsInResponse = async (data) => {
  const jobsResponse = await fetch(`http://localhost:9000/jobs`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json ; charset=utf-8" },
  });

  return jobsResponse;
};

export const EditJobsInResponse = async (id, data) => {
  const jobsResponse = await fetch(`http://localhost:9000/jobs/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json ; charset=utf-8" },
  });

  return jobsResponse;
};

export const DeleteJobsInResponse = async (id) => {
  const jobsResponse = await fetch(`http://localhost:9000/jobs/${id}`, {
    method: "Delete",
  });

  return jobsResponse;
};
