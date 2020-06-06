# Migration `20200413101656-add-post`

This migration has been generated by Braden Douglass at 4/13/2020, 10:16:56 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
    "email" text  NOT NULL DEFAULT '',
    "id" SERIAL,
    "name" text   ,
    PRIMARY KEY ("id")
) 

CREATE TABLE "public"."Post" (
    "body" text  NOT NULL DEFAULT '',
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "id" SERIAL,
    "title" text  NOT NULL DEFAULT '',
    PRIMARY KEY ("id")
) 

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200413101656-add-post
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,24 @@
+datasource DS {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+model User {
+  id    Int     @id @default(autoincrement())
+  email String  @unique
+  name  String?
+}
+
+model Post {
+  id Int @id @default(autoincrement())
+  title String
+  body String
+  createdAt DateTime @default(now())
+}
```

