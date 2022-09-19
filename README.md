## Submission for Expeditors coding exercise 
Author: John Naden
https://github.com/nadenjohn/johnnaden-coding-exercise

----------------------------------------------------------------
### Assignment Summary 
Requirements:

Write a standalone executable or script using the language of your preference (Java is the primary dev language at Expeditors).  Given the provided input data, print the expected output to the console or write to a text file.

Input data:

"Dave","Smith","123 main st.","seattle","wa","43"

"Alice","Smith","123 Main St.","Seattle","WA","45"

"Bob","Williams","234 2nd Ave.","Tacoma","WA","26"

"Carol","Johnson","234 2nd Ave","Seattle","WA","67"

"Eve","Smith","234 2nd Ave.","Tacoma","WA","25"

"Frank","Jones","234 2nd Ave.","Tacoma","FL","23"

"George","Brown","345 3rd Blvd., Apt. 200","Seattle","WA","18"

"Helen","Brown","345 3rd Blvd. Apt. 200","Seattle","WA","18"

"Ian","Smith","123 main st ","Seattle","Wa","18"

"Jane","Smith","123 Main St.","Seattle","WA","13"

Expected output:

Each household and number of occupants, followed by:

Each First Name, Last Name, Address and Age sorted by Last Name then First Name where the occupant(s) is older than 18

----------------------------------------------------------------
### Goal
Create a record of households followed by the adult occupants(age >= 18).

----------------------------------------------------------------
### Approach
**Code** 
- Utilized Javascript code and Node.js to execute from the command line.
- Coppied input data into a local .csv file (data2.csv)
- Utilized native Node.js module 'fs' to open datastream from local saved file
- Utilized native Node.js module 'readline' to allow my code to digest datastream one line at a time
- Logged final output to console

**Testing**
- Installed Jest for unit testing 
- Tested functions with returned and resolved(async) values

**Assumptions**
- "Household" = shared address
- <p>Expected Output:<br>
    Household<br>
        -Adult occupants(s)<br>
    Household<br>
        -Adult occupants(s)<p>
