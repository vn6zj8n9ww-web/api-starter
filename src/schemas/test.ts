import { pgTable, varchar, serial, timestamp } from "drizzle-orm/pg-core";


export const testUsers = pgTable('testUsers', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255}).notNull(),
    email: varchar('email', { length: 255}).notNull(),
    password: varchar('password', { length: 255}).notNull(),
    role: varchar('role', { length: 50}).notNull().default('testUser'),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp().defaultNow().notNull(),
})