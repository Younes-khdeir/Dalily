using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dalily.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContactNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Classification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkplaceGovernorate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkplaceCity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WorkplaceResidentialArea = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Facebook_page = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Instagram_page = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Whatsapp_business_account = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TikTok_page = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Twitter__page = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Linkedin__page = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    YouTube_page = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GeographicalLocation_GPS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Start_WorkingHours = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    End_WorkingHours = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OfficialEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CompanyLogo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CompanyWebsite = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Companies");
        }
    }
}
