import React from "react";
import { FaRegIdBadge } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RiPencilRulerLine } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi";
import { VscNotebook } from "react-icons/vsc";
import { MdPermContactCalendar } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";

export const SidebarData = [
  {
    label: "Inicio",
    path: "/",
    icon: <IoMdHome />,
    status: true
  },
  {
    label: "Registro",
    path: "/registro",
    icon: <FaRegIdBadge />,
    status: true
  },
  {
    label: "Alumnos Inscritos",
    path: "/participantes",
    icon: <BsFillPersonLinesFill />,
    status: false
  },
  {
    label: "Convocatoria",
    path: "/convocatoria",
    icon: <HiOutlineDocumentText />,
    status: true
  },
  {
    label: "Codigo de conducta",
    path: "/",
    icon: <VscNotebook />,
    status: false
  },
  {
    label: "Reglamento",
    path: "/",
    icon: <RiPencilRulerLine />,
    status: false
  },
  {
    label: "OMICHH",
    path: "/omichh",
    icon: <FaInfoCircle />,
    status: true
  },
  {
    label: "Contacto",
    path: "/",
    icon: <MdPermContactCalendar />,
    status: false
  },
];