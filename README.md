#Login Page
This Project is a group of components making up a functional authentication page for any website.
I made it for ease of use for future proejects, it has: login, forgot password, signup, private route, and profile page.
The private route, and profile page aren't fully designed since every website will require different styling.
For authentication this site uses Firebase API, this takes care of all authentication, however it does not inclued user storage
That would need to be done with easier a database or FireBase's cloud based solution.

To Run it:

$ git clone repo
$npm install

make a firebase account and go into the auth section and set up authentication.
It will tell you what you want to choose, for auth(google, facebook etc)
Then register your firebase project. This will give you your API keys.
Replace all the keys in the firebase.js file

Then you're good to run it locally

$npm start

You can now play around with the components and make sure everything is working.
Since context us used to see if the user is logged in, you can set up any dynmaic rendering or private rounts.
