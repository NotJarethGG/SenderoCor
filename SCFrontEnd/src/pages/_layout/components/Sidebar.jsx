import React, { useState } from "react";
import Icon from "../../../assets/img/SENDERO-CORNIZUELO.png";
import { NavLink } from "react-router-dom";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import * as FaIcons from "react-icons/im";
import * as FaIconsd from "react-icons/fa";
import * as FaIconsc from "react-icons/md";
import * as FaIconscs from "react-icons/ai";
import * as FaIconsci from "react-icons/md";
import * as FaIconsce from "react-icons/bs";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`sidebar ${sidebarVisible ? "" : "hidden"}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {sidebarVisible ? <BiArrowToLeft size={"40px"} /> : <BiArrowToRight size={"40px"} />}
      </div>
      <div className={`content ${sidebarVisible ? "" : "hidden"}`}>
        <div className="header">
          <div className="logoContainer">
            <img src={Icon} alt="icon" className="logo" />
          </div>
        </div>
        <ul className="menu">
          <li>
            <NavLink
              to="/home"
              exact
              className="nav-link"
              activeClassName="active"
            >
              <FaIcons.ImHome className="icon" /> Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listUsuarios"
              exact
              className="nav-link"
              activeClassName="active"
            >
              <FaIconsd.FaUsers className="icon" /> Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listaCampanas"
              exact
              className="nav-link"
              activeClassName="active"
            >
              <FaIconsc.MdNewspaper className="icon" /> Campañas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listaReservaciones"
              exact
              className="nav-link"
              activeClassName="active"
            >
              <FaIconscs.AiOutlineAudit className="icon" /> Reservaciones
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listaTipos"
              exact
              className="nav-link"
              activeClassName="active"
            >
              <FaIconsci.MdVolunteerActivism className="icon" /> TipoVC
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listaVOluntariados"
              exact
              className="nav-link"
              activeClassName="active"
            >
              <FaIconsce.BsFillFileEarmarkTextFill className="icon" />{" "}
              Voluntariados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listaPuntos"
              exact
              className="nav-link"
              activeClassName="active"
            >
              <FaIconsce.BsFillFileEarmarkTextFill className="icon" /> Puntos De
              Interés
            </NavLink>
          </li>
          <li>
            <NavLink to="/listaSolicitudes" exact className='text-dark rounded py-2 w-100 d-inline-block px-3' activeClassName="active">
              <FaIconsce.BsFillFileEarmarkTextFill className='me-2' /> Solicitudes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
