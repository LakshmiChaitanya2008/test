import { Carousel } from "react-responsive-carousel";

export default function FacilitiesPage() {
  return (
    <div className="mx-auto max-w-6xl">
      Our college has a hostel and a library for students so that they can learn
      how to live independently and learn things that are important in life for
      personal development and new technologies for their growth in career
      <div>
        <h1 className="text-blue-500  my-3 text-2xl text-center underline tracking-wide">
          1. SEPARATE HOSTEL FOR BOYS AND GIRLS
        </h1>
        <p>
          Comfortable, offering personal care in hygienic conditions, individual
          grooming and counseling, the hostels at have all the features the make
          them home away from home for hundreds of residents from across the AP.
          College provides a separate hostel facility for boys and girls each
          with all the facilities, for boarding and other recreational
          activities.
        </p>
        <p className="my-2">
          Both the boys and girls hostel are located on the campus and are very
          close to the academic complex. Each hostel block is supervised by a
          resident warden who closely monitors the activities of students and
          addresses their needs. With students from various places the hostels
          truly reflect cultural diversity which gives an opportunity for
          students to improve their interpersonal communication skills.{" "}
          <p className="underline my-1">
            1st Year Hostel is Separate from Seniors Hostels
          </p>{" "}
          <table className="table-auto w-full my-4 p-3">
            <tbody>
              <tr>
                <td className="border border-black px-4 py-2">
                  Boys Hostel Capacity
                </td>
                <td className="border border-black px-4 py-2">400+</td>
              </tr>
              <tr>
                <td className="border border-black px-4 py-2">
                  Girls Hostel Capacity
                </td>
                <td className="border border-black px-4 py-2">400+</td>
              </tr>
            </tbody>
          </table>
        </p>
      </div>
      <div>
        <h1 className="text-blue-500  mb-3 text-2xl text-center underline tracking-wide">
          2. LIBRARY AND MEDIA CENTER
        </h1>
        <div className="my-10 flex justify-center">
          <Carousel width={500} showArrows={true} showThumbs={false}>
            <div>
              <img src="lib.png" />
            </div>
            <div>
              <img src="reading-room-2.png" />
            </div>
            <div>
              <img src="reading-room.png" />
            </div>
            <div>
              <img src="media-centre.png" />
            </div>
          </Carousel>
        </div>
        <p>
          Our college is fortunate to have a very large spacious Library Media
          Center. The library is open each morning before college begins from
          8:00 a.m. until 8:00 p.m. This is an opportunity for students to come
          in to browse all of our books, use a computer for research on a
          particular topic, or return library books and/or check out another
          good book to read.
        </p>
        <table className="table-auto w-full my-4 p-3">
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2">Library Timings</td>
              <td className="border border-black px-4 py-2">
                8:00AM to 8:00PM
              </td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">
                Sundays & Holidays
              </td>
              <td className="border border-black px-4 py-2">
                8:00AM to 12:00PM
              </td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">
                Seating Capacity
              </td>
              <td className="border border-black px-4 py-2">300+</td>
            </tr>
          </tbody>
        </table>
        <div className="flex">
          <div>
            <h1 className="font-semibold">Ground Floor:</h1>
            <ul className="list-disc ml-8">
              <li>Text Book Section</li>
              <li>Reference Section</li>
              <li>Circulation Section</li>
              <li>News Papers</li>
              <li>Journals Section</li>
              <li>Periodicals</li>
              <li>Book Bank for SC/ST</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">First Floor:</h1>
            <ul className="list-disc ml-8">
              <li>Media Resource Centre</li>
              <li>Reading Room</li>
            </ul>
          </div>
        </div>
        <h1 className="text-xl font-bold my-3">Total Number of books:</h1>
        <table className="table-auto w-full my-4 p-3">
          <thead className="text-justify">
            <tr>
              <th className="border border-black px-4 py-2">Type</th>
              <th className="border border-black px-4 py-2">No of Titles</th>
              <th className="border border-black px-4 py-2">Volumes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2">Reference Books</td>
              <td className="border border-black px-4 py-2">2499</td>
              <td className="border border-black px-4 py-2">9011</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Text Books</td>
              <td className="border border-black px-4 py-2">5013</td>
              <td className="border border-black px-4 py-2">24332</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">General Books</td>
              <td className="border border-black px-4 py-2">1561</td>
              <td className="border border-black px-4 py-2">3155</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">TOTAL</td>
              <td className="border border-black px-4 py-2">9073</td>
              <td className="border border-black px-4 py-2">36498</td>
            </tr>
            <span className="italic text-xs text-orange-500">
              * The information was taken on 30-12-2017. It may vary now.
            </span>
          </tbody>
        </table>
        <h1 className="text-xl font-bold my-3">
          National and International Journals:
        </h1>
        <table className="table-auto w-full my-4 p-3">
          <thead className="text-justify">
            <tr>
              <th className="border border-black px-4 py-2">Course</th>
              <th className="border border-black px-4 py-2">Books</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2">
                Civil Engineering
              </td>
              <td className="border border-black px-4 py-2">4</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">
                Mechanical Engineering
              </td>
              <td className="border border-black px-4 py-2">3</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">
                Electronics & Communication Engineering
              </td>
              <td className="border border-black px-4 py-2">2</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">
                Electrical & Electronics Engineering
              </td>
              <td className="border border-black px-4 py-2">4</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">
                Computer Engineering
              </td>
              <td className="border border-black px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">General</td>
              <td className="border border-black px-4 py-2">3</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-xl font-bold my-3">DIGITAL LIBRARY</h1>
        <h1 className="text-xl font-bold my-3">Computers:</h1> The library has
        30 dedicated computers with multimedia and internet facility.
        <h1 className="text-xl font-bold my-3">Internet Facility:</h1> Library
        avails 155Mbps internet connectivity through BSNL Leased Line.
        <h1 className="text-xl font-bold my-3">Digital Learning Materials:</h1>
        <ul className="list-disc pl-8">
          <li>
            10000 hours of NPTEL video lectures by IIT teachers on 500 subjects
          </li>
          <li>129 NPTEL web based courses by IIT’s</li>
          <li>
            224 hours of Video Lectures On Industrial Grade Skills From IEG
          </li>
          <li>200 hours of INDO-US lectures</li>
          <li>300 hours of MIT University Lectures</li>
          <li>300 hours of STANFORD University Lectures</li>
          <li>100 hours of HARVARD University Lectures</li>
        </ul>
        <h1 className="text-xl font-bold my-3">E-Material</h1>
        <ul className="list-disc pl-8">
          <li>Previous Question Papers</li>
          <li>e-Books:5,000+</li>
          <li>SBTET Learning Material (PPTs)</li>
          <li>Department wise Learning materials</li>
          <li>GATE Materials</li>
          <li>GRE & TOEFL Materials</li>
        </ul>
      </div>
    </div>
  );
}
