# Before running the program

Make sure json-server is currently installed on your local machine:

```bash
npm install json-server
```

Type this command to install all other needed dependencies:

```bash
npm install
```

Once installed, run the json-server:

```bash
npx json-server --watch ./example.json --port 3001 --routes routes.json
```

Once running, navigate to the react-app project folder, and run the application:

```bash
cd react-app
```

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





