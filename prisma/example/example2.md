// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider          = "postgresql"
  url               = env("POSTGRES_PRISMA_URL") // uses connection pooling
  directUrl         = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
}

model Account {
  id                String   @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?  @db.Text
  access_token      String?  @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?  @db.Text
  session_state     String?
  createdAt         DateTime @default(now()) @map(name: "created_at")
  updatedAt         DateTime @default(now()) @map(name: "updated_at")

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@index([userId])
  @@map(name: "accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@map(name: "sessions")
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  createdAt     DateTime  @default(now()) @map(name: "created_at")
  updatedAt     DateTime  @default(now()) @map(name: "updated_at")

  accounts Account[]
  sessions Session[]
  contents Content[]

  @@map(name: "users")
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
  @@map(name: "verification_tokens")
}

model Content {
  id               String   @id @default(cuid())
  prompt           String
  generatedContent String?  @db.Text
  generatedAt      DateTime @default(now()) @map(name: "generated_at")
  userId           String
  user             User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@map(name: "posts")
}
