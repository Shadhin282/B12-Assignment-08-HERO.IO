const getStoreApp = () => {
    const storeApp = localStorage.getItem("InstalledList")

    if (storeApp) {
        const storeAppData = JSON.parse(storeApp)
        return storeAppData
    } else {
            return []
    }
    
}

const addToLocalStorage = (id) => {
    const storedAppData = getStoreApp()
    
    if (storedAppData.includes(id)) {
        alert("Bhai ei id already exist")
    } else {
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("InstalledList",data)
        // console.log(storedBookData)
    }
}

export { addToLocalStorage, getStoreApp };