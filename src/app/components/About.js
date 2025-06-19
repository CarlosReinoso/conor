import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section className="bg-[#7b8a7a] py-12 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/conor-home.jpg"
          alt="Conor"
          className="rounded shadow-lg w-full max-w-xs mx-auto md:mx-0"
        />
        <div>
          <h2 className="text-2xl font-serif mb-2 !text-white">Meet Conor</h2>
          <p className="!text-white mb-4">
            Hi, I'm Conor—artist, integrated therapist, and community weaver.
          </p>
          <p className="!text-white mb-4">
            I founded Supple Space in 2014 as a place for people to heal and
            reconnect—with their bodies, with one other, and beyond.
          </p>
          <p className="!text-white mb-4">
            My work integrates hands-on bodywork, movement therapy, meditative
            practices and more. It's intuitive, personalised, and rooted in
            presence—supporting you to live more fully and take your wellbeing
            into your own hands.
          </p>
          <Button arrowDirection="right">Read More</Button>
        </div>
      </div>
    </section>
  );
}
