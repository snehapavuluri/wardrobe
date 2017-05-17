
	


CREATE TABLE wrs_user
(
  user_name character varying(25) NOT NULL,
  password character varying(25) NOT NULL,
  email character varying(50) NOT NULL,
  first_name character varying(50) NOT NULL,
  last_name character varying(50) NOT NULL,
  email_flag character varying(1),
  CONSTRAINT wuser_pkey PRIMARY KEY (user_name)
);

CREATE TABLE wrs_user_item
(
  user_item_id integer NOT NULL,
  user_name character varying(25) NOT NULL,
  category character varying(25) NOT NULL,
  sub_category character varying(25),
  color character varying(25) NOT NULL,
  pattern character varying(25) NOT NULL,
  size character varying(25) NOT NULL,
  style character varying(25) NOT NULL,
  image_url character varying(100),
  notes character varying(500),
  CONSTRAINT wrs_user_item_pkey PRIMARY KEY (user_item_id),
  CONSTRAINT wrs_user_item_user_name_fkey FOREIGN KEY (user_name)
      REFERENCES wrs_user (user_name) 
);

insert into wrs_user values('crangu','crangu','cr@unomaha.edu','Chandra','Rangu',null);

insert into wrs_user_item values(1,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top1.jpg');
insert into wrs_user_item values(2,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top2.jpg');
insert into wrs_user_item values(3,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top3.jpg');
insert into wrs_user_item values(4,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top4.jpg');
insert into wrs_user_item values(5,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top5.jpg');
insert into wrs_user_item values(6,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top6.jpg');
insert into wrs_user_item values(7,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top7.jpg');
insert into wrs_user_item values(8,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top8.jpg');
insert into wrs_user_item values(9,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top9.jpg');
insert into wrs_user_item values(10,'crangu','Tops','Shirt','Red','Plain','M','Casual','partials/Images/Tops/Top10.jpg');


insert into wrs_user_item values(11,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat1.jpg');
insert into wrs_user_item values(12,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat2.jpg');
insert into wrs_user_item values(13,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat3.jpg');
insert into wrs_user_item values(14,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat4.jpg');
insert into wrs_user_item values(15,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat5.jpg');
insert into wrs_user_item values(16,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat6.jpg');
insert into wrs_user_item values(17,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat7.jpg');
insert into wrs_user_item values(18,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat8.jpg');
insert into wrs_user_item values(19,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat9.jpg');
insert into wrs_user_item values(20,'crangu','Hats','Hat','Black','Plain','M','Casual','partials/Images/Hats/Hat10.jpg');

insert into wrs_user_item values(21,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant1.jpg');
insert into wrs_user_item values(22,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant2.jpg');
insert into wrs_user_item values(23,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant3.jpg');
insert into wrs_user_item values(24,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant4.jpg');
insert into wrs_user_item values(25,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant5.jpg');
insert into wrs_user_item values(26,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant6.jpg');
insert into wrs_user_item values(27,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant7.jpg');
insert into wrs_user_item values(28,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant8.jpg');
insert into wrs_user_item values(29,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant9.jpg');
insert into wrs_user_item values(30,'crangu','Pants','Pant','Black','Plain','M','Casual','partials/Images/Pants/Pant10.jpg');


