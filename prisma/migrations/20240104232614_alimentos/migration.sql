-- CreateTable
CREATE TABLE "alimentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "tempo_preparo" TEXT NOT NULL,
    "rendimento" TEXT NOT NULL,
    "gramas_por_porcao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ingradientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ingradientes" TEXT NOT NULL,
    "preparo" TEXT,
    "alimento_id" INTEGER NOT NULL,
    CONSTRAINT "ingradientes_alimento_id_fkey" FOREIGN KEY ("alimento_id") REFERENCES "alimentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Informacoes_nutricionais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "calorias" TEXT NOT NULL,
    "carboidratos" TEXT NOT NULL,
    "proteinas" TEXT NOT NULL,
    "gorduras_totais" TEXT NOT NULL,
    "gorduras_saturadas" TEXT NOT NULL,
    "gorduras_trans" TEXT NOT NULL,
    "fibras" TEXT NOT NULL,
    "sodio" TEXT NOT NULL,
    "informacoes_id" INTEGER NOT NULL,
    CONSTRAINT "Informacoes_nutricionais_informacoes_id_fkey" FOREIGN KEY ("informacoes_id") REFERENCES "alimentos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
