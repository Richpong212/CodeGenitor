using CodeGenitor.API.Models.Domain;

namespace CodeGenitor.API.Repositories.Interface
{
    public interface ICategoryRepository
    {
        Task<Category> CreateAsync(Category category);
    }
}
