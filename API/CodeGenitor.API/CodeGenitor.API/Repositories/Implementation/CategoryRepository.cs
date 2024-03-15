using CodeGenitor.API.Data;
using CodeGenitor.API.Models.Domain;
using CodeGenitor.API.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace CodeGenitor.API.Repositories.Implementation
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ApplicationDbContext dbContext;

        public CategoryRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Category> CreateAsync(Category category)
        {
            // Add to database
            await dbContext.Categories.AddAsync(category);

            // Save to database
            await dbContext.SaveChangesAsync();

            return category;
        }
    }
}
