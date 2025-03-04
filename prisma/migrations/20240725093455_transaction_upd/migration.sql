/*
  Warnings:

  - Made the column `deposit` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profit` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `btc` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eth` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bnb` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `doge` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `atom` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `referral` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Transaction` MODIFY `deposit` DOUBLE NOT NULL,
    MODIFY `profit` DOUBLE NOT NULL,
    MODIFY `btc` DOUBLE NOT NULL,
    MODIFY `eth` DOUBLE NOT NULL,
    MODIFY `bnb` DOUBLE NOT NULL,
    MODIFY `doge` DOUBLE NOT NULL,
    MODIFY `atom` DOUBLE NOT NULL,
    MODIFY `referral` DOUBLE NOT NULL;
