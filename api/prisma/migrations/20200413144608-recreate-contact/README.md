# Migration `20200413144608-recreate-contact`

This migration has been generated by Braden Douglass at 4/13/2020, 2:46:08 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Contact" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "email" text  NOT NULL DEFAULT '',
    "id" SERIAL,
    "message" text  NOT NULL DEFAULT '',
    "name" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

DROP TABLE "public"."Conact";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200413144431-create-contact..20200413144608-recreate-contact
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -22,9 +22,9 @@
   body String
   createdAt DateTime @default(now())
 }
-model Conact {
+model Contact {
   id Int @id @default(autoincrement())
   name String
   email String
   message String
```


