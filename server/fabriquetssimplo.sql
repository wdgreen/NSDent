-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql458.sql004
-- Généré le :  mer. 24 oct. 2018 à 11:12
-- Version du serveur :  5.6.39-log
-- Version de PHP :  7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `fabriquetssimplo`
--

-- --------------------------------------------------------

--
-- Structure de la table `cabinet`
--

CREATE TABLE `cabinet` (
  `id_cabinet` int(11) NOT NULL,
  `nom_cabinet` varchar(255) NOT NULL,
  `code_cabinet` varchar(5) NOT NULL,
  `horaire_cabinet` text NOT NULL,
  `description_cabinet` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `date_creation_cabinet` date NOT NULL,
  `date_cloture` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cabinet`
--

INSERT INTO `cabinet` (`id_cabinet`, `nom_cabinet`, `code_cabinet`, `horaire_cabinet`, `description_cabinet`, `logo`, `date_creation_cabinet`, `date_cloture`) VALUES
(1, 'FOURQUET', 'F14G1', 'lundi 10h - 19h', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing', 'Cabinet de Protheses maxillo-faciale', '0000-00-00', '0000-00-00'),
(2, 'BAIXAS', 'F1QG1', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet Prothèsiste', '0000-00-00', '0000-00-00'),
(3, 'CORTIE', 'Q14G1', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet Parodontologie', '0000-00-00', '0000-00-00'),
(4, 'SOL', 'FX4G1', 'lundi 10h - 19h', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore m', 'Cabinet orthopédie dento-faciale', '0000-00-00', '0000-00-00'),
(5, 'NOELL', 'X14G1', 'lundi 10h - 19h', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore m', 'Cabinet hysto-embryologique', '0000-00-00', '0000-00-00'),
(6, 'RIERE', 'F14X1', 'lundi 10h - 19h', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore m', 'Cabinet Parodontologie', '0000-00-00', '0000-00-00'),
(7, 'BAUX', 'F1ZE1', 'lundi 10h - 19h', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore m', 'Cabinet chirurgie dentaire', '0000-00-00', '0000-00-00'),
(8, 'VICENS', 'FD4G1', 'lundi 10h - 19h', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore m', 'Cabinet Orthopédie dento-faciale', '0000-00-00', '0000-00-00'),
(9, 'BENET', 'F14FG', 'lundi 10h - 19h', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing', 'Cabinet chirurgie dentaire', '0000-00-00', '0000-00-00'),
(10, 'COLOMINES', 'F44G1', 'lundi 10h - 19h', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing', 'Cabinet Orthopédie dento-faciale', '0000-00-00', '0000-00-00'),
(11, 'MALET', 'F1457', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet de Prothèse scellée', '0000-00-00', '0000-00-00'),
(12, 'CONILL', 'F1DE1', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet de chirurgie buccale', '0000-00-00', '0000-00-00'),
(13, 'PARAIRE', 'F1CV1', 'lundi 10h - 19h', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore m', 'Cabinet de Prothèse scellée', '0000-00-00', '0000-00-00'),
(14, 'RAYNAUD', 'F1FR1', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet Odontologie légale', '0000-00-00', '0000-00-00'),
(15, 'ARNAUD', 'F45G1', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet des matériaux en art dentaire', '0000-00-00', '0000-00-00'),
(16, 'ASTRUC', 'F1971', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet spécialiste anatomo-physiologique', '0000-00-00', '0000-00-00'),
(17, 'CAZES', 'F14S4', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet Odontologie chirurgicale', '0000-00-00', '0000-00-00'),
(18, 'ARNAUDIES', 'FSZ11', 'lundi 10h - 19h', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 'Cabinet spécialiste anatomo-physiologique', '0000-00-00', '0000-00-00'),
(19, 'MARILL', 'F1458', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet Parodontologie', '0000-00-00', '0000-00-00'),
(20, 'BASSOU', 'F1436', 'lundi 10h - 19h', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus quis ', 'Cabinet de Prothèses maxillo-faciale', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id_contact` int(11) NOT NULL,
  `telephone_domicile` varchar(10) DEFAULT NULL,
  `telephone_mobile` varchar(10) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `ligne1` varchar(55) NOT NULL,
  `ligne2` varchar(55) DEFAULT NULL,
  `code_postal` varchar(5) NOT NULL,
  `ville` varchar(55) NOT NULL,
  `site_web` varchar(255) DEFAULT NULL,
  `date_creation_contact` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id_contact`, `telephone_domicile`, `telephone_mobile`, `mail`, `ligne1`, `ligne2`, `code_postal`, `ville`, `site_web`, `date_creation_contact`) VALUES
(1, '0304946188', '0653090302', '-@Orange.fr', '90 RUE DE MAUDES', '-', '33115', 'Pau', 'orthodentiste@ortho.com', '2005-05-18'),
(2, '0531413380', '0765484513', '-@Tiscali.fr', '108 ALLEE SOPHIE GERMAIN', '-', '59710', 'Pau', 'orthodentiste@ortho.com', '2008-03-28'),
(3, '0216349468', '0663489646', '-@Outlook.com', '186 RUE RENE REAUMUR', '-', '49320', 'Pau', 'orthodentiste@ortho.com', '2010-02-18'),
(4, '0586802483', '0614409213', '-@Tiscali.fr', '198 RUE JEAN MARAT', '-', '35120', 'Pau', 'orthodentiste@ortho.com', '2001-01-28'),
(5, '0442507165', '0719191019', '-@Orange.fr', '248 RUE LOUIS BOURDALOUE', '-', '46100', 'Pau', 'orthodentiste@ortho.com', '2007-11-28'),
(6, '0302562572', '0702501926', '-@Voila.fr', '146 ALLEE DES PRES PACAUX', '-', '59143', 'Pau', 'orthodentiste@ortho.com', '2006-05-06'),
(7, '0318070152', '0701533119', '-@Yahoo.com', '225 ROUTE DE LA COURANCE', '-', '78490', 'Pau', 'orthodentiste@ortho.com', '2006-12-06'),
(8, '0578602577', '0642276628', '-@Voila.fr', '193 ALLEE DES SALICAIRES', '-', '32360', 'Pau', 'orthodentiste@ortho.com', '2006-10-20'),
(9, '0178328181', '0681114416', '-@Netcourrier.com', '249 IMPASSE DE L HOPITAL', '-', '62180', 'Pau', 'orthodentiste@ortho.com', '2013-10-10'),
(10, '0561602989', '0799900226', '-@Yahoo.com', '164 ALLEE ERNEST HEMINGWAY', '-', '42300', 'Pau', 'orthodentiste@ortho.com', '2008-11-21'),
(11, '0419452309', '0684412517', '-@Outlook.com', '236 ALLEE DES PETRELS', '-', '88140', 'Pau', 'orthodentiste@ortho.com', '0000-00-00'),
(12, '0337255741', '0730868906', '-@numericable.fr', '237 ALLEE DE LA MER DE CORAIL', '-', '65250', 'Pau', 'orthodentiste@ortho.com', '2003-12-21'),
(13, '0581081315', '0618251645', '-@Wanadoo.fr', '85 RUE CLEMENT ADER', '-', '39570', 'Pau', 'orthodentiste@ortho.com', '2004-05-17'),
(14, '0358384620', '0625199778', '-@sfr.fr', '108 PLACE FELIX EBOUE', '-', '7460', 'Pau', 'orthodentiste@ortho.com', '2005-09-15'),
(15, '0464266458', '0767121996', '-@numericable.fr', '247 SQUARE JEAN PIGNIER', '-', '38070', 'Pau', 'orthodentiste@ortho.com', '2012-10-24'),
(16, '0540525891', '0785762334', '-@Yahoo.com', '72 ALLEE ANC RUE DE L\'ABRI FAMILIAL', '-', '81500', 'Pau', 'orthodentiste@ortho.com', '2006-10-03'),
(17, '0452588063', '0644654497', '-@sfr.fr', '207 RUE FERNAND NOUVION', '-', '25300', 'Pau', 'orthodentiste@ortho.com', '2007-09-30'),
(18, '0494666170', '0629796596', '-@Yahoo.com', '134 RUE JULES GUESDE', '-', '58350', 'Pau', 'orthodentiste@ortho.com', '2011-03-09'),
(19, '0406183225', '0639014193', '-@Hotmail.com', '109 PARKING DES FRERES PEREIRE', '-', '2300', 'Pau', 'orthodentiste@ortho.com', '2003-01-21'),
(20, '0150358761', '0615410516', '-@Netcourrier.com', '20 RUE DE L ILE DU BIGNON', '-', '74100', 'Pau', 'orthodentiste@ortho.com', '2017-03-24'),
(21, '0148193279', '0674270308', '-@numericable.fr', '0 RUE DE L\'OREE DU VAL', '-', '88150', 'Pau', 'orthodentiste@ortho.com', '2005-08-19'),
(22, '0474190989', '0797898096', '-@Tiscali.fr', '150 RUE FRANCOIS ADRIEN BOIELDIEU', '-', '76690', 'Pau', 'orthodentiste@ortho.com', '2013-12-05'),
(23, '0446653595', '0697708331', '-@Hotmail.com', '51 ALLEE ROBERT LELANT', '-', '64110', 'Pau', 'orthodentiste@ortho.com', '2000-04-05'),
(24, '0246224894', '0620499068', '-@Laposte.fr', '26 ALLEE SAMUEL BECKETT', '-', '31860', 'Pau', 'orthodentiste@ortho.com', '2000-10-18'),
(25, '0354096623', '0786875369', '-@Gmail.com', '20 QUAI DES CHARBONNIERS', '-', '11570', 'Pau', 'orthodentiste@ortho.com', '2010-11-15'),
(26, '0119621944', '0653106745', '-@Sympatico.ca', '75 RUE ANNIE GIRARDOT', '-', '41100', 'Pau', 'orthodentiste@ortho.com', '2009-05-25'),
(27, '0303724911', '0632762705', '-@numericable.fr', '127 SQUARE DE LA MUTUALITE', '-', '69550', 'Pau', 'orthodentiste@ortho.com', '2006-06-26'),
(28, '0341775517', '0779039120', '-@Gmail.com', '75 PARC DES NOMADES', '-', '8110', 'Pau', 'orthodentiste@ortho.com', '2013-04-15'),
(29, '0210572215', '0758248674', '-@Sympatico.ca', '122 RUE DOCTEUR XAVIER BICHAT', '-', '64220', 'Pau', 'orthodentiste@ortho.com', '2008-08-31'),
(30, '0394656809', '0678224902', '-@Hotmail.com', '13 ALLEE CAMILLE PISSARRO', '-', '38260', 'Pau', 'orthodentiste@ortho.com', '2010-07-09'),
(31, '0551658340', '0733078435', '-@Hotmail.com', '100 RUE RENE HALLUARD', '-', '29120', 'Pau', 'orthodentiste@ortho.com', '2005-02-01'),
(32, '0373007056', '0758442580', '-@numericable.fr', '220 RUE FERNAND PELLOUTIER', '-', '62161', 'Pau', 'orthodentiste@ortho.com', '2016-02-01'),
(33, '0317364168', '0785216242', '-@Wanadoo.fr', '172 PLACE FRANCOIS MARCEAU', '-', '10210', 'Pau', 'orthodentiste@ortho.com', '2000-03-02'),
(34, '0110439333', '0671607208', '-@Gmail.com', '42 CHEMIN DES CAVALIERS', '-', '7230', 'Pau', 'orthodentiste@ortho.com', '2018-09-23'),
(35, '0197507805', '0747199358', '-@Voila.fr', '221 PLACE MARIA DERAISMES', '-', '64490', 'Pau', 'orthodentiste@ortho.com', '2002-09-09'),
(36, '0121191199', '0655976897', '-@Sympatico.ca', '249 ROUTE DU BAS CUNEIX', '-', '60320', 'Pau', 'orthodentiste@ortho.com', '2000-11-08'),
(37, '0207978045', '0740332441', '-@Outlook.com', '38 RUE GEORGES BIZET', '-', '59149', 'Pau', 'orthodentiste@ortho.com', '2012-09-27'),
(38, '0593799863', '0742758456', '-@Outlook.com', '230 CHEMIN DE LA VILLES CRENEAU', '-', '97114', 'orthodentiste@ortho.com', 'Pau', '2009-02-23'),
(39, '0103502050', '0767477646', '-@numericable.fr', '220 ROUTE DE SAINT MARC', '-', '37220', 'Pau', 'orthodentiste@ortho.com', '2005-08-15'),
(40, '0370923572', '0676088592', '-@numericable.fr', '138 RUE DE LA PETITE PATURE', '-', '29260', 'Pau', 'orthodentiste@ortho.com', '2011-12-12'),
(41, '0153416825', '0614021000', '-@Orange.fr', '104 ALLEE DE LA PEPINIERE', '-', '35300', 'Pau', 'orthodentiste@ortho.com', '2013-07-20'),
(42, '0239784661', '0791447691', '-@Sympatico.ca', '177 RUE MARC SANGNIER', '-', '62310', 'Pau', 'orthodentiste@ortho.com', '2001-03-20'),
(43, '0498083986', '0690624285', '-@Netcourrier.com', '175 ROND-POINT DE LA CROIX AMISSE', '-', '76850', 'Pau', 'orthodentiste@ortho.com', '2011-05-27'),
(44, '0364417981', '0747609750', '-@Verizon.net', '126 RUE AUGUSTE BRIZEUX', '-', '50480', 'Pau', 'orthodentiste@ortho.com', '2012-03-24'),
(45, '0455456964', '0656811075', '-@Netcourrier.com', '101 ROUTE DE L ETANG', '-', '8250', 'Pau', 'orthodentiste@ortho.com', '2003-11-17'),
(46, '0222535073', '0620412606', '-@Orange.fr', '30 RUE JEAN GUTENBERG', '-', '14130', 'Pau', 'orthodentiste@ortho.com', '2013-05-22'),
(47, '0481873799', '0788430349', '-@numericable.fr', '69 RUE AUGUSTE PICCARD', '-', '64120', 'Pau', 'orthodentiste@ortho.com', '2017-11-21'),
(48, '0266107111', '0639876553', '-@Outlook.com', '137 RUE LOUIS BREGUET', '-', '84400', 'Pau', 'orthodentiste@ortho.com', '2005-03-22'),
(49, '0463253033', '0647057237', '-@Netcourrier.com', '65 ROND-POINT EDISON', '-', '42320', 'Pau', 'orthodentiste@ortho.com', '2004-06-17'),
(50, '0516861488', '0663207919', '-@numericable.fr', '15 SQUARE PAUL MALNOE', '-', '89660', 'Pau', 'orthodentiste@ortho.com', '2017-06-02'),
(51, '0287436356', '0662958949', '-@Sympatico.ca', '226 CHEMIN DE L ILE DES MERS', '-', '59178', 'Pau', 'orthodentiste@ortho.com', '2010-03-21'),
(52, '0381297272', '0606068463', '-@Gmail.com', '176 BOULEVARD DE L UNIVERSITE', '-', '64370', 'Pau', 'orthodentiste@ortho.com', '2005-12-28'),
(53, '0471362992', '0617232285', '-@Laposte.fr', '232 ROUTE DE TREVELAN', '-', '46150', 'Pau', 'orthodentiste@ortho.com', '2002-11-06'),
(54, '0569904890', '0639054202', '-@Hotmail.com', '203 ROUTE DE SAINT ANDRE DES EAUX', '-', '11270', 'Pau', 'orthodentiste@ortho.com', '2010-04-19'),
(55, '0585823337', '0686705103', '-@Sympatico.ca', '171 AVENUE DU PERTUIS', '-', '24410', 'Pau', 'orthodentiste@ortho.com', '2006-08-16'),
(56, '0582773029', '0630236884', '-@Sympatico.ca', '140 PLACE JACQUES TATI', '-', '88440', 'Pau', 'orthodentiste@ortho.com', '2008-02-14'),
(57, '0531464178', '0718923018', '-@numericable.fr', '47 RUE DES COMMANDIERES', '-', '72650', 'Pau', 'orthodentiste@ortho.com', '2011-04-02'),
(58, '0204048644', '0733634483', '-@Wanadoo.fr', '131 CHEMIN DU BOIS JOALLAND', '-', '93460', 'Pau', 'orthodentiste@ortho.com', '2000-01-18'),
(59, '0591739784', '0655959678', '-@Tiscali.fr', '207 RUE ANDRE LE NOTRE', '-', '22440', 'Pau', 'orthodentiste@ortho.com', '2011-12-16'),
(60, '0471613367', '0733215298', '-@Tiscali.fr', '168 ALLEE JEAN PIERRE MELVILLE', '-', '21380', 'orthodentiste@ortho.com', 'Pau', '2008-08-04'),
(61, '0524127114', '0623854870', '-@Orange.fr', '13 CHEMIN DES PIETINS', '-', '54110', 'Pau', 'orthodentiste@ortho.com', '2002-05-14'),
(62, '0170059314', '0778855042', '-@Orange.fr', '194 RUE FERNAND DE MAGELLAN', '-', '62111', 'orthodentiste@ortho.com', 'Pau', '2002-09-13'),
(63, '0119339592', '0616106909', '-@Netcourrier.com', '83 RUE DU TRAICT', '-', '54650', 'Pau', 'orthodentiste@ortho.com', '2017-04-19'),
(64, '0160553405', '0691870193', '-@Laposte.fr', '84 CHEMIN DE PORT CHARLOTTE', '-', '16120', 'orthodentiste@ortho.com', 'Pau', '2008-03-11'),
(65, '0482188562', '0705484717', '-@Orange.fr', '207 PLACE FRANCOIS MARCEAU', '-', '35630', 'Pau', 'orthodentiste@ortho.com', '2014-10-20'),
(66, '0404172415', '0769236772', '-@numericable.fr', '164 AVENUE LEO LAGRANGE', '-', '88100', 'Pau', 'orthodentiste@ortho.com', '2015-04-14'),
(67, '0245713553', '0704503964', '-@Outlook.com', '166 RUE ALFRED KASTLER', '-', '16290', 'Pau', 'orthodentiste@ortho.com', '2014-11-02'),
(68, '0495828169', '0690999539', '-@Sympatico.ca', '145 RUE AUGUSTE COMTE', '-', '72550', 'Pau', 'orthodentiste@ortho.com', '2003-07-27'),
(69, '0191554214', '0606245679', '-@Hotmail.com', '46 RUE DES VENETES', '-', '73110', 'Pau', 'orthodentiste@ortho.com', '2016-07-02'),
(70, '0198074983', '0638499309', '-@Sympatico.ca', '231 ALLEE DES HORTENSIAS', '-', '2340', 'Pau', 'orthodentiste@ortho.com', '2004-07-17'),
(71, '0231564523', '0716728818', '-@Laposte.fr', '169 CHEMIN DE L ILE DU MOULIN', '-', '21800', 'Pau', 'orthodentiste@ortho.com', '2012-08-01'),
(72, '0457707937', '0791614650', '-@Sympatico.ca', '212 CHEMIN DE COULVE', '-', '24270', 'Pau', 'orthodentiste@ortho.com', '2004-07-27'),
(73, '0320547014', '0659268211', '-@Wanadoo.fr', '78 ALLEE JOHN COLTRANE', '-', '57260', 'Pau', 'orthodentiste@ortho.com', '2017-06-29'),
(74, '0420533734', '0746300768', '-@Laposte.fr', '214 QUAI DE LA VIEILLE ENTREE', '-', '70200', 'orthodentiste@ortho.com', 'Pau', '2011-06-06'),
(75, '0157904667', '0769034433', '-@Netcourrier.com', '194 IMPASSE D ANJOU', '-', '67710', 'Pau', 'orthodentiste@ortho.com', '2011-05-10'),
(76, '0550489108', '0748806078', '-@Tiscali.fr', '3 RUE DES BOULEAUX', '-', '32120', 'Pau', 'orthodentiste@ortho.com', '2016-01-31'),
(77, '0465270012', '0786667344', '-@Hotmail.com', '23 PLACE DU 18 JUIN 1940', '-', '12170', 'orthodentiste@ortho.com', 'Pau', '2004-06-22'),
(78, '0587805282', '0756996345', '-@Wanadoo.fr', '164 RUE ARSENE NOUTEAU', '-', '35700', 'Pau', 'orthodentiste@ortho.com', '2000-01-13'),
(79, '0481746210', '0605474231', '-@Netcourrier.com', '182 RUE DOCTEUR XAVIER BICHAT', '-', '79460', 'Pau', 'orthodentiste@ortho.com', '2011-03-19'),
(80, '0178702718', '0629031129', '-@sfr.fr', '185 RUE EMILE OLLIVAUD', '-', '76440', 'Pau', 'orthodentiste@ortho.com', '2006-09-29'),
(81, '0171494194', '0744907857', '-@Voila.fr', '5 RUE JEAN BAPTISTE GREUZE', '-', '21330', 'Pau', 'orthodentiste@ortho.com', '2004-06-01'),
(82, '0502793224', '0717486025', '-@Laposte.fr', '18 AVENUE ALBERT DE MUN', '-', '51490', 'Pau', 'orthodentiste@ortho.com', '2006-07-13'),
(83, '0257928811', '0664358345', '-@Gmail.com', '150 PLACE DU DOLMEN', '-', '58140', 'Pau', 'orthodentiste@ortho.com', '2017-03-05'),
(84, '0574110139', '0674262472', '-@numericable.fr', '29 CENTRE CIAL DE KERLEDE', '-', '11270', 'Pau', 'orthodentiste@ortho.com', '2017-07-29'),
(85, '0599723522', '0778423216', '-@Orange.fr', '122 PLACE PARC DU MARCHE', '-', '8310', 'Pau', 'orthodentiste@ortho.com', '2017-04-17'),
(86, '0353747545', '0664820064', '-@Orange.fr', '162 SQUARE ALFRED PICHON', '-', '86290', 'Pau', 'orthodentiste@ortho.com', '2004-02-29'),
(87, '0449032997', '0759577366', '-@Wanadoo.fr', '200 ROND-POINT DE RETON', '-', '55100', 'Pau', 'orthodentiste@ortho.com', '2014-06-10'),
(88, '0399795325', '0650809860', '-@Outlook.com', '228 ALLEE DE SUFFREN', '-', '21250', 'Pau', 'orthodentiste@ortho.com', '2012-04-25'),
(89, '0427163718', '0761933841', '-@Yahoo.com', '162 ALLEE DE LA GALERNE', '-', '38114', 'Pau', 'orthodentiste@ortho.com', '2011-08-27'),
(90, '0222169395', '0731522994', '-@Tiscali.fr', '211 ALLEE JACQUES NECKER', '-', '37240', 'Pau', 'orthodentiste@ortho.com', '2006-03-27'),
(91, '0400548639', '0742978599', '-@Netcourrier.com', '221 ROUTE DE COSTEBELLE', '-', '88500', 'Pau', 'orthodentiste@ortho.com', '2007-09-21'),
(92, '0394149215', '0711283571', '-@Yahoo.com', '193 RUE JACQUES CARTIER', '-', '28210', 'Pau', 'orthodentiste@ortho.com', '2018-12-28'),
(93, '0179348207', '0627496091', '-@Hotmail.com', '236 ALLEE DES DAHLIAS', '-', '57670', 'Pau', 'orthodentiste@ortho.com', '2018-04-14'),
(94, '0580455893', '0790792550', '-@Netcourrier.com', '178 ROUTE DES LANDETTES', '-', '24400', 'orthodentiste@ortho.com', 'Pau', '2001-12-04'),
(95, '0434940479', '0644864452', '-@Outlook.com', '240 RUE DES AMANDIERS', '-', '20110', 'Pau', 'orthodentiste@ortho.com', '0000-00-00'),
(96, '0307537149', '0722677912', '-@Sympatico.ca', '47 RUE DE L ILE DU PE', '-', '14740', 'Pau', 'orthodentiste@ortho.com', '2004-08-06'),
(97, '0136093171', '0769262887', '-@Laposte.fr', '116 CHEMIN DES POULS HAUTS', '-', '61800', 'Pau', 'orthodentiste@ortho.com', '2009-03-28'),
(98, '0320923715', '0667808316', '-@Voila.fr', '204 AVENUE DE CHATONAY', '-', '63910', 'Pau', 'orthodentiste@ortho.com', '2010-09-02'),
(99, '0189684284', '0684635559', '-@Netcourrier.com', '197 ROUTE DES GRENOUILLERES', '-', '14340', 'Pau', 'orthodentiste@ortho.com', '2007-07-09'),
(100, '0363605702', '0639724326', '-@Outlook.com', '158 ALLEE ALICE NOVIAL', '-', '7200', 'Pau', 'orthodentiste@ortho.com', '2010-07-10');

-- --------------------------------------------------------

--
-- Structure de la table `jonction_cabinet_contact`
--

CREATE TABLE `jonction_cabinet_contact` (
  `id_jonction_cabinet_contact` int(11) NOT NULL,
  `fk_id_cabinet` int(11) NOT NULL,
  `fk_id_contact` int(11) NOT NULL,
  `date_creation_jonction_cabinet_contact` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `jonction_cabinet_contact`
--

INSERT INTO `jonction_cabinet_contact` (`id_jonction_cabinet_contact`, `fk_id_cabinet`, `fk_id_contact`, `date_creation_jonction_cabinet_contact`) VALUES
(1, 1, 20, '2018-08-02'),
(2, 2, 1, '2018-08-02'),
(3, 3, 2, '2018-08-02'),
(4, 4, 3, '2018-08-02'),
(5, 5, 4, '2018-08-02'),
(6, 6, 5, '2018-08-02'),
(7, 7, 6, '2018-08-02'),
(8, 8, 7, '2018-08-02'),
(9, 9, 8, '2018-08-02'),
(10, 10, 9, '2018-08-02'),
(11, 11, 10, '2018-08-02'),
(12, 12, 11, '2018-08-02'),
(13, 13, 12, '2018-08-02'),
(14, 14, 14, '2018-08-02'),
(15, 15, 15, '2018-08-02'),
(16, 16, 16, '2018-08-02'),
(17, 17, 17, '2018-08-02'),
(18, 18, 18, '2018-08-02'),
(19, 19, 19, '2018-08-02'),
(20, 20, 21, '2018-08-02');

-- --------------------------------------------------------

--
-- Structure de la table `jonction_cabinet_praticien`
--

CREATE TABLE `jonction_cabinet_praticien` (
  `id_jonction_cabinet_praticien` int(11) NOT NULL,
  `fk_id_cabinet` int(11) NOT NULL,
  `fk_id_praticien` int(11) NOT NULL,
  `date_creation_jonction_cabinet_praticien` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `jonction_cabinet_praticien`
--

INSERT INTO `jonction_cabinet_praticien` (`id_jonction_cabinet_praticien`, `fk_id_cabinet`, `fk_id_praticien`, `date_creation_jonction_cabinet_praticien`) VALUES
(1, 1, 1, '2018-07-31'),
(2, 2, 2, '2018-07-31'),
(3, 3, 3, '2018-07-31'),
(4, 4, 4, '2018-07-31'),
(5, 5, 5, '2018-07-31'),
(6, 6, 6, '2018-07-31'),
(7, 7, 7, '2018-08-01'),
(8, 8, 8, '2018-08-01'),
(9, 9, 9, '2018-08-01'),
(10, 10, 10, '2018-08-01'),
(11, 11, 11, '2018-08-01'),
(12, 12, 12, '2018-08-01'),
(13, 13, 13, '2018-08-01'),
(14, 14, 14, '2018-08-01'),
(15, 15, 15, '2018-08-01'),
(16, 16, 16, '2018-08-01'),
(17, 17, 17, '2018-08-01'),
(18, 18, 18, '2018-08-01'),
(19, 19, 19, '2018-08-01'),
(20, 20, 20, '2018-08-01'),
(21, 1, 21, '2018-08-01'),
(22, 2, 22, '2018-08-01'),
(23, 3, 23, '2018-08-01'),
(24, 4, 24, '2018-08-01'),
(25, 5, 25, '2018-08-01'),
(26, 6, 26, '2018-08-01'),
(27, 7, 27, '2018-08-01'),
(28, 8, 28, '2018-08-01'),
(29, 9, 29, '2018-08-01'),
(30, 10, 30, '2018-08-01'),
(31, 11, 31, '2018-08-01'),
(32, 12, 32, '2018-08-01'),
(33, 12, 33, '2018-08-01'),
(34, 4, 34, '2018-08-01'),
(35, 5, 35, '2018-08-01'),
(36, 3, 36, '2018-08-01'),
(37, 7, 37, '2018-08-01'),
(38, 16, 38, '2018-08-01'),
(39, 10, 39, '2018-08-01'),
(40, 11, 40, '2018-08-01'),
(41, 12, 41, '2018-08-01'),
(42, 13, 42, '2018-08-01'),
(43, 14, 43, '2018-08-01'),
(44, 15, 44, '2018-08-01'),
(45, 16, 45, '2018-08-01'),
(46, 17, 46, '2018-08-01'),
(47, 18, 47, '2018-08-01'),
(48, 19, 48, '2018-08-01'),
(49, 20, 49, '2018-08-01'),
(50, 1, 50, '2018-08-01');

-- --------------------------------------------------------

--
-- Structure de la table `jonction_praticien_contact`
--

CREATE TABLE `jonction_praticien_contact` (
  `id_jonction_praticien_contact` int(11) NOT NULL,
  `fk_id_praticien` int(11) NOT NULL,
  `fk_id_contact` int(11) NOT NULL,
  `date_creation_jonction_praticien_contact` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `jonction_praticien_contact`
--

INSERT INTO `jonction_praticien_contact` (`id_jonction_praticien_contact`, `fk_id_praticien`, `fk_id_contact`, `date_creation_jonction_praticien_contact`) VALUES
(1, 1, 51, '2018-07-31'),
(2, 2, 52, '2018-07-31'),
(3, 3, 53, '2018-07-31'),
(4, 4, 54, '2018-07-31'),
(5, 5, 55, '2018-07-31'),
(6, 6, 56, '2018-07-31'),
(7, 7, 57, '2018-08-01'),
(8, 8, 58, '2018-08-01'),
(9, 9, 59, '2018-08-01'),
(10, 10, 60, '2018-08-01'),
(11, 11, 61, '2018-08-01'),
(12, 12, 62, '2018-08-01'),
(13, 13, 63, '2018-08-01'),
(14, 14, 64, '2018-08-01'),
(15, 15, 65, '2018-08-01'),
(16, 16, 66, '2018-08-01'),
(17, 17, 67, '2018-08-01'),
(18, 18, 68, '2018-08-01'),
(19, 19, 69, '2018-08-01'),
(20, 20, 70, '2018-08-01'),
(21, 21, 71, '2018-08-01'),
(22, 22, 72, '2018-08-01'),
(23, 23, 73, '2018-08-01'),
(24, 24, 74, '2018-08-01'),
(25, 25, 75, '2018-08-01'),
(26, 26, 76, '2018-08-01'),
(27, 27, 77, '2018-08-01'),
(28, 28, 78, '2018-08-01'),
(29, 29, 79, '2018-08-01'),
(30, 30, 80, '2018-08-01'),
(31, 31, 81, '2018-08-01'),
(32, 32, 82, '2018-08-01'),
(33, 33, 83, '2018-08-01'),
(34, 34, 84, '2018-08-01'),
(35, 35, 85, '2018-08-01'),
(36, 36, 86, '2018-08-01'),
(37, 37, 87, '2018-08-01'),
(38, 38, 88, '2018-08-01'),
(39, 39, 89, '2018-08-01'),
(40, 40, 90, '2018-08-01'),
(41, 41, 91, '2018-08-01'),
(42, 42, 92, '2018-08-01'),
(43, 43, 93, '2018-08-01'),
(44, 44, 94, '2018-08-01'),
(45, 45, 95, '2018-08-01'),
(46, 46, 96, '2018-08-01'),
(47, 47, 97, '2018-08-01'),
(48, 48, 98, '2018-08-01'),
(49, 49, 99, '2018-08-01'),
(50, 50, 100, '2018-08-01');

-- --------------------------------------------------------

--
-- Structure de la table `photo_cabinet`
--

CREATE TABLE `photo_cabinet` (
  `id_photo_cabinet` int(11) NOT NULL,
  `photo_slider` varchar(255) DEFAULT NULL,
  `fk_id_cabinet` int(11) NOT NULL,
  `date_creation_photo_cabinet` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `photo_cabinet`
--

INSERT INTO `photo_cabinet` (`id_photo_cabinet`, `photo_slider`, `fk_id_cabinet`, `date_creation_photo_cabinet`) VALUES
(1, '../Photos/cabinets/cab_Cabinet en chirurgie orale1.jpg', 1, '2003-07-26'),
(2, '../Photos/cabinets/cab_Cabinet orthopédie dento-faciale1.jpg', 2, '2015-08-05'),
(3, '../Photos/cabinets/cab_Cabinet Odontologie légale1.jpg', 3, '2008-11-10'),
(4, '../Photos/cabinets/cab_Cabinet Odontologie chirurgicale1.jpg', 4, '2015-02-07'),
(5, '../Photos/cabinets/cab_Cabinet Prothèsiste1.jpg', 5, '2003-12-13'),
(6, '../Photos/cabinets/cab_Cabinet Odontologie chirurgicale1.jpg', 6, '2002-12-11'),
(7, '../Photos/cabinets/cab_Cabinet Prothèsiste1.jpg', 7, '2013-08-04'),
(8, '../Photos/cabinets/cab_Cabinet Prothèsiste1.jpg', 8, '2010-02-25'),
(9, '../Photos/cabinets/cab_Cabinet Prothèsiste1.jpg', 9, '2004-07-01'),
(10, '../Photos/cabinets/cab_Cabinet Orthopédie dento-faciale1.jpg', 10, '2009-04-16'),
(11, '../Photos/cabinets/cab_Cabinet Odontologie chirurgicale1.jpg', 11, '2006-02-25'),
(12, '../Photos/cabinets/cab_Cabinet Orthopédie dento-faciale1.jpg', 12, '2004-01-15'),
(13, '../Photos/cabinets/cab_Cabinet de Prothèse scellée1.jpg', 13, '2004-03-15'),
(14, '../Photos/cabinets/cab_Cabinet en chirurgie orale1.jpg', 14, '2002-06-16'),
(15, '../Photos/cabinets/cab_Cabinet de Prothèses maxillo-faciale1.jpg', 15, '2002-08-13'),
(16, '../Photos/cabinets/cab_Cabinet spécialisées en médecine bucco-dentaire1.jpg', 16, '2017-01-07'),
(17, '../Photos/cabinets/cab_Cabinet Odontologie conservatrice1.jpg', 17, '2011-08-07'),
(18, '../Photos/cabinets/cab_Cabinet hysto-embryologique1.jpg', 18, '2018-03-05'),
(19, '../Photos/cabinets/cab_Cabinet orthopédie dento-faciale1.jpg', 19, '2004-07-19'),
(20, '../Photos/cabinets/cab_Cabinet de chirurgie buccale1.jpg', 20, '2008-09-26');

-- --------------------------------------------------------

--
-- Structure de la table `praticien`
--

CREATE TABLE `praticien` (
  `id_praticien` int(11) NOT NULL,
  `nom_praticien` varchar(55) NOT NULL,
  `prenom_praticien` varchar(55) NOT NULL,
  `photo_praticien` varchar(255) NOT NULL,
  `sexe` int(11) NOT NULL,
  `diplome` varchar(255) NOT NULL,
  `description_praticien` varchar(255) NOT NULL,
  `titre` varchar(25) NOT NULL,
  `specialite` varchar(255) NOT NULL,
  `date_creation_praticien` date NOT NULL,
  `date_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `praticien`
--

INSERT INTO `praticien` (`id_praticien`, `nom_praticien`, `prenom_praticien`, `photo_praticien`, `sexe`, `diplome`, `description_praticien`, `titre`, `specialite`, `date_creation_praticien`, `date_fin`) VALUES
(1, 'MIQUEL', 'Ismaël', '../Photos/Patients/MIQUEL-Ismaël.jpg', 0, 'Biologie de la bouche option anatomo-physiologique', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus ', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(2, 'NOU', 'Ayah', '../Photos/Patients/NOU-Ayah.jpg', 0, 'DEA : Diplôme d’études approfondies', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(3, 'DELCASSO', 'Vianney', '../Photos/Patients/DELCASSO-Vianney.jpg', 0, 'Prothèse adjointe partielle', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(4, 'ASPART', 'Adrian', '../Photos/Patients/ASPART-Adrian.jpg', 0, 'Diplôme d’études et de recherches en biologie humaine', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(5, 'SALES', 'Flavio', '../Photos/Patients/SALES-Flavio.jpg', 0, 'Odontologie chirurgicale', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus ', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(6, 'DEIXONNE', 'Anaëlle', '../Photos/Patients/DEIXONNE-Anaëlle.jpg', 0, 'Parodontologie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(7, 'MARY', 'Colin', '../Photos/Patients/MARY-Colin.jpg', 0, 'Odontologie conservatrice', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus ', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(8, 'BOHER', 'Anton', '../Photos/Patients/BOHER-Anton.jpg', 0, 'Prothèse maxillo-faciale', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(9, 'ROSSIGNOL', 'Edward', '../Photos/Patients/ROSSIGNOL-Edward.jpg', 0, 'DEA : Diplôme d’études approfondies', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(10, 'SOLE', 'Selyan', '../Photos/Patients/SOLE-Selyan.jpg', 0, 'Ancien assistant hospitalier universitaire des C.S.E.R.D.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(11, 'ORIOL', 'Neyla', '../Photos/Patients/ORIOL-Neyla.jpg', 0, 'Diplôme d’études supérieures de chirurgie buccale', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(12, 'BARCELO', 'Joshua', '../Photos/Patients/BARCELO-Joshua.jpg', 0, 'Prothèse adjointe partielle', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(13, 'BERJOAN', 'Mayssa', '../Photos/Patients/BERJOAN-Mayssa.jpg', 0, 'Doctorat de 3ème cycle en sciences odontologiques', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(14, 'BAILLETTE', 'Hana', '../Photos/Patients/BAILLETTE-Hana.jpg', 0, 'Prothèse adjointe complète', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(15, 'PAYROT', 'Haroun', '../Photos/Patients/PAYROT-Haroun.jpg', 0, 'Maîtrise de sciences biologiques et médicales', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus ', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(16, 'VILACEQUE', 'Yoann', '../Photos/Patients/VILACEQUE-Yoann.jpg', 0, 'Prothèse scellée', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(17, 'LLOBERES', 'Elina', '../Photos/Patients/LLOBERES-Elina.jpg', 0, 'Maîtrise de sciences biologiques et médicales', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(18, 'JULIA', 'Lirone', '../Photos/Patients/JULIA-Lirone.jpg', 0, 'DEA : Diplôme d’études approfondies', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(19, 'VIGO', 'Isaure', '../Photos/Patients/VIGO-Isaure.jpg', 0, 'Maîtrise de biologie humaine', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(20, 'BENEZET', 'Lyne', '../Photos/Patients/BENEZET-Lyne.jpg', 0, 'Biologie de la bouche option anatomo-physiologique', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(21, 'BRUNET', 'Lou', '../Photos/Patients/BRUNET-Lou.jpg', 0, 'Maîtrise de biologie humaine', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(22, 'BOIX', 'Ashley', '../Photos/Patients/BOIX-Ashley.jpg', 0, 'Professeur ler ou 2ème grade - Odontologiste des S.C.T.D.', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(23, 'MONE', 'Menahem', '../Photos/Patients/MONE-Menahem.jpg', 0, 'Maître de conférences des universités - Praticien hospitalier des C.S.E.R.D.', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(24, 'OMS', 'Luc', '../Photos/Patients/OMS-Luc.jpg', 0, 'Prothèse adjointe complète', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus ', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(25, 'AURIOL', 'Mélisande', '../Photos/Patients/AURIOL-Mélisande.jpg', 0, 'Orthopédie dento-faciale', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(26, 'FARRE', 'Noâm', '../Photos/Patients/FARRE-Noâm.jpg', 0, 'Professeur des universités - Praticien hospitalier des C.S.E.R.D.', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(27, 'BILLES', 'Aristide', '../Photos/Patients/BILLES-Aristide.jpg', 0, 'Professeur des universités - Praticien hospitalier des C.S.E.R.D.', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(28, 'CASTILLO', 'Elie', '../Photos/Patients/CASTILLO-Elie.jpg', 0, 'Doctorat de 3ème cycle en sciences odontologiques', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0215-02-05', '0000-00-00'),
(29, 'CONILL', 'Idris', '../Photos/Patients/CONILL-Idris.jpg', 0, 'Diplôme d’études et de recherches en biologie humaine', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(30, 'MATHEU', 'Aloïs', '../Photos/Patients/MATHEU-Aloïs.jpg', 0, 'Diplôme d’habilitation à diriger des recherches', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(31, 'MACARY', 'Simon', '../Photos/Patients/MACARY-Simon.jpg', 0, 'Prothèse maxillo-faciale', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus ', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(32, 'BARRIERE', 'Ruben', '../Photos/Patients/BARRIERE-Ruben.jpg', 0, 'DEA : Diplôme d’études approfondies', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(33, 'SOURRIBES', 'Marley', '../Photos/Patients/SOURRIBES-Marley.jpg', 0, 'Odontologie légale', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(34, 'FARRE', 'Liv', '../Photos/Patients/FARRE-Liv.jpg', 0, 'Orthopédie dento-faciale', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(35, 'SALIES', 'Talia', '../Photos/Patients/SALIES-Talia.jpg', 0, 'Assistant hospitalier universitaire des C.S.E.R.D.', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(36, 'SOLER', 'Arwa', '../Photos/Patients/SOLER-Arwa.jpg', 0, 'Technologie des matériaux employés en art dentaire', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus ', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(37, 'CHAUVET', 'Sarah', '../Photos/Patients/CHAUVET-Sarah.jpg', 0, 'Parodontologie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(38, 'CONILL', 'Coralie', '../Photos/Patients/CONILL-Coralie.jpg', 0, 'Technologie des matériaux employés en art dentaire', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(39, 'RIVIERE', 'Ernest', '../Photos/Patients/RIVIERE-Ernest.jpg', 0, 'Assistant hospitalier universitaire des C.S.E.R.D.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(40, 'GAUZE', 'Livio', '../Photos/Patients/GAUZE-Livio.jpg', 0, 'DEA : Diplôme d’études approfondies', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(41, 'CASSANY', 'Karl', '../Photos/Patients/CASSANY-Karl.jpg', 0, 'Ancien assistant des universités - Odontologiste assistant des S.C.T.D.', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(42, 'BOURRAT', 'Axelle', '../Photos/Patients/BOURRAT-Axelle.jpg', 0, 'Biologie de la bouche option anatomo-physiologique', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(43, 'GIBRAT', 'Léonard', '../Photos/Patients/GIBRAT-Léonard.jpg', 0, 'Diplôme d’habilitation à diriger des recherches', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(44, 'CAZALS', 'Joris', '../Photos/Patients/CAZALS-Joris.jpg', 0, 'DERSO : Diplôme d’études et de recherches en sciences odontologiques', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(45, 'BOURNET', 'Pauline', '../Photos/Patients/BOURNET-Pauline.jpg', 0, 'Maîtrise de biologie humaine', 'Maecenas libero. Aenean fermentum risus id tortor. Vivamus luctus egestas leo. Duis pulvinar. Proin mattis lacinia justo. Fusce wisi. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Aliquam erat volutpat. Integer imperdiet lectus ', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(46, 'TISSEYRE', 'Margot', '../Photos/Patients/TISSEYRE-Margot.jpg', 0, 'Biologie de la bouche option hysto-embryologique', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(47, 'SOL', 'Nesrine', '../Photos/Patients/SOL-Nesrine.jpg', 0, 'Diplôme d’habilitation à diriger des recherches', 'pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipi', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(48, 'BARRIERE', 'Éva', '../Photos/Patients/BARRIERE-Éva.jpg', 0, 'Ancien assistant hospitalier universitaire des C.S.E.R.D.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(49, 'FONT', 'Yaron', '../Photos/Patients/FONT-Yaron.jpg', 0, 'Professeur ler ou 2ème grade - Odontologiste des S.C.T.D.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00'),
(50, 'VIGUE', 'Lila', '../Photos/Patients/VIGUE-Lila.jpg', 0, 'Maître de conférences des universités - Praticien hospitalier des C.S.E.R.D.', 'sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Etiam commodo dui eget wisi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dol', 'Doc.', 'Orthondentiste', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `_id` int(11) NOT NULL,
  `username` varchar(21) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`_id`, `username`, `password`) VALUES
(1, 'titi', '732228f0864969be8e778997f6917e4a');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cabinet`
--
ALTER TABLE `cabinet`
  ADD PRIMARY KEY (`id_cabinet`),
  ADD UNIQUE KEY `id_cabinet` (`id_cabinet`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`),
  ADD UNIQUE KEY `id_contact` (`id_contact`);

--
-- Index pour la table `jonction_cabinet_contact`
--
ALTER TABLE `jonction_cabinet_contact`
  ADD PRIMARY KEY (`id_jonction_cabinet_contact`),
  ADD UNIQUE KEY `id_jonction_cabinet_contact` (`id_jonction_cabinet_contact`),
  ADD KEY `id_jonction_cabinet_contact_2` (`id_jonction_cabinet_contact`),
  ADD KEY `fk_id_cabinet` (`fk_id_cabinet`,`fk_id_contact`),
  ADD KEY `fk_id_contact` (`fk_id_contact`);

--
-- Index pour la table `jonction_cabinet_praticien`
--
ALTER TABLE `jonction_cabinet_praticien`
  ADD PRIMARY KEY (`id_jonction_cabinet_praticien`),
  ADD KEY `fk_id_cabinet` (`fk_id_cabinet`,`fk_id_praticien`),
  ADD KEY `fk_id_praticien` (`fk_id_praticien`);

--
-- Index pour la table `jonction_praticien_contact`
--
ALTER TABLE `jonction_praticien_contact`
  ADD KEY `fk_id_praticien` (`fk_id_praticien`,`fk_id_contact`),
  ADD KEY `fk_id_contact` (`fk_id_contact`);

--
-- Index pour la table `photo_cabinet`
--
ALTER TABLE `photo_cabinet`
  ADD PRIMARY KEY (`id_photo_cabinet`),
  ADD UNIQUE KEY `id_photo_cabinet` (`id_photo_cabinet`),
  ADD UNIQUE KEY `fk_id_cabinet` (`fk_id_cabinet`),
  ADD KEY `fk_id_cabinet_2` (`fk_id_cabinet`);

--
-- Index pour la table `praticien`
--
ALTER TABLE `praticien`
  ADD PRIMARY KEY (`id_praticien`),
  ADD UNIQUE KEY `id_praticien` (`id_praticien`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cabinet`
--
ALTER TABLE `cabinet`
  MODIFY `id_cabinet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT pour la table `jonction_cabinet_contact`
--
ALTER TABLE `jonction_cabinet_contact`
  MODIFY `id_jonction_cabinet_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT pour la table `jonction_cabinet_praticien`
--
ALTER TABLE `jonction_cabinet_praticien`
  MODIFY `id_jonction_cabinet_praticien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `jonction_cabinet_contact`
--
ALTER TABLE `jonction_cabinet_contact`
  ADD CONSTRAINT `jonction_cabinet_contact_ibfk_1` FOREIGN KEY (`fk_id_contact`) REFERENCES `contact` (`id_contact`),
  ADD CONSTRAINT `jonction_cabinet_contact_ibfk_2` FOREIGN KEY (`fk_id_cabinet`) REFERENCES `cabinet` (`id_cabinet`);

--
-- Contraintes pour la table `jonction_cabinet_praticien`
--
ALTER TABLE `jonction_cabinet_praticien`
  ADD CONSTRAINT `jonction_cabinet_praticien_ibfk_1` FOREIGN KEY (`fk_id_cabinet`) REFERENCES `cabinet` (`id_cabinet`),
  ADD CONSTRAINT `jonction_cabinet_praticien_ibfk_2` FOREIGN KEY (`fk_id_praticien`) REFERENCES `praticien` (`id_praticien`);

--
-- Contraintes pour la table `jonction_praticien_contact`
--
ALTER TABLE `jonction_praticien_contact`
  ADD CONSTRAINT `jonction_praticien_contact_ibfk_1` FOREIGN KEY (`fk_id_praticien`) REFERENCES `praticien` (`id_praticien`),
  ADD CONSTRAINT `jonction_praticien_contact_ibfk_2` FOREIGN KEY (`fk_id_contact`) REFERENCES `contact` (`id_contact`);

--
-- Contraintes pour la table `photo_cabinet`
--
ALTER TABLE `photo_cabinet`
  ADD CONSTRAINT `photo_cabinet_ibfk_1` FOREIGN KEY (`fk_id_cabinet`) REFERENCES `cabinet` (`id_cabinet`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
