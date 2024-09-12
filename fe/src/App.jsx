import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {
  const [jobName,setJobName] = useState('')
  const [email,setEmail] = useState('')
  const [description,setDescription] = useState('')
  const [appData,setAppData] = useState([])
  useEffect(() => {
    setInterval(() => {
      fetch('http://localhost:3000/all')
      .then((res) => res.json())
      .then((data) => setAppData(data))
    }, 5_000);
  },[])

  function handleClick() {
    axios
    .post('http://localhost:3000/add', {
      jobName: jobName,
      emailId: email,
      about: description
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
    setJobName(""); setEmail(""); setDescription(""); //reset
  }

  console.log(appData)
  return (
    <div>
      <h1 className="text-3xl bg-black text-white py-4 text-center font-bold underline">
        Task Scheduler Using Node's Cron Jobs
      </h1>
      <div className="mx-[10%] mt-8">
      <div className="flex justify-between border-double border-black border-4 px-2 py-2 font-bold">
            <p>Job Name</p>
            <p>Email id</p>
            <p>Description of the Job</p>
          </div>
      </div>
      <div className="mx-[10%] mt-8 px-2 py-2  border-4 border-black">
        {appData.map((data) => (
          <div key={data._id} className="flex justify-between pb-3 ">
            <p>{data.jobName}</p>
            <p>{data.emailId}</p>
            <p>{data.about}</p>
          </div>
        ))}

        <div className="flex justify-between">
          <input value={jobName} onChange={(e) => setJobName(e.target.value)} className="border border-black" placeholder="Job Name" type="text"></input>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-black" placeholder="Email Id" type="email"></input>
          <input value={description} onChange={(e) => setDescription(e.target.value)} className="border border-black" placeholder="Description of the Job" type="text"></input>
          <button onClick={handleClick} className="border border-black px-2">Add</button>
        </div>
      </div>
    </div>

  )
}