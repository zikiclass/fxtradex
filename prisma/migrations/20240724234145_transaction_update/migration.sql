/*
  Warnings:

  - You are about to alter the column `deposit` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `profit` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `btc` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `eth` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `bnb` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `doge` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `atom` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `referral` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Transaction` MODIFY `deposit` VARCHAR(191) NULL,
    MODIFY `profit` VARCHAR(191) NULL,
    MODIFY `btc` VARCHAR(191) NULL,
    MODIFY `eth` VARCHAR(191) NULL,
    MODIFY `bnb` VARCHAR(191) NULL,
    MODIFY `doge` VARCHAR(191) NULL,
    MODIFY `atom` VARCHAR(191) NULL,
    MODIFY `referral` VARCHAR(191) NULL;
