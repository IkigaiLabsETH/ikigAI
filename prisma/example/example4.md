//MongoDB example

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Token {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  token String
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  username  String   @unique
  avatar    String?
  email     String   @unique
  password  String
  queries   Query[]
  apiKey    String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Query {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  data      String
  isUser    Boolean
  User      User?    @relation(fields: [userId], references: [id])
  userId    String?  @db.ObjectId
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
