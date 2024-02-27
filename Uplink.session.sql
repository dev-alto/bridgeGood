SELECT * FROM accounts;

CREATE TYPE JobListing AS (
    title TEXT,
    description TEXT,
    salaryUpper TEXT,
    salaryMedian TEXT
    tags VARCHAR(20)[],
);  

CREATE TABLE jobListings (
    id SERIAL PRIMARY KEY,
    details JobListing
);

INSERT INTO jobListings (details) 
VALUES (
    ROW (
        'UI/UX Designer',
        'Developers who are passionate about creating elegant, simple, and intuitive user interfaces. The ideal candidate will have a keen eye for design aesthetics and a strong understanding of user-centered design principles.',
        '$76,485',
        '$55,972',
        ARRAY["User Interface", "User Experience"]
    ),
    ROW (
        'Web Developer',
        "Programmers who create websites for the World Wide Web. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website's performance and capacity.",
        '$108,550',
        '$78,580',
        ARRAY["User Interface", ""]
    ),
    ROW (
        ' Developer',
        "Programmers who create websites for the World Wide Web. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website's performance and capacity.",
        '$108,550',
        '$78,580',
        ARRAY["Creative", "Digital Art"]
    ),
);