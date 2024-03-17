import React, { useState, useEffect } from "react";
import RoutineJson from "../data/routine.json";
import SubjectDetailsJson from "../data/subjects_details.json";
import { FaArrowDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineSms } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { getToday } from "../utils/dateTimeHandler";
import { useLocation } from "react-router-dom";

const RoutineTable = ({ day }) => {
  const { dayName, hour, minute } = getToday();
  const { pathname } = useLocation();
  const [selectedDay, setSelectedDay] = useState(dayName);
  const [visibility, setVisibility] = useState("hidden");
  const [courseCode, setCourseCode] = useState(null);
  const realSubjects = Object.keys(SubjectDetailsJson);

  useEffect(() => {
    if (pathname.length > 1) {
      setSelectedDay(pathname.slice(1));
    }
  }, [pathname]);

  const handlePopUp = (e) => {
    const liElement = e.currentTarget;
    setCourseCode(liElement.querySelector(".subject").textContent);
    setVisibility("visible");
  };

  return (
    <div className="routine-table">
      {RoutineJson.hasOwnProperty(day) ? (
        <RoutineList
          day={day}
          dayName={dayName}
          hour={hour}
          minute={minute}
          realSubjects={realSubjects}
          selectedDay={selectedDay}
          handlePopUp={handlePopUp}
          visibility={visibility}
          setVisibility={setVisibility}
          courseCode={courseCode}
        />
      ) : (
        <div className="holiday flex space-around">C'mon, it's holiday</div>
      )}
    </div>
  );
};

const RoutineList = ({
  day,
  dayName,
  hour,
  minute,
  realSubjects,
  selectedDay,
  handlePopUp,
  visibility,
  setVisibility,
  courseCode,
}) => (
  <ul className="flex flex-column">
    <PopUp
      visibility={visibility}
      setVisibility={setVisibility}
      courseCode={courseCode}
      realSubjects={realSubjects}
    />
    <div className="table">
      {Object.values(RoutineJson[day]).map((each, index) => (
        <RoutineItem
          key={index}
          each={each}
          realSubjects={realSubjects}
          dayName={dayName}
          selectedDay={selectedDay}
          hour={hour}
          minute={minute}
          handlePopUp={handlePopUp}
        />
      ))}
    </div>
  </ul>
);

const RoutineItem = ({
  each,
  realSubjects,
  dayName,
  selectedDay,
  hour,
  minute,
  handlePopUp,
}) => (
  <li
    title={
      realSubjects.includes(each.subject)
        ? SubjectDetailsJson[each.subject].name
        : ""
    }
    className="flex space-between"
    onClick={handlePopUp}
    style={
      dayName.toLocaleLowerCase() === selectedDay &&
      hour == each.hour &&
      minute <= 50
        ? { border: "2px solid green" }
        : dayName.toLocaleLowerCase() === selectedDay &&
          parseInt(hour) + 1 == each.hour &&
          minute > 50
        ? { border: "2px solid grey" }
        : null
    }
  >
    <div className="subject">{each.subject}</div>
    <div className="hour">
      {each.hour}:00 - {each.hour}:50{" "}
    </div>
  </li>
);

const PopUp = ({ visibility, setVisibility, courseCode, realSubjects }) => {
  const course = SubjectDetailsJson[courseCode];

  return (
    realSubjects.includes(courseCode) && (
      <div
        className="popup flex flex-column space-between"
        style={{ visibility }}
      >
        <div className="details flex flex-column space-between">
          <h2>{course.name}</h2>
          <p>
            <strong>Classroom:</strong> {course.classroom}
          </p>
          <p>
            <strong>Faculty:</strong> {course.faculty.name}
          </p>
          <p>
            <strong>Cabin:</strong> {course.faculty.cabin}
          </p>
          <div className="contact-options flex space-between">
            <a
              href={`tel:${course.faculty.contact}`}
              className="flex space-around"
            >
              <IoCallSharp />
            </a>
            <br />
            <a
              href={`sms:${course.faculty.contact}`}
              className="flex space-around"
            >
              <MdOutlineSms />
            </a>
            <br />
            <a
              href={`https://wa.me/${course.faculty.contact}`}
              className="flex space-around"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <p
          className="arrow flex space-around"
          onClick={() => setVisibility("hidden")}
        >
          <FaArrowDown />
        </p>
      </div>
    )
  );
};

export default RoutineTable;
