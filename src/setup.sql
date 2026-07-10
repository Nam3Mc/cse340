-- CREATE ORGANIZATIONS TABLE --
CREATE TABLE organizations (
    organization_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL, 
    description TEXT NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    logo_filename VARCHAR(255) NOT NULL
);

-- INSERT ORGANIZATION DATA --
INSERT INTO organizations (name, description, contact_email, logo_filename)
VALUES 
(
    'BrightFuture Builders', 
    'A nonprofit focused on improving community infrastructure through sustainable construction projects.', 
    'info@brightfuturebuilders.org', 
    'brightfuture-logo.png'
),
(
    'GreenHarvest Growers', 
    'An urban farming collective promoting food sustainability and education in local neighborhoods.', 
    'contact@greenharvest.org', 
    'greenharvest-logo.png'
),
(
    'UnityServe Volunteers', 
    'A volunteer coordination group supporting local charities and service initiatives.', 
    'hello@unityserve.org', 
    'unityserve-logo.png'
);

-- CREATE PROJECTS TABLE --
CREATE TABLE service_project (
    project_id SERIAL PRIMARY KEY,
    organization_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,     
    location VARCHAR(255) NOT NULL,
    project_date DATE NOT NULL,
    FOREIGN KEY (organization_id) REFERENCES organizations(organization_id) -- FIXED: Spelling of FOREIGN
);

-- INSERT SERVICE PROJECT DATA --
INSERT INTO service_project (organization_id, title, description, location, project_date)
VALUES
(1, 'Community Center Roof Repair', 'Help replace shingles and repair structural framing on the local community center.', '123 Main St, Downtown', '2026-08-15'),
(1, 'Park Bench Restoration', 'Sanding, painting, and securing broken benches at Riverside Park.', 'Riverside Park, Zone B', '2026-08-22'),
(1, 'Wheelchair Ramp Build', 'Constructing a wooden accessibility ramp for a local resident in need.', '456 Oak Avenue', '2026-09-05'),
(1, 'Tiny Home Frame Assembly', 'Assembling structural walls for transitional housing units.', 'Eco-Village Construction Site', '2026-09-12'),
(1, 'Sidewalk Leveling & Safety', 'Repairing broken concrete walkways around the elementary school.', 'Lincoln Elementary School', '2026-10-01'),
(2, 'Spring Seed Planting', 'Sowing organic vegetable seeds for the upcoming community harvest.', 'Downtown Urban Plot A', '2026-08-18'),
(2, 'Compost Bin Installation', 'Building and setting up new three-bin compost systems for local schools.', 'Community Garden Center', '2026-08-29'),
(2, 'Hydroponic System Setup', 'Assembling indoor vertical farming units for the neighborhood center.', 'East Side Innovation Lab', '2026-09-19'),
(2, 'Fruit Tree Pruning Workshop', 'Hands-on volunteer session to prune community orchard trees before winter.', 'Northside Community Orchard', '2026-10-10'),
(2, 'Harvest and Box Packaging', 'Gathering ripe vegetables and packaging food boxes for families.', 'Downtown Urban Plot A', '2026-10-24'),
(3, 'Senior Center Companion Day', 'Spending afternoon hours playing board games and reading with residents.', 'Silver Linings Retirement Home', '2026-08-14'),
(3, 'School Supply Drive Sort', 'Organizing and packing backpacks with school supplies for low-income students.', 'Unity Central Warehouse', '2026-08-25'),
(3, 'Homeless Shelter Meal Prep', 'Chopping vegetables, cooking, and serving hot lunch meals to shelter guests.', 'Hope Harbor Shelter', '2026-09-01'),
(3, 'Community Litter Cleanup', 'A neighborhood sweeping event targeting plastic and waste in public spaces.', 'Maple District Metro Park', '2026-09-15'),
(3, 'Food Pantry Inventory Restock', 'Unloading delivery trucks and categorizing non-perishable food items.', 'Unity Food Pantry Center', '2026-10-05');