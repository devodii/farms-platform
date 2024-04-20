-- Create organizations table
CREATE TABLE public.organization (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    owner_id VARCHAR(255) REFERENCES users(id)
);

-- Create farms table
CREATE TABLE public.farm (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    org_id INTEGER REFERENCES organizations(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
