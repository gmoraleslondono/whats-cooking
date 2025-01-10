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
-learned about brcypt and jwt. 
-sometimes the local database does not get connect even if it worked before. (refreshing and retyping helped)
### Personal contributions
-finished first draft for login and register.
## Suresh

### Completed tasks
Gloria initialized the app and created front end files. I have created ingredients.js file then made changes in index.js file as well. 
### Challenges
Developing a recipe cooking application can present various challenges, depending on the complexity of the app and its features. I was getting errors when i run the application then i have added .env file the both front end and back end then its works fine. 
### Learning insights
Learned how to fetch the data using api. 
### Personal contributions
Completed first task by creating ingredients.js file.

## Riad

### Completed tasks
Integrated backend API for fetching, adding, and removing favorite meals.

### Challenges
Managing state updates dynamically after removing a favorite.
Navigating between components with React Router.

### Learning insights
Strengthened skills in state management and frontend-backend integration.

### Personal contributions

## Gloria

### Completed tasks

- Worked on the frontend and styling of the project.
- Reviewed and merged Suresh's pull request, making the "I have on my fridge" button backend ready.
- Completed the backend for the "Suggest me something!" button and merged it to main.
- Reviewed Megumi's pull requests.

### Challenges

- The login and favorites section styling is pending as it depends on the completion and merging of Riad's and Megumi's tasks.

### Learning insights

- Improved skills in frontend development and styling.
- Gained experience in reviewing and merging pull requests.
- Learned the importance of coordinating with team members to ensure smooth integration of different parts of the project.

### Personal contributions

- Contributed to the frontend development and styling of the project.
- Ensured the backend for the "Suggest me something!" button is completed and merged.
- Facilitated progress by reviewing and merging Suresh's pull request.
- Coordinated with team members to plan for the integration of their tasks.
