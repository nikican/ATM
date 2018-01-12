# ATM

1. run "npm install"
2. run "npm start" to start server on port 8080

Only integer values are permited (negative values and values starting with 0 will produce validation error).
Validation is done "server side" as well as on frontend.
All entiries are sanitized.

There is only 10 of each of notes/coins at the ATM's initialization.
Withdrawn cash will be distributed in up to 3 slots (rows in appropriate output screen) depending on their type and size.

