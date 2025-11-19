const getStoreApp = () => {
    const storeApp = localStorage.getItem("InstalledList")

    if (storeApp) {
        const storeAppData = JSON.parse(storeApp)
        return storeAppData
    } else {
            return []
    }
    
}

const RemoveLocalStorage = (id) => {
    const storedAppData = getStoreApp()
    if (storedAppData.includes(id)) {
        const filterStoredAppData= storedAppData.filter(data=>data.id!==id)
        const data = JSON.stringify(filterStoredAppData)
        return localStorage.setItem("InstalledList",data)
    } 

    
    // if (storedAppData.includes(id)) {
    //     alert("Bhai ei id already exist")
    // } else {
    //     storedAppData.push(id)
    //     const data = JSON.stringify(storedAppData)
        
        // console.log(storedBookData)
    }


export { RemoveLocalStorage };