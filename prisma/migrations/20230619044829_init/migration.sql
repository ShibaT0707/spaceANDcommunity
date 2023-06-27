/*
  Warnings:

  - A unique constraint covering the columns `[Mail]` on the table `EqualUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EqualUser_Mail_key" ON "EqualUser"("Mail");
