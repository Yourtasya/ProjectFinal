/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - Added the required column `anyNoteForUs` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceYourNeed` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Admin', 'SuperAdmin');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "published",
DROP COLUMN "title",
ADD COLUMN     "anyNoteForUs" TEXT NOT NULL,
ADD COLUMN     "authorEmail" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "serviceYourNeed" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "access_token" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'User';

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
