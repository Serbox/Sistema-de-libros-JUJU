import sql from 'mssql';
import "dotenv/config";


const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,     
  database: process.env.DATABASE,
  port: Number(process.env.DB_PORT),
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

//console.log('CONFIG QUE USO:', config);



export const getConnection1 = async () => {
    try {
        const pool = await sql.connect(config)

         //const result = await pool.request().query('SELECT GETDATE()');

           // console.log('SQL respondió:', result);
        return pool;
        
    } catch (error) {
        console.error(error)
    }
}

export const getConnection = async (query, params = {}) =>{
  const pool = await sql.connect(config);
  const request = pool.request();

  for (const [key, value] of Object.entries(params)) {
    request.input(key, value);
  }

  const result = await request.query(query);
  return result;
}
