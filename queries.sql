-- Database Queries

-- Find all customers with postal code 1010
id  CustomerName
12	Cactus Comidas para llevar
54  Océano Atlántico Ltda.
64  Rancho grande

-- Find the phone number for the supplier with the id 11
	Heli Süßwaren GmbH & Co. KG (010) 9984510
-- List first 10 orders placed, sorted descending by the order date
OrderID CustomerID EmployeeID OrderDate ShipperID
10443	    66	        8	  1997-02-12	1
10442	    20      	3	  1997-02-11	2
10440	    71	        4	  1997-02-10	2
10441	    55      	3	  1997-02-10	2
10439	    51	        6	  1997-02-07	3
10438	    79	        3	  1997-02-06	2
10436	    7	        3	  1997-02-05	2
10437	    87      	8	  1997-02-05	1
10435	    16	        8	  1997-02-04	2
10433	    60	        3	  1997-02-03	3

-- Find all customers that live in London, Madrid, or Brazil
CustomerID	CustomerName	            ContactName 	        Address	                            City	PostalCode	Country
4	        Around the Horn	            Thomas Hardy	        120 Hanover Sq.	                    London	WA1 1DP	    UK
8	        Bólido Comidas preparadas	Martín Sommer	        C/ Araquil, 67	                    Madrid	28023	    Spain
-- 11	        B's Beverages	            Victoria Ashworth	    Fauntleroy Circus	                London	EC2 5NT	    UK
16	        Consolidated Holdings	    Elizabeth Brown	        Berkeley Gardens 12 Brewery	        London	WX1 6LT	    UK
19	        Eastern Connection	        Ann Devon	            35 King George	                    London	WX3 6FW	    UK
22	        FISSA Fabrica Inter.        Salchichas S.A.	        Diego Roel	C/ Moralzarzal, 86	    Madrid	28034	    Spain
53	        North/South	                Simon Crowther	        South House 300 Queensbridge	    London	SW7 1RZ	    UK
69	        Romero y tomillo	        Alejandra Camino	    Gran Vía, 1	                        Madrid	28001	    Spain
72	        Seven Seas Imports	        Hari Kumar	            90 Wadhurst Rd.	                    London	OX15 4NB	UK

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO Customers(CustomerName, ContactName, Address, PostalCode, Country)
VALUES("The Shire", "Bilbo Baggins", "1 Hobbit-Hole in Bag End", "111", "Middle Earth");
-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE Customers
SET PostalCode = 11122
WHERE ContactName = "Bilbo Baggins";

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
