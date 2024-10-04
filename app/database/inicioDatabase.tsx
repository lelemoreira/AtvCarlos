import { type SQLiteDatabase }  from 'expo-sqlite';

export async function inicializeDatabase(database: SQLiteDatabase){
    await database.execAsync(
            ` 
            -- DROP TABLE IF EXISTS usuarios;
            -- DELETE FROM usuarios;

            CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT NOT NULL,
                senha TEXT NOT NULL,
                cep TEXT,
                endereco TEXT,
                numero TEXT,
                complemento TEXT,
                telefone TEXT,
                selectedPlan TEXT

        );

         -- INSERT INTO usuarios (nome,email,senha,cep,endereco,numero,complemento,telefone,selectedPlan) VALUES ('leticia moreira','leticiamoreira@gmail.com','18102006','192983','rua jose alves da rocha','300','14996279404','Outros');

        `
    );
}

