    using Microsoft.EntityFrameworkCore.Migrations;
    using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

    #nullable disable

    namespace KlassenSysteem.Server.Migrations
    {
        public partial class AddRefreshTokensTable : Migration
        {
            protected override void Up(MigrationBuilder migrationBuilder)
            {
                migrationBuilder.CreateTable(
                    name: "RefreshTokens",
                    columns: table => new
                    {
                        Id = table.Column<int>(type: "integer", nullable: false)
                            .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                        Token = table.Column<string>(type: "text", nullable: false),
                        ExpirationDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                        UserId = table.Column<int>(type: "integer", nullable: false)
                    },
                    constraints: table =>
                    {
                        table.PrimaryKey("PK_RefreshTokens", x => x.Id);
                        table.ForeignKey(
                            name: "FK_RefreshTokens_Users_UserId",
                            column: x => x.UserId,
                            principalTable: "Users",
                            principalColumn: "Id",
                            onDelete: ReferentialAction.Cascade);
                    });

                migrationBuilder.CreateIndex(
                    name: "IX_RefreshTokens_UserId",
                    table: "RefreshTokens",
                    column: "UserId");
            }

            protected override void Down(MigrationBuilder migrationBuilder)
            {
                migrationBuilder.DropTable(
                    name: "RefreshTokens");
            }
        }
    }