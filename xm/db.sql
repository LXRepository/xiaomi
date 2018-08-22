/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : db

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2018-07-05 15:21:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `members`
-- ----------------------------
DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `username` varchar(60) collate utf8_bin NOT NULL,
  `password` varchar(32) collate utf8_bin NOT NULL,
  `tel` varchar(20) collate utf8_bin NOT NULL,
  PRIMARY KEY  (`tel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of members
-- ----------------------------
INSERT INTO `members` VALUES ('admin', '666', '15520560265');
INSERT INTO `members` VALUES ('w13333', '3222222', '15520560266');
