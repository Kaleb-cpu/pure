import 'dotenv/config';
import sql from 'mssql';

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
      }
}

// Global error handler
sql.on('error', err => {
    console.error('SQL error', err);
});

async function dbConnect(query, params = []) {
    try {
        console.log("Trying to connect to azure server...")
        await sql.connect(config)
        console.log("Connected to azure server.")
        
        const request = new sql.Request();
        if (params){
            params.forEach(param => {
                request.input(param.name, param.type, param.value);
            });
        }

        const result = await request.query(query);
        return result;
        // setTimeout(
        //     () => {console.log('oops :) disconnected due to timeout.')}, config.pool.idleTimeoutMillis
        // )
    }
    catch (err){
        console.log(err)
    }finally {
        sql.close();
    }
}

export { dbConnect, sql };
// dbConnect();
