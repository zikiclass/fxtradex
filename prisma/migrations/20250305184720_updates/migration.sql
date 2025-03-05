/*
  Warnings:

  - You are about to drop the column `walletListId` on the `Wallets` table. All the data in the column will be lost.
  - You are about to drop the `Walletlist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `wallet` to the `Wallets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Wallets` DROP FOREIGN KEY `Wallets_walletListId_fkey`;

-- AlterTable
ALTER TABLE `Wallets` DROP COLUMN `walletListId`,
    ADD COLUMN `wallet` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Walletlist`;
