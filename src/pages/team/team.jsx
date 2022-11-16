import HeadingText from "../../components/common/headingText/headingText";
import UserInfoCard from "../../components/userInfoCard/userInfoCard";
import ansari from "./../../assets/people/faculty/ansari.webp"
import pali from "./../../assets/people/faculty/pali.webp"
import dinesh from "./../../assets/people/faculty/dinesh.webp"
import aditya from "./../../assets/people/team/aditya.webp"
import dhairyashil from "./../../assets/people/team/dhairyashil.webp"
import saransh from "./../../assets/people/team/saransh.webp"
import secretary from "./../../assets/people/team/secretary.webp"
import aniket from "./../../assets/people/team/aniket.webp"
import aman from "./../../assets/people/team/aman.webp"
import anjani from "./../../assets/people/team/anjani.webp"
import rohit from "./../../assets/people/web/rohit.webp"
import yash from "./../../assets/people/web/yash.webp"



import "./team.scss";
const facultyCardsList = [
  {
    name: "Dr. Harveer Singh Pali",
    designation: "Faculty Adviser",
    about: "Assistant Professor",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "hspali@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar:pali
  },
  {
    name: "Dr. Dinesh Kumar Rajendran",
    designation: "Additional Faculty Adviser",
    about: "Assistant Professor",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "rdinesh@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar:dinesh
  },
  {
    name: "Dr. Mohd Zubair Ansari",
    designation: "Additional Faculty Adviser",
    about: " Assistant Professor",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "mohdzubair@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar:ansari
  },
];
const teamCardsList = [
  {
    name: "Mr. Aman Tiwari",
    designation: "Student Chairperson",
    about: "Final Year Student",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "hspali@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar:aman
  },
  {
    name: "Mr. Aditya Prakash",
    designation: "Student Publicity Chair",
    about: "Final Year Student",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "rdinesh@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar:aditya
  },
  {
    name: "Mr. Aniket Rishi",
    designation: "Student Treasurer",
    about: "Final Year Student",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "mohdzubair@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar: aniket
  },
  {
    name: "Mr. Anjani Gupta",
    designation: "Student Program Chair",
    about: "Final Year Student",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "mohdzubair@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar: anjani
  },
  {
    name: "Mr. Dhairyashil Hasbe",
    designation: "Student Vice-Chairperson",
    about: "Final Year Student",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "mohdzubair@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar: dhairyashil

  },
  {
    name: "Mr. Saransh Saini",
    designation: "Student Technical Chair",
    about: "Final Year Student",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "mohdzubair@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar: saransh
  },
  {
    name: "Mr. Vivek Chauhan",
    designation: "Student Secretary",
    about: "Final Year Student",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "mohdzubair@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
    avatar: secretary
  },
  {
    name: "Mr. Sahil Jangral",
    designation: "Student Reception Chair",
    about: "Final Year Student",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "mohdzubair@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
  },
  {
    name: "Mr. Ayush",
    designation: "Student Membership Chair",
    about: "Final Year Student",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "mohdzubair@nitsri.ac.in",
    linkedinHandle: "lucidrohit",
  },
];

const webTeam = [
  {
    name: "Mr. Rohit Gupta",
    designation: "Full Stack Developer",
    about: "Sae Member",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
    linkedinHandle: "lucidrohit",
    avatar:rohit
  },
  {
    name: "Mr. Yash Tiwari",
    designation: "Web Designer & Frontend Developer",
    about: "Sae Member",
    phoneNumber: "7006300629",
    instagramHandle: "yashtiwari.ty",
    twitterHandle: "yashtiwari.ty",
    gmailHandle: "yashtiwari.ty@gmail.com",
    linkedinHandle: "yash-tiwari-663939228",
    avatar:yash
  }
]
function Team() {
  return (
    <div className="team">
      <HeadingText text="Faculty Advisors" />
      <div className="team__faculty__cards">
        {facultyCardsList.map((user, index) => (
          <UserInfoCard {...user} key={index} />
        ))}
      </div>
      <HeadingText text="SAE Team" />
      <div className="team__team__cards">
        {teamCardsList.map((user, index) => (
          <UserInfoCard {...user} key={index} />
        ))}
      </div>
      <HeadingText text="Web Dev" />
      <div className="team__web__cards">
        {webTeam.map((user, index) => (
          <UserInfoCard {...user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Team;
