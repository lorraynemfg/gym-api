/*
  Warnings:

  - Added the required column `categoria` to the `alimentos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_alimentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "tempo_preparo" TEXT NOT NULL,
    "rendimento" TEXT NOT NULL,
    "gramas_por_porcao" TEXT NOT NULL
);
INSERT INTO "new_alimentos" ("gramas_por_porcao", "id", "imagem", "name", "rendimento", "tempo_preparo") SELECT "gramas_por_porcao", "id", "imagem", "name", "rendimento", "tempo_preparo" FROM "alimentos";
DROP TABLE "alimentos";
ALTER TABLE "new_alimentos" RENAME TO "alimentos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
