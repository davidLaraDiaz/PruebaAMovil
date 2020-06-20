create database ciudad;

use ciudad;


CREATE TABLE departamento ( 
 codigo_dane varchar(20) NOT NULL, 
 nombre varchar(40) NOT NULL, 
 PRIMARY KEY (codigo_dane) 
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE municipio ( 
 codigo_dane varchar(20) NOT NULL, 
 nombre varchar(40) NOT NULL, 
 departamento varchar(20) NOT NULL, 
 PRIMARY KEY (codigo_dane),
 constraint fk_mun_dep foreign key (departamento) references departamento(codigo_dane)
) ENGINE=InnoDB DEFAULT CHARSET=latin1; 

 

 