import "./FilterOption.css";
export default function FilterOption({ handleSearch }) {
  return (
    <form
      className="search__form"
      onSubmit={() => handleSearch(authorSearch, titleSearch)}
      //     onSubmit={(e) => {
      //     e.preventDefault();
      //     const authorSearch = e.target.search__author.value.trim();
      //     const titleSearch = e.target.search__title.value.trim();
      //     handleSearch(authorSearch, titleSearch);
      //   }}
    >
      <label htmlFor="search__author">Search By Author</label>
      <input type="text" name="search__author" id="search__author" />
      <label htmlFor="search__title">Search By Title</label>
      <input type="text" name="search__title" id="search__title" />
      <button type="submit">Search</button>
    </form>
  );
}
