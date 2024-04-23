-- Create organizations table
CREATE TABLE public.organization (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    owner_id VARCHAR(255) NOT NULL REFERENCES users(id)
);

GRANT SELECT ON public.organization TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.organization TO anon;

-- Create farms table
CREATE TABLE public.farm (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    org_id INTEGER REFERENCES organizations(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
