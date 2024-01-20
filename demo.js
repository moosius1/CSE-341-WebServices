const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://imoe61:8141668!An@first-database.yc4ev7y.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
    await client.connect();

    await listDatabases(client);

    await findOneUserByName(client, "Lindy");

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function findOneUserByName(client, nameOfUser) {
    const result = await client.db("test-contacts").collection("contacts").findOne({ firstName: nameOfUser});

    if (result) {
        console.log (`Found a document:`);
        console.log(result);
    } else{
        console.log('No documents found');
    }

}


async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db =>{
        console.log(`- ${db.name}`);
    })
}