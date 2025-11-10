-- CREATE DATABASE Libros
 USE Libros

--  CREATE TABLE Estados (
--      Id int IDENTITY(1,1) PRIMARY KEY,
--      Nombre nvarchar(50) NOT NULL,
--      FechaCreacion datetime NOT NULL
--  )

-- INSERT INTO Estados (Nombre, FechaCreacion)
-- VALUES ('Disponible', GETDATE()),
-- ('Reservado', GETDATE())

-- CREATE TABLE Libros
-- (
--     Id int IDENTITY(1,1) PRIMARY KEY,
--     Titulo nvarchar(50) NOT NULL,
--     Autor nvarchar(50) NOT NULL,
--     Ano_public nvarchar(4) NOT NULL,
--     FechaCreacion datetime NOT NULL,
--     FechaModificacion datetime NOT NULL
-- )
    -- ALTER TABLE Libros ADD estado INT FOREIGN KEY REFERENCES Estados(Id)




-- INSERT INTO Libros (Titulo, Autor, Ano_public, FechaCreacion, FechaModificacion, estado)
--  VALUES ('El libro de la vida', 'Juan López', 2022, GETDATE(), GETDATE(), 1),
--  ('Como aprender a programar', 'Maria Martinez', 2022, GETDATE(), GETDATE(), 2)


-- SELECT * FROM Libros


-- SELECT L.Id, L.Titulo, L.Autor, L.Ano_public, L.FechaCreacion, L.FechaModificacion, E.Nombre AS Estado FROM Libros AS L LEFT OUTER JOIN Estados AS E ON L.estado = E.Id ORDER BY L.FechaCreacion DESC



-- CREATE TABLE Usuarios
-- (
--     Id int IDENTITY(1,1) PRIMARY KEY,
--     Correo nvarchar(50) NOT NULL,
--     Contrasena nvarchar(50) NOT NULL,
--     Nombre nvarchar(50) NOT NULL,
--     Apellido nvarchar(50) NOT NULL,
--     FechaCreacion datetime NOT NULL,
--     FechaModificacion datetime NOT NULL
-- )




-- INSERT INTO Usuarios (Correo, Contrasena, Nombre, Apellido, FechaCreacion, FechaModificacion)
-- VALUES ('juan@gmail.com', '123456789', 'Juan', 'López', GETDATE(), GETDATE())

