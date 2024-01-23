const HobbyPage = () => {

    const [categoryID, setCategoryID] = useState(1)                   // Setting up useState variable & function (categoryId, setCategoryId) 

    const scrollToSection = (sectionId) => {
        scroll.scrollTo(sectionId, {
          duration: 800,
          smooth: 'easeInOutQuart',
        });
      };







    return (
        <>

            <div>
                <h1>This is the hobby page</h1>
            </div>

            <button onClick={() => scrollToSection(1)}>Arts</button>
            <button onClick={() => scrollToSection(2)}>Athletics</button>
            <button onClick={() => scrollToSection(3)}>Fashion</button>

            <br></br>

            <div>{categoriesListSections}</div>

        </>

    )
}

export default HobbyPage