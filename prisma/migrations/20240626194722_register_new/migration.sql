/*
  Warnings:

  - You are about to drop the column `name` on the `Register` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Register` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Register` DROP COLUMN `name`,
    ADD COLUMN `accounttype` VARCHAR(191) NOT NULL DEFAULT 'LIVE',
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `country` VARCHAR(191) NULL,
    ADD COLUMN `currency` VARCHAR(191) NOT NULL DEFAULT 'USD',
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `first_name` VARCHAR(255) NULL,
    ADD COLUMN `last_name` VARCHAR(255) NULL,
    ADD COLUMN `mobile` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `state` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Register_email_key` ON `Register`(`email`);
