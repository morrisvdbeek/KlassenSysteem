﻿// <auto-generated />
using System;
using KlassenSysteem.Server;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace KlassenSysteem.Server.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20241016095247_AddRefreshTokensTable")]
    partial class AddRefreshTokensTable : Migration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("KlassenSysteem.Server.Models.RefreshToken", b =>
            {
                b.Property<int>("Id")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("integer");

                NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                b.Property<DateTime>("ExpirationDate")
                    .HasColumnType("timestamp with time zone");

                b.Property<string>("Token")
                    .IsRequired()
                    .HasColumnType("text");

                b.Property<int>("UserId")
                    .HasColumnType("integer");

                b.HasKey("Id");

                b.HasIndex("UserId");

                b.ToTable("RefreshTokens");
            });

            modelBuilder.Entity("KlassenSysteem.Server.Models.User", b =>
            {
                b.Property<int>("Id")
                    .ValueGeneratedOnAdd()
                    .HasColumnType("integer");

                NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                b.Property<string>("Email")
                    .IsRequired()
                    .HasColumnType("text");

                b.Property<string>("FirstName")
                    .IsRequired()
                    .HasColumnType("text");

                b.Property<string>("LastName")
                    .IsRequired()
                    .HasColumnType("text");

                b.Property<string>("PasswordHash")
                    .IsRequired()
                    .HasColumnType("text");

                b.Property<string>("Salt")
                    .IsRequired()
                    .HasColumnType("text");

                b.HasKey("Id");

                b.ToTable("Users");

                b.HasData(
                    new
                    {
                        Id = 1,
                        Email = "admin@example.com",
                        FirstName = "Admin",
                        LastName = "User",
                        PasswordHash = "hashedpassword",
                        Salt = "salt"
                    },
                    new
                    {
                        Id = 2,
                        Email = "user@example.com",
                        FirstName = "Regular",
                        LastName = "User",
                        PasswordHash = "hashedpassword",
                        Salt = "salt"
                    });
            });

            modelBuilder.Entity("KlassenSysteem.Server.Models.RefreshToken", b =>
            {
                b.HasOne("KlassenSysteem.Server.Models.User", "User")
                    .WithMany()
                    .HasForeignKey("UserId")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();

                b.Navigation("User");
            });
#pragma warning restore 612, 618
        }
    }
}