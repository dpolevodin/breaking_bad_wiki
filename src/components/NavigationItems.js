function NavigationItems() {

    const navigationItemsData = ['Characters', 'Episodes', 'Quote', 'Search']

    const navigationItems = navigationItemsData.map((item) => 
    <li className="App__navigation-item" key={navigationItemsData.indexOf(item)}>
      {item}
    </li>
    )
    return navigationItems
}

export default NavigationItems