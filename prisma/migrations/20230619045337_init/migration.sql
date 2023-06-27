-- CreateTable
CREATE TABLE "EqualUser" (
    "User_ID" SERIAL NOT NULL,
    "Face_img" TEXT,
    "Name" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Birthday" TIMESTAMP(3) NOT NULL,
    "Mail" TEXT NOT NULL,
    "Pass" TEXT NOT NULL,
    "Age" INTEGER NOT NULL,
    "Job" TEXT,
    "Hobby" TEXT,
    "Intro" TEXT,
    "SID" INTEGER,

    CONSTRAINT "EqualUser_pkey" PRIMARY KEY ("User_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "EqualUser_Mail_key" ON "EqualUser"("Mail");
