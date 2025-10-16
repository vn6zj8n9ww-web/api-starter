import 'dotenv/config'

export default {
    schema: './src/schemas/*.ts',
    output: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    }
}