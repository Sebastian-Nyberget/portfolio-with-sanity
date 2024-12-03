import Image from "next/image";

import square from "@/public/square.svg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { 
  RiNextjsFill,
  RiTailwindCssFill 
} from "react-icons/ri";
import { FaReact, FaGithub, FaFigma, FaDocker, FaHtml5, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTypescript, SiSanity, SiVercel, SiAppwrite, SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { Button } from "@/components/ui/button";

const icons = [
  RiNextjsFill,
  FaReact,
  FaGithub,
  FaFigma,
  FaDocker,
  SiTypescript,
  FaHtml5,
  RiTailwindCssFill,
  SiSanity,
  SiVercel,
  SiAppwrite,
  SiMongodb,
  DiMysql,
];

const socialMedia = [
  {
    id: 1,
    icon: FaFacebook,
    name: 'Facebook',
    username: '@seb',
    link: 'http://localhost:3000/',
  },
  {
    id: 2,
    icon: FaXTwitter,
    name: 'X / Twitter',
    username: '@seb',
    link: 'http://localhost:3000/',
  },
  {
    id: 3,
    icon: FaLinkedin,
    name: 'LinkedIn',
    username: '@seb',
    link: 'http://localhost:3000/',
  },
];

export function SectionTwo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>Utforsk min stack</CardTitle>
            <CardDescription>Sjekk ut de verktøyene jeg bruker</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md"
              >
                <Icon className="w-10 h-10 text-gray-800" />
              </div>
            ))}
          </CardContent>
        </Card>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
            {socialMedia.map((item) => (
                <Card key={item.id} className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none">
                  <div className="flex items-center justify-center w-16 h-16">
                    <item.icon className="w-12 h-12" />
                  </div>
                    <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
                    <p className="text-muted-foreground">{item.username}</p>
                    <Button className="mt-4" size="sm" asChild>
                      <a href={item.link}>
                        Follow
                      </a>
                    </Button>
                </Card>
            ))}
          </div>
      </div>
    </div>
  );
}
