import {
  FaHandHoldingHeart,
  FaRunning,
  FaWind,
  FaClock,
  FaUserFriends,
  FaLeaf,
} from "react-icons/fa";
import Image from "next/image";

export const services = [
  {
    title: "Physiotherapy & Pain Management",
    shortDesc:
      "Personalised therapeutic sessions for pain relief and body balance.",
    longDesc:
      "In our bodywork sessions, I'll work with you to address your unique needs. Drawing from my experience in various therapeutic techniques, I'll help you navigate chronic pain, release tension, and restore your body's natural balance. Each session is a collaborative journey towards healing and harmony.",
    icon: <FaHandHoldingHeart className="text-3xl text-[#b97a2b] mb-4" />,
    largeIcon: <FaHandHoldingHeart className="text-4xl text-[#b97a2b] mb-4" />,
    image: (
      <Image
        src="/coach.jpg"
        alt="Coach Service"
        width={400}
        height={400}
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    items: [
      {
        name: "Physiotherapy",
        description:
          "Together, we'll use evidence-based treatments to restore your movement and function",
      },
      {
        name: "Massage Therapy",
        description:
          "Deep tissue and therapeutic massage to help you find relief from tension",
      },
      {
        name: "Myofascial  Release",
        description:
          "Hands on techniques using a range of practices including myofascial release",
      },
      {
        name: "Pain Management",
        description:
          "Targeted techniques to help you find relief from chronic and acute pain",
      },
    ],
  },
  {
    title: "Movement Practice",
    shortDesc: "Functional training for rehabilitation and everyday ease.",
    longDesc:
      "I'll guide you in discovering the power of mindful movement. Together, we'll focus on building functional strength, improving your mobility, and enhancing your natural movement patterns.",
    icon: <FaRunning className="text-3xl text-[#b97a2b] mb-4" />,
    largeIcon: <FaRunning className="text-4xl text-[#b97a2b]" />,
    image: (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-lg"
      >
        <source src="/movement.mp4" type="video/mp4" />
      </video>
    ),
    items: [
      {
        name: "Movement Therapy",
        description: "I’ll guide you towards getting the most out of your movement practice. Using a range of methods including rope flow and kettlebells.",
      },
      {
        name: "Functional Training",
        description:
          "We'll work on practical exercises for real-life strength and stability",
      },
      {
        name: "Rehabilitation",
        description: "I'll support your journey through injury recovery",
      },
      {
        name: "Movement Assessment",
        description:
          "We'll analyse your movement patterns to understand limitations and potential",
      },
    ],
  },
  {
    title: "Meditation & The Breath",
    shortDesc: "Nervous system support through mindful practices.",
    longDesc:
      "I'll help you connect deeply with your body and mind through integrative breath and mindfulness practices. Together, we'll work on regulating your nervous system, reducing stress, and enhancing your overall wellbeing. You'll learn techniques that you can easily incorporate into your daily life.",
    icon: <FaWind className="text-3xl text-[#b97a2b] mb-4" />,
    largeIcon: <FaWind className="text-4xl text-[#b97a2b]" />,
    image: (
      <Image
        src="/breath.jpg"
        alt="Mindfulness Practice"
        width={400}
        height={400}
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    items: [
      {
        name: "Meditation",
        description:
          "We'll explore mindfulness practices for mental clarity and calm",
      },
      {
        name: "Breathwork",
        description:
          "I'll teach you breathing techniques for stress relief and energy",
      },
    
      {
        name: "Mind-Body Integration",
        description: "Together, we'll strengthen your mind-body connection",
      },
    ],
  },
];

export const benefits = [
  {
    icon: <FaClock className="text-3xl text-[#b97a2b]" />,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work best for your schedule",
  },
  {
    icon: <FaUserFriends className="text-3xl text-[#b97a2b]" />,
    title: "Personal Attention",
    description:
      "I give you my full attention and create customized treatment plans",
  },
  {
    icon: <FaLeaf className="text-3xl text-[#b97a2b]" />,
    title: "Holistic Care",
    description: "I consider your whole being - mind, body, and spirit",
  },
];
