-- CreateTable
CREATE TABLE "Key" (
    "Key_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Cipher" TEXT NOT NULL,
    "DeCipher" TEXT NOT NULL,

    CONSTRAINT "Key_pkey" PRIMARY KEY ("Key_ID")
);

-- AddForeignKey
ALTER TABLE "Key" ADD CONSTRAINT "Key_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
