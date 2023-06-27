-- CreateTable
CREATE TABLE "Matching" (
    "Matching_ID" SERIAL NOT NULL,
    "Matching_User_ID" INTEGER NOT NULL,
    "Matching_opponent_User_ID" INTEGER NOT NULL,
    "Matching_Bool" INTEGER NOT NULL,

    CONSTRAINT "Matching_pkey" PRIMARY KEY ("Matching_ID")
);

-- AddForeignKey
ALTER TABLE "Matching" ADD CONSTRAINT "Matching_Matching_User_ID_fkey" FOREIGN KEY ("Matching_User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matching" ADD CONSTRAINT "Matching_Matching_opponent_User_ID_fkey" FOREIGN KEY ("Matching_opponent_User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
