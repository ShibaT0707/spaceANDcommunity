/*
  Warnings:

  - A unique constraint covering the columns `[User_ID]` on the table `Space` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Space_User_ID_key" ON "Space"("User_ID");
