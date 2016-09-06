export const fetchAllCategories = (success) => {
  $.ajax({
    method: "GET",
    url: "api/categories",
    success
  });
};

export const fetchSingleCategory = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/categories/${id}`,
    success
  });
};
