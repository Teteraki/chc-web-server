require("dotenv").config();
const sdk = require("node-appwrite");
const client = require("./appwrite");

// Initialize the TablesDB service
const tablesDB = new sdk.TablesDB(client);

async function selectAllRows() {
  try {
    // Fetch ALL rows from your table
    const result = await tablesDB.listRows({
      databaseId: process.env.DATABASE_ID,
      tableId: process.env.EVENTS_TABLE_ID,
      queries: [], // empty array = no filters (select all)
    });

    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

//
// DELETE ROW
//
async function deleteRow(rowId) {
  const promise = tablesDB.deleteRow({
    databaseId: process.env.DATABASE_ID,
    tableId: process.env.EVENTS_TABLE_ID,
    rowId: rowId,
  });

  promise.then(
    (response) => {
      console.log("🗑️ Row deleted:", response);
    },
    (error) => {
      console.error("❌ Error deleting row:", error);
    }
  );
}

async function createRow(params) {}

// deleteRow("68e439ff001aa023c973");
