import React from "react";
import { useParams } from "react-router-dom";
import { mockData } from "../SampleData/dummyData";
import { Resources } from "../Resources";

const Resume = () => {
  const { id } = useParams();
  function getMockDataById(id) {
    const parsedId = parseInt(id);
    return mockData.find((item) => item.id === parsedId);
  }
  const item = getMockDataById(id);

  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "2-digit",
    }).format(dateObject);

    return formattedDate;
  }

  return (
    <div className="bg-grey flex justify-center">
      <div className="w-3/5 bg-white my-5 py-5 ">
        <div className="flex flex-row justify-center pt-4 mb-3">
          <div className="text-5xl font-medium mr-3"> {item.first_name}</div>
          <div className="text-5xl font-medium">{item.last_name}</div>
        </div>

        <div className="bg-gradient-to-r from-amber-800 via-amber-1600  to-amber-1700  h-14 text-white items-center">
          <p className="text-xl font-semibold pt-3">{item.profession}</p>
        </div>

        <div className=" flex flex-row">
          <div className="w-3/10 p-8">
            <div className=" flex flex-row p-2  text-red-500">
              <img
                height={"15px"}
                width={"15px"}
                src={Resources.images.phone}
              ></img>
              <div className="ml-3">{item.phone_number}</div>
            </div>
            <div className=" flex flex-row p-2  text-red-500">
              <img
                height={"15px"}
                width={"15px"}
                src={Resources.images.envelope}
              ></img>
              <div className="ml-3">{item.email}</div>
            </div>
            <div className=" flex flex-row p-2  text-red-500">
              <img
                height={"15px"}
                width={"15px"}
                src={Resources.images.maps}
              ></img>
              <div className="ml-3">{`${item.city}, ${item.country}`}</div>
            </div>
            <div className=" flex flex-row p-2  text-red-500">
              <img
                height={"15px"}
                width={"15px"}
                src={Resources.images.linkedin}
              ></img>
              <div className="ml-3">{item.linkedin}</div>
            </div>

            <div className="my-4 h-2 bg-gradient-to-r from-amber-800 via-amber-1600  to-amber-1700"></div>

            <div className="flex text-xl font-bold text-black  ">SUMMARY</div>
            <div className="flex text-start  text-darkGrey">{item.summary}</div>

            <div className="my-4 h-2 bg-gradient-to-r from-amber-800 via-amber-1600  to-amber-1700"></div>

            <div className="flex text-xl font-bold text-black  ">
              KEY SKILLS
            </div>

            {item.skills.map((ro) => (
              <div key={ro.id} className="text-start text-darkGrey">
                <div className="text-sm font-normal ">
                  {ro.non_technical_skills}
                </div>
              </div>
            ))}

            <div className="my-4 h-2 bg-gradient-to-r from-amber-800 via-amber-1600  to-amber-1700"></div>

            <div className="flex text-xl my-4 font-bold text-black  ">
              TECHNICAL SKILLS
            </div>

            <div className=" my-2 text-start text-sm font-semibold text-black  ">
              Languages : <p className="text-darkGrey font-normal">{item.skills[0].technical_skills}</p>
            </div>

            <div className="flex  "></div>
            <div className=" text-start">
              <ul className="ml-5 list-disc text-sm font-semibold text-black ">
                <li>
                  Operating Systems :
                  <p className="text-darkGrey font-normal">
                    {item.operating_system}
                  </p>
                </li>
                <li>
                  Databases :{" "}
                  <p className="text-darkGrey font-normal">{item.databases}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-7/10  pl-5 pt-4 pr-10 pb-4">
            <div className="flex text-xl my-3 font-bold text-black  ">
              Professional Experience
            </div>

            {item.work_experience.map((we) => (
              <div key={we.id}>
                <div className="flex flex-row justify-between">
                  <div className="flex text-xl my-2 font-bold text-black  ">
                    {we.job_title}
                  </div>

                  <div className="flex text-lg my-2 font-normal text-black  ">
                    {`${formatDate(we.work_start_date)} - ${formatDate(
                      we.work_end_date,
                    )}`}
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  <div className="flex text-xl my-2 font-bold text-black  ">
                    {we.company_name}
                  </div>

                  <div className="flex text-lg my-2 font-normal text-black  ">
                    {we.company_location}
                  </div>
                </div>

                <div>
                  <p className="text-start text-sm italic font-normal text-darkGrey ">
                    {we.Description}
                  </p>
                </div>

                <div className=" text-start">
                  <ul className="ml-6 list-disc text-base italic font-normal text-darkGrey ">
                    {we.contribution.map((de) => (
                      <li key={de.id}>{de.contri1}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="my-4  h-2 bg-gradient-to-r from-amber-800 via-amber-1600  to-amber-1700"></div>

            <div className="flex text-xl my-3 font-bold text-black  ">
              INTERNSHIPS
            </div>

            {item.internships.map((int) => (
              <div key={int.id}>
                <div className="flex flex-row justify-between">
                  <div className="flex text-xl my-2 font-bold text-black  ">
                    {int.designation}
                  </div>

                  <div className="flex text-lg my-2 font-normal text-black  ">
                    {`${formatDate(int.intern_start_date)} - ${formatDate(
                      int.intern_end_date,
                    )}`}
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  <div className="flex text-lg my-2 font-bold text-black  ">
                    {int.company_name}
                  </div>

                  <div className="flex text-lg my-2 font-normal text-black  ">
                    {int.company_location}
                  </div>
                </div>

                <div>
                  <p className="text-start text-sm italic font-normal  text-darkGrey ">
                    {int.summary}
                  </p>
                </div>
              </div>
            ))}

            <div className="my-4 h-2 bg-gradient-to-r from-amber-800 via-amber-1600  to-amber-1700"></div>
            <div className="flex text-xl my-3 font-bold text-black  ">
              EDUCATION
            </div>

            {item.education.map((ed) => (
              <div key={ed.id}>
                <div className="flex flex-row justify-between">
                  <div className="flex text-xl my-2 font-bold text-black  ">
                    {ed.degree}
                  </div>

                  <div className="flex text-lg my-2 font-normal text-black  ">
                    {`${formatDate(ed.degree_start_date)} - ${formatDate(
                      ed.degree_end_date,
                    )}`}
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  <div className="flex text-lg my-2 font-bold text-black  ">
                    {ed.school_name}
                  </div>

                  <div className="flex text-lg my-2 font-normal text-black  ">
                    {ed.school_location}
                  </div>
                </div>

                <div>
                  <p className="text-start text-sm italic font-normal  text-darkGrey ">
                    {ed.summary}
                  </p>
                </div>

                <div className=" text-start">
                  <ul className="ml-6 list-disc text-base italic font-normal text-darkGrey ">
                    <li>{ed.gpa}</li>
                    <li>{ed.course_modules}</li>
                  </ul>
                </div>
              </div>
            ))}

            <div className="my-4 h-2 bg-gradient-to-r from-amber-800 via-amber-1600  to-amber-1700 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
