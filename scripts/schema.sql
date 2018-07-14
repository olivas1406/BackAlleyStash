

-- Create tables section -------------------------------------------------

-- Table Users

CREATE TABLE `Users`
(
  `UserID` Int NOT NULL AUTO_INCREMENT,
  `UserFirstName` Char
(50) NOT NULL,
  `UserLastName` Char
(50) NOT NULL,
  `UserEmail` Char
(50) NOT NULL,
  PRIMARY KEY
(`UserID`)
)
 AUTO_INCREMENT = 1
;

-- Table Authentication

CREATE TABLE `Authentication`
(
  `AuthenticationID` Int NOT NULL AUTO_INCREMENT,
  `Login` Char
(40) NOT NULL
 COMMENT 'User login name',
  `Password` Char
(8) NOT NULL
 COMMENT 'Password, must be 8 characters',
  `UserID` Int NOT NULL,
  PRIMARY KEY
(`AuthenticationID`,`UserID`)
)
;

-- Table Transactions

CREATE TABLE `Transactions`
(
  `TransactionID` Int NOT NULL AUTO_INCREMENT,
  `TimeStamp` Timestamp NOT NULL,
  `TransactionDesc` Char
(50) NOT NULL,
  `Amount` Decimal
(10,2) NOT NULL,
  `Balance` Decimal
(10,2) NOT NULL,
  `UserID` Int NOT NULL,
  `AccountID` Int NOT NULL,
  `AccountTypeID` Int NOT NULL,
  `CategoryID` Int NOT NULL,
  PRIMARY KEY
(`TransactionID`,`UserID`,`AccountID`,`AccountTypeID`,`CategoryID`)
)
;

-- Table Accounts

CREATE TABLE `Accounts`
(
  `AccountID` Int NOT NULL AUTO_INCREMENT,
  `userID` Char
(30) NOT NULL,
  `accountTypeDesc` Char
(50) NOT NULL,
  `transactionDesc` Char
(100) NOT NULL,
  `amount` Float NOT NULL,
  `balance` Float
(0) NOT NULL,
  `AccountTypeID` Int NOT NULL,
  PRIMARY KEY
(`AccountID`,`AccountTypeID`)
)
;

-- Table AccountTypes

CREATE TABLE `AccountTypes`
(
  `AccountTypeID` Int NOT NULL AUTO_INCREMENT,
  `AccountTypeDesc` Char
(30) NOT NULL
 COMMENT 'Types, such as checking, savings, money market',
  `InterestRate` Decimal
(10,2) NOT NULL,
  PRIMARY KEY
(`AccountTypeID`)
)
;

-- Table UserAccount

CREATE TABLE `UserAccount`
(
  `UserID` Int NOT NULL,
  `AccountID` Int NOT NULL,
  `AccountTypeID` Int NOT NULL
)
;

ALTER TABLE `UserAccount`
ADD PRIMARY KEY
(`UserID`,`AccountID`,`AccountTypeID`)
;

-- Table Categories

CREATE TABLE `Categories`
(
  `CategoryID` Int NOT NULL AUTO_INCREMENT,
  `CategoryDescription` Char
(50) NOT NULL,
  PRIMARY KEY
(`CategoryID`)
)
;

-- Create foreign keys (relationships) section ------------------------------------------------- 


ALTER TABLE `Authentication`
ADD CONSTRAINT `Relationship1` FOREIGN KEY
(`UserID`) REFERENCES `Users`
(`UserID`) ON
DELETE RESTRICT ON
UPDATE RESTRICT
;


ALTER TABLE `UserAccount`
ADD CONSTRAINT `Relationship10` FOREIGN KEY
(`UserID`) REFERENCES `Users`
(`UserID`) ON
DELETE RESTRICT ON
UPDATE RESTRICT
;


ALTER TABLE `UserAccount`
ADD CONSTRAINT `Relationship11` FOREIGN KEY
(`AccountID`, `AccountTypeID`) REFERENCES `Accounts`
(`AccountID`, `AccountTypeID`) ON
DELETE RESTRICT ON
UPDATE RESTRICT
;


ALTER TABLE `Accounts`
ADD CONSTRAINT `Relationship12` FOREIGN KEY
(`AccountTypeID`) REFERENCES `AccountTypes`
(`AccountTypeID`) ON
DELETE RESTRICT ON
UPDATE RESTRICT
;


ALTER TABLE `Transactions`
ADD CONSTRAINT `Relationship13` FOREIGN KEY
(`UserID`, `AccountID`, `AccountTypeID`) REFERENCES `UserAccount`
(`UserID`, `AccountID`, `AccountTypeID`) ON
DELETE RESTRICT ON
UPDATE RESTRICT
;


ALTER TABLE `Transactions`
ADD CONSTRAINT `Relationship14` FOREIGN KEY
(`CategoryID`) REFERENCES `Categories`
(`CategoryID`) ON
DELETE RESTRICT ON
UPDATE RESTRICT
;


