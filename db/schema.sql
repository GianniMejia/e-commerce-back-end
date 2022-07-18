
-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

--create the category table
-- CEATE TABLE `category` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `category_name` varchar(200) NOT NULL,
--   PRIMARY KEY (`id`)
-- );

-- CREATE TABLE `product` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `product_name` varchar(200) NOT NULL,
--   `price` decimal(10,0) NOT NULL,
--   `stock` int NOT NULL DEFAULT '10',
--   `category_id` int NOT NULL,
--   PRIMARY KEY (`id`),
--   KEY `category_id` (`category_id`),
--   CONSTRAINT `Product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
-- );
