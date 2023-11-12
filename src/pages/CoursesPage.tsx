import React from "react";

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="text-xl font-bold my-3">
        Procedure For Admission Into Diploma Courses:
      </h1>
      Selection of candidates is governed by the Rules and regulations laid down
      in this regard from time to time. Candidates who wish to seek admission in
      any of the diploma courses will have to appear for common entrance
      examination (POLYCET) conducted by the State Board of Technical Education
      and Training, Andhra Pradesh, Hyderabad. Only the candidates satisfying
      the following requirements will be eligible to appear for the common
      entrance examination (POLYCET).
      <ol>
        <li>
          <span className="font-semibold">1. </span> The candidates seeking
          admission should have appeared for the X class examination, conducted
          by the Board of Secondary Education, Andhra Pradesh or equivalent
          Examination there to, at the time of making application to the common
          entrance examination for polytechnics (POLYCET). In case candidates
          who apply pending results of their qualifying examinations their
          selection shall be subject to production of proof of their passing the
          qualifying examination in one attempt or compartmentally at the time
          of interview for admission.
        </li>
        <li>
          <span className="font-semibold">2. </span> Admissions are made based
          on the merit rank obtained in the POLYCET and the reservations rules
          stipulated by the government of Andhra Pradesh form time to time.
        </li>
      </ol>
      <h1 className="text-xl font-bold my-3">Medium of Instruction: </h1>
      The medium of instruction and examination shall be English.
      <h1 className="text-xl font-bold my-3">
        Eligibility Of Attendance To Appear For The End Examinations:
      </h1>
      <ul>
        <li>
          A. A candidate shall be permitted to appear for the end examination in
          all subjects, if he or she has attended a minimum of 75% of working
          days during the year/semester.
        </li>
        <li>
          B. Condonation of shortage of attendance in aggregate upto 10% in each
          semester or first year may be granted on medical grounds.
        </li>
        <li>
          C. A stipulated fee shall be payable towards condoantion of shortage
          of attendance
        </li>
        <li>
          D. Candidates having less than 65% attendance shall be detained.{" "}
        </li>
        <li>
          E. Students whose shortage of attendance is not condoned in any
          semester/first year are not eligible to take their end examination of
          that class and their admissions shell stand cancelled. They may seek
          re-admission for that semester/first year when offered next.
        </li>
      </ul>
      <h1 className="text-xl font-bold my-3">Scheme Of Examination: </h1>
      <ul>
        <li>
          A. FIRST YEAR THEORY EXAMINATION: Each subject carries 50 or 100 marks
          with examination of 2 or 3 hours duration. PRACTICAL EXAMINATION:
          There shell be 40 marks for regular practical work done, i.e.
          sessional marks for each practical subject with an end examination of
          3 hours duration carrying 60 marks. However, in physics practical and
          chemistry practical, each will have 60 marks in the end examination
          with a 2-hours duration and 40 sessional marks.
        </li>
        <li>
          B. III, IV, V and VI Semesters: THEORY EXAMINATION: Each subject
          carries 50 or 100 marks of 2 or 3 hours duration. PRACTICAL
          EXAMINATION: Each subject carry 30 or 60 marks of three hours duration
          20 or 40 sessional marks.
        </li>
      </ul>
      <table className="table-auto w-full my-4 p-3">
        <thead className="text-justify">
          <tr>
            <th className="border border-black px-4 py-2">Course</th>
            <th className="border border-black px-4 py-2">Intake</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">
              Diploma in Electrical and Electronics Engineering
            </td>
            <td className="border border-black px-4 py-2">240</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              Diploma in Civil Engineering
            </td>
            <td className="border border-black px-4 py-2">180</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              Diploma in Mechanical Engineering
            </td>
            <td className="border border-black px-4 py-2">240</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              Diploma in Electronics and Communication Engineering
            </td>
            <td className="border border-black px-4 py-2">240</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              Diploma in Computer Engineering
            </td>
            <td className="border border-black px-4 py-2">300</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">
              Diploma in Artificial Intelligence and Machine Learning
            </td>
            <td className="border border-black px-4 py-2">60</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
