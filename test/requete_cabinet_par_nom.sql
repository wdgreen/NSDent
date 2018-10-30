

SELECT cabinet.* jonction_cabinet_praticien.fk_id_cabinet , jonction_cabinet_praticien.fk_id_praticien , praticien.nom_praticien, contact.id_contact, contact.ville
									from cabinet  
									INNER JOIN jonction_cabinet_praticien
									ON jonction_cabinet_praticien.fk_id_cabinet = cabinet.id_cabinet && nom_cabinet = "CORTIE" 
									INNER JOIN praticien
									ON jonction_cabinet_praticien.fk_id_praticien = praticien.id_praticien
									INNER JOIN jonction_cabinet_contact
									ON jonction_cabinet_contact.fk_id_cabinet = cabinet.id_cabinet 
									INNER JOIN contact
									ON jonction_cabinet_contact.fk_id_cabinet = cabinet.id_cabinet


