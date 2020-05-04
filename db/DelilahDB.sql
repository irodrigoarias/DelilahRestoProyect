CREATE SCHEMA IF NOT EXISTS `delilahdb`;
use delilahdb;
-- -----------------------------------------------------
-- Table `delilahdb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE usuarios (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `fullname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `pass` VARCHAR(45) NOT NULL,
  `esAdmin` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`idUsuario`));

-- DESDE ACA PODEMOS CARGAR ALGUNOS USUARIOS Y DESPUES VEMOS COMO SEGUIMOS 

INSERT INTO usuarios (username, fullname, email, phone, address, pass, esAdmin) 
				VALUES ('rodri', 'Rodrigo', 'rodri@gmail.com', '153846978', 'borne 1568', 'miproyecto1',true);
                
-- update usuarios set pass = 'miproyecto1' where idUsuario = 1 ;

INSERT INTO usuarios (username, fullname, email, phone, address, pass, esAdmin) 
VALUES ('looli', 'Marianela', 'looli@gmail.com', '15500112233', 'la paz 1568', 'miproyecto2',true);
                
INSERT INTO usuarios (username, fullname, email, phone, address, pass, esAdmin) 
VALUES ('juanbar', 'Juan', 'juanbar@gmail.com', '15511223344', 'montevideo 1568', 'miproyecto3',false);


-- -----------------------------------------------------
-- Table `delilahdb`.`platos`
-- -----------------------------------------------------
CREATE TABLE platos (
  `idPlato` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `precio` DECIMAL(15,2) NOT NULL,
  PRIMARY KEY (`idPlato`));
  
  INSERT INTO platos(nombre, precio) values ("sushi",500.00),("hamburguesa",250.00);


/*
-- -----------------------------------------------------
-- Table `delilahdb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto3`.`pedidos` (
  `idPedido` INT NOT NULL AUTO_INCREMENT,
  `idUsuario` INT NOT NULL,
  `idDetallesDePedido` INT NOT NULL,
  `total` INT NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `pago` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPedido`),
  INDEX `idUsuario_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `idUsuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `proyecto3`.`usuarios` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;





-- -----------------------------------------------------
-- Table `delilahdb`.`detalleDePedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`detalleDePedidos` (
  `idDetalleDePedidos` INT NOT NULL AUTO_INCREMENT,
  `idPedido` INT NULL,
  `idPlato` INT NULL,
  `nombre` VARCHAR(45) NULL,
  `precio` VARCHAR(45) NULL,
  PRIMARY KEY (`idDetalleDePedidos`),
  INDEX `idPedido_idx` (`idPedido` ASC) VISIBLE,
  INDEX `idPalto_idx` (`idPlato` ASC) VISIBLE,
  CONSTRAINT `idPedido`
    FOREIGN KEY (`idPedido`)
    REFERENCES `proyecto3`.`pedidos` (`idPedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idPalto`
    FOREIGN KEY (`idPlato`)
    REFERENCES `proyecto3`.`platos` (`idPlato`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `nombre`
    FOREIGN KEY ()
    REFERENCES `proyecto3`.`platos` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `precio`
    FOREIGN KEY ()
    REFERENCES `proyecto3`.`platos` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)

*/