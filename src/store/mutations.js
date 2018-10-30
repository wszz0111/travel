export default {
    changgecity(state, city) {
        state.city = city
        try {
            localStorage.city = state.city
        } catch (error) {

        }
    }
}