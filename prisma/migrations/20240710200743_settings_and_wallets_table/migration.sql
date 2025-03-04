-- AlterTable
ALTER TABLE `Register` ADD COLUMN `role` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referral_bonus` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Walletlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `wallet` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Wallets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `walletListId` INTEGER NOT NULL,
    `wallet_address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Wallets` ADD CONSTRAINT `Wallets_walletListId_fkey` FOREIGN KEY (`walletListId`) REFERENCES `Walletlist`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
