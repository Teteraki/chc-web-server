const sdk = require("node-appwrite");

const client = new sdk.Client();

const tablesDB = new sdk.TablesDB(client);

client.setEndpoint(process.env.APPWRITE_ENDPOINT).setProject(process.env.APPWRITE_PROJECT_ID).setKey(process.env.APPWRITE_API_KEY);
