CREATE TABLE `tbl_usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT COMMENT 'Identificador numério',
  `nomeUsuario` varchar(100) NOT NULL,
  `emailUsuario` varchar(30) NOT NULL COMMENT 'nome do usuario para acessar o sistema',
  `senhaUsuario` varchar(15) NOT NULL DEFAULT (_utf8mb4'banco1234') COMMENT 'senha do usuário para acessar o sistema',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_usuario_UN` (`login`)
)