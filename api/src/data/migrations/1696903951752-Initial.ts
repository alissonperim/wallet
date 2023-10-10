import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1696903951752 implements MigrationInterface {
    name = 'Initial1696903951752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."card_types_enum" AS ENUM('credit_card', 'debit_card', 'alimentation_card')`);
        await queryRunner.query(`CREATE TABLE "card" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "created_by" character varying NOT NULL, "updated_by" character varying NOT NULL, "identifier" character varying NOT NULL, "last_digits" character varying NOT NULL, "types" "public"."card_types_enum" NOT NULL, "dueDay" date, "walletId" character varying, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5519368bd6c895ee797c491437" ON "card" ("walletId") `);
        await queryRunner.query(`CREATE TABLE "wallet" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "created_by" character varying NOT NULL, "updated_by" character varying NOT NULL, "amount" numeric NOT NULL, CONSTRAINT "PK_bec464dd8d54c39c54fd32e2334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "created_by" character varying NOT NULL, "updated_by" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying(120) NOT NULL, "walletId" character varying, CONSTRAINT "REL_922e8c1d396025973ec81e2a40" UNIQUE ("walletId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "created_by" character varying NOT NULL, "updated_by" character varying NOT NULL, "name" character varying NOT NULL, "estimated_expense_per_month" numeric NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."installments_installment_status_enum" AS ENUM('pending', 'paid')`);
        await queryRunner.query(`CREATE TABLE "installments" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "created_by" character varying NOT NULL, "updated_by" character varying NOT NULL, "amount" numeric NOT NULL, "installments" integer NOT NULL, "installment" integer NOT NULL, "installment_status" "public"."installments_installment_status_enum" NOT NULL, "payment_date" date NOT NULL, "cardId" character varying, CONSTRAINT "PK_c74e44aa06bdebef2af0a93da1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."expense_type_enum" AS ENUM('money', 'credit_card', 'debt_card', 'pix')`);
        await queryRunner.query(`CREATE TYPE "public"."expense_installment_status_enum" AS ENUM('paid', 'unpaid', 'expired')`);
        await queryRunner.query(`CREATE TABLE "expense" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2023-10-10T02:12:32.604Z"', "created_by" character varying NOT NULL, "updated_by" character varying NOT NULL, "description" character varying NOT NULL, "amount" numeric NOT NULL, "wallet_id" character varying NOT NULL, "type" "public"."expense_type_enum" NOT NULL, "installments" integer, "installment_status" "public"."expense_installment_status_enum" NOT NULL, "categoryId" character varying, CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_5519368bd6c895ee797c491437d" FOREIGN KEY ("walletId") REFERENCES "wallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_922e8c1d396025973ec81e2a402" FOREIGN KEY ("walletId") REFERENCES "wallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "installments" ADD CONSTRAINT "FK_d262e62605f8d8744306107b83c" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "expense" ADD CONSTRAINT "FK_42eea5debc63f4d1bf89881c10a" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "expense" ADD CONSTRAINT "FK_49202cacdedb09abda1a71768cc" FOREIGN KEY ("wallet_id") REFERENCES "wallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expense" DROP CONSTRAINT "FK_49202cacdedb09abda1a71768cc"`);
        await queryRunner.query(`ALTER TABLE "expense" DROP CONSTRAINT "FK_42eea5debc63f4d1bf89881c10a"`);
        await queryRunner.query(`ALTER TABLE "installments" DROP CONSTRAINT "FK_d262e62605f8d8744306107b83c"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_922e8c1d396025973ec81e2a402"`);
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_5519368bd6c895ee797c491437d"`);
        await queryRunner.query(`DROP TABLE "expense"`);
        await queryRunner.query(`DROP TYPE "public"."expense_installment_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."expense_type_enum"`);
        await queryRunner.query(`DROP TABLE "installments"`);
        await queryRunner.query(`DROP TYPE "public"."installments_installment_status_enum"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "wallet"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5519368bd6c895ee797c491437"`);
        await queryRunner.query(`DROP TABLE "card"`);
        await queryRunner.query(`DROP TYPE "public"."card_types_enum"`);
    }

}
