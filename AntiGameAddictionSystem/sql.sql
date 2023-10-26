CREATE DATABASE `anti_addiction`;
USE `anti_addiction`; 

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(200) DEFAULT NULL,
  `password` VARCHAR(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


INSERT INTO users(`userName`,`password`)VALUES('root','123456'),('users1','772637'),('users2','asdsada');


CREATE TABLE `time`(
  `tid` INT(11) NOT NULL AUTO_INCREMENT, 
  `week1_sum` INT(11) NOT NULL,
  `week1_unhealthy` INT(11) NOT NULL,
  `week2_sum` INT(11) NOT NULL,
  `week2_unhealthy` INT(11) NOT NULL,
  `week3_sum` INT(11) NOT NULL,
  `week3_unhealthy` INT(11) NOT NULL,
  `week4_sum` INT(11) NOT NULL,
  `week4_unhealthy` INT(11) NOT NULL,
  `week5_sum` INT(11) NOT NULL,
  `week5_unhealthy` INT(11) NOT NULL,
  `week6_sum` INT(11) NOT NULL,
  `week6_unhealthy` INT(11) NOT NULL,
  `week7_sum` INT(11) NOT NULL,
  `week7_unhealthy` INT(11) NOT NULL,
  `week8_sum` INT(11) NOT NULL,
  `week8_unhealthy` INT(11) NOT NULL,
  `week9_sum` INT(11) NOT NULL,
  `week9_unhealthy` INT(11) NOT NULL,
  `week10_sum` INT(11) NOT NULL,
  `week10_unhealthy` INT(11) NOT NULL,
  `uid` INT(11) NOT NULL , 
  CONSTRAINT `time_uid` FOREIGN KEY(uid) REFERENCES users(id),
  PRIMARY KEY (`tid`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `time`(`week1_sum`,`week1_unhealthy`,`week2_sum`,`week2_unhealthy`,`week3_sum`,`week3_unhealthy`,`week4_sum`,`week4_unhealthy`,`week5_sum`,`week5_unhealthy`,`week6_sum`,`week6_unhealthy`,`week7_sum`,`week7_unhealthy`,`week8_sum`,`week8_unhealthy`,`week9_sum`,`week9_unhealthy`,`week10_sum`,`week10_unhealthy`,`uid`)VALUES
(22,10,33,2,20,5,34,11,36,15,10,2,29,11,45,11,12,3,39,10,1),(22,10,33,2,20,5,34,11,36,15,10,2,29,11,45,11,12,3,39,10,2),
(22,10,33,2,20,5,34,11,36,15,10,2,29,11,45,11,12,3,39,10,3);


DROP TABLE IF EXISTS `user_message`;
CREATE TABLE `user_message` (
  `mid` INT(11) NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(200) DEFAULT NULL,
  `chat_bl` TINYINT(1) DEFAULT NULL,
  `achieving_rate_bl` TINYINT(1) DEFAULT NULL,
  `aggressive` INT(11) NOT NULL,
  `friend_frequency` VARCHAR(200) DEFAULT NULL,
  `uid` INT(11) NOT NULL, 
  CONSTRAINT `message_uid` FOREIGN KEY(uid) REFERENCES users(id),
  PRIMARY KEY (`mid`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `user_message`(`city`,`chat_bl`,`achieving_rate_bl`,`aggressive`,`friend_frequency`,`uid`)VALUES('Beijing',0,0,0,'0,0,0,0',1),
('Paris',0,0,0,'0,0,0,0',2),('Tokyo',0,0,0,'0,0,0,0',3);


DROP TABLE IF EXISTS `friends`;
CREATE TABLE `friends` (
  `fid` INT(11) NOT NULL AUTO_INCREMENT,
  `uid1` INT(11) NOT NULL,
  `uid2` INT(11) NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

