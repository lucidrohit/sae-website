import "./about.scss";
import HeadingText from "../../components/common/headingText/headingText";
function About() {
  return (
    <div className="about">
      <HeadingText text="Why SAE ?" />
      <p className="about__para">
        Successful SAEINDIA Collegiate clubs provide many benefits to their
        members and are assets to the engineering colleges where they are
        located. Collegiate clubs provide students with tangible contact with
        their future profession – engineering – and, in so doing, further the
        objectives of engineering education.
      </p>
      <HeadingText text="Our Purpose" />
      <p className="about__para">
        The purpose of an SAEINDIA Collegiate Club is to increase the benefits
        of SAEINDIA student membership through special activities that includes
        affiliation with the sections.
      </p>
      <HeadingText text="Our Workings" />
      <p className="about__para">
        The students themselves through the elected officers administer college
        club affairs. Officers are counseled by the SAEINDIA faculty Adviser and
        Vice Chair – Student activities
      </p>
      <p className="about__para">
        The collegiate club functions according to its Constitution and such
        general rules as may be outlined by the SAEINDIA Engineering Education
        Board, SAEINDIA Students Activities Committee and the SAEINDIA Board of
        Directors.
      </p>
      <HeadingText text={"About Membership"} />
      <p className="about__para">
        SAEINDIA has over 50,000 student members in more than 480 collegiate
        clubs located all over India. Collegiate clubs provide practical
        exposure to a professional engineering society as well as focal point
        for campus engineering programs and projects. Applicants must be
        students pursuing studies leading to any bachelor, masters, or doctoral
        degree in Engineering Colleges approved by AICTE or UGC. SAEINDIA
        membership is not open to school students. SAEINDIA Collegiate clubs
        offer student members organise programs and activities, fellowship, and
        leadership experience. SAEINDIA student members are also entitled to
        many of the services available to SAEINDIA’s regular members.
      </p>
    </div>
  );
}

export default About;
