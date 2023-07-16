using Microsoft.EntityFrameworkCore;

namespace Dalily.Models
{
    public class DalilyContext : DbContext
    {
        public DalilyContext(DbContextOptions<DalilyContext> options)
            : base(options)
        {
        }

        public DbSet<Company> Companies{ get; set; } = null!;
    }
}




