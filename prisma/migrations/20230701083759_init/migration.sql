/*
  Warnings:

  - You are about to drop the `Group_Talk_List` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Group_ID` to the `Group_Talk` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Group_Talk_List" DROP CONSTRAINT "Group_Talk_List_Group_ID_fkey";

-- DropForeignKey
ALTER TABLE "Group_Talk_List" DROP CONSTRAINT "Group_Talk_List_Group_Talk_ID_fkey";

-- AlterTable
ALTER TABLE "Group_Talk" ADD COLUMN     "Group_ID" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Group_Talk_List";

-- AddForeignKey
ALTER TABLE "Group_Talk" ADD CONSTRAINT "Group_Talk_Group_ID_fkey" FOREIGN KEY ("Group_ID") REFERENCES "Groups"("Group_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
