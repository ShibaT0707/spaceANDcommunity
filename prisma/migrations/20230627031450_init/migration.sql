-- CreateTable
CREATE TABLE "Category" (
    "Category_ID" SERIAL NOT NULL,
    "Category_Content" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("Category_ID")
);

-- CreateTable
CREATE TABLE "Space" (
    "Space_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Category_ID" INTEGER NOT NULL,
    "Space_Reply_ID" INTEGER,
    "Title" TEXT NOT NULL,
    "Space_Img" TEXT,
    "Space_Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Space_pkey" PRIMARY KEY ("Space_ID")
);

-- CreateIndex
CREATE INDEX "Space_User_ID_idx" ON "Space"("User_ID");

-- CreateIndex
CREATE INDEX "Space_Category_ID_idx" ON "Space"("Category_ID");

-- CreateIndex
CREATE INDEX "Space_Space_Reply_ID_idx" ON "Space"("Space_Reply_ID");

-- AddForeignKey
ALTER TABLE "Space" ADD CONSTRAINT "Space_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Space" ADD CONSTRAINT "Space_Space_Reply_ID_fkey" FOREIGN KEY ("Space_Reply_ID") REFERENCES "Space"("Space_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Space" ADD CONSTRAINT "Space_Category_ID_fkey" FOREIGN KEY ("Category_ID") REFERENCES "Category"("Category_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
