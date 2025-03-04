/*
  Warnings:

  - You are about to alter the column `userId` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Transaction` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Register`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
