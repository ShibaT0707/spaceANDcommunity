/*
  Warnings:

  - You are about to drop the column `Category_ID` on the `Space` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Space" DROP CONSTRAINT "Space_Category_ID_fkey";

-- DropIndex
DROP INDEX "Space_Category_ID_idx";

-- DropIndex
DROP INDEX "Space_Space_Reply_ID_idx";

-- DropIndex
DROP INDEX "Space_User_ID_idx";

-- AlterTable
ALTER TABLE "Space" DROP COLUMN "Category_ID";
