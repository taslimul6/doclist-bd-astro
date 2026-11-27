CREATE TABLE IF NOT EXISTS doctor_loves (
 doctor_id TEXT NOT NULL, visitor_id TEXT NOT NULL,
 PRIMARY KEY (doctor_id, visitor_id)
);
CREATE TABLE IF NOT EXISTS doctor_metrics (
 doctor_id TEXT PRIMARY KEY NOT NULL, impressions INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS doctor_impressions (
 doctor_id TEXT NOT NULL, event_id TEXT NOT NULL,
 PRIMARY KEY (doctor_id, event_id)
);
