import { OpenInNewTabIcon } from "./components/icons";

export default function Home() {
  return (
    <main className="pt-8 max-w-3xl">
      <h2>Hello!</h2>
      <p className="pb-2">
        I&apos;m Michael and I&apos;m a Software Engineer at heart, highly
        interested in everything around architecture. I&apos;m currently{" "}
        <span className="font-semibold">Director of Product Engineering</span>{" "}
        at{" "}
        <a
          href="https://www.bitpanda.com/en"
          target="_blank"
          className="text-[#27d17f] fill-[#27d17f] font-semibold hover:text-white hover:fill-white transition-all"
        >
          Bitpanda <OpenInNewTabIcon />
        </a>{" "}
        where my teams build business critical systems and services within the
        domains of payments & transactions, user identity and regulatory
        compliance.
      </p>
      <p className="pb-5">
        I love to build teams, get high-quality products to market and build
        companies up for success! Though people say I seem happiest when I can
        get my hands dirty, build and create things and simply get things done.
      </p>
      <h2>Latest Activity</h2>
      <ul className="list-none list-inside space-y-3">
        <li>
          <a
            href="https://www.linkedin.com/posts/michaelbirsak_aws-certified-developer-associate-was-issued-activity-7104356886891642880-J-k6"
            target="_blank"
            className="hover:text-white transition-all"
          >
            LinkedIn – Acquired my AWS Certified Developer - Associate
            certificate
          </a>
          <small className="block">02 Sep 2023</small>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=jw3Si1L-Oww"
            target="_blank"
            className="hover:text-white transition-all"
          >
            Youtube – TechLead-Story: Michael Birsak, CTO at hi.health (German,
            devjobs.at)
          </a>
          <small className="block">26 Aug 2022</small>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/pulse/how-i-passed-my-aws-certified-cloud-practitioner-exam-michael-birsak/"
            target="_blank"
            className="hover:text-white transition-all"
          >
            LinkedIn – How I Passed My AWS Certified Cloud Practitioner Exam
          </a>
          <small className="block">10 Oct 2019</small>
        </li>
      </ul>
    </main>
  );
}
