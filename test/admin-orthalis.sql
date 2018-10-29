-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 29 Octobre 2018 à 16:45
-- Version du serveur :  5.7.23-0ubuntu0.16.04.1
-- Version de PHP :  7.0.32-2+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `admin-orthalis`
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
  `photo_cabinet` text NOT NULL,
  `date_creation_cabinet` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `date_cloture_cabinet` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id_contact` int(11) NOT NULL,
  `telephone_professionnel` varchar(10) DEFAULT NULL,
  `telephone_personnel` varchar(10) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  `adresse` varchar(255) NOT NULL,
  `code_postal` varchar(5) NOT NULL,
  `ville` varchar(55) NOT NULL,
  `site_web` varchar(255) DEFAULT NULL,
  `date_creation_contact` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `jonction_cabinet_contact`
--

CREATE TABLE `jonction_cabinet_contact` (
  `id_jonction_cabinet_contact` int(11) NOT NULL,
  `fk_id_cabinet` int(11) NOT NULL,
  `fk_id_contact` int(11) NOT NULL,
  `date_creation_jonction_cabinet_contact` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `jonction_cabinet_praticien`
--

CREATE TABLE `jonction_cabinet_praticien` (
  `id_jonction_cabinet_praticien` int(11) NOT NULL,
  `fk_id_cabinet` int(11) NOT NULL,
  `fk_id_praticien` int(11) NOT NULL,
  `date_creation_jonction_cabinet_praticien` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `praticien`
--

CREATE TABLE `praticien` (
  `id_praticien` int(11) NOT NULL,
  `nom_praticien` varchar(55) NOT NULL,
  `prenom_praticien` varchar(55) NOT NULL,
  `photo_praticien` varchar(255) NOT NULL,
  `sexe` varchar(25) NOT NULL,
  `diplome` varchar(255) DEFAULT NULL,
  `description_praticien` varchar(255) NOT NULL,
  `titre` varchar(25) DEFAULT NULL,
  `specialite` varchar(255) NOT NULL,
  `date_creation_praticien` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_fin_praticien` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Contenu de la table `users`
--

INSERT INTO `users` (`_id`, `username`, `password`) VALUES
(1, 'titi', '732228f0864969be8e778997f6917e4a');

--
-- Index pour les tables exportées
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
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `cabinet`
--
ALTER TABLE `cabinet`
  MODIFY `id_cabinet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `jonction_cabinet_contact`
--
ALTER TABLE `jonction_cabinet_contact`
  MODIFY `id_jonction_cabinet_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `jonction_cabinet_praticien`
--
ALTER TABLE `jonction_cabinet_praticien`
  MODIFY `id_jonction_cabinet_praticien` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `praticien`
--
ALTER TABLE `praticien`
  MODIFY `id_praticien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
