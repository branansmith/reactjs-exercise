This is a react backend exercise that takes in sample json data from an api and gets specific user information such as their address, state, zip code, and email. This program lists all available users and all available data for each user. If any json field is blank, the data will not be displayed. 

# Before running the program

Make sure json-server is currently installed on your local machine:

```bash
npm install json-server
```

Once installed, run the json-server:

```bash
npx json-server --watch ./example.json --port 3001 --routes routes.json
```

Once running, navigate to the react-app project folder:

```bash
cd react-app
```

Install dependencies inside react application folder:

```bash
npm install
```

Run the program:

```bash
npm run dev
```

You will see a response along the lines of:

```bash
Local: http://localhost:5173
```

Type this into your search browser and you will be met with a home page.

# Once the program is running

There will be a list of all users retrieved from the json server's api response.

Click on any user to see additional details about them, such as address, their unique id, and their email. 





