/*
  Warnings:

  - You are about to drop the column `User_ID` on the `Space` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Space" DROP CONSTRAINT "Space_User_ID_fkey";

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "User_ID";
