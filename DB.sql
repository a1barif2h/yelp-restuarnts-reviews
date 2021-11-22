-- BASIC COMMAND FOR POSTGRES DB AND SQL

-- For access the postgres shell --> sudo su -l postgres
-- For clear psql tarminal --> \! clear;

-- For Help --> \?
-- For See All DB Name --> \l
-- For Create New DB --> CREATE DATABASE Database_Name;
    -- BASIC EXAMPLE TO CREATE A DATABASE
    CREATE DATABASE prectice;
-- For Connect a DB --> \c Database_Name;
    -- BASIC EXAMPLE TO CONNECT DATABASE
    \c prectice;
-- For Create a Table --> CREATE TABLE Table_name(
                            -- column_name column_type,
                            -- column_name column_type,
                            -- column_name column_type,
                        -- );
    -- A basic table example
    CREATE TABLE products (
        id INT,
        name VARCHAR(50),
        price INT,
        on_sale boolean
    );
-- For drop (delete) table --> DROP TABLE table_name
    -- BASIC EXAMPLE TO DROP TABLE
    DROP TABLE products;
-- For See Table list --> \d
-- For see table details --> \d table_name
-- For modify table
    -- Adding a column --> ALTER TABLE table_name 
                        --> ADD COLUMN column_name column_type;
    -- BASIC EXAMPLE TO ADD A COLUMN
    ALTER TABLE products
    ADD COLUMN fetured boolean;
-- For drop (delete) a column --> ALTER TABLE table_name
                                -- > DROP COLUMN column_name;
    --> BASIC EXAMPLE TO DROP A COLUMN
    ALTER TABLE products
    DROP COLUMN fetured;
-- For drop (delete) a database --> DROP DATABASE database_name;
    --BASIC EXAMPLE TO DROP A DATABASE
    DROP DATABASE prectice

-- Yelp clone porojcet:
    -- DB name is yelp
    CREATE DATABASE yelp; -- Run this command to create a database named 'yelp'.
    -- Table ditails:
    -- 1. First table is for details of resturant:
    CREATE TABLE restaurants (
        id BIGSERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        location VARCHAR(50) NOT NULL,
        price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5)
    ); -- Run this command for create a table
        -- Now we are add some data on our resturants table:
        INSERT INTO restaurants (name, location, price_range)
        VALUES ('macdonal', 'New york', 3 ); -- This command for add values in the table.
        -- For see the data on a table:
        SELECT * FROM restaurants; -- In place of * we can use name of the column ex: SELECT name, location FROM resturants.