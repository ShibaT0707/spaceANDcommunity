-- CreateTable
CREATE TABLE "Talk" (
    "Matching_Talk_ID" SERIAL NOT NULL,
    "Matching_ID" INTEGER NOT NULL,
    "Matching_Talk_Content" TEXT NOT NULL,
    "User_ID" INTEGER NOT NULL,

    CONSTRAINT "Talk_pkey" PRIMARY KEY ("Matching_Talk_ID")
);

-- AddForeignKey
ALTER TABLE "Talk" ADD CONSTRAINT "Talk_Matching_ID_fkey" FOREIGN KEY ("Matching_ID") REFERENCES "Matching"("Matching_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Talk" ADD CONSTRAINT "Talk_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
