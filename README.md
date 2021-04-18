# Notion Take Home Excercise

## How it works and how to run

My program is a react app set up with [Create React App](https://github.com/facebook/create-react-app).

It consists of an async function called `addEntry` that gets the user's input from the state (useState hook), validates it and performs an axios POST request to the 'https://api.notion.com/v1/pages' endpoint. Depending on the server's response, it either displays a success or failure message.

To run the program, first install its dependencies by running:

### `yarn install`

Then run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Things I got stuck on and how I resolved them

There were two main things I got stuck on, getting the database id and a CORS error.

For the database id, the guide wasn't very explicit about having to copy the link for the table, paste it in the browser and grab it from there. It says: "By copying the database ID in our browser's URL, we can now retrieve this database via the API." I figured it out by reasoning through it and then once I saw you could get a link for the specific table, the instructions made sense. From here, I tried both substrings that look like ids from the URL.

For the CORS error, I Google the error: "Access to XMLHttpRequest at 'https://api.notion.com/v1/pages' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status." and took the following steps:
1. First I tried to add a new header in the request: 'Access-Control-Allow-Origin': '*'. This didn't work either. Since I was able to successfully perform multiple requests using Postman, I realized the problem is most likely the server rejecting requests from my browser due to safety concerns. My current hypothesis: The server needs to grant my origin 'http://localhost:3000' access.
2. So I emailed Gabri (my recruiter) and explained the issue with as much detail as I could to see if the Eng team had any feedback.

## Suggestions for API Documentation

Overall, it's looking really good. I am very impressed by how fast I started using the API. One thing I might improve (albeit small) is making certain steps like this more explicit in the steps that need to be taken:

"By copying the database ID in our browser's URL, we can now retrieve this database via the API."

⇒ "Hover over the table and click on the three dot icon. Copy the link and paste it in your browser. Copy the database ID and ..."

## List of open source libraries I chose to use

- React for building the web UI
- Axios for networking
- Blueprint for UI components (InputGroup for user input and Toast for displaying feedback)

