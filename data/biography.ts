import profilePhoto from "@/assets/images/profile/profilePhoto.webp"
import {Biography, SocialLinks} from "@/types/biography";
import {FaLinkedin, FaGithub} from "react-icons/fa6";

export const biography : Biography = {
   image: profilePhoto,
    name: "Wojciech Podleśny",
};

export const socialLinks: SocialLinks[] =  [
    {
        href: "https://linkedin.com/in/wojciech-podlesny",
        label: "linkedinAria",
        icon: FaLinkedin,
    },
    {
        href: "https://github.com/wojciech-podlesny",
        label: "githubAria",
        icon: FaGithub,
    },
];

