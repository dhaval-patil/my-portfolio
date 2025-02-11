import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

const CodingProfiles = () => {
  const platforms = [
    {
      id: 1,
      name: "GitHub",
      icon: <FaGithub size={30} />,
      link: "https://github.com/yourusername",
    },
    {
      id: 2,
      name: "LeetCode",
      icon: <SiLeetcode size={30} />,
      link: "https://leetcode.com/yourusername",
    },
    {
      id: 3,
      name: "HackerRank",
      icon: <FaHackerrank size={30} />,
      link: "https://www.hackerrank.com/yourusername",
    },
    {
      id: 4,
      name: "CodeChef",
      icon: <SiCodechef size={30} />,
      link: "https://www.codechef.com/users/yourusername",
    },
    {
      id: 5,
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks size={30} />,
      link: "https://auth.geeksforgeeks.org/user/yourusername",
    },
  ];

  return (
    <section className="py-10 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-teal-400">2025 @ Dhaval</h2>
      <div className="flex justify-center space-x-6">
        {platforms.map((platform) => (
          <a
            key={platform.id}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-full hover:bg-teal-500 transition duration-300"
          >
            {platform.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;