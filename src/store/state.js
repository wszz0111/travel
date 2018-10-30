let defaultcity = "成都"
try {
    if (localStorage.city) {
        defaultcity = localStorage.city
    }
} catch (error) {

}
export default {
    city: defaultcity
}