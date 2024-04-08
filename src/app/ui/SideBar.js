import React from "react";
import { FaRegIdBadge } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RiPencilRulerLine } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi";
import { VscNotebook } from "react-icons/vsc";
import { MdPermContactCalendar } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Registro",
    path: "/registro",
    icon: <FaRegIdBadge />,
    status: "available"
  },
  {
    title: "Alumnos Inscritos",
    path: "/participantes",
    icon: <BsFillPersonLinesFill />,
    status: "not_available"
  },
  {
    title: "Convocatoria",
    path: "/convocatoria",
    icon: <HiOutlineDocumentText />,
    status: "available"
  },
  {
    title: "Codigo de conducta",
    path: "/",
    icon: <VscNotebook />,
    status: "not_available"
  },
  {
    title: "Reglamento",
    path: "/",
    icon: <RiPencilRulerLine />,
    status: "not_available"
  },
  {
    title: "OMICHH",
    path: "/omichh",
    icon: <FaInfoCircle />,
    status: "available"
  },
  {
    title: "Contacto",
    path: "/",
    icon: <MdPermContactCalendar />,
    status: "not_available"
  },
];