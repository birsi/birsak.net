import { OpenInNewTabIcon } from "../components/icons";

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Java",
    "AWS",
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
    "Docker",
    "Kubernetes",
    "OpenShift",
    "ArgoCD",
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

  return (
    <main className="pt-8 max-w-3xl">
      <h2>About me</h2>
      <p className="pb-5">A little story about me!</p>
      <h2>Experience</h2>
      <ul className="pb-5">
        <li className="mb-3">
          <div>Director of Engineering</div>
          <a href="" className="text-xs hover:text-[#27d17f] transition-all">
            Bitpanda
          </a>
        </li>
        <li className="mb-3">
          <div>Chief Technology Officer</div>
          <a href="" className="text-xs hover:text-[#fe816a] transition-all">
            hi.health
          </a>
        </li>
        <li className="mb-3">
          <div>Engineering Manager</div>
          <a href="" className="text-xs hover:text-[#ffffff] transition-all">
            adidas runtastic
          </a>
        </li>
        <li className="mb-3">
          <div>Lead Software Engineer, Consultant & TAM</div>
          <a href="" className="text-xs hover:text-[#113388] transition-all">
            Allianz Technology
          </a>
        </li>
        <li className="mb-3">
          <div>Co-Founder, Software Engineer</div>
          <a href="" className="text-xs hover:text-[#ffffff] transition-all">
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
      <h2>Tech I've been working recently with</h2>
      <h2>Tech I've worked with in the past</h2>
    </main>
  );
}
