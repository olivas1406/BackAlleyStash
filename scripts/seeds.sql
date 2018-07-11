use stash;
INSERT into user
    (firstname, lastname, email, createdAT, UpdatedAt)
values
    ('Trent', 'Cooper', 'trent@trilogy.com', NOW(), NOW()),
    ('Inda', 'Anime', 'dragonball@gmail.com', NOW(), NOW()),
    ('Dan', 'Bon', 'brogrammer1@hotmail.com', NOW(), NOW());

INSERT INTO authentication
    (login, password, userID, createdAT, UpdatedAt)
VALUES
    ('trent23', 'abc123', 1, NOW(), NOW()),
    ('sailormoon', 'anime55', 2, NOW(), NOW()),
    ('javaman', '123abc', 3, NOW(), NOW());

INSERT into accountType
    (accountTypeDesc, interestRate, createdAt, UpdatedAT)
VALUES
    ('Checking', 0, NOW(), NOW()),
    ('Savings', 1.0075, NOW(), NOW()),
    ('Money Market', 1.01, NOW(), NOW());

insert into categories
    (categoryDesc, CreatedAt, UpdatedAT)
VALUES
    ('Auto/Transportation', NOW(), NOW()),
    ('Bills/Utilities', NOW(), NOW()),
    ('Business/Office', NOW(), NOW()),
    ('Cash/ATM', NOW(), NOW()),
    ('Credit Card/Loan Payments', NOW(), NOW()),
    ('Entertainment', NOW(), NOW()),
    ('Food/Drink', NOW(), NOW()),
    ('Health', NOW(), NOW()),
    ('Home', NOW(), NOW()),
    ('Insurance/Finacial', NOW(), NOW()),
    ('Miscellaneous', NOW(), NOW()),
    ('Outgoing Transfers', NOW(), NOW()),
    ('Shopping', NOW(), NOW()),
    ('Travel', NOW(), NOW()),
    ('Uncategorized Payments', NOW(), NOW());



INSERT INTO account
    (UserID, accountTypeDesc, transactionDesc, CategoryDesc, Amount, Balance, CreatedAT, UpdatedAt,
    accountTypeID)
VALUES
    (2, 'Checking', 'anime posters from comic store', 'Shopping', 40.44, 100.00, NOW(), NOW(),
        1),
    (1, 'Checking', 'Wells Fargo AutoLoan', 'Credit Card/Loan Payments', 599, 10000.00, NOW(), NOW(),
        1);

INSERT INTO transaction
    (transactionID, transactiondesc, categorydesc, amount, balance, createdAT, UpdatedAT, accountTypeID, CategoryID, UserID, usersID)
VALUES
    (1, 'anime posters from comic store', 'Shopping', 40.44, 100.00, NOW(), NOW(), 1, 12, 2, 2),
    (2, 'Wells Fargo AutoLoan', 'Credit Card/Loan Payments', 599.00, 10000.00, NOW(), NOW(), 1, 5, 1, 1);

