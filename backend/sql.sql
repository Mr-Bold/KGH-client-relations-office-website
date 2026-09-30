CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE SEQUENCE IF NOT EXISTS statement_reference_seq;

CREATE TABLE IF NOT EXISTS statements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    reference_number VARCHAR(30) UNIQUE NOT NULL,

    statement_type VARCHAR(20) NOT NULL
        CHECK (statement_type IN ('CLIENT', 'STAFF')),

    incident_date DATE NOT NULL,

    name VARCHAR(150) NOT NULL,

    telephone VARCHAR(30) NOT NULL,

    unit VARCHAR(150),

    narrative TEXT NOT NULL,

    declaration_accepted BOOLEAN NOT NULL DEFAULT FALSE CHECK (declaration_accepted = TRUE),

    signature VARCHAR(150) NOT NULL,

    status VARCHAR(30) NOT NULL DEFAULT 'SUBMITTED'
        CHECK (status IN ('SUBMITTED', 'REVIEWED', 'FOLLOW_UP', 'CLOSED')),

    submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    CHECK (statement_type = 'STAFF' OR unit IS NULL)
);

CREATE TABLE IF NOT EXISTS statement_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    statement_id UUID NOT NULL
        REFERENCES statements(id)
        ON DELETE CASCADE,

    reviewed_by VARCHAR(150),

    designation VARCHAR(150),

    comments TEXT,

    follow_up_date DATE,

    reviewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS statements_type_idx ON statements(statement_type);
CREATE INDEX IF NOT EXISTS statements_status_idx ON statements(status);
CREATE INDEX IF NOT EXISTS statements_submitted_at_idx ON statements(submitted_at DESC);
CREATE INDEX IF NOT EXISTS statement_reviews_statement_id_idx ON statement_reviews(statement_id);