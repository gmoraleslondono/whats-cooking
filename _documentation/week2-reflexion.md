# Weekly Reflection by team member

## Megumi

### Completed tasks
I continued with researching how to createa Login while using Postgres SQL. I created the backend file called auth.js for authorization and storing the login information. Gloria initialized the app and created the frontned files - I changed some of the hardcoded parts. I also created the database in PgAdmin using Postgres SQL. I made the 'users' table for the login. I also careted the route for /login and added the pool.query code for inserting a new user. I saw a tutorial about using JWT for authentication token so I installed and added the coding. I then added the logic in the frontend Login.tsx file. 

I later saw a tutorial about using bcrypt for hashing passwords and I wanted to try it so I starting working on Register as well.  installed brcypt and added coding, another pool.query code. I added a line of code verifying the hashed password in the /login route.  
### Challenges
I first had a challenge when I tried 'import pg' , I had errors but the terminal has an error message with a suggestion changing to 'import pkg' and it worked. This change did not cause an issue as when installing pg, pkg is installed as well. 
It was a challenge matching the database details in .env file into the server. 

When I tried to check if /login and /register worked on insomnia, I kept getting errors so I added a new route /test-db to get data that was added or if the data was being added after register. I kept getting an error about password not matching, I solved it by making a new server and adding the details correctly. I then got an error on insomnia saying that the host is not found. I kept retyping and changing the host name to match the name on the pgadmin, I changed it to localhost but nothing was working. I copy pasted the .env details from the main and insomnia worked (host name became “you_host_name”). 3 of the routes worked with tokens and hashed password. I could also see that the database in pgadmin got updated as well.
### Learning insights
Learned about JSON Web Token (JWT) - this way the server doesn't need to store sessions and the token contains encoded information abotu the user, verified with a secret. 
Learned about bcrypt - hashes passwords. 
Connecting to local database can be a frustrating session - one simple change connected but it took forever to figure that out. 
### Personal contributions
-Completed First draft of authorization, login and registration. 
-Tried something new with JWT and Bcrypt (still studying and revising)
## Suresh

### Completed tasks

### Challenges

### Learning insights

### Personal contributions

## Riad

### Completed tasks

### Challenges

### Learning insights

### Personal contributions

## Gloria

### Completed tasks

### Challenges

### Learning insights

### Personal contributions
