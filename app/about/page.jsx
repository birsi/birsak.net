import Link from "next/link";

export default function About() {
  const skills = [
    "Engineering Management",
    "Distributed Team Leadership",
    "System Design & Architecture",
    "Software Design & Patterns",
    "Cloud Infrastructure (AWS, GCP)",
    "Project Management",
    "Presenting & Moderating",
    "Coaching & Mentoring",
  ];

  const tech = [
    "JavaScript",
    "TypeScript",
    "Java",
    "Node.js",
    "React.js",
    "Meteor.js",
    "Next.js",
    "Express",
    "Koa",
    "GSAP",
    "Framer/Motion",
    "Angular",
    "MongoDB",
    "MySQL",
    "Postgres",
    "Redis",
    "Elasticsearch",
    "Datadog",
    "Sentry",
    "Serverless",
    "Docker",
    "Kubernetes",
    "OpenShift",
    "ArgoCD",
    "Terraform",
    "Apache Kafka",
    "AWS",
    "GCP",
    "Git",
    "Github",
    "Gitlab",
    "Bitbucket",
    "SVN",
    "Equinox (OSGi)",
    "Eclipse RCP/RAP",
    "Maven",
    "Gradle",
    "PHP",
    "CakePHP",
  ];

  const certifications = [
    "AWS Certified Developer - Associate (2023)",
    "AWS Certified Solutions Architect - Associate (2019)",
    "AWS Certified Cloud Practitioner (2019)",
  ];

  return (
    <main className="pt-8 max-w-3xl">
      <h2>About me</h2>
      <p className="pb-2">
        I have now spent close to 15 years in various Software Engineering
        roles. From being a self starter, co-founder and individual contributor
        to different software engineering management positions.
      </p>
      <p className="pb-2">
        Being able to switch between operative, tactical and strategic tasks,
        and not being afraid to change back and forth from individual
        contributor and management roles, helped me to develop my ability to
        engage and talk at multiple levels of an organization – from executive
        and high-level interactions to extreme technical deep-dives. I love
        solving problems, developing solutions, working together with people and
        helping others on a regular basis.
      </p>
      <p className="pb-5">
        What I enjoy most, is spending my free time with my beautiful wife
        Larissa and my German Boxer Fanny. I am really into good food, drinks,
        cooking and into exploring amazing restaurants in Austria and all around
        the world. Besides that, I like tinkering with any kind of new
        technology, reading books and playing pc games. I used to be a tv series
        and movie freak –{" "}
        <a
          href="https://www.imdb.com/user/ur26243737/watchlist"
          target="_blank"
          className="hover:text-orange-400 transition-all"
        >
          IMDB
        </a>
        . I still play football from time to time and I love to ski in the
        winter. ⛷️
      </p>
      <h2>Experience</h2>
      <ul className="pb-5">
        <li className="mb-3">
          <div>Director of Product Engineering</div>
          <a
            href="https://www.bitpanda.com"
            target="_blank"
            className="text-xs hover:text-[#27d17f] transition-all"
          >
            Bitpanda
          </a>
        </li>
        <li className="mb-3">
          <div>Chief Technology Officer</div>
          <a
            href="https://www.hi.health"
            target="_blank"
            className="text-xs hover:text-[#fe816a] transition-all"
          >
            hi.health
          </a>
        </li>
        <li className="mb-3">
          <div>Engineering Manager</div>
          <a
            href="https://www.runtastic.com"
            target="_blank"
            className="text-xs hover:text-[#ffffff] transition-all"
          >
            adidas runtastic
          </a>
        </li>
        <li className="mb-3">
          <div>Lead Customer Engineer, Consultant</div>
          <a
            href="https://tech.allianz.com/"
            target="_blank"
            className="text-xs hover:text-[#113388] transition-all"
          >
            Allianz Technology
          </a>
        </li>
        <li className="mb-3">
          <div>Co-Founder, Software Engineer</div>
          <a
            href="http://www.wild.as"
            target="_blank"
            className="text-xs hover:text-[#ffffff] transition-all"
          >
            WILD
          </a>
        </li>
        <li>
          <div>Co-Founder, Software Engineer</div>
          <a href="" className="text-xs hover:text-[#ffffff] transition-all">
            creativecocks
          </a>
        </li>
      </ul>
      <h2>Skills & Expertise</h2>
      <ul>
        {skills.map((value, index, arr) => {
          return (
            <li
              key={index}
              className="inline-block list-none px-2.5 py-1 rounded-lg mr-2 mb-1 bg-zinc-700 text-xs font-medium"
            >
              {value}
            </li>
          );
        })}
      </ul>
      <h2>I worked with</h2>
      <ul>
        {tech.map((value, index, arr) => {
          return (
            <li
              key={index}
              className="inline-block list-none px-2.5 py-1 rounded-lg mr-2 mb-1 bg-zinc-700 text-xs font-medium"
            >
              {value}
            </li>
          );
        })}
      </ul>
      <h2>Certs</h2>
      <ul>
        {certifications.map((value, index, arr) => {
          return (
            <li
              key={index}
              className="inline-block list-none px-2.5 py-1 rounded-lg mr-2 mb-1 bg-[#FF9900] text-white text-xs font-medium"
            >
              {value}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
