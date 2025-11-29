import React, { useState } from "react";
import "./about.sass";
import BreakLine from "./break_line";
import OrangeSpan from "./orange_span";
import { AboutMeContentWrappersProps } from "../../declarations";
import { getAge } from "../home/basic_info";

function getYears(year: number): number | string {
  let d: Date = new Date();
  return d.getFullYear() - year;
  // if (Math.floor((d.getTime() - 31536000000 * (year - 1970)) / 31536000000) < 1) {
  //     return ("<1");
  // };
  // return Math.floor((d.getTime() - 31536000000 * (year - 1970)) / 31536000000);
}

function AboutMeContentWrappers(
  props: AboutMeContentWrappersProps
): JSX.Element {
  const [fadeDelay, setFadeDelay] = useState<string>(
    "fadeInitialOpacity slideInInitial"
  );

  setTimeout(() => {
    setFadeDelay("fadeLong slideIn");
  }, parseInt(props.type) * 500);

  switch (props.type) {
    case "1":
      return (
        <div className={fadeDelay}>
          <p className="aboutMeText orangeText bolded">Who am I?</p>

          <div className="aboutMeTextsWrappers">
            <p className="aboutMeTexts">
              I'm <OrangeSpan text="Poh Jun Kang" />, and I'm {getAge()}! I'm
              based in Singapore and my skills are in{" "}
              <OrangeSpan text="Programming, Designing, Flying" /> and{" "}
              <OrangeSpan text="PC Building" />. My main goal in life is to
              become a Commercial Airline Pilot, or a Full Stack Web Developer
              otherwise. In my free time, I find passion not only playing games
              and programming, but also simulators to keep my interest alive!
            </p>
          </div>
        </div>
      );

    case "2":
      return (
        <div className={fadeDelay}>
          <p className="aboutMeText orangeText bolded">My History/CV</p>

          <div className="aboutMeTextsWrappers">
            <p className="aboutMeTexts">
              My interest in programming came from the want to develop plugins
              for flight simulators. However, due to my limited knowledge at
              that time, I was not able to acomplish anything. What rekindled my
              interest in it was taking Computing in Junior College, which
              started the Butterfly Effect of my programming journey, got
              recommended as a{" "}
              <OrangeSpan text="Web Developer Intern in 2021," /> and got a{" "}
              <OrangeSpan text="secondary contract" /> a year after at{" "}
              <OrangeSpan text="Nam Hong Welfare Service Society (NHWSS)" />,
              and lead me to study Computer Science in NUS. That said, my main
              skills in programming is Website Building, with UI Design skills
              to complement that. In fact, this personal website is built by
              myself with React!
              <BreakLine count="2" />
              As for where my interest in designing came in, it all started from
              joining a Co Curriculum Activity (CCA) in Secondary School, where
              I joined Infocomm. I was taught mainly Photoshop and Illustrator
              skills there, along with a small amount of After Effects and
              Filming. As I was more interested in the designing aspect, I honed
              my skills there, alongside learning how to be a leader as the{" "}
              <OrangeSpan text="Vice-President of the CCA" /> in the later
              years. Although I did try to run for an ex-committe role in my CCA
              during my Junior College (JC) years, I was unfortunately not
              selected as they wanted to give others who haven't had a chance of
              being one before to be one. That however, gave me the free time to
              also join <OrangeSpan text="Singapore Youth Flying Club" /> to
              learn more about flying!
              <BreakLine count="2" />
              Beyond that, I'm also very interested in tech related stuff,
              especially PCs. I've built a few of them so far, including my own
              personal and favourite PC that is fully white themed! If you would
              like to see it, you can always head over to the Timeline page to
              explore :)
              <BreakLine count="2" />
              Studies wise, I came from neighbourhood schools and worked my way
              up slowly over the years, eventually being able to join NUS in
              their Degree for Computer Science with just my academic results.
              Here's a history of where I'm studying/studied at:
              <BreakLine count="2" />
              <OrangeSpan
                text="National University of Singapore (NUS)"
                className="bolded"
              />{" "}
              - Year 3, Semester 1 currently (as of Nov 2025)
              <BreakLine count="1" />
              Bachelor of Computing in Computer Science - Current GPA: 4.69
              <BreakLine count="1" />
              A+: CS3281
              <BreakLine count="1" />
              A: CS1101S (TA as well in Y2S1), CS2030S, CS2040S, IS1108, CS2101, CS2102, CS2103T, ST2334
              <BreakLine count="1" />
              A-: CS1231S, MA1522, GEA1000N, CS2100
              <BreakLine count="1" />
              Notable Mod(s): CP3108B (Source Academy)
              <BreakLine count="2" />
              <OrangeSpan text="Jurong Pioneer Junior College" /> - 2019-2020
              <BreakLine count="1" />
              'A' Levels RP - 87.5 (AAA/BBA/D, H2 Computing, Math, Physics; H1
              Econs, GP, PW, Chinese respectively)
              <BreakLine count="2" />
              <OrangeSpan text="Zhenghua Secondary School" /> - 2015-2018
              <BreakLine count="1" />
              'O' Levels L1R5 - 10 (Raw - 12) (A1 Math, A Math; A2 Physics,
              Chemistry; B3 English, Chinese, Comb Humans [SS/Geog])
              <BreakLine count="2" />
              <OrangeSpan text="Beacon Primary School" /> - 2009-2014
              <BreakLine count="1" />
              PSLE T-Score - 217 (A in Math, Science, Chinese, B in English)
              <BreakLine count="2" />
              The reason for the break between 2020 and 2023 was due to National
              Service from 2021 to 2023. It was the time for me to build my
              portfolio on the side whilst serving my nation. Although I wasn't
              a commander, I was{" "}
              <OrangeSpan text="given commander roles as a men" />, taking up
              the tasks such as Company Orderly Sergeant (COS), and Duty
              Sergeant (DS) for a few months there, on top of my regular men
              duties.
              <BreakLine count="2" />
              That said, my highlight during my service was achieving the{" "}
              <OrangeSpan text="best crew award" /> by my Battery Commander (BC)
              and Battery Sergeant Major (BSM), as well as achieving the
              Regimental Sergeant Major <OrangeSpan text="(RSM) coin" />, which
              was only awarded to outstanding NSFs/crews during Exercise Daring
              Warrior.
            </p>
          </div>
        </div>
      );

    case "3":
      return (
        <div className={fadeDelay}>
          <p className="aboutMeText orangeText bolded">My Skills</p>

          <div className="aboutMeTextsWrappers">
            <p className="aboutMeTexts">
              <span className="bolded footnoteForeword">
                • Progamming Skills •
              </span>
            </p>
            <p className="aboutMeTexts indented">
              <span className="bolded">Languages</span> -
              <OrangeSpan text=" JavaScript, TypeScript, HTML/CSS, Python, SASS, Java, SQL, NoSQL" />
              <BreakLine count="2" />
              <span className="bolded">Framework/Libraries</span> -
              <OrangeSpan text=" NextJS, ReactJS, Redux, Saga, Tanstack, AG Grid, Tailwind, Shadcn, Prisma, Jest, jQuery, PyTorch, Django, Flask" />
              <BreakLine count="2" />
              <span className="bolded">Other Programming</span> -
              <OrangeSpan text=" Firebase, Vercel, Google T5, PostgreSQL, MySQL, Unity, AWS (EC2, ELC, RDS, SES, S3)" />
            </p>

            <BreakLine count="2" />
            <p className="aboutMeTexts">
              <span className="bolded">• Designing Skills •</span>{" "}
              <span className="footnotes"></span>
            </p>
            <p className="aboutMeTexts indented">
              <OrangeSpan text=" Photoshop, Canva, Illustrator, DaVinci Resolve, Autodesk Maya, Sketch" />
            </p>

            <BreakLine count="2" />
            <p className="aboutMeTexts">
              <span className="bolded">• Flying Experience •</span>{" "}
              <span className="footnotes"></span>
            </p>
            <p className="aboutMeTexts indented">
              <OrangeSpan text=" DA40" />
              <span className="footnotes">
                {" "}
                @ Singapore Youth Flying Club
              </span>{" "}
              (9.0 Flight Hours + 8.0 Simulator Hours, 2019),
              <BreakLine count="2" />
              <OrangeSpan text=" X-Plane 11" /> +{" "}
              <OrangeSpan text="Microsoft Flight Simulator" /> (Around 4000
              Flight Hours from 2017 till now)
            </p>

            <BreakLine count="2" />
            <p className="aboutMeTexts">
              <span className="bolded">• PC Building •</span>{" "}
              <span className="footnotes"></span>
            </p>
            <p className="aboutMeTexts indented">
              Built <OrangeSpan text="9 complete PCs" />, and additionally,{" "}
              <OrangeSpan text="helped source parts" /> and{" "}
              <OrangeSpan text="handcrafted lists for countless PCs" /> in my
              lifetime
              <BreakLine count="2" />
              <OrangeSpan text="Experience in handling with PC parts" /> for at
              least <OrangeSpan text={String(getYears(2019))} /> years
            </p>
          </div>
        </div>
      );
    default:
      return <></>;
  }
}

export default AboutMeContentWrappers;
