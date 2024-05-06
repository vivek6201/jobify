/*
  Warnings:

  - You are about to drop the `Applications` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Applications" DROP CONSTRAINT "Applications_jobsId_fkey";

-- DropTable
DROP TABLE "Applications";

-- CreateTable
CREATE TABLE "Responses" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "jobsId" TEXT,

    CONSTRAINT "Responses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Responses_userId_key" ON "Responses"("userId");

-- AddForeignKey
ALTER TABLE "Responses" ADD CONSTRAINT "Responses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Responses" ADD CONSTRAINT "Responses_jobsId_fkey" FOREIGN KEY ("jobsId") REFERENCES "Jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
