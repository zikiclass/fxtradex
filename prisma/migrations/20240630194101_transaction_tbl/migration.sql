-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `deposit` DOUBLE NOT NULL,
    `profit` DOUBLE NOT NULL,
    `btc` DOUBLE NOT NULL,
    `eth` DOUBLE NOT NULL,
    `bnb` DOUBLE NOT NULL,
    `doge` DOUBLE NOT NULL,
    `atom` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
