USE stash;

INSERT INTO user
    (firstname, lastname, email, createdAT, UpdatedAt)
VALUES
    ('Trent', 'Cooper', 'trent@trilogy.com', NOW(), NOW()),
    ('Daniel', 'Olivas', 'me@danielolivas.net', NOW(), NOW()),
    ('Dan', 'Shook', 'shook.dan@gmail.com', NOW(), NOW()),
    ('Andrew', 'Nowlin', 'flyspark@cox.net', NOW(), NOW()),
    ('Bon', 'Silvallana', 'bon@idontknowhisemail.com', NOW(), NOW());

INSERT INTO accountType
    (accountTypeDesc, interestRate, createdAt, UpdatedAT)
VALUES
    ('Checking', 0, NOW(), NOW()),
    ('Savings', 1.0075, NOW(), NOW()),
    ('Money Market', 1.01, NOW(), NOW());

INSERT INTO categories
    (categoryDesc, CreatedAt, UpdatedAT)
VALUES
    ('Auto/Transportation', NOW(), NOW()),
    ('Utilities', NOW(), NOW()),
    ('Business Expense', NOW(), NOW()),
    ('Cash Withdrawal', NOW(), NOW()),
    ('Credit Card/Loan Payments', NOW(), NOW()),
    ('Entertainment', NOW(), NOW()),
    ('Food/Drink', NOW(), NOW()),
    ('Health', NOW(), NOW()),
    ('Home', NOW(), NOW()),
    ('Insurance', NOW(), NOW()),
    ('Miscellaneous', NOW(), NOW()),
    ('Outgoing Transfers', NOW(), NOW()),
    ('Shopping', NOW(), NOW()),
    ('Travel', NOW(), NOW()),
    ('Emergency Expense', NOW(), NOW()),
    -- ('Uncategorized Payments', NOW(), NOW());  'Uncategorized' categorizes it. - DLO

INSERT INTO account
    (UserID, accountTypeDesc, transactionDesc, CategoryDesc, Amount, Balance, CreatedAT, UpdatedAt,
    accountTypeID)
VALUES
    (2, 'Checking', 'Mortgage Payment', 'Home', 1200, 160000, NOW(), NOW(), 1),
    (2, 'Checking', 'Salt River Project', 'Utilities', 350, 0, NOW(), NOW(), 1),
    (2, 'Checking', 'City of Phoenix', 'Utilities', 80, 0, NOW(), NOW(), 1),
    (1, 'Checking', 'Wells Fargo AutoLoan', 'Credit Card/Loan Payments', 300, 10000, NOW(), NOW(), 1),
    (2, 'Checking', 'Verizon Wireless', 'Utilities', 220, 0, NOW(), NOW(), 1),
    (2, 'Checking', 'Cox Communication', 'Utilities', 120, 0, NOW(), NOW(), 1),
    (2, 'Checking', 'Breakfast w/ Bon @ IHOP', 'Food/Drink', 25, 0, NOW(), NOW(), 1),
    (1, 'Checking', 'Emergency Room (Food Poisoning)', 'Emergency Expense', 400, 0, NOW(), NOW(), 1);

INSERT INTO transaction
    (transactionID, transactiondesc, categorydesc, amount, balance, createdAT, UpdatedAT, accountTypeID, CategoryID, UserID, usersID)
VALUES
    (1, 'Mortgage Payment', 'Home', 1200, 160000, NOW(), NOW(), 1, 12, 2, 2),
    (2, 'Salt River Project', 'Utilities', 350, 0, NOW(), NOW(), 1, 12, 2, 2),
    (3, 'City of Phoenix', 'Utilities', 80, 0, NOW(), NOW(), 1, 12, 2, 2),
    (4, 'Wells Fargo AutoLoan', 'Credit Card/Loan Payments', 300, 10000, NOW(), NOW(), 1, 5, 1, 1),
    (5, 'Verizon Wireless', 'Utilities', 220, 0, NOW(), NOW(), 1, 12, 2, 2),
    (6, 'Cox Communication', 'Utilities', 120, 0, NOW(), NOW(), 1, 12, 2, 2),
    (7, 'Breakfast w/ Bon @ IHOP', 'Food/Drink', 25, 0, NOW(), NOW(), 1, 12, 2, 2),
    (8, 'Emergency Room (Food Poisoning)', 'Emergency Expense', 400, 0, NOW(), NOW(), 1, 5, 1, 1);


