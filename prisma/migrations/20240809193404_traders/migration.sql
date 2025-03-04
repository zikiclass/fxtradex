-- CreateTable
CREATE TABLE `Traders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trader` VARCHAR(191) NULL,
    `win_rate` VARCHAR(191) NULL,
    `profit_share` VARCHAR(191) NULL,
    `publicID` VARCHAR(191) NULL,
    `date` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserTrader` (
    `userId` INTEGER NOT NULL,
    `traderId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `traderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserTrader` ADD CONSTRAINT `UserTrader_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Register`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTrader` ADD CONSTRAINT `UserTrader_traderId_fkey` FOREIGN KEY (`traderId`) REFERENCES `Traders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
