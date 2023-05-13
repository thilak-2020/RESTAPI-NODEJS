-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Apr 15, 2023 at 03:33 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- -----------------------------------------------------
-- Schema storemngsys
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `storemngsys` DEFAULT CHARACTER SET utf8 ;
USE `storemngsys` ;

-- --------------------------------------------------------

--
-- Table structure for table `sms_category_master`
--

CREATE TABLE `sms_category_master` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sms_category_master`
--

INSERT INTO `sms_category_master` (`category_id`, `category_name`, `created_at`, `updated_at`) VALUES
(3, 'Mobile Accessories', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(4, 'Health care Accessories', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(5, 'Laptop Accessories', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(6, 'Computer Accessories', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(7, 'Washing Machine', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(8, 'Refrigerators', '2023-04-01 21:08:26', '2023-04-12 21:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `sms_product_master`
--

CREATE TABLE `sms_product_master` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(45) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sms_product_master`
--

INSERT INTO `sms_product_master` (`product_id`, `category_id`, `product_name`, `created_at`, `updated_at`) VALUES
(1, 3, 'Power bank', '2023-04-01 21:08:26', '2023-04-01 21:08:26'),
(2, 3, 'C-type cable', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(3, 3, 'Mobile Cases', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(4, 3, 'Headphones & Headsets', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(5, 3, 'Screenguards', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(6, 3, 'Memory Cards', '2023-04-01 21:08:26', '2023-04-12 21:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `sms_purchase_order`
--

CREATE TABLE `sms_purchase_order` (
  `po_id` int(11) NOT NULL,
  `po_date` date NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `po_status` enum('CREATED','APPROVED','RECEIVED') NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sms_purchase_order`
--

INSERT INTO `sms_purchase_order` (`po_id`, `po_date`, `supplier_id`, `po_status`, `created_at`, `updated_at`) VALUES
(76, '2023-04-05', 1, 'CREATED', '2023-04-13 06:59:00', '2023-04-13 06:59:00'),
(77, '2023-04-13', 1, 'APPROVED', '2023-04-13 07:01:18', '2023-04-13 07:01:18'),
(78, '2023-04-01', 2, 'APPROVED', '2023-04-13 07:05:22', '2023-04-13 07:05:22'),
(79, '2023-04-01', 1, 'RECEIVED', '2023-04-13 07:06:09', '2023-04-13 07:06:09'),
(80, '2023-04-01', 1, 'CREATED', '2023-04-13 07:06:53', '2023-04-13 07:06:53'),
(81, '2023-04-01', 1, 'CREATED', '2023-04-13 07:07:37', '2023-04-13 07:07:37'),
(82, '2023-04-01', 1, 'CREATED', '2023-04-13 07:08:34', '2023-04-13 07:08:34'),
(83, '2023-04-01', 1, 'CREATED', '2023-04-13 07:09:13', '2023-04-13 07:09:13'),
(84, '2023-04-01', 1, 'CREATED', '2023-04-13 08:18:10', '2023-04-13 08:18:10'),
(85, '2023-04-01', 1, 'CREATED', '2023-04-13 08:18:38', '2023-04-13 08:18:38'),
(86, '2023-04-01', 1, 'CREATED', '2023-04-13 08:19:34', '2023-04-13 08:19:34'),
(87, '2023-04-01', 1, 'CREATED', '2023-04-13 08:19:55', '2023-04-13 08:19:55'),
(88, '2023-04-01', 1, 'CREATED', '2023-04-13 08:22:09', '2023-04-13 08:22:09'),
(89, '2023-04-01', 1, 'CREATED', '2023-04-13 08:25:39', '2023-04-13 08:25:39'),
(90, '2023-04-01', 1, 'CREATED', '2023-04-13 08:26:36', '2023-04-13 08:26:36'),
(91, '2023-04-01', 1, 'CREATED', '2023-04-13 08:33:42', '2023-04-13 08:33:42'),
(92, '2023-04-01', 1, 'CREATED', '2023-04-13 08:34:17', '2023-04-13 08:34:17'),
(93, '2023-04-01', 1, 'CREATED', '2023-04-13 08:34:59', '2023-04-13 08:34:59'),
(94, '2023-04-01', 1, 'CREATED', '2023-04-13 08:37:14', '2023-04-13 08:37:14'),
(95, '2023-04-01', 1, 'CREATED', '2023-04-13 08:39:20', '2023-04-13 08:39:20'),
(96, '2023-04-01', 1, 'CREATED', '2023-04-13 08:40:04', '2023-04-13 08:40:04'),
(97, '2023-04-01', 1, 'CREATED', '2023-04-13 08:41:04', '2023-04-13 08:41:04'),
(98, '2023-04-01', 1, 'CREATED', '2023-04-13 08:41:55', '2023-04-13 08:41:55'),
(99, '2023-04-01', 1, 'CREATED', '2023-04-13 08:42:21', '2023-04-13 08:42:21'),
(100, '2023-04-01', 1, 'CREATED', '2023-04-13 08:46:07', '2023-04-13 08:46:07'),
(101, '2023-04-01', 1, 'CREATED', '2023-04-13 08:46:38', '2023-04-13 08:46:38'),
(102, '2023-04-01', 1, 'CREATED', '2023-04-13 08:47:46', '2023-04-13 08:47:46'),
(103, '2023-04-01', 1, 'CREATED', '2023-04-13 09:15:06', '2023-04-13 09:15:06'),
(104, '2023-04-01', 1, 'CREATED', '2023-04-13 09:15:43', '2023-04-13 09:15:43'),
(105, '2023-04-01', 1, 'CREATED', '2023-04-13 09:17:10', '2023-04-13 09:17:10'),
(106, '2023-04-01', 1, 'CREATED', '2023-04-13 09:24:39', '2023-04-13 09:24:39'),
(107, '2023-04-01', 1, 'CREATED', '2023-04-13 09:25:52', '2023-04-13 09:25:52'),
(108, '2023-04-01', 1, 'CREATED', '2023-04-13 09:28:07', '2023-04-13 09:28:07'),
(109, '2023-04-01', 1, 'CREATED', '2023-04-13 09:31:16', '2023-04-13 09:31:16'),
(110, '2023-04-01', 1, 'CREATED', '2023-04-13 09:32:13', '2023-04-13 09:32:13'),
(111, '2023-04-01', 1, 'CREATED', '2023-04-13 09:32:43', '2023-04-13 09:32:43'),
(112, '2023-04-01', 1, 'CREATED', '2023-04-13 09:33:04', '2023-04-13 09:33:04'),
(113, '2023-04-01', 1, 'APPROVED', '2023-04-13 09:39:03', '2023-04-13 16:59:27');

-- --------------------------------------------------------

--
-- Table structure for table `sms_purchase_order_items`
--

CREATE TABLE `sms_purchase_order_items` (
  `po_item_id` int(11) NOT NULL,
  `po_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_qty` int(11) NOT NULL,
  `product_price` int(11) DEFAULT NULL,
  `product_discount` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sms_purchase_order_items`
--

INSERT INTO `sms_purchase_order_items` (`po_item_id`, `po_id`, `product_id`, `product_qty`, `product_price`, `product_discount`, `created_at`, `updated_at`) VALUES
(137, 76, 1, 15, NULL, NULL, '2023-04-13 06:59:00', '2023-04-13 06:59:00'),
(138, 76, 2, 15, NULL, NULL, '2023-04-13 06:59:00', '2023-04-13 06:59:00'),
(139, 77, 1, 15, NULL, NULL, '2023-04-13 07:01:18', '2023-04-13 07:01:18'),
(140, 77, 2, 15, NULL, NULL, '2023-04-13 07:01:18', '2023-04-13 07:01:18'),
(141, 78, 1, 15, NULL, NULL, '2023-04-13 07:05:22', '2023-04-13 07:05:22'),
(142, 78, 2, 15, NULL, NULL, '2023-04-13 07:05:22', '2023-04-13 07:05:22'),
(143, 79, 1, 15, NULL, NULL, '2023-04-13 07:06:09', '2023-04-13 07:06:09'),
(144, 79, 2, 15, NULL, NULL, '2023-04-13 07:06:09', '2023-04-13 07:06:09'),
(145, 80, 1, 15, NULL, NULL, '2023-04-13 07:06:53', '2023-04-13 07:06:53'),
(146, 80, 2, 15, NULL, NULL, '2023-04-13 07:06:53', '2023-04-13 07:06:53'),
(147, 81, 1, 15, NULL, NULL, '2023-04-13 07:07:37', '2023-04-13 07:07:37'),
(148, 81, 2, 15, NULL, NULL, '2023-04-13 07:07:37', '2023-04-13 07:07:37'),
(149, 82, 1, 15, NULL, NULL, '2023-04-13 07:08:34', '2023-04-13 07:08:34'),
(150, 82, 2, 15, NULL, NULL, '2023-04-13 07:08:34', '2023-04-13 07:08:34'),
(151, 83, 1, 15, NULL, NULL, '2023-04-13 07:09:13', '2023-04-13 07:09:13'),
(152, 83, 2, 15, NULL, NULL, '2023-04-13 07:09:13', '2023-04-13 07:09:13'),
(153, 84, 1, 15, NULL, NULL, '2023-04-13 08:18:10', '2023-04-13 08:18:10'),
(154, 84, 2, 15, NULL, NULL, '2023-04-13 08:18:10', '2023-04-13 08:18:10'),
(155, 85, 1, 15, NULL, NULL, '2023-04-13 08:18:38', '2023-04-13 08:18:38'),
(156, 85, 2, 15, NULL, NULL, '2023-04-13 08:18:38', '2023-04-13 08:18:38'),
(157, 86, 1, 15, NULL, NULL, '2023-04-13 08:19:34', '2023-04-13 08:19:34'),
(158, 86, 2, 15, NULL, NULL, '2023-04-13 08:19:34', '2023-04-13 08:19:34'),
(159, 87, 1, 15, NULL, NULL, '2023-04-13 08:19:55', '2023-04-13 08:19:55'),
(160, 87, 2, 15, NULL, NULL, '2023-04-13 08:19:55', '2023-04-13 08:19:55'),
(161, 88, 1, 15, NULL, NULL, '2023-04-13 08:22:09', '2023-04-13 08:22:09'),
(162, 88, 2, 15, NULL, NULL, '2023-04-13 08:22:09', '2023-04-13 08:22:09'),
(163, 89, 1, 15, NULL, NULL, '2023-04-13 08:25:39', '2023-04-13 08:25:39'),
(164, 89, 2, 15, NULL, NULL, '2023-04-13 08:25:39', '2023-04-13 08:25:39'),
(165, 90, 1, 15, NULL, NULL, '2023-04-13 08:26:36', '2023-04-13 08:26:36'),
(166, 90, 2, 15, NULL, NULL, '2023-04-13 08:26:36', '2023-04-13 08:26:36'),
(167, 91, 1, 15, NULL, NULL, '2023-04-13 08:33:42', '2023-04-13 08:33:42'),
(168, 91, 2, 15, NULL, NULL, '2023-04-13 08:33:42', '2023-04-13 08:33:42'),
(169, 92, 1, 15, NULL, NULL, '2023-04-13 08:34:17', '2023-04-13 08:34:17'),
(170, 92, 2, 15, NULL, NULL, '2023-04-13 08:34:17', '2023-04-13 08:34:17'),
(171, 93, 1, 15, NULL, NULL, '2023-04-13 08:34:59', '2023-04-13 08:34:59'),
(172, 93, 2, 15, NULL, NULL, '2023-04-13 08:34:59', '2023-04-13 08:34:59'),
(173, 94, 1, 15, NULL, NULL, '2023-04-13 08:37:14', '2023-04-13 08:37:14'),
(174, 94, 2, 15, NULL, NULL, '2023-04-13 08:37:15', '2023-04-13 08:37:15'),
(175, 95, 1, 15, NULL, NULL, '2023-04-13 08:39:20', '2023-04-13 08:39:20'),
(176, 95, 2, 15, NULL, NULL, '2023-04-13 08:39:20', '2023-04-13 08:39:20'),
(177, 96, 2, 15, NULL, NULL, '2023-04-13 08:40:04', '2023-04-13 08:40:04'),
(178, 96, 1, 15, NULL, NULL, '2023-04-13 08:40:04', '2023-04-13 08:40:04'),
(179, 97, 1, 15, NULL, NULL, '2023-04-13 08:41:04', '2023-04-13 08:41:04'),
(180, 97, 2, 15, NULL, NULL, '2023-04-13 08:41:04', '2023-04-13 08:41:04'),
(181, 98, 1, 15, NULL, NULL, '2023-04-13 08:41:55', '2023-04-13 08:41:55'),
(182, 98, 2, 15, NULL, NULL, '2023-04-13 08:41:55', '2023-04-13 08:41:55'),
(183, 99, 1, 15, NULL, NULL, '2023-04-13 08:42:21', '2023-04-13 08:42:21'),
(184, 99, 2, 15, NULL, NULL, '2023-04-13 08:42:21', '2023-04-13 08:42:21'),
(185, 100, 1, 15, NULL, NULL, '2023-04-13 08:46:07', '2023-04-13 08:46:07'),
(186, 100, 2, 15, NULL, NULL, '2023-04-13 08:46:07', '2023-04-13 08:46:07'),
(187, 101, 1, 15, NULL, NULL, '2023-04-13 08:46:38', '2023-04-13 08:46:38'),
(188, 101, 2, 15, NULL, NULL, '2023-04-13 08:46:38', '2023-04-13 08:46:38'),
(189, 102, 1, 15, NULL, NULL, '2023-04-13 08:47:46', '2023-04-13 08:47:46'),
(190, 102, 2, 15, NULL, NULL, '2023-04-13 08:47:46', '2023-04-13 08:47:46'),
(191, 105, 1, 15, NULL, NULL, '2023-04-13 09:17:10', '2023-04-13 09:17:10'),
(192, 105, 2, 15, NULL, NULL, '2023-04-13 09:17:10', '2023-04-13 09:17:10'),
(193, 106, 1, 15, NULL, NULL, '2023-04-13 09:24:39', '2023-04-13 09:24:39'),
(194, 106, 2, 15, NULL, NULL, '2023-04-13 09:24:39', '2023-04-13 09:24:39'),
(195, 107, 1, 15, NULL, NULL, '2023-04-13 09:25:52', '2023-04-13 09:25:52'),
(196, 107, 2, 15, NULL, NULL, '2023-04-13 09:25:52', '2023-04-13 09:25:52'),
(197, 108, 1, 15, NULL, NULL, '2023-04-13 09:28:07', '2023-04-13 09:28:07'),
(198, 108, 2, 15, NULL, NULL, '2023-04-13 09:28:07', '2023-04-13 09:28:07'),
(199, 109, 1, 15, NULL, NULL, '2023-04-13 09:31:16', '2023-04-13 09:31:16'),
(200, 109, 2, 15, NULL, NULL, '2023-04-13 09:31:16', '2023-04-13 09:31:16'),
(201, 110, 1, 15, NULL, NULL, '2023-04-13 09:32:13', '2023-04-13 09:32:13'),
(202, 110, 2, 15, NULL, NULL, '2023-04-13 09:32:13', '2023-04-13 09:32:13'),
(203, 111, 1, 15, NULL, NULL, '2023-04-13 09:32:43', '2023-04-13 09:32:43'),
(204, 111, 2, 15, NULL, NULL, '2023-04-13 09:32:43', '2023-04-13 09:32:43'),
(205, 112, 1, 15, NULL, NULL, '2023-04-13 09:33:05', '2023-04-13 09:33:05'),
(206, 112, 2, 15, NULL, NULL, '2023-04-13 09:33:05', '2023-04-13 09:33:05'),
(207, 113, 1, 450, NULL, NULL, '2023-04-13 09:39:03', '2023-04-13 16:59:27'),
(210, 113, 4, 150, NULL, NULL, '2023-04-13 16:58:48', '2023-04-13 16:59:27');

-- --------------------------------------------------------

--
-- Table structure for table `sms_supplier_master`
--

CREATE TABLE `sms_supplier_master` (
  `supplier_id` int(11) NOT NULL,
  `supplier_name` varchar(250) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sms_supplier_master`
--

INSERT INTO `sms_supplier_master` (`supplier_id`, `supplier_name`, `created_at`, `updated_at`) VALUES
(1, 'DigitalHub', '2023-04-01 21:08:26', '2023-04-12 21:08:26'),
(2, 'MTS', '2023-04-01 21:08:26', '2023-04-12 21:08:26');

-- --------------------------------------------------------

--
-- Table structure for table `sms_user_master`
--

CREATE TABLE `sms_user_master` (
  `userid` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(150) NOT NULL,
  `usertype` enum('ADMIN','CUSTOMER') NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobilenumber` varchar(10) NOT NULL,
  `shippingaddress` tinytext,
  `billingaddress` tinytext,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sms_user_master`
--

INSERT INTO `sms_user_master` (`userid`, `username`, `password`, `usertype`, `email`, `mobilenumber`, `shippingaddress`, `billingaddress`, `created_at`, `updated_at`) VALUES
(17, 'test', '$2a$08$HrLo7/U3Ogo2M0tDN.Sdt.buH1cZEbObPcD/kHTZhjOGAWQnu8UUa', 'CUSTOMER', 'test@gmail.com', '9786696998', NULL, NULL, '2023-04-14 02:52:35', '2023-04-14 02:52:35'),
(19, 'test', '$2a$08$fDMO1Xsc0ecr34v7eftjgePerYhoQscH0g5fmAaLhDt2xDHvDMpte', 'CUSTOMER', 'test1@gmail.com', '9786696998', NULL, NULL, '2023-04-14 02:52:50', '2023-04-14 02:52:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sms_category_master`
--
ALTER TABLE `sms_category_master`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `sms_product_master`
--
ALTER TABLE `sms_product_master`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `CATEGORY_FK` (`category_id`);

--
-- Indexes for table `sms_purchase_order`
--
ALTER TABLE `sms_purchase_order`
  ADD PRIMARY KEY (`po_id`),
  ADD KEY `SUPPLIER_ID_FK` (`supplier_id`);

--
-- Indexes for table `sms_purchase_order_items`
--
ALTER TABLE `sms_purchase_order_items`
  ADD PRIMARY KEY (`po_item_id`),
  ADD KEY `PRODUCT_ID_FK` (`product_id`),
  ADD KEY `PURCHASE_ORDER_ID_FK` (`po_id`);

--
-- Indexes for table `sms_supplier_master`
--
ALTER TABLE `sms_supplier_master`
  ADD PRIMARY KEY (`supplier_id`);

--
-- Indexes for table `sms_user_master`
--
ALTER TABLE `sms_user_master`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sms_category_master`
--
ALTER TABLE `sms_category_master`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sms_product_master`
--
ALTER TABLE `sms_product_master`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sms_purchase_order`
--
ALTER TABLE `sms_purchase_order`
  MODIFY `po_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `sms_purchase_order_items`
--
ALTER TABLE `sms_purchase_order_items`
  MODIFY `po_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=211;

--
-- AUTO_INCREMENT for table `sms_supplier_master`
--
ALTER TABLE `sms_supplier_master`
  MODIFY `supplier_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sms_user_master`
--
ALTER TABLE `sms_user_master`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sms_product_master`
--
ALTER TABLE `sms_product_master`
  ADD CONSTRAINT `CATEGORY_FK` FOREIGN KEY (`category_id`) REFERENCES `sms_category_master` (`category_id`) ON UPDATE NO ACTION;

--
-- Constraints for table `sms_purchase_order`
--
ALTER TABLE `sms_purchase_order`
  ADD CONSTRAINT `SUPPLIER_ID_FK` FOREIGN KEY (`supplier_id`) REFERENCES `sms_supplier_master` (`supplier_id`) ON UPDATE NO ACTION;

--
-- Constraints for table `sms_purchase_order_items`
--
ALTER TABLE `sms_purchase_order_items`
  ADD CONSTRAINT `PRODUCT_ID_FK` FOREIGN KEY (`product_id`) REFERENCES `sms_product_master` (`product_id`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `PURCHASE_ORDER_ID_FK` FOREIGN KEY (`po_id`) REFERENCES `sms_purchase_order` (`po_id`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;