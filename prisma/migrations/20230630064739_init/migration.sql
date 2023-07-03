-- CreateTable
CREATE TABLE "Community" (
    "Community_ID" SERIAL NOT NULL,
    "Community_Name" TEXT,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("Community_ID")
);

-- CreateTable
CREATE TABLE "Groups" (
    "Group_ID" SERIAL NOT NULL,
    "Community_ID" INTEGER NOT NULL,
    "Group_Name" TEXT NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Group_Create_Date" TIMESTAMP(3) NOT NULL,
    "Limit_Num" INTEGER,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("Group_ID")
);

-- CreateTable
CREATE TABLE "Tweet" (
    "Tweet_ID" SERIAL NOT NULL,
    "Community_ID" INTEGER NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Tweet_Content" TEXT NOT NULL,
    "Reply_ID" INTEGER,
    "Tweet_Date" TIMESTAMP(3),

    CONSTRAINT "Tweet_pkey" PRIMARY KEY ("Tweet_ID")
);

-- CreateTable
CREATE TABLE "Good" (
    "Good_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Tweet_ID" INTEGER NOT NULL,

    CONSTRAINT "Good_pkey" PRIMARY KEY ("Good_ID")
);

-- CreateTable
CREATE TABLE "Group_Talk" (
    "Group_Talk_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Group_Talk_Contet" TEXT NOT NULL,
    "Best_Answer_Bool" INTEGER,

    CONSTRAINT "Group_Talk_pkey" PRIMARY KEY ("Group_Talk_ID")
);

-- CreateTable
CREATE TABLE "Group_Member" (
    "Group_Join_User_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Group_ID" INTEGER NOT NULL,

    CONSTRAINT "Group_Member_pkey" PRIMARY KEY ("Group_Join_User_ID")
);

-- CreateTable
CREATE TABLE "Group_Talk_List" (
    "Group_Talk_List_ID" SERIAL NOT NULL,
    "Group_Talk_ID" INTEGER NOT NULL,
    "Group_ID" INTEGER NOT NULL,

    CONSTRAINT "Group_Talk_List_pkey" PRIMARY KEY ("Group_Talk_List_ID")
);

-- AddForeignKey
ALTER TABLE "Groups" ADD CONSTRAINT "Groups_Community_ID_fkey" FOREIGN KEY ("Community_ID") REFERENCES "Community"("Community_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Groups" ADD CONSTRAINT "Groups_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "Community_User"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_Reply_ID_fkey" FOREIGN KEY ("Reply_ID") REFERENCES "Tweet"("Tweet_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_Community_ID_fkey" FOREIGN KEY ("Community_ID") REFERENCES "Community"("Community_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "Community_User"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Good" ADD CONSTRAINT "Good_Tweet_ID_fkey" FOREIGN KEY ("Tweet_ID") REFERENCES "Tweet"("Tweet_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Good" ADD CONSTRAINT "Good_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "Community_User"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group_Talk" ADD CONSTRAINT "Group_Talk_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "Community_User"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group_Member" ADD CONSTRAINT "Group_Member_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "Community_User"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group_Member" ADD CONSTRAINT "Group_Member_Group_ID_fkey" FOREIGN KEY ("Group_ID") REFERENCES "Groups"("Group_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group_Talk_List" ADD CONSTRAINT "Group_Talk_List_Group_Talk_ID_fkey" FOREIGN KEY ("Group_Talk_ID") REFERENCES "Group_Talk"("Group_Talk_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group_Talk_List" ADD CONSTRAINT "Group_Talk_List_Group_ID_fkey" FOREIGN KEY ("Group_ID") REFERENCES "Groups"("Group_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
