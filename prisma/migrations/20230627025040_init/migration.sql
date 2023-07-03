-- CreateTable
CREATE TABLE "Community_User" (
    "User_ID" INTEGER NOT NULL,
    "User_Name" TEXT NOT NULL,
    "Icon" TEXT,
    "Spesialist_Bool" INTEGER NOT NULL,

    CONSTRAINT "Community_User_pkey" PRIMARY KEY ("User_ID")
);

-- AddForeignKey
ALTER TABLE "Community_User" ADD CONSTRAINT "Community_User_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
