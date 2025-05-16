Notes (https://notes-front-f2y9.onrender.com/) is a basic, responsive, real-time application made with:
  - Typescript
  - Socket.io
  - Express
  - React
  - Postgresql
  - Tailwindcss

In this application the users can add notes, with what ever they want, and it will be saved on a postgresql data base, but the users won't be able to delete the notes.
I used a web socket; so when a user publish a note it will fire the signal to all the connected clients, so they can see the new note without needing to update the website.

This is the main page with some notes:
![image](https://github.com/user-attachments/assets/21447015-2cba-4a00-b5de-002d2835897b)

And this is the "create note" interface:
![image](https://github.com/user-attachments/assets/d7379d4f-4b2d-424e-b371-9defcf009ea5)

The link may not be online or the it may take 50 seconds to show all the notes if nobody has been used the app in a while, because i used a free deployment service to deploy the application (Render.com) 
