-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-02-2021 a las 21:10:25
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_user` int(11) NOT NULL,
  `telefono` int(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `empresa` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `telefono`, `email`, `nombre`, `empresa`) VALUES
(2, 817756926, 'KathrynZamudioAcevedo@dayrep.c', 'Bahena', 'Peter Reeves'),
(3, 718634423, 'DahliaGraciaRoybal@cuvox.de', 'Solorio', 'Benesome'),
(4, 856673579, 'LizaGuillenGaribay@cuvox.de', 'Holguín', 'Shoe Pavilion'),
(5, 989329125, 'GaetanSolorioCarrero@jourrapid', 'Barrientos', 'Gold Touch'),
(6, 828751652, 'LiafdagChavarriaUrena@armyspy.', 'Bañuelos', 'Sammy\'s Record Shack'),
(10, 2232, 'correotemporal@gmail.com', 'ssdsds', 'juan de dios'),
(12, 999999, 'juan@gmail.com', 'juanito', 'juan de dios'),
(13, 999999, 'juan@gmail.com', 'juanito', 'juan de dios'),
(15, 22331, 'ds@fff.com', 'hola', 'hola'),
(17, 222, 'sd@hoti.com', 'sd', 'www'),
(18, 222, 'JoadComejoRuvalcaba@jourrapide', 'amazon_consola', 'Martin\'s'),
(21, 334234, 'aaaaaaaaaaaa@hotmail.com', 'sssss', 'frfrfr'),
(22, 2147483647, 'lilia@hmtoamilc.om', 'lilia', 'lilias comany'),
(23, 2147483647, 'correo@gmail.com', 'gaimito', 'empresa fansatamas'),
(24, 33333, 'JoadComejoRuvalcaba@jourrapide', 'amazon_consola', 'Martin\'s'),
(25, 334234, 'aaaaaaaaaaaa@hotmail.com', 'sssss', 'frfrfr'),
(26, 334234, 'aaaaaaaaaaaa@hotmail.com', 'sssss', 'frfrfr'),
(27, 3343434, 'bbbb@hotmail.com', 'bbbbb', 'bbbb'),
(28, 2147483647, 'ddd@hotmail.com', 'luis', 'empresa de luis');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
