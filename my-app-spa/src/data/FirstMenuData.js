import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faFilePen,
  faUsers,
  faAddressCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const firstMenuData = [
  {
    id: 1,
    image: <FontAwesomeIcon icon={faFileLines} />,
    post: "Buzz home",
    numberOfPosts: "",
    link:"/",
  },
  {
    id: 2,
    image: <FontAwesomeIcon icon={faFileLines} />,
    post: "My Buzz Post",
    numberOfPosts: 2,
    link:"/BuzzPost",
  },
  {
    id: 3,
    image: <FontAwesomeIcon icon={faFilePen} />,
    post: "Draft Posts",
    numberOfPosts: 33,
    link:"/DraftPost",
  },
  {
    id: 4,
    image: <FontAwesomeIcon icon={faUser} />,
    post: "My Followers",
    numberOfPosts: 12,
    link:"/MyFollowers",
  },
  {
    id: 5,
    image: <FontAwesomeIcon icon={faUser} />,
    post: "I am Following",
    numberOfPosts: 12,
    link:"/FollowingDetails",
  },
  {
    id: 6,
    image: <FontAwesomeIcon icon={faUsers} />,
    post: "My Teams",
    numberOfPosts: 82,
    link:"/MyTeams",
  },
  {
    id: 7,
    image: <FontAwesomeIcon icon={faAddressCard} />,
    post: "My Reporters",
    numberOfPosts: 42,
    link:"/MyReporters",
  },
  {
    id: 8,
    image: <FontAwesomeIcon icon={faUser} />,
    post: "Links",
    numberOfPosts: 12,
    link:"/Links",
  },
  {
    id: 9,
    image: <FontAwesomeIcon icon={faUsers} />,
    post: "Group",
    numberOfPosts: 82,
    link:"/Group",
  },
  {
    id: 10,
    image: <FontAwesomeIcon icon={faAddressCard} />,
    post: "Saved",
    numberOfPosts: 42,
    link:"/Saved",
  }

];
