CREATE TABLE `product` (
  `ProductId` int(10) NOT NULL,
  `ProductName` varchar(150) NOT NULL,
  `CategoryId` int(10) NOT NULL,
  `CategoryName` varchar(150) NOT NULL
);

INSERT INTO `product` (`ProductId`, `ProductName`, `CategoryId`, `CategoryName`) VALUES
(1, 'Oracle', 2147483647, 'Platform'),
(2, 'Java', 1, 'Program'),
(3, 'Microsoft', 100, 'Window'),
(4, 'MySql', 80, 'Database'),
(5, 'Angular14', 50, 'NodeJs'),
(6, 'React', 50, 'NodeJs'),
(7, 'Oracle', 1, 'Platform'),
(8, 'Hostinger', 2, 'Server'),
(9, 'Google', 6, 'Website'),
(10, 'IOS', 85, 'Image'),
(11, 'PowerX', 1000000000, 'Streaming'),
(12, 'Testing', 1000, 'Delete Me'),
(13, 'TestMe', 1500, 'Update Me'),
(14, 'Unknown', 2000, 'Created'),
(15, 'okey', 15, 'okey'),
(16, 'okey', 16, 'okey'),
(17, 'fine', 17, 'fine'),
(18, 'fine', 18, 'fine'),
(19, 'where is', 20, 'i am here'),
(20, 'cookies', 21, 'years'),
(21, 'great', 21, 'great'),
(22, 'good', 22, 'good'),
(23, 'okey', 23, 'okey'),
(24, 'dimensions', 25, 'centuries'),
(25, 'PowerX', 1, 'Infinity');

ALTER TABLE `product`
  ADD PRIMARY KEY (`ProductId`);

ALTER TABLE `product`
  MODIFY `ProductId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;