CREATE TABLE participant
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(50),
  prenom VARCHAR(50)
);
 
  -------------

CREATE TABLE score
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_participant INT NOT NULL,
    valeur REAL,
    date_participation DATE,
    FOREIGN KEY (id_participant) REFERENCES participant(id)
);

  -------------

CREATE TABLE question
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    contenu TEXT
);

  -------------

CREATE TABLE reponse
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_question INT NOT NULL,
    contenu TEXT,
    correcte INT,
    FOREIGN KEY (id_question) REFERENCES question(id)
);

  -------------

CREATE TABLE feedback
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_participant INT NOT NULL,
    contenu TEXT,
    FOREIGN KEY (id_participant) REFERENCES participant(id)
);
