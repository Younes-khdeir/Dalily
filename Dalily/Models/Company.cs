using System.ComponentModel.DataAnnotations;

namespace Dalily.Models
{
    public class Company
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? ContactNumber { get; set; }
        public string? Classification { get; set; }
        public string? WorkplaceGovernorate { get; set; }
        public string? WorkplaceCity { get; set; }
        public string? WorkplaceResidentialArea { get; set; }
        public string? Facebook_page { get; set; }
        public string? Instagram_page { get; set; }
        public string? Whatsapp_business_account { get; set; }
        public string? TikTok_page { get; set; }
        public string? Twitter__page { get; set; }
        public string? Linkedin__page { get; set; }
        public string? YouTube_page { get; set; }
        public string? GeographicalLocation_GPS { get; set; }
        public string? Start_WorkingHours { get; set; }
        public string? End_WorkingHours { get; set; }
        public string? OfficialEmail { get; set; }
        public string? CompanyLogo { get; set; }
        public string? CompanyWebsite { get; set; }

    }
}
