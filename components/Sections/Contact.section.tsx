import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlinePhone
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/teachdugsimt" />

        <Icon
          icon={<AiOutlineLinkedin />}
          url="https://www.linkedin.com/in/tuntikorn-visoothikul-097731227/"
        />

        <Icon icon={<MdEmail />} url="mailto:visoothikul.t@gmail.com" />

        <Icon
          icon={<AiOutlinePhone />}
          url="tel:0929818252"
        />
      </div>
    </div>
  );
};

export default Contact;
