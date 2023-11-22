-- Adicionando dados à tabela Tipo_Quarto
INSERT INTO Tipo_Quarto (Descricao_tipo_quarto) VALUES 
    ('Single'),
    ('Duplo'),
    ('Triplo'),
    ('Suíte Luxo');

SELECT * FROM tipo_quarto -- Vefica se foi inserido

-- Adicionando dados à tabela Status_Quarto
INSERT INTO Status_Quarto (Descricao_status_quarto) VALUES 
    ('Disponível'),
    ('Ocupado'),
    ('Manutenção');
   
SELECT * FROM Status_Quarto  -- Vefica se foi inserido

-- Adicionando dados à tabela Status_Reserva
INSERT INTO Status_Reserva (Descricao_status_reserva) VALUES 
    ('Pendente'),
    ('Confirmada'),
    ('Cancelada');
    
SELECT * FROM Status_Reserva  -- Vefica se foi inserido

-- Adicionando dados à tabela Forma_Pagamento
INSERT INTO Forma_Pagamento (Descricao_forma_pagamento) VALUES 
    ('Cartão de Crédito'),
    ('Cartão de Débito'),
    ('Dinheiro'),
    ('Pix');

SELECT * FROM Forma_Pagamento  -- Vefica se foi inserido

-- Adicionando dados à tabela Quarto_Disponivel
INSERT INTO Quarto_Disponivel (Numero_quarto, Tipo_quarto, Data_disponivel_reserva, Cama_casal, Status_quarto) VALUES 
    (101, 1, '2023-11-20', true, 1),
    (201, 2, '2023-11-20', false, 1),
    (301, 3, '2023-11-21', true, 1),
    (401, 4, '2023-11-21', false, 1);

SELECT * FROM Quarto_Disponivel  -- Vefica se foi inserido

-- Adicionando dados à tabela Valor_Quarto
INSERT INTO Valor_Quarto (Quarto_tipo, Data_reserva_disponivel, Reembolsavel, Valor) VALUES 
    (1, '2023-11-20', true, 150.00),
    (2, '2023-11-20', true, 200.00),
    (3, '2023-11-21', true, 250.00),
    (4, '2023-11-21', false, 500.00);
    
SELECT * FROM Valor_Quarto  -- Vefica se foi inserido

-- Adicionando dados à tabela Cadastro_Hospede
INSERT INTO Cadastro_Hospede (Nome, CPF, Telefone, Email, Data_nascimento) VALUES 
    ('João Silva', '12345678909', '(11) 98765-4321', 'joao.silva@email.com', '1990-01-15'),
    ('Maria Oliveira', '98765432109', '(21) 98765-1234', 'maria.oliveira@email.com', '1985-05-20');

SELECT * FROM Cadastro_Hospede  -- Vefica se foi inserido

-- Adicionando dados à tabela Dados_Reserva
INSERT INTO Dados_Reserva (Hospede_id, Quarto_id, Data_inicial_reserva, Data_final_reserva, Data_reserva_realizada, Quantidade_diarias, Valor, Valor_Desconto, Status_reserva, Pagamento_confirmado, Forma_pagamento) VALUES 
    (1, 101, '2023-11-22', '2023-11-25', '2023-11-20', 3, 400.00, 0.00, 1, true, 1),
    (2, 201, '2023-11-23', '2023-11-25', '2023-11-21', 2, 300.00, 50.00, 2, false, 2);

SELECT * FROM Dados_Reserva  -- Vefica se foi inserido