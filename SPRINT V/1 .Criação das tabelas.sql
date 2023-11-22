-- 5. Tipo de Quarto
CREATE TABLE Tipo_Quarto (
    Id_tipo_quarto SERIAL PRIMARY KEY,
    Descricao_tipo_quarto VARCHAR(30) UNIQUE -- Adiciona a restrição UNIQUE
);

-- 6. Status Quarto
CREATE TABLE Status_Quarto (
    Id_status_quarto SERIAL PRIMARY KEY,
    Descricao_status_quarto VARCHAR(15)
);

-- 7. Status Reserva
CREATE TABLE Status_Reserva (
    Id_status_reserva SERIAL PRIMARY KEY,
    Descricao_status_reserva VARCHAR(15) UNIQUE
);

-- 8. Forma de Pagamento
CREATE TABLE Forma_Pagamento (
    Id_forma_pagamento SERIAL PRIMARY KEY,
    Descricao_forma_pagamento VARCHAR(30) UNIQUE
);

-- 2. Quarto Disponivel
CREATE TABLE Quarto_Disponivel (
    Numero_quarto INT PRIMARY KEY,
    Tipo_quarto INT,
    Data_disponivel_reserva DATE,
    Cama_casal BOOLEAN,
    Status_quarto INT,
    FOREIGN KEY (Tipo_quarto) REFERENCES Tipo_Quarto(Id_tipo_quarto),
    FOREIGN KEY (Status_quarto) REFERENCES Status_Quarto(Id_status_quarto)
);

-- 3. Valor Quarto
CREATE TABLE Valor_Quarto (
    Quarto_tipo INT PRIMARY KEY,
    Data_reserva_disponivel DATE,
    Reembolsavel BOOLEAN,
    Valor FLOAT,
    FOREIGN KEY (Quarto_tipo) REFERENCES Tipo_Quarto(Id_tipo_quarto)
);

-- 1. Cadastro do Hospede
CREATE TABLE Cadastro_Hospede (
    Id_hospede SERIAL PRIMARY KEY,
    Nome VARCHAR(30),
    Sobrenome VARCHAR(70),
    CPF VARCHAR(11),
    Telefone VARCHAR(15),
    Email VARCHAR(40),
    Data_nascimento DATE
);

-- 4. Dados Reserva
CREATE TABLE Dados_Reserva (
    Id_reserva SERIAL PRIMARY KEY,
    Hospede_id INT,
    Quarto_id INT,
    Data_inicial_reserva DATE,
    Data_final_reserva DATE,
    Data_reserva_realizada DATE,
    Quantidade_diarias INT,
    Valor FLOAT,
    Valor_Desconto FLOAT,
    Status_reserva INT,
    Pagamento_confirmado BOOLEAN,
    Forma_pagamento INT,
    FOREIGN KEY (Hospede_id) REFERENCES Cadastro_Hospede(id_hospede),
    FOREIGN KEY (Quarto_id) REFERENCES Quarto_Disponivel(Numero_quarto),
    FOREIGN KEY (Status_reserva) REFERENCES Status_Reserva(id_status_reserva),
    FOREIGN KEY (Forma_pagamento) REFERENCES Forma_Pagamento(id_forma_pagamento)
);