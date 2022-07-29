import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";
import { Row, Col } from 'antd'

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Tuntikorn Visoothikul</p>
        <p className="mt-1 text-lg text-gray-300">
          Full Stack Developer
        </p>

        <Col className="mt-4 text-gray-400">
          Building Web apps and cross platform mobile application, manage database and some AWS infrastructor. Main stack use nodeJS, react, react-native
          and java springboot. See more below.
        </Col>

        <Link href="https://arttist-portfolio.s3.ap-southeast-1.amazonaws.com/file-resume/01-June-2022.pdf" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get my resume
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/img-profile.jpg"
          width="120"
          height="120"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
