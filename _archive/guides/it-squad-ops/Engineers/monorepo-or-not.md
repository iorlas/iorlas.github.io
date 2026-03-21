# Monorepo or not?

The logic is simple: join the items which are developed often at the same time.

Greatest example: API + UI

Greatest anti-example: API + Authentication service + Payments service

As a rule of thumb, ETL/ELT pipelines are developed separately from the application: OLTP should be split from OLAP.

DO NOT commit to monorepo for the whole squad for everything. It will be a mess.