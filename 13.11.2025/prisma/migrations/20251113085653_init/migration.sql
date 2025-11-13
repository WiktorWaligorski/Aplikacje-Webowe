-- CreateTable
CREATE TABLE `Wpis` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Utworzono` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Edytowano` DATETIME(3) NOT NULL,
    `Tytul` VARCHAR(255) NOT NULL,
    `tresc` VARCHAR(191) NULL,
    `opublikowano` BOOLEAN NOT NULL DEFAULT false,
    `Id_kategorii` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kategoria` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nazwa` VARCHAR(30) NOT NULL,
    `Opis` VARCHAR(191) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Komentarz` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Tresc` VARCHAR(191) NULL,
    `Id_wpisu` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Wpis` ADD CONSTRAINT `Wpis_Id_kategorii_fkey` FOREIGN KEY (`Id_kategorii`) REFERENCES `Kategoria`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Komentarz` ADD CONSTRAINT `Komentarz_Id_wpisu_fkey` FOREIGN KEY (`Id_wpisu`) REFERENCES `Wpis`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
