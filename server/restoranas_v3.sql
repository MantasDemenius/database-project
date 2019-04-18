-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2019 at 09:25 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restoranas_v3`
--

-- --------------------------------------------------------

--
-- Table structure for table `atsiliepimas`
--

CREATE TABLE `atsiliepimas` (
  `id_ATSILIEPIMAS` int(11) NOT NULL,
  `fk_RESTORANASid_RESTORANAS` int(11) NOT NULL,
  `fk_KLIENTASid_KLIENTAS` int(11) NOT NULL,
  `Data` date NOT NULL,
  `Komentaras` varchar(255) COLLATE utf8_lithuanian_ci DEFAULT NULL,
  `Ivertinimas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `atsiliepimas`
--

INSERT INTO `atsiliepimas` (`id_ATSILIEPIMAS`, `fk_RESTORANASid_RESTORANAS`, `fk_KLIENTASid_KLIENTAS`, `Data`, `Komentaras`, `Ivertinimas`) VALUES
(1, 12, 15, '2018-11-04', 'Morbi ut odio.', 5),
(2, 1, 5, '2019-02-16', 'Nullam sit amet turpis elementum ligula vehicula consequat.', 1),
(3, 2, 11, '2018-07-15', 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', 4),
(4, 4, 7, '2018-10-11', 'Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1),
(5, 11, 10, '2019-02-11', 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.', 1),
(6, 18, 19, '2019-01-23', 'Integer a nibh.', 4),
(7, 9, 3, '2018-07-14', 'Etiam justo. Etiam pretium iaculis justo.', 4),
(8, 19, 16, '2018-04-12', 'Aenean lectus.', 5),
(9, 13, 15, '2018-12-01', 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.', 5),
(10, 3, 1, '2018-05-02', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.', 5),
(11, 19, 19, '2018-06-16', 'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.', 5),
(12, 13, 11, '2018-10-28', 'Donec vitae nisi.', 5),
(13, 7, 16, '2018-03-19', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.', 3),
(14, 10, 17, '2018-12-14', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 5),
(15, 18, 3, '2018-09-24', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1),
(16, 6, 3, '2019-02-16', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna.', 5),
(17, 19, 6, '2018-06-21', 'Praesent blandit.', 1),
(18, 11, 10, '2018-10-31', 'Maecenas pulvinar lobortis est. Phasellus sit amet erat.', 5),
(19, 13, 4, '2019-03-02', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.', 1),
(20, 12, 6, '2018-08-29', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 2),
(21, 19, 3, '2018-04-21', 'Vivamus tortor. Duis mattis egestas metus.', 2),
(22, 8, 9, '2018-05-17', 'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 4),
(23, 17, 18, '2018-10-25', 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.', 4),
(24, 11, 5, '2018-11-02', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.', 5),
(25, 20, 20, '2018-09-12', 'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', 2),
(26, 6, 6, '2018-07-04', 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 3),
(27, 16, 18, '2018-12-27', 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.', 1),
(28, 10, 9, '2018-05-07', 'Cras non velit nec nisi vulputate nonummy.', 4),
(29, 4, 16, '2018-07-22', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 2),
(30, 6, 17, '2018-06-10', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1),
(31, 5, 18, '2018-03-26', 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 4),
(32, 16, 8, '2018-05-24', 'Nullam varius. Nulla facilisi.', 4),
(33, 12, 3, '2018-10-19', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 2),
(34, 14, 19, '2019-02-01', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 3),
(35, 9, 7, '2018-05-10', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 5),
(36, 7, 17, '2018-04-06', 'Vivamus tortor.', 5),
(37, 16, 3, '2018-03-25', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', 5),
(38, 16, 2, '2018-06-09', 'Nunc nisl.', 4),
(39, 17, 14, '2018-04-30', 'Pellentesque at nulla. Suspendisse potenti.', 1),
(40, 10, 1, '2018-08-06', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `darbuotojas`
--

CREATE TABLE `darbuotojas` (
  `id_DARBUOTOJAS` int(11) NOT NULL,
  `fk_RESTORANASid_RESTORANAS` int(11) NOT NULL,
  `fk_KURJERISid_KURJERIS` int(11) DEFAULT NULL,
  `Vardas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Pavarde` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Pareigos` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Telefono_numeris` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Idarbinimo_data` date NOT NULL,
  `Sutarties_pabaiga` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `darbuotojas`
--

INSERT INTO `darbuotojas` (`id_DARBUOTOJAS`, `fk_RESTORANASid_RESTORANAS`, `fk_KURJERISid_KURJERIS`, `Vardas`, `Pavarde`, `Pareigos`, `Telefono_numeris`, `Idarbinimo_data`, `Sutarties_pabaiga`) VALUES
(1, 1, 1, 'Godfree', 'Casserley', 'Automation Specialist I', '+351 786 646 1112', '2017-12-30', '2018-10-02'),
(2, 8, 2, 'Ottilie', 'Testro', 'Accountant I', '+267 348 641 7889', '2017-12-06', '2019-10-31'),
(3, 12, 3, 'Inga', 'Shannon', 'Senior Editor', '+420 266 361 3765', '2018-02-03', '2018-05-27'),
(4, 13, NULL, 'Joey', 'Prettyjohn', 'Paralegal', '+86 869 766 9630', '2017-11-21', '2019-05-17'),
(5, 8, 4, 'Louella', 'Anstice', 'Assistant Manager', '+48 353 264 7705', '2017-12-08', '2018-09-03'),
(6, 9, 5, 'Tymon', 'Tregust', 'Web Designer I', '+420 535 331 4958', '2018-02-03', '2019-05-07'),
(7, 13, NULL, 'Shelbi', 'Rossoni', 'Geologist I', '+234 647 880 6349', '2017-11-29', '2018-05-25'),
(8, 15, 6, 'Grantley', 'Elphinstone', 'Safety Technician II', '+66 254 770 6810', '2018-01-24', '2019-10-27'),
(9, 18, NULL, 'Michelina', 'Papes', 'Electrical Engineer', '+86 255 691 8725', '2018-02-18', '2020-07-12'),
(10, 10, 7, 'Clemmy', 'Killiner', 'Media Manager II', '+245 155 689 0723', '2017-12-04', '2020-04-28'),
(11, 17, 8, 'Silvan', 'Dillet', 'Librarian', '+86 709 536 6494', '2018-02-19', '2020-02-27'),
(12, 2, 9, 'Laverna', 'Pretti', 'Graphic Designer', '+30 586 610 1130', '2018-01-27', '2018-03-09'),
(13, 19, NULL, 'Boony', 'Bysshe', 'Electrical Engineer', '+850 258 196 5338', '2018-02-21', '2018-07-20'),
(14, 3, 10, 'Letta', 'Philpott', 'Quality Engineer', '+51 680 958 7722', '2018-01-05', '2019-02-02'),
(15, 17, NULL, 'Llywellyn', 'Neeves', 'Environmental Tech', '+262 219 540 5151', '2017-12-22', '2020-03-02'),
(16, 12, NULL, 'Iggie', 'Piesold', 'Director of Sales', '+216 549 981 6578', '2017-12-10', '2020-04-26'),
(17, 13, NULL, 'Skelly', 'Hawsby', 'Food Chemist', '+86 605 373 8371', '2018-02-06', '2020-04-08'),
(18, 7, NULL, 'Rriocard', 'Duthie', 'Nurse Practicioner', '+33 354 462 4982', '2017-12-03', '2020-01-04'),
(19, 5, NULL, 'Cam', 'Ovey', 'Senior Quality Engineer', '+48 975 197 1158', '2017-12-13', '2019-06-23'),
(20, 14, NULL, 'Mariejeanne', 'Londesborough', 'Systems Administrator IV', '+7 247 880 5856', '2017-12-29', '2020-07-03');

-- --------------------------------------------------------

--
-- Table structure for table `fk_teikia`
--

CREATE TABLE `fk_teikia` (
  `fk_RESTORANASid_RESTORANAS` int(11) NOT NULL,
  `fk_TIEKEJASid_TIEKEJAS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `fk_teikia`
--

INSERT INTO `fk_teikia` (`fk_RESTORANASid_RESTORANAS`, `fk_TIEKEJASid_TIEKEJAS`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20);

-- --------------------------------------------------------

--
-- Table structure for table `gerimas`
--

CREATE TABLE `gerimas` (
  `id_GERIMAS` int(11) NOT NULL,
  `name` char(15) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `gerimas`
--

INSERT INTO `gerimas` (`id_GERIMAS`, `name`) VALUES
(1, 'Pepsi'),
(2, 'Sprite'),
(3, 'Coca cola'),
(4, 'Vanduo'),
(5, 'Gazuotas vanduo'),
(6, 'Alus');

-- --------------------------------------------------------

--
-- Table structure for table `imone`
--

CREATE TABLE `imone` (
  `id_IMONE` int(11) NOT NULL,
  `Pavadinimas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Adresas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Telefono_numeris` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `imone`
--

INSERT INTO `imone` (`id_IMONE`, `Pavadinimas`, `Adresas`, `Telefono_numeris`) VALUES
(1, 'Graham Holdings Company', '729 Transport Place', '+596 265 783 4389'),
(2, 'Bank of South Carolina Corp.', '8955 Sugar Parkway', '+62 453 359 5446'),
(3, 'Ultrapar Participacoes S.A.', '58 Rowland Place', '+351 341 211 3416'),
(4, 'Juno Therapeutics, Inc.', '2577 Linden Junction', '+351 282 239 3841'),
(5, 'First Solar, Inc.', '6 Melby Crossing', '+86 953 847 8141'),
(6, 'Electronics for Imaging, Inc.', '516 Onsgard Circle', '+380 611 894 0011'),
(7, 'Aerie Pharmaceuticals, Inc.', '62966 Sullivan Plaza', '+86 453 851 3674'),
(8, 'Kimco Realty Corporation', '10824 Del Mar Hill', '+48 619 372 2879'),
(9, 'Vanguard Mortgage-Backed Securities ETF', '5065 Florence Point', '+256 848 888 7302'),
(10, 'Medley Capital Corporation', '1 John Wall Plaza', '+84 431 298 3455');

-- --------------------------------------------------------

--
-- Table structure for table `ivertinimas`
--

CREATE TABLE `ivertinimas` (
  `id_IVERTINIMAS` int(11) NOT NULL,
  `name` char(1) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `ivertinimas`
--

INSERT INTO `ivertinimas` (`id_IVERTINIMAS`, `name`) VALUES
(1, '1'),
(2, '2'),
(3, '3'),
(4, '4'),
(5, '5');

-- --------------------------------------------------------

--
-- Table structure for table `klientas`
--

CREATE TABLE `klientas` (
  `id_KLIENTAS` int(11) NOT NULL,
  `Vardas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Telefono_numeris` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Adresas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Pastas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `klientas`
--

INSERT INTO `klientas` (`id_KLIENTAS`, `Vardas`, `Telefono_numeris`, `Adresas`, `Pastas`) VALUES
(1, 'Wit Vasilov', '+63 942 330 1823', '5312 Almo Circle', 'wvasilov0@topsy.com'),
(2, 'Brew Cavalier', '+98 366 998 6251', '08 Bunting Circle', 'bcavalier1@icio.us'),
(3, 'Judas Maggiore', '+63 379 730 6811', '0933 Eagan Point', 'jmaggiore2@ifeng.com'),
(4, 'Zebadiah Anfonsi', '+48 504 759 1396', '853 Waubesa Circle', 'zanfonsi3@github.com'),
(5, 'Idelle McMickan', '+62 398 922 2568', '15 Pankratz Plaza', 'imcmickan4@lycos.com'),
(6, 'Ivie Mc Dermid', '+46 586 811 6799', '6 Claremont Trail', 'imc5@yale.edu'),
(7, 'Jaclyn McGlue', '+39 509 304 7057', '29 Lyons Plaza', 'jmcglue6@whitehouse.gov'),
(8, 'Naomi Matonin', '+48 864 910 0651', '24 Bunting Pass', 'nmatonin7@indiegogo.com'),
(9, 'Waylen Adney', '+86 487 598 6032', '234 Mccormick Crossing', 'wadney8@slashdot.org'),
(10, 'Joby Havile', '+62 893 294 4030', '83788 Trailsway Court', 'jhavile9@independent.co.uk'),
(11, 'Ronny Madoc-Jones', '+63 471 738 4957', '12312 Briar Crest Lane', 'rmadocjonesa@photobucket.com'),
(12, 'Jackie Jimeno', '+7 194 113 2615', '7 Dakota Parkway', 'jjimenob@mediafire.com'),
(13, 'Neddy Jonk', '+48 519 320 1972', '41300 Graedel Alley', 'njonkc@yellowbook.com'),
(14, 'Donnie Baylis', '+86 151 243 2397', '84705 Mitchell Street', 'dbaylisd@accuweather.com'),
(15, 'Margareta Stebles', '+62 392 781 2437', '8 Vahlen Drive', 'msteblese@wsj.com'),
(16, 'Isadora Clipson', '+30 504 140 8756', '0790 Rusk Lane', 'iclipsonf@cargocollective.com'),
(17, 'Gregorius Puddephatt', '+230 659 731 0057', '5277 Merchant Trail', 'gpuddephattg@feedburner.com'),
(18, 'Pearce Lovart', '+86 215 282 5442', '53 Forest Run Circle', 'plovarth@geocities.com'),
(19, 'Augustina Perrelle', '+86 987 619 6200', '513 Fairfield Trail', 'aperrellei@storify.com'),
(20, 'Michail Bortoluzzi', '+373 260 244 9334', '86 Pierstorff Center', 'mbortoluzzij@cloudflare.com');

-- --------------------------------------------------------

--
-- Table structure for table `kurjeris`
--

CREATE TABLE `kurjeris` (
  `id_KURJERIS` int(11) NOT NULL,
  `Masina` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `kurjeris`
--

INSERT INTO `kurjeris` (`id_KURJERIS`, `Masina`) VALUES
(1, 'SJ'),
(2, 'Courier'),
(3, 'Grand Prix'),
(4, 'Genesis Coupe'),
(5, 'XJ'),
(6, 'Aero 8'),
(7, 'Malibu'),
(8, 'XLR-V'),
(9, 'SC'),
(10, 'Gemini');

-- --------------------------------------------------------

--
-- Table structure for table `padazas`
--

CREATE TABLE `padazas` (
  `id_PADAZAS` int(11) NOT NULL,
  `name` char(10) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `padazas`
--

INSERT INTO `padazas` (`id_PADAZAS`, `name`) VALUES
(1, 'Cesnakinis'),
(2, 'Svelnus'),
(3, 'Astrus'),
(4, 'Barbecue'),
(5, 'Mixas');

-- --------------------------------------------------------

--
-- Table structure for table `patiekalas`
--

CREATE TABLE `patiekalas` (
  `id_PATIEKALAS` int(11) NOT NULL,
  `name` char(21) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `patiekalas`
--

INSERT INTO `patiekalas` (`id_PATIEKALAS`, `name`) VALUES
(1, 'Vistienos kepsnys'),
(2, 'Vistienos kotletukas'),
(3, 'Kiaulienos kepsnys'),
(4, 'Kiaulienos kotletukas'),
(5, 'Cepelinai'),
(6, 'Kugelis'),
(7, 'Plovas'),
(8, 'Gun bao vistiena'),
(9, 'Snicelis'),
(10, 'Pica');

-- --------------------------------------------------------

--
-- Table structure for table `restoranas`
--

CREATE TABLE `restoranas` (
  `id_RESTORANAS` int(11) NOT NULL,
  `fk_IMONEid_IMONE` int(11) NOT NULL,
  `Pavadinimas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Adresas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Telefono_numeris` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Vadovo_vardas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Vadovo_pavarde` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Vadovo_telefono_numeris` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Vadovo_pastas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `restoranas`
--

INSERT INTO `restoranas` (`id_RESTORANAS`, `fk_IMONEid_IMONE`, `Pavadinimas`, `Adresas`, `Telefono_numeris`, `Vadovo_vardas`, `Vadovo_pavarde`, `Vadovo_telefono_numeris`, `Vadovo_pastas`) VALUES
(1, 1, 'Jayo', '083 Spaight Circle', '+33 580 946 4093', 'Aprilette', 'Emlyn', '+63 697 609 6055', 'aemlyn0@pinterest.com'),
(2, 9, 'Wikido', '1 Rusk Parkway', '+62 187 803 1638', 'Dorey', 'Spraging', '+62 421 856 0673', 'dspraging1@paginegialle.it'),
(3, 2, 'Divape', '0 Summit Hill', '+86 845 135 3679', 'Pooh', 'Palluschek', '+62 657 414 5550', 'ppalluschek2@nasa.gov'),
(4, 6, 'Yodel', '1280 Haas Place', '+82 978 258 9656', 'Maddy', 'Carstairs', '+51 797 882 7037', 'mcarstairs3@microsoft.com'),
(5, 10, 'Kare', '9656 Tennyson Crossing', '+86 873 217 6099', 'Elmira', 'Dearell', '+62 343 583 2043', 'edearell4@twitter.com'),
(6, 1, 'Meembee', '70517 Oriole Alley', '+86 598 510 5992', 'Bald', 'Blankhorn', '+64 131 975 6896', 'bblankhorn5@cornell.edu'),
(7, 7, 'Mynte', '0 Eagan Circle', '+263 276 606 7269', 'Maurizia', 'Binden', '+63 946 692 6943', 'mbinden6@hostgator.com'),
(8, 6, 'Avamba', '82 Riverside Park', '+63 104 463 2608', 'Tobit', 'Stanner', '+86 363 562 0378', 'tstanner7@sciencedirect.com'),
(9, 10, 'Jabbertype', '24057 Holy Cross Circle', '+62 597 967 7896', 'Xylia', 'Quainton', '+84 879 119 2314', 'xquainton8@reverbnation.com'),
(10, 6, 'Tagchat', '32936 8th Pass', '+86 337 854 0532', 'Brett', 'Faustin', '+64 123 303 9276', 'bfaustin9@home.pl'),
(11, 7, 'Quire', '3 Twin Pines Parkway', '+33 945 225 7587', 'Haywood', 'Yousef', '+62 942 675 7972', 'hyousefa@fotki.com'),
(12, 2, 'Wordtune', '84 Spenser Road', '+63 422 963 4153', 'Robb', 'Shand', '+30 322 735 2435', 'rshandb@people.com.cn'),
(13, 10, 'Jabbersphere', '87 Mcguire Center', '+86 630 497 6823', 'Leesa', 'Minchenton', '+62 910 286 5448', 'lminchentonc@unicef.org'),
(14, 1, 'Edgetag', '8297 Namekagon Junction', '+86 542 399 9574', 'Tammy', 'Eborall', '+86 470 412 9374', 'teboralld@businesswire.com'),
(15, 2, 'Ntag', '75 Norway Maple Terrace', '+86 924 965 8151', 'Felice', 'Gullivent', '+420 428 811 0618', 'fgullivente@admin.ch'),
(16, 2, 'Kare', '51298 Thackeray Lane', '+86 525 535 1096', 'Charin', 'Broodes', '+1 202 300 5730', 'cbroodesf@nytimes.com'),
(17, 7, 'Rhycero', '60 Pierstorff Terrace', '+216 606 219 2186', 'Sarita', 'Powrie', '+33 224 848 1752', 'spowrieg@gov.uk'),
(18, 9, 'Skilith', '60 Weeping Birch Way', '+30 819 868 8948', 'Bellina', 'Morphew', '+86 500 100 5283', 'bmorphewh@google.cn'),
(19, 8, 'Feednation', '654 Sutherland Court', '+62 105 894 2481', 'Mei', 'Mariolle', '+216 276 360 1931', 'mmariollei@friendfeed.com'),
(20, 8, 'Meedoo', '88854 Portage Circle', '+86 345 333 0933', 'Doralia', 'Lippi', '+98 608 223 4115', 'dlippij@xrea.com');

-- --------------------------------------------------------

--
-- Table structure for table `tiekejas`
--

CREATE TABLE `tiekejas` (
  `id_TIEKEJAS` int(11) NOT NULL,
  `Pavadinimas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Telefono_numeris` varchar(255) COLLATE utf8_lithuanian_ci DEFAULT NULL,
  `Adresas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Pastas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Vadovo_vardas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Vadovo_pavarde` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Vadoro_telefono_numeris` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL,
  `Vadovo_pastas` varchar(255) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `tiekejas`
--

INSERT INTO `tiekejas` (`id_TIEKEJAS`, `Pavadinimas`, `Telefono_numeris`, `Adresas`, `Pastas`, `Vadovo_vardas`, `Vadovo_pavarde`, `Vadoro_telefono_numeris`, `Vadovo_pastas`) VALUES
(1, 'Jazzy', '+358 279 794 8691', '48941 Jay Junction', 'kgotliffe0@wired.com', 'Keefe', 'Gotliffe', '+51 857 963 3396', 'kgotliffe0@mozilla.com'),
(2, 'Wordify', '+976 418 733 7989', '9208 Vahlen Alley', 'bguyers1@globo.com', 'Brnaba', 'Guyers', '+86 924 306 3583', 'bguyers1@phoca.cz'),
(3, 'Kimia', '+81 556 117 6756', '1 Jay Road', 'cticksall2@unicef.org', 'Catherin', 'Ticksall', '+55 378 489 7962', 'cticksall2@nsw.gov.au'),
(4, 'Edgeblab', '+98 513 265 2158', '94 Northview Street', 'msoares3@delicious.com', 'Mercie', 'Soares', '+7 835 281 3676', 'msoares3@acquirethisname.com'),
(5, 'Wikizz', '+7 764 155 6213', '04 Sunfield Parkway', 'abreheny4@ifeng.com', 'Aime', 'Breheny', '+355 274 203 9153', 'abreheny4@123-reg.co.uk'),
(6, 'Eare', '+33 847 861 5951', '08627 Lighthouse Bay Alley', 'dgillespie5@alexa.com', 'Darci', 'Gillespie', '+977 955 875 7814', 'dgillespie5@quantcast.com'),
(7, 'Kimia', '+994 841 973 4864', '603 Darwin Alley', 'rmackerness6@reuters.com', 'Reider', 'Mackerness', '+221 809 338 4916', 'rmackerness6@pcworld.com'),
(8, 'Tazzy', '+86 519 474 9582', '4020 Huxley Point', 'glack7@cisco.com', 'Gabbey', 'Lack', '+502 753 382 6231', 'glack7@joomla.org'),
(9, 'Wikido', '+86 752 644 6486', '65 Caliangt Way', 'ztrask8@icq.com', 'Zsa zsa', 'Trask', '+66 892 143 5419', 'ztrask8@mail.ru'),
(10, 'Kazu', '+358 619 215 1006', '44328 Buell Avenue', 'jgebby9@shinystat.com', 'Joeann', 'Gebby', '+86 793 992 7069', 'jgebby9@ning.com'),
(11, 'Zoonder', '+51 759 441 6559', '16471 Declaration Way', 'gpettigreea@ifeng.com', 'Giordano', 'Pettigree', '+86 247 192 1611', 'gpettigreea@salon.com'),
(12, 'Flipstorm', '+81 467 470 2295', '22244 Summerview Center', 'scheneryb@rakuten.co.jp', 'Sissy', 'Chenery', '+33 217 779 3394', 'scheneryb@who.int'),
(13, 'Mycat', '+998 557 715 1611', '588 Clyde Gallagher Court', 'wraubenheimersc@hhs.gov', 'Way', 'Raubenheimers', '+509 220 837 1138', 'wraubenheimersc@reference.com'),
(14, 'Eayo', '+30 335 959 2981', '96 Oneill Street', 'gdiruggerod@i2i.jp', 'Goldia', 'Di Ruggero', '+234 461 145 5191', 'gdiruggerod@goo.ne.jp'),
(15, 'Livetube', '+385 826 594 8046', '05070 Hoffman Lane', 'tmurisone@fastcompany.com', 'Tris', 'Murison', '+62 914 935 8482', 'tmurisone@columbia.edu'),
(16, 'Wikibox', '+86 252 993 2658', '128 Maryland Junction', 'cmeersf@hhs.gov', 'Cortie', 'Meers', '+964 443 853 1211', 'cmeersf@dagondesign.com'),
(17, 'Fivespan', '+62 738 554 9571', '86915 Fairview Circle', 'tmingerg@pen.io', 'Tuck', 'Minger', '+7 603 368 2685', 'tmingerg@deliciousdays.com'),
(18, 'Livefish', '+1 602 675 3507', '86971 Oakridge Junction', 'tnoonh@bigcartel.com', 'Tomasine', 'Noon', '+351 190 880 9427', 'tnoonh@msu.edu'),
(19, 'Agimba', '+27 142 732 4575', '73002 Stephen Court', 'cbalami@youtu.be', 'Charmain', 'Balam', '+234 756 108 8682', 'cbalami@4shared.com'),
(20, 'Cogibox', '+86 523 786 9551', '388 Lukken Drive', 'kbrasenerj@noaa.gov', 'Kelcy', 'Brasener', '+86 651 234 1737', 'kbrasenerj@virginia.edu');

-- --------------------------------------------------------

--
-- Table structure for table `uzkanda`
--

CREATE TABLE `uzkanda` (
  `id_UZKANDA` int(11) NOT NULL,
  `name` char(11) COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `uzkanda`
--

INSERT INTO `uzkanda` (`id_UZKANDA`, `name`) VALUES
(1, 'Duona'),
(2, 'Batonas'),
(3, 'Kepta duona'),
(4, 'Ceburekas'),
(5, 'Krosantas');

-- --------------------------------------------------------

--
-- Table structure for table `uzsakymas`
--

CREATE TABLE `uzsakymas` (
  `id_UZSAKYMAS` int(11) NOT NULL,
  `fk_RESTORANASid_RESTORANAS` int(11) NOT NULL,
  `fk_KLIENTASid_KLIENTAS` int(11) NOT NULL,
  `fk_KURJERISid_KURJERIS` int(11) NOT NULL,
  `Patiekalas` int(11) DEFAULT NULL,
  `Gerimas` int(11) DEFAULT NULL,
  `Sausa_uzkanda` int(11) DEFAULT NULL,
  `Padazas` int(11) DEFAULT NULL,
  `Specialus_prasymas` varchar(255) COLLATE utf8_lithuanian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `uzsakymas`
--

INSERT INTO `uzsakymas` (`id_UZSAKYMAS`, `fk_RESTORANASid_RESTORANAS`, `fk_KLIENTASid_KLIENTAS`, `fk_KURJERISid_KURJERIS`, `Patiekalas`, `Gerimas`, `Sausa_uzkanda`, `Padazas`, `Specialus_prasymas`) VALUES
(1, 1, 1, 1, 5, 2, 5, 5, NULL),
(2, 2, 2, 2, 8, 5, 1, 3, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.'),
(3, 3, 3, 3, 10, 1, 5, 5, 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.'),
(4, 4, 4, 4, 6, 3, 5, 5, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.'),
(5, 5, 5, 5, 10, 5, 5, 3, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.'),
(6, 6, 6, 6, 7, 4, 5, 3, 'Integer ac leo.'),
(7, 7, 7, 7, 9, 4, 5, 4, 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'),
(8, 8, 8, 8, 6, 4, 4, 4, NULL),
(9, 9, 9, 9, 3, 6, 4, 5, 'Proin eu mi. Nulla ac enim.'),
(10, 10, 10, 10, 10, 3, 2, 5, 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.'),
(11, 11, 11, 1, 2, 5, 4, 3, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis'),
(12, 12, 12, 2, 4, 5, 5, 2, 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.'),
(13, 13, 13, 3, 6, 1, 5, 2, 'Morbi non quam nec dui luctus rutrum. Nulla tellus.'),
(14, 14, 14, 4, 2, 3, 1, 3, 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.'),
(15, 15, 15, 5, 7, 2, 3, 4, 'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.'),
(16, 16, 16, 6, 6, 5, 3, 4, NULL),
(17, 17, 17, 7, 9, 1, 3, 5, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.'),
(18, 18, 18, 8, 9, 4, 1, 1, 'Aliquam erat volutpat. In congue. Etiam justo.'),
(19, 19, 19, 9, 10, 3, 2, 5, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.'),
(20, 20, 20, 2, 1, 5, 5, 1, 'Nullam sit amet turpis elementum ligula vehicula consequat.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atsiliepimas`
--
ALTER TABLE `atsiliepimas`
  ADD PRIMARY KEY (`id_ATSILIEPIMAS`),
  ADD KEY `Ivertinimas` (`Ivertinimas`),
  ADD KEY `Gauna` (`fk_RESTORANASid_RESTORANAS`),
  ADD KEY `Teikia` (`fk_KLIENTASid_KLIENTAS`);

--
-- Indexes for table `darbuotojas`
--
ALTER TABLE `darbuotojas`
  ADD PRIMARY KEY (`id_DARBUOTOJAS`),
  ADD KEY `Yra` (`fk_KURJERISid_KURJERIS`),
  ADD KEY `Idarbines` (`fk_RESTORANASid_RESTORANAS`);

--
-- Indexes for table `fk_teikia`
--
ALTER TABLE `fk_teikia`
  ADD PRIMARY KEY (`fk_TIEKEJASid_TIEKEJAS`,`fk_RESTORANASid_RESTORANAS`),
  ADD KEY `fk_duoda` (`fk_RESTORANASid_RESTORANAS`);

--
-- Indexes for table `gerimas`
--
ALTER TABLE `gerimas`
  ADD PRIMARY KEY (`id_GERIMAS`);

--
-- Indexes for table `imone`
--
ALTER TABLE `imone`
  ADD PRIMARY KEY (`id_IMONE`);

--
-- Indexes for table `ivertinimas`
--
ALTER TABLE `ivertinimas`
  ADD PRIMARY KEY (`id_IVERTINIMAS`);

--
-- Indexes for table `klientas`
--
ALTER TABLE `klientas`
  ADD PRIMARY KEY (`id_KLIENTAS`);

--
-- Indexes for table `kurjeris`
--
ALTER TABLE `kurjeris`
  ADD PRIMARY KEY (`id_KURJERIS`);

--
-- Indexes for table `padazas`
--
ALTER TABLE `padazas`
  ADD PRIMARY KEY (`id_PADAZAS`);

--
-- Indexes for table `patiekalas`
--
ALTER TABLE `patiekalas`
  ADD PRIMARY KEY (`id_PATIEKALAS`);

--
-- Indexes for table `restoranas`
--
ALTER TABLE `restoranas`
  ADD PRIMARY KEY (`id_RESTORANAS`),
  ADD KEY `Priklauso` (`fk_IMONEid_IMONE`);

--
-- Indexes for table `tiekejas`
--
ALTER TABLE `tiekejas`
  ADD PRIMARY KEY (`id_TIEKEJAS`);

--
-- Indexes for table `uzkanda`
--
ALTER TABLE `uzkanda`
  ADD PRIMARY KEY (`id_UZKANDA`);

--
-- Indexes for table `uzsakymas`
--
ALTER TABLE `uzsakymas`
  ADD PRIMARY KEY (`id_UZSAKYMAS`),
  ADD KEY `Patiekalas` (`Patiekalas`),
  ADD KEY `Gerimas` (`Gerimas`),
  ADD KEY `Sausa_uzkanda` (`Sausa_uzkanda`),
  ADD KEY `Padazas` (`Padazas`),
  ADD KEY `Turi` (`fk_KLIENTASid_KLIENTAS`),
  ADD KEY `fk_atlieka` (`fk_KURJERISid_KURJERIS`),
  ADD KEY `fk_gauna` (`fk_RESTORANASid_RESTORANAS`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atsiliepimas`
--
ALTER TABLE `atsiliepimas`
  MODIFY `id_ATSILIEPIMAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `darbuotojas`
--
ALTER TABLE `darbuotojas`
  MODIFY `id_DARBUOTOJAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `gerimas`
--
ALTER TABLE `gerimas`
  MODIFY `id_GERIMAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `imone`
--
ALTER TABLE `imone`
  MODIFY `id_IMONE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `ivertinimas`
--
ALTER TABLE `ivertinimas`
  MODIFY `id_IVERTINIMAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `klientas`
--
ALTER TABLE `klientas`
  MODIFY `id_KLIENTAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `kurjeris`
--
ALTER TABLE `kurjeris`
  MODIFY `id_KURJERIS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `padazas`
--
ALTER TABLE `padazas`
  MODIFY `id_PADAZAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `patiekalas`
--
ALTER TABLE `patiekalas`
  MODIFY `id_PATIEKALAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `restoranas`
--
ALTER TABLE `restoranas`
  MODIFY `id_RESTORANAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tiekejas`
--
ALTER TABLE `tiekejas`
  MODIFY `id_TIEKEJAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `uzkanda`
--
ALTER TABLE `uzkanda`
  MODIFY `id_UZKANDA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `uzsakymas`
--
ALTER TABLE `uzsakymas`
  MODIFY `id_UZSAKYMAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `atsiliepimas`
--
ALTER TABLE `atsiliepimas`
  ADD CONSTRAINT `Gauna` FOREIGN KEY (`fk_RESTORANASid_RESTORANAS`) REFERENCES `restoranas` (`id_RESTORANAS`),
  ADD CONSTRAINT `Teikia` FOREIGN KEY (`fk_KLIENTASid_KLIENTAS`) REFERENCES `klientas` (`id_KLIENTAS`),
  ADD CONSTRAINT `atsiliepimas_ibfk_1` FOREIGN KEY (`Ivertinimas`) REFERENCES `ivertinimas` (`id_IVERTINIMAS`);

--
-- Constraints for table `darbuotojas`
--
ALTER TABLE `darbuotojas`
  ADD CONSTRAINT `Idarbines` FOREIGN KEY (`fk_RESTORANASid_RESTORANAS`) REFERENCES `restoranas` (`id_RESTORANAS`),
  ADD CONSTRAINT `Yra` FOREIGN KEY (`fk_KURJERISid_KURJERIS`) REFERENCES `kurjeris` (`id_KURJERIS`);

--
-- Constraints for table `fk_teikia`
--
ALTER TABLE `fk_teikia`
  ADD CONSTRAINT `fk_duoda` FOREIGN KEY (`fk_RESTORANASid_RESTORANAS`) REFERENCES `restoranas` (`id_RESTORANAS`),
  ADD CONSTRAINT `fk_teikia` FOREIGN KEY (`fk_TIEKEJASid_TIEKEJAS`) REFERENCES `tiekejas` (`id_TIEKEJAS`);

--
-- Constraints for table `restoranas`
--
ALTER TABLE `restoranas`
  ADD CONSTRAINT `Priklauso` FOREIGN KEY (`fk_IMONEid_IMONE`) REFERENCES `imone` (`id_IMONE`);

--
-- Constraints for table `uzsakymas`
--
ALTER TABLE `uzsakymas`
  ADD CONSTRAINT `Turi` FOREIGN KEY (`fk_KLIENTASid_KLIENTAS`) REFERENCES `klientas` (`id_KLIENTAS`),
  ADD CONSTRAINT `fk_atlieka` FOREIGN KEY (`fk_KURJERISid_KURJERIS`) REFERENCES `kurjeris` (`id_KURJERIS`),
  ADD CONSTRAINT `fk_gauna` FOREIGN KEY (`fk_RESTORANASid_RESTORANAS`) REFERENCES `restoranas` (`id_RESTORANAS`),
  ADD CONSTRAINT `uzsakymas_ibfk_1` FOREIGN KEY (`Patiekalas`) REFERENCES `patiekalas` (`id_PATIEKALAS`),
  ADD CONSTRAINT `uzsakymas_ibfk_2` FOREIGN KEY (`Gerimas`) REFERENCES `gerimas` (`id_GERIMAS`),
  ADD CONSTRAINT `uzsakymas_ibfk_3` FOREIGN KEY (`Sausa_uzkanda`) REFERENCES `uzkanda` (`id_UZKANDA`),
  ADD CONSTRAINT `uzsakymas_ibfk_4` FOREIGN KEY (`Padazas`) REFERENCES `padazas` (`id_PADAZAS`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
