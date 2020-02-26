# Host: localhost  (Version: 5.5.53)
# Date: 2019-12-01 20:03:55
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "info_stock"
#

CREATE TABLE `info_stock` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(25) NOT NULL DEFAULT '',
  `phone` varchar(11) NOT NULL DEFAULT '',
  `message` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "info_stock"
#

INSERT INTO `info_stock` VALUES (5,'111','111','111','111');

#
# Structure for table "shop_cart"
#

CREATE TABLE `shop_cart` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shop_cart"
#


#
# Structure for table "user_login"
#

CREATE TABLE `user_login` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) NOT NULL DEFAULT '',
  `user_password` char(11) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "user_login"
#

INSERT INTO `user_login` VALUES (1,'zhuoying','123'),(2,'root','root'),(3,'root01','12345');
