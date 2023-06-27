-- CreateTable
CREATE TABLE "Assessment" (
    "Assessment_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Matching_ID" INTEGER NOT NULL,
    "Matching_User_Assessment" INTEGER,
    "Matching_Opponent_User_Assessment" INTEGER,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("Assessment_ID")
);

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_Matching_ID_fkey" FOREIGN KEY ("Matching_ID") REFERENCES "Matching"("Matching_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
