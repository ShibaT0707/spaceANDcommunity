/*
  Warnings:

  - Added the required column `User_ID` to the `Space` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Space" ADD COLUMN     "User_ID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Space" ADD CONSTRAINT "Space_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
