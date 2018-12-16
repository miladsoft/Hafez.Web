using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hafez.Web
{
    public class HafezDbContext:DbContext
    {
        public HafezDbContext(DbContextOptions<HafezDbContext> options)
               : base(options)
        {
        }

        public DbSet<Sher> Fal { get; set; }
    }

    public class Sher
    {
        public int Id { get; set; }
        public string Beit { get; set; }
        public string Ghazal { get; set; }
    }
}
