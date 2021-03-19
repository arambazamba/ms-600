using System.Collections.Generic;

namespace Constants
{
  public static class ProductCatalogAPI
  {
    public const string CategoryUrl = "https://localhost:5050/api/Categories";
    public const string ProductUrl = "https://localhost:5050/api/Products";
    public const string ProductReadScope = "api://e781bfd6-9394-4808-92a9-72232ea4992b/Product.Read";
    public const string ProductWriteScope = "api://e781bfd6-9394-4808-92a9-72232ea4992b/Product.Write";
    public const string CategoryReadScope = "api://e781bfd6-9394-4808-92a9-72232ea4992b/Category.Read";
    public const string CategoryWriteScope = "api://e781bfd6-9394-4808-92a9-72232ea4992b/Category.Write";

    public static List<string> SCOPES = new List<string>()
    {
      ProductReadScope, ProductWriteScope, CategoryReadScope, CategoryWriteScope
    };
  }

  public static class ClaimIds
  {
    public const string UserObjectId = "http://schemas.microsoft.com/identity/claims/objectidentifier";
    public const string TenantId = "http://schemas.microsoft.com/identity/claims/tenantid";
  }
}