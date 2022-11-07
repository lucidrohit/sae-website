import UserInfoCard from "../../components/userInfoCard/userInfoCard";
import "./team.scss";
const userCardsList = [
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  {
    name: "Rahi Uppal",
    about: "2021BMEC011",
    designation: "Full Stack Developer",
    phoneNumber: "7006300629",
    instagramHandle: "lucidrohit",
    twitterHandle: "lucidrohit",
    gmailHandle: "lucidrohit@gmail.com",
  },
  
];
function Team() {
  return (
    <div className="team">
      <div className="team__cards">
        {userCardsList.map((user, index) => (
          <UserInfoCard {...user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Team;
