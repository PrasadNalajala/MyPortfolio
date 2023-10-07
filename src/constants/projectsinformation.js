import { IoLogoJavascript } from "react-icons/io";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiStripe,
} from "react-icons/si";
import sheqonomiVideo from "../Components/Projects/she.mp4";
import controlshiftImage from "../Components/Projects/cs.jpeg";
import zBayVideo from "../Components/Projects/Zbay.mp4";
import marketPlaceVideo from "../Components/Projects/Cut-CMP.mp4";

export const projectsInformation = [
  {
    TechStack: [
      <SiExpress key={"project_1_ts_1"} />,
      <SiMongodb key={"project_1_ts_2"} />,
      <SiNodedotjs key={"project_1_ts_3"} />,
      <IoLogoJavascript key={"project_1_ts_4"} />,
    ],
    id: "#Project_1",
    projectName: "SHEQONOMI",
    description:
      " The State of Women is the ‘voice’ and the platform that shares, connects, promotes, and works towards gender equity through conversation, connection, community, and creativity. SHEQONOMI is the ‘vessel’ that distributes that ‘voice’ and message around the world.",
    isLiveCode: true,
    isGithubCode: false,
    liveLink: "https://play.google.com/store/apps/details?id=com.sheqonomi2",
    codeLink: "",
    isVideo: true,
    isYoutubeVideo: false,
    youtubeVideoId: false,
    video: sheqonomiVideo,
  },
  {
    projectName: "Ad Yogi",
    TechStack: [
      <SiHtml5 key={"project_2_ts_1"} />,
      <SiCss3 key={"project_2_ts_2"} />,
      <SiReact key={"project_2_ts_3"} />,
      <SiRedux key={"project_2_ts_4"} />,
      <IoLogoJavascript key={"project_2_ts_5"} />,
    ],
    id: "#Project_2",
    description:
      "  As a Premier Google Partner & Facebook Agency Partner, our digital marketing specialists offer unmatched expertise in paid search for e-commerce companies, starting from campaign creation to final conversion optimization. Sit back and relax while we focus our energy on getting just the right set of people to visit your online store and make purchases, thereby  scale your business in quite time.",
    isLiveCode: true,
    isGithubCode: false,
    liveLink: "https://marketplace.adyogi.com/login",
    codeLink: "",
    isVideo: true,
    isYoutubeVideo: true,
    youtubeVideoId: "E8heNNlwLd8",
    video: false,
  },
  {
    projectName: "Controlshift.in",
    TechStack: [
      <SiHtml5 key={"project_3_ts_1"} />,
      <SiCss3 key={"project_3_ts_2"} />,
      <SiReact key={"project_3_ts_3"} />,
      <IoLogoJavascript key={"project_3_ts_4"} />,
    ],
    id: "#Project_3",
    description:
      "We're a team of dedicated professionals who are passionate about helping businesses succeed. We take the time to get to know our clients and candidates on a personal level, and we're committed to building strong, lasting relationships that benefit everyone involved",
    isLiveCode: true,
    isGithubCode: false,
    liveLink: "https://controlshift.in/",
    codeLink: "",
    isVideo: false,
    isYoutubeVideo: false,
    youtubeVideoId: "",
    video: false,
    image: controlshiftImage,
  },
  {
    projectName: "Z-Bay",
    TechStack: [
      <SiHtml5 key={"project_4_ts_1"} />,
      <SiMaterialui key={"project_4_ts_2"} />,
      <SiReact key={"project_4_ts_3"} />,
      <SiStripe key={"project_4_ts_4"} />,
      <IoLogoJavascript key={"project_4_ts_5"} />,
    ],
    id: "#Project_4",
    description:
      "ZBay is a unique, full-lifestyle shopping destination, with a mostly exclusive assortment of clothing, shoes, accessories, and many more. I have tried my best to make a fully-functional clone of Popular E-bay website that provides a minimal user experience & additional functionalities like PDF Bill Download, Stripe Payment Gateway Etc.",
    isLiveCode: true,
    isGithubCode: true,
    liveLink: "https://z-bay.vercel.app/",
    codeLink: "https://github.com/Rickey07/Z-BAY",
    isVideo: true,
    isYoutubeVideo: false,
    youtubeVideoId: "",
    video: zBayVideo,
  },
  {
    projectName: "Compare-Hub",
    TechStack: [
      <SiHtml5 key={"project_5_ts_1"} />,
      <SiMaterialui key={"project_5_ts_2"} />,
      <SiReact key={"project_5_ts_3"} />,
      <SiNodedotjs key={"project_5_ts_4"} />,
      <SiMysql key={"project_5_ts_5"} />,
      <IoLogoJavascript key={"project_5_ts_6"} />,
    ],
    id: "#Project_5",
    description:
      "It is a web app that compares different products from different sectors like Tech, Healthcare Etc and suggest you cheapest and best products out there.(React Js,Node Js)",
    isLiveCode: false,
    isGithubCode: true,
    liveLink: "",
    codeLink: "https://github.com/Rickey07/compare-marketplace",
    isVideo: true,
    isYoutubeVideo: false,
    youtubeVideoId: "",
    video: marketPlaceVideo,
  },
];
