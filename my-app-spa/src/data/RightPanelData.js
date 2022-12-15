import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import images from "../pictures/images.png";
import Girl from "../pictures/girl.png";
import girl from "../pictures/girl2.png";
import boy from "../pictures/boy.png";
import jk from "../pictures/jk.png"

export const rightPanelUserData = [
  {
    id: uuidv4(),
    image: images,
    name: "Kishore",
    designation: "Marketing Department",
    time: moment().format(),
    comment: "Good Morning!!!"
  },

  {
    id: uuidv4(),
    image: Girl,
    name: "Lokesh",
    designation: "Marketing Dept",
    time: moment().format(),
    comment: "Good Morning!!!"
  },
  {
    id: uuidv4(),
    image: boy,
    name: "Madhavan",
    designation: "Sales Dept",
    time: moment().format(),
    comment: "Good Morning!!!"
  },
  {
    id: uuidv4(),
    image: girl,
    name: "Deva",
    designation: "Marketing Dept",
    time: moment().format(),
    comment: "Good Morning!!!"
  }, {
    id: uuidv4(),
    image: jk,
    name: "Jungkook",
    designation: "Marketing Dept",
    time: moment().format(),
    comment: "Good Morning!!!"
  }
];
