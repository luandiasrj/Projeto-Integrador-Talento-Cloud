-- 5. Tipo de Quarto
CREATE TABLE Tipo_Quarto (
    Id_tipo_quarto SERIAL PRIMARY KEY,
    Descricao_tipo_quarto VARCHAR(30) UNIQUE -- Adiciona a restrição UNIQUE
);

-- Adicionando dados à tabela Tipo_Quarto
INSERT INTO Tipo_Quarto (Descricao_tipo_quarto) VALUES 
    ('Single'),
    ('Duplo'),
    ('Triplo'),
    ('Suíte Luxo');

SELECT * FROM tipo_quarto -- Vefica se foi inserido

-- 6. Status Quarto
CREATE TABLE Status_Quarto (
    Id_status_quarto SERIAL PRIMARY KEY,
    Descricao_status_quarto VARCHAR(15)
);

-- Adicionando dados à tabela Status_Quarto
INSERT INTO Status_Quarto (Descricao_status_quarto) VALUES 
    ('Disponível'),
    ('Ocupado'),
    ('Manutenção');
   
SELECT * FROM Status_Quarto  -- Vefica se foi inserido

-- 7. Status Reserva
CREATE TABLE Status_Reserva (
    Id_status_reserva SERIAL PRIMARY KEY,
    Descricao_status_reserva VARCHAR(15) UNIQUE
);

-- Adicionando dados à tabela Status_Reserva
INSERT INTO Status_Reserva (Descricao_status_reserva) VALUES 
    ('Pendente'),
    ('Confirmada'),
    ('Cancelada');
    
SELECT * FROM Status_Reserva  -- Vefica se foi inserido

-- 8. Forma de Pagamento
CREATE TABLE Forma_Pagamento (
    Id_forma_pagamento SERIAL PRIMARY KEY,
    Descricao_forma_pagamento VARCHAR(30) UNIQUE
);

-- Adicionando dados à tabela Forma_Pagamento
INSERT INTO Forma_Pagamento (Descricao_forma_pagamento) VALUES 
    ('Cartão de Crédito'),
    ('Cartão de Débito'),
    ('Dinheiro'),
    ('Pix');

SELECT * FROM Forma_Pagamento  -- Vefica se foi inserido


-- 2. Quarto Disponivel
-- Adicionei a tabela Tipo_Quarto e Status_Quarto para garantir que as chaves estrangeiras sejam referenciadas corretamente.
CREATE TABLE Quarto_Disponivel (
    Numero_quarto INT PRIMARY KEY,
    Tipo_quarto INT,
    Data_disponivel_reserva DATE,
    Cama_casal BOOLEAN,
    Status_quarto INT,
    FOREIGN KEY (Tipo_quarto) REFERENCES Tipo_Quarto(Id_tipo_quarto),
    FOREIGN KEY (Status_quarto) REFERENCES Status_Quarto(Id_status_quarto)
);

-- Adicionando dados à tabela Quarto_Disponivel
INSERT INTO Quarto_Disponivel (Numero_quarto, Tipo_quarto, Data_disponivel_reserva, Cama_casal, Status_quarto) VALUES 
    (101, 1, '2023-11-20', true, 1),
    (201, 2, '2023-11-20', false, 1),
    (301, 3, '2023-11-21', true, 1),
    (401, 4, '2023-11-21', false, 1);

SELECT * FROM Quarto_Disponivel  -- Vefica se foi inserido

-- 3. Valor Quarto
-- Adicionei a tabela Tipo_Quarto para garantir que a chave estrangeira seja referenciada corretamente.
CREATE TABLE Valor_Quarto (
    Quarto_tipo INT PRIMARY KEY,
    Data_reserva_disponivel DATE,
    Reembolsavel BOOLEAN,
    Valor FLOAT,
    FOREIGN KEY (Quarto_tipo) REFERENCES Tipo_Quarto(Id_tipo_quarto)
);

-- Adicionando dados à tabela Valor_Quarto
INSERT INTO Valor_Quarto (Quarto_tipo, Data_reserva_disponivel, Reembolsavel, Valor) VALUES 
    (1, '2023-11-20', true, 150.00),
    (2, '2023-11-20', true, 200.00),
    (3, '2023-11-21', true, 250.00),
    (4, '2023-11-21', false, 500.00);
    
SELECT * FROM Valor_Quarto  -- Vefica se foi inserido

-- 1. Cadastro do Hospede
-- Alterei o tipo de dado do CPF para VARCHAR(11), pois o CPF é melhor representado como uma string.
-- Alterei o tipo de dado do telefone para VARCHAR(15), para acomodar diferentes formatos de números de telefone.
CREATE TABLE Cadastro_Hospede (
    Id_hospede SERIAL PRIMARY KEY,
    Nome VARCHAR(100),
    CPF VARCHAR(11),
    Telefone VARCHAR(15),
    Email VARCHAR(40),
    Data_nascimento DATE
);


-- Adicionando dados à tabela Cadastro_Hospede
INSERT INTO Cadastro_Hospede (Nome, CPF, Telefone, Email, Data_nascimento) VALUES 
    ('João Silva', '12345678909', '(11) 98765-4321', 'joao.silva@email.com', '1990-01-15'),
    ('Maria Oliveira', '98765432109', '(21) 98765-1234', 'maria.oliveira@email.com', '1985-05-20');

SELECT * FROM Cadastro_Hospede  -- Vefica se foi inserido


-- 4. Dados Reserva
-- Alterei o tipo de dado de Status_reserva para VARCHAR(15) para garantir compatibilidade com a tabela Status_Reserva.
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
    Forma_pagamento INT, -- Alterado para VARCHAR(15) para corresponder à tabela Forma_Pagamento
    FOREIGN KEY (Hospede_id) REFERENCES Cadastro_Hospede(id_hospede),
    FOREIGN KEY (Quarto_id) REFERENCES Quarto_Disponivel(Numero_quarto),
    FOREIGN KEY (Status_reserva) REFERENCES Status_Reserva(id_status_reserva),
    FOREIGN KEY (Forma_pagamento) REFERENCES Forma_Pagamento(id_forma_pagamento) -- Alterado para referenciar pela descrição da forma de pagamento
);

-- Adicionando dados à tabela Dados_Reserva
INSERT INTO Dados_Reserva (Hospede_id, Quarto_id, Data_inicial_reserva, Data_final_reserva, Data_reserva_realizada, Quantidade_diarias, Valor, Valor_Desconto, Status_reserva, Pagamento_confirmado, Forma_pagamento) VALUES 
    (1, 101, '2023-11-22', '2023-11-25', '2023-11-20', 3, 400.00, 0.00, 1, true, 1),
    (2, 201, '2023-11-23', '2023-11-25', '2023-11-21', 2, 300.00, 50.00, 2, false, 2);
SELECT * FROM Dados_Reserva  -- Vefica se foi inserido