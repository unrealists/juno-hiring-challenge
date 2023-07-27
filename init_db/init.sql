-- This is run during the "docker-compose" setup.
-- more info: https://onexlab-io.medium.com/docker-compose-postgres-multiple-database-bbc0816db603

CREATE TABLE IF NOT EXISTS "tour" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "position" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
);

CREATE TABLE IF NOT EXISTS "position" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "tour_id" uuid,
    "lat" double precision,
    "lng" double precision,
    "time" timestamp (3),
    CONSTRAINT "tour_id_idx" FOREIGN KEY ("tour_id") REFERENCES "public"."tour"("id") ON DELETE CASCADE
);
